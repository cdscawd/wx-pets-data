

var ERR_TEXT = {
	Phone_Number: '此账号已被注册，请返回上页重新选择，若忘记密码，可到巧口萌宠App短信验证找回',
	Verification_Code: '请填写正确的验证码',
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
		case 'PHONE_NUMBER':
			if( !isPoneAvailable(input_value) ) {
				$('#phone-input-box').after(`<p class="err-prompt">${ERR_TEXT.Phone_Number}</p>`)
			} 
			break;
		default:
			break;
	}	
}


