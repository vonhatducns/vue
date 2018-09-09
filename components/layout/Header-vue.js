Vue.component('header-vue',{
            data: function () {
                return {
                    
                }
            },
             
            template: `
 
 <div id="HeadWrap" >
    <header id="Header">
        <div id="HeaderLeft">
            <section id="Headlogo"><router-link to="/"><img src="./assets/img/headlogo.png" width="267" height="46" alt=""/></router-link></section>
        </div>
        <div id="HeaderRight">
            <section id="Headsearch">
                <!-- 検索窓 -->
              <router-link to="/">
                <form action="">
                    <input type="text" id="Headinput" placeholder="公演名・アーティスト名で検索">
                    <button id="sbtn" type="submit"><i class="fas fa-search"></i></button>
                </form>
                </router-link>
                                <!-- /検索窓 -->
                <div id="soptxt"><router-link to="/">こだわり検索&gt;&gt;</router-link></div>
            </section>
            <nav id="Headmenupre">
                <ul id="TmenuGR">
                    <li class="tmenu"><router-link to="/">公演一覧</router-link></li>
                    <li class="tmenu"><router-link to="/Register">新規登録</router-link></li>
                    <li class="tmenu"><router-link to="/Guide">ご利用ガイド</router-link></li>
                    <li class="tmenu"><router-link to="/Information">お知らせ</router-link></li>
                    <li class="tlogin"><router-link to="/Login">ログイン</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</div>

            `
        });