Vue.component('footer-vue',{
            data: function () {
                return {
                    
                }
            },

            template: `

 <div id="Footer">
    <ul id="FooterMenu">
        <li><router-link to="/Information">お知らせ</router-link></li>
        <li><router-link to="/Help">ヘルプ</router-link></li>
        <li><router-link to="/Privacy">個人情報保護法に基づく表記</router-link></li>
        <li><a href="https://pastorale.jp/" target="_blank">運営会社</a></li>
    </ul>
    <p>Copyright c PASTORALE CO., LTD.</p>

</div>

            `
        });