import {
	CHANGE_USER_INFO
} from './const';

export default {
	login ({commit}, {username,password,callback}){

		//模拟后端传送数据，，，，
		setTimeout(()=>{
			if( username === "sqq" && password === "123"){
				//登陆成功
				let userInfo = {userId:100,username : '孙漂亮'};
				commit (CHANGE_USER_INFO, userInfo);
				callback(true);
				return false;
			};
			//给前端返回数据
			callback(false);
		},1000)
	}
}