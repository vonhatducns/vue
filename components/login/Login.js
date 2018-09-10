var Login = {
	template: 
	`
	<div style="text-align:center; margin: 2px 80px 0px 80px;">
		<h1>ログイン</h1>
			<router-link to="/GetApi">
        	<form action="post">
				<p>ユーザ名</p>
				<p class="username"><input type="user" name="user" /></p>
				<p>パスワード</p>
				<p class="password"><input type="password" name="pass" /></p>
				<p class="check"><input type="checkbox" name="checkbox" />ログインしたままにする</p>
			   <p class="submit"><input type="submit" value="ログイン" /></p>
			</form>
			</router-link>
		<div class="loginMisc"><a href="regist/index.html">新規登録</a> | <a href="rimainder.html">パスワードを忘れた場合</a></div>
	</div>



`
};
