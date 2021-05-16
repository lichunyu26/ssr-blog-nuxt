require('shelljs/global');
require('dotenv').config()
const chalk = require('chalk');
const scpClient = require('scp2');
/*配置服务器信息*/
const serverConf = {
  host: process.env.SERVER_HOST,
  port: process.env.SERVER_POST,
  username: process.env.SERVER_USERNAME,
  password: process.env.SERVER_PASSWORD,
  path: process.env.SERVER_PATH,
  pm2ServerName: process.env.SERVER_NAME,
  httpURL: process.env.SERVER_HTTP_URL
}
if (serverConf.path === "/" || serverConf.path === "*") return;
/*配置需要上传的文件*/
const uploadList = [
  {localPath: '.nuxt/', remotePath: '.nuxt/'},
  {localPath: 'server/', remotePath: 'server/'},
  'nuxt.config.js',
  'package.json',
  {localPath: 'src/static', remotePath: 'static/'},
]
if(uploadList.length===0) console.error("请配置uploadList")
const Client = require('ssh2').Client;
const conn = new Client();
/*执行命令行*/
function executCMD(cmd) {
  return new Promise(resolve => {
    conn.exec(cmd, function (err, stream) {
      if (err) throw err;
      stream.on('close', () => {
        console.log(chalk.green(`${cmd} 执行完成。`))
        resolve()
      })
        .on('data', data => console.log('data: ' + data))
        .stderr.on('data', data => console.warn('err: ' + data));
    })
  })
}

/*初始化配置*/
function initServerClient(connectConfig) {
  /*等待连接完成*/
  return new Promise((resolve, reject) => {
    conn.on('ready', () => {
      console.log(chalk.green(`已经成功连接到：${serverConf.host}`));
      return resolve()
    })
      .on('error', err => reject(err))
      .on('end', () => console.log(chalk.yellow('即将关闭连接...')))
      .on('close', () => console.log(chalk.green('连接已关闭...')))
      .connect(connectConfig);
  })
}

/*删除原始文件,并创建新的文件夹*/
async function removeOldFile(path) {
  console.log(chalk.yellow(`准备删除 ${path}`))
  await executCMD(`rm -rf ${path}`)
  return executCMD(`mkdir ${path}`)
}

function uploadFile2Server(filePath) {
  let remotePath = ""
  if (typeof filePath === "string") {
    remotePath = serverConf.path
  } else {
    remotePath = serverConf.path + filePath.remotePath
    filePath = filePath.localPath
  }

  console.log(chalk.red(`准备上传${filePath} 到 ${serverConf.host}:${serverConf.port}${serverConf.path}`))
  return new Promise(resolve => {
    scpClient.scp(
      filePath,
      {
        host: serverConf.host,
        port: serverConf.port,
        username: serverConf.username,
        password: serverConf.password,
        path: remotePath
      },
      function (err) {
        if (err) {
          console.log(chalk.red(`${filePath} 上传至 ${serverConf.host}:${serverConf.port}${remotePath} 时发生错误！`))
          throw err;
        } else {
          console.log(chalk.green(`${filePath} 已经成功上传至 ${serverConf.host}:${serverConf.port}${remotePath}`))
        }
        resolve()
      }
    );
  })
}

/*断开连接*/
function disconnect() {
  conn.end();
}

console.log(chalk.green(`打包完成,3s后连接远程服务器...`));

setTimeout(async () => {
  try {
    /*尝试连接服务器*/
    await initServerClient({
      host: serverConf.host,
      port: serverConf.port,
      username: serverConf.username,
      password: serverConf.password,
      readyTimeout: 30000
    })
    /*关闭当前运行的服务*/
    console.log(chalk.red(`准备关闭 ${serverConf.pm2ServerName} 服务...`));
    await executCMD(`pm2 stop ${serverConf.pm2ServerName}`)
    console.log(chalk.green(`${serverConf.pm2ServerName} 服务已关闭...`));

    await removeOldFile(serverConf.path)

    for (const item of uploadList) await uploadFile2Server(item)

    console.log(chalk.green(`文件上传完成，准备安装依赖并启动${serverConf.pm2ServerName}...`));
    await executCMD(`cd ${serverConf.path} && npm install && pm2 start ${serverConf.pm2ServerName}`)


    console.log(chalk.green(`${serverConf.pm2ServerName} 服务已成功启动，请访问：${serverConf.httpURL}`));

  } catch (e) {
    console.error(e)
  } finally {
    disconnect()
  }
}, 3000)

