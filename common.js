/*
 *	userType 1：management管理员		2：business商业	3：customer顾客
 *	A：普通用户 or 员工 
 *	B：企业管理员
 * */

var api = {
	"formal": {
		"interface": "https://api.bdmartech.com", //接口
		"domain": "http://m.bdmartech.com",
		"appName": "LOUIS XIII",
	},
	"dev": {
		"interface": "https://api.jobpgroup.com", //接口
		"domain": "http://jobpgroup.com",
		"appName": "LOUIS XIII",
	}
}
var lks = "dev";
export default {
	Interface: {
		"site": lks,
		"apiurl": api[lks]["interface"], //space111111
		"domain": api[lks]["domain"],
		"cosConfig": api[lks]["cosConfig"],
		"appName": api[lks]["appName"],
		"phoneNumber": api[lks]["phoneNumber"],
		"addr": {
			"getBasePhone": "/v4/ApiBase-phone.htm", //获取客服电话
			"slideShow": "/v2/ApiHome-slideShow.htm", //首页列表

		}
	}
}
