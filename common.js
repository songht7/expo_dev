/*
 *	userType 1：management管理员		2：business商业	3：customer顾客
 *	A：普通用户 or 员工 
 *	B：企业管理员
 * */

var api = {
	"formal": {
		"interface": "http://api-qrcode.meetji.com", //接口
		"i2": "http://api-test.wsshanghai.com/", //接口2
		"domain": "http://expo.bdmartech.com",
		"appName": "LOUIS XIII",
	},
	"dev": {
		"interface": "http://api-qrcode.meetji.com", //接口
		"i2": "http://api-test.wsshanghai.com/", //接口2
		"domain": "http://expo.bdmartech.com",
		"appName": "LOUIS XIII",
	}
}
var lks = "dev";
export default {
	Interface: {
		"site": lks,
		"apiurl": api[lks]["interface"], //space111111
		"i2": api[lks]["i2"],
		"domain": api[lks]["domain"],
		"cosConfig": api[lks]["cosConfig"],
		"appName": api[lks]["appName"],
		"phoneNumber": api[lks]["phoneNumber"],
		"addr": {
			"slideShow": "/v4/ApiItem-item.htm", //列表http://api.alein.lc/v4/ApiItem-item.htm?id=1
			"saveSign": "v4/ApiQuestionnaire-saveSign.htm", //签到（kohler）
			"getSign": "v4/ApiQuestionnaire-getSign.htm" //获取信息 ?phone=13564138770&eCode=rbd
		}
	}
}
