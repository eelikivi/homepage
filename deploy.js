var ftp = require("./ftpconfig.js");

var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
	user: ftp.user,
	password: ftp.password,
	host: ftp.host,
	port: ftp.port,
	remoteRoot: ftp.remoteRoot,
	localRoot: __dirname + "/build",
	include: ['*', '**/*'],
	deleteRemote: ftp.deleteRemote,
	forcePasv: true
};

// use with promises
ftpDeploy
	.deploy(config)
	.then(res => console.log("finished:", res))
	.catch(err => console.log(err));

// use with callback
ftpDeploy.deploy(config, function (err, res) {
	if (err) console.log(err);
	else console.log("finished:", res);
});