var FormLogin = {
	template: `
	
<div id="MainC">
<!-- Main Contents -->
	<main id="ContentsPane">
		<h1><span id="Pagetitle">新規登録</span></h1>
		<div id="SingleContents">
			
			<p>お客様の情報をご入力後、利用規約をお読みになり、「下記の利用規約に同意して確認画面へ」ボタンを押してください。<br>
	      <span class="red">※</span>印は必須入力項目です。</p>
			<div id="RegForm">
		<form action="">
		  <table width="100%" border="1">
		  <tbody>
			<tr>
			  <th scope="row"><span class="red">※</span>お名前</th>
			  <td><input type="text" name="name" id="name"></td>
			</tr>
			<tr>
			  <th scope="row"><span class="red">※</span>フリガナ</th>
			  <td><input type="text" name="name2" id="name2"></td>
			</tr>
			<tr>
			  <th scope="row">性別</th>
			  <td><label>
			      <input type="radio" name="gender" value="男性" id="gender1">
			      男性</label>
			    <label>
			      <input type="radio" name="gender" value="女性" id="gender2">
			      女性</label>
			    <br>
			    </p></td>
			</tr>
			<tr>
			  <th scope="row">生年月日</th>
			  <td><select name="birthY" id="year">
					<option value="1900">1900</option>
					<option value="1901">1901</option>
					<option value="1902">1902</option>
					<option value="1903">1903</option>
					<option value="1904">1904</option>
					<option value="1905">1905</option>
					<option value="1906">1906</option>
					<option value="1907">1907</option>
					<option value="1908">1908</option>
					<option value="1909">1909</option>
					<option value="1910">1910</option>
					<option value="1911">1911</option>
					<option value="1912">1912</option>
					<option value="1913">1913</option>
					<option value="1914">1914</option>
					<option value="1915">1915</option>
					<option value="1916">1916</option>
					<option value="1917">1917</option>
					<option value="1918">1918</option>
					<option value="1919">1919</option>
					<option value="1920">1920</option>
					<option value="1921">1921</option>
					<option value="1922">1922</option>
					<option value="1923">1923</option>
					<option value="1924">1924</option>
					<option value="1925">1925</option>
					<option value="1926">1926</option>
					<option value="1927">1927</option>
					<option value="1928">1928</option>
					<option value="1929">1929</option>
					<option value="1930">1930</option>
					<option value="1931">1931</option>
					<option value="1932">1932</option>
					<option value="1933">1933</option>
					<option value="1934">1934</option>
					<option value="1935">1935</option>
					<option value="1936">1936</option>
					<option value="1937">1937</option>
					<option value="1938">1938</option>
					<option value="1939">1939</option>
					<option value="1940">1940</option>
					<option value="1941">1941</option>
					<option value="1942">1942</option>
					<option value="1943">1943</option>
					<option value="1944">1944</option>
					<option value="1945">1945</option>
					<option value="1946">1946</option>
					<option value="1947">1947</option>
					<option value="1948">1948</option>
					<option value="1949">1949</option>
					<option value="1950">1950</option>
					<option value="1951">1951</option>
					<option value="1952">1952</option>
					<option value="1953">1953</option>
					<option value="1954">1954</option>
					<option value="1955">1955</option>
					<option value="1956">1956</option>
					<option value="1957">1957</option>
					<option value="1958">1958</option>
					<option value="1959">1959</option>
					<option value="1960">1960</option>
					<option value="1961">1961</option>
					<option value="1962">1962</option>
					<option value="1963">1963</option>
					<option value="1964">1964</option>
					<option value="1965">1965</option>
					<option value="1966">1966</option>
					<option value="1967">1967</option>
					<option value="1968">1968</option>
					<option value="1969">1969</option>
					<option value="1970">1970</option>
					<option value="1971">1971</option>
					<option value="1972">1972</option>
					<option value="1973">1973</option>
					<option value="1974">1974</option>
					<option value="1975">1975</option>
					<option value="1976">1976</option>
					<option value="1977">1977</option>
					<option value="1978">1978</option>
					<option value="1979">1979</option>
					<option value="1980">1980</option>
					<option value="1981">1981</option>
					<option value="1982" selected="">1982</option>
					<option value="1983">1983</option>
					<option value="1984">1984</option>
					<option value="1985">1985</option>
					<option value="1986">1986</option>
					<option value="1987">1987</option>
					<option value="1988">1988</option>
					<option value="1989">1989</option>
					<option value="1990">1990</option>
					<option value="1991">1991</option>
					<option value="1992">1992</option>
					<option value="1993">1993</option>
					<option value="1994">1994</option>
					<option value="1995">1995</option>
					<option value="1996">1996</option>
					<option value="1997">1997</option>
					<option value="1998">1998</option>
					<option value="1999">1999</option>
					<option value="2000">2000</option>
					<option value="2001">2001</option>
					<option value="2002">2002</option>
					<option value="2003">2003</option>
					<option value="2004">2004</option>
					<option value="2005">2005</option>
					<option value="2006">2006</option>
					<option value="2007">2007</option>
					<option value="2008">2008</option>
					<option value="2009">2009</option>
					<option value="2010">2010</option>
					<option value="2011">2011</option>
					<option value="2012">2012</option>
					<option value="2013">2013</option>
					<option value="2014">2014</option>
					<option value="2015">2015</option>
					<option value="2016">2016</option>
					<option value="2017">2017</option>
					<option value="2018">2018</option>
				　</select><label for="year">年</label>
				  <select name="birthM" id="month"><option value="" selected="">選択してください</option>
					<option value="01">01</option>
					<option value="02">02</option>
					<option value="03">03</option>
					<option value="04">04</option>
					<option value="05">05</option>
					<option value="06">06</option>
					<option value="07">07</option>
					<option value="08">08</option>
					<option value="09">09</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="12">12</option>
				　</select><label for="month">月</label>
				  <select name="birthD" id="day" selected="">選択してください</option>
					<option value="01">01</option>
					<option value="02">02</option>
					<option value="03">03</option>
					<option value="04">04</option>
					<option value="05">05</option>
					<option value="06">06</option>
					<option value="07">07</option>
					<option value="08">08</option>
					<option value="09">09</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="12">12</option>
					<option value="13">13</option>
					<option value="14">14</option>
					<option value="15">15</option>
					<option value="16">16</option>
					<option value="17">17</option>
					<option value="18">18</option>
					<option value="19">19</option>
					<option value="20">20</option>
					<option value="21">21</option>
					<option value="22">22</option>
					<option value="23">23</option>
					<option value="24">24</option>
					<option value="25">25</option>
					<option value="26">26</option>
					<option value="27">27</option>
					<option value="28">28</option>
					<option value="29">29</option>
					<option value="30">30</option>
					<option value="31">31</option>
				　</select><label for="day">日</label>
				</td>
			</tr>
			<tr>
			  <th scope="row"><span class="red">※</span>メールアドレス</th>
			  <td><input type="email" name="email" id="email">
			    <br>
			    <input type="email" name="email2" id="email2">
			    （確認）</td>
			</tr>
			<tr>
			  <th scope="row"><span class="red">※</span>パスワード</th>
			  <td><input type="password" name="pathword" id="pathword">
			    <br>
			    <input type="password" name="pathword2" id="pathword2">
			    （確認）</td>
			</tr>
			<tr>
			  <th scope="row"><span class="red">※</span>ご住所</th>
			  <td><label for="postal-code">郵便番号:</label>
                <input type="text" name="postal-code" id="postal-code">
				<br>
				<label for="address-level1">都道府県:</label><select name="address-level1" id="address-level1"><br>
				<option value="">選択してください</option>
				<option value="01">北海道</option>
				<option value="02">青森県</option>
				<option value="03">岩手県</option>
				<option value="04">宮城県</option>
				<option value="05">秋田県</option>
				<option value="06">山形県</option>
				<option value="07">福島県</option>
				<option value="08">茨城県</option>
				<option value="09">栃木県</option>
				<option value="10">群馬県</option>
				<option value="11">埼玉県</option>
				<option value="12">千葉県</option>
				<option value="13">東京都</option>
				<option value="14">神奈川県</option>
				<option value="15">新潟県</option>
				<option value="16">富山県</option>
				<option value="17">石川県</option>
				<option value="18">福井県</option>
				<option value="19">山梨県</option>
				<option value="20">長野県</option>
				<option value="21">岐阜県</option>
				<option value="22">静岡県</option>
				<option value="23">愛知県</option>
				<option value="24">三重県</option>
				<option value="25">滋賀県</option>
				<option value="26">京都府</option>
				<option value="27">大阪府</option>
				<option value="28">兵庫県</option>
				<option value="29">奈良県</option>
				<option value="30">和歌山県</option>
				<option value="31">鳥取県</option>
				<option value="32">島根県</option>
				<option value="33">岡山県</option>
				<option value="34">広島県</option>
				<option value="35">山口県</option>
				<option value="36">徳島県</option>
				<option value="37">香川県</option>
				<option value="38">愛媛県</option>
				<option value="39">高知県</option>
				<option value="40">福岡県</option>
				<option value="41">佐賀県</option>
				<option value="42">長崎県</option>
				<option value="43">熊本県</option>
				<option value="44">大分県</option>
				<option value="45">宮崎県</option>
				<option value="46">鹿児島県</option>
				<option value="47">沖縄県</option>
				</select>
				<br>
				<label for="address-level2">市区町村:</label>
                <input type="text" name="address-level2" id="address-level2">
                <br>
                <label for="address-level3">住所1:</label>
                <input type="text" name="address-level3" id="address-level3"><br>
                <label for="address-level4">住所2:</label>
                <input type="text" name="address-level4" id="address-level4">
				</td>
			</tr>
			<tr>
			  <th scope="row"><span class="red">※</span>お電話番号</th>
			  <td><input type="tel" name="tel" id="tel"></td>
			</tr>
		  </tbody>
		</table>

		<p class="submit"><input type="submit" value="内容確認" /></p>
			</form>	
			
			</div>
			
		</div>
	</main>
<!-- Main Contents end -->
</div>
	
`
}