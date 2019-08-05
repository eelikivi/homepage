import { ftp } from './ftpconfig';

const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
	user: ftp.user,
	password: ftp.password,
	host: ftp.host,
	port: ftp.port,
	remoteRoot: ftp.remoteRoot,

	localRoot: __dirname + "/build",
	include: ['*', '**/*'],
	// exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*"],
	// delete ALL existing files at destination before uploading, if true
	deleteRemote: false,
	// Passive mode is forced (EPSV command is not sent)
	forcePasv: true
};

// use with promises
ftpDeploy
	.deploy(config)
		.then(res => console.log("finished:", res))
		.catch(err => console.log(err));

// use with callback
ftpDeploy.deploy(config, function (err, res) {
	if (err) {
		console.log(err);
	}
	else {
		console.log("finished:", res);
	}
});
