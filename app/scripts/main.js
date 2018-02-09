
var IP = 'http://192.168.0.107:9922/'

var ERR_TEXT = {
	Phone_Number_Error: '填写正确的手机号',
	Phone_Number_Registar: '此账号已被注册，请返回上页重新选择，若忘记密码可到巧口萌宠App短信验证找回',
	Verification_Code: '请填写正确的验证码',
	Password_Error: '请设置密码',
	Password_Min: '密码过短',
	Password_Max: '密码过长',
	Password_Differ: '密码设置不一致，请重新设置',
	Account_Error: '未查询到此账号信息，请检查账号与密码是否填写正确或回到上页重新选择',
	Baby_Name_Empty: '请填写宝贝姓名',
	Baby_Brithday_Empty: '请选择宝贝生日',
	Activation_Error: '请填写正确的卡密激活码',
	Address_Empty: '请完整选择省、市、区',
	Address_Info_Empty: '请填写详细地址',
}


// 手机号验证
function isPoneAvailable(text) {  
	var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;  
	if ( !reg.test(text) ) {  
		return false;  
	} else {  
		return true;  
	}  
}

function ERRPrompt(type, input_value) {
	switch (type) {
		case 'PHONE_NUMBER_ERROR':
			$('#phone-input-box').after('<p class="err-prompt">' + ERR_TEXT.Phone_Number_Error + '</p>')
			break;
		case 'PHONE_CODE_ERROR':
			$('#phone-code-box').after('<p class="err-prompt">' + ERR_TEXT.Verification_Code + '</p>')
			break;
		case 'Password_Min':
			$('#password-box').after('<p class="err-prompt">' + ERR_TEXT.Password_Min + '</p>')
			break;
		case 'Password_Max':
			$('#password-box').after('<p class="err-prompt">' + ERR_TEXT.Password_Max + '</p>')
			break;
		case 'Password_Differ':
			$('#passwordR-box').after('<p class="err-prompt">' + ERR_TEXT.Password_Differ + '</p>')
			break;
	}	
}


