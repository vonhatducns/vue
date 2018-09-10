 var Home = {
	template: `
  
	<div id="MainC">
<!-- Main Contents -->
    <main id="ContentsPane">
        <h1><span id="Pagetitle">公演一覧</span></h1>
        
        <div id="UpperContents">
        <!-- お知らせトップ -->
        <section id="InfoList">
            <h2>お知らせ</h2>
            <dl id="Info">
            <dt>2018.8.1</dt>
            <dd><a href="#">○○○○公演中止による払い戻しについて。</a><span class="new"><img src="./assets/img/icon_info_new.gif" width="50" height="20" alt="new"/></span></dd>
            <dt>2018.7.31</dt>
            <dd><a href="#">○○○○コンサートのアーティスト入院による公演延期のお知らせ。</a></dd>
            <dt>2018.5.18</dt>
            <dd><a href="#">○○○○公演中止による払い戻しについて。ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</a></dd>
            <dt>2018.3.20</dt>
            <dd><a href="#">○○○○コンサートのアーティスト入院による公演延期のお知らせ。</a></dd>
            <dt>2017.12.24</dt>
            <dd><a href="#">○○○○公演中止による払い戻しについて。</a></dd>
            </dl>
            <p class="goto"><a href="information/index.html">お知らせ一覧へ&gt;&gt;</a></p>
        </section>
        <!-- お知らせトップ end -->
        </div>
        
        <div id="LowerContents">
        <!-- 公演一覧トップリスト -->
        <section id="EventList">
            <h2>公演一覧</h2>
            <!--上部ページネーション-->
            <div class="pagination">
                <ul>
                    <li><a href="#">&lt;&lt;</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li class="current"><span>5</span></li>
                    <li><a href="#">6</a></li>
                    <li><span>...</span></li>
                    <li><a href="#">25</a></li>
                    <li><a href="#">&gt;&gt;</a></li>
                </ul>
            </div>
            <!--上部ページネーション end-->
            
            <!-- 公演一覧テーブル -->
            <div id="eventListWrap">
            <table width="100%" border="1" class="eventList">
              <thead>
                <tr>
                  <th>公演名</th>
                  <th>ジャンル</th>
                  <th>公演期間</th>
                  <th>&nbsp;</th>
                </tr>
            　</thead>
              <tbody>
                <tr>
                  <td class="eventTitle"><router-link to="/detail001"><img src="./assets/img_event/thum_event_photo01.jpg" width="80" height="60" alt="イベント"　 class="eventThum"/>ダミーテキストダミーテキスト></router-link></td></router-link>
                  <td class="genre"><img src="./assets/img/icon_classic.gif" width="100" height="30" alt="クラシック"/></td>
                  <td class="term">2018.7.1～2018.7.15</td>
                  <td class="controll"><a href="detail/detail001.html"><img src="./assets/img/btn_detail.gif" width="92" height="35" alt="詳細"/></a></td>
                </tr>
                <tr>
                  <td class="eventTitle"><router-link to="/detail001">ダミーテキストダミーテキスト</router-link></td>
                  <td class="genre"><img src="./assets/img/icon_brass.gif" width="100" height="30" alt="吹奏楽"/></td>
                  <td class="term">2018.7.1～2018.7.15</td>
                  <td class="controll"><a href="detail/detail001.html"><img src="./assets/img/btn_detail.gif" width="92" height="35" alt="詳細"/></a></td>
                </tr>
                <tr>
                  <td class="eventTitle"><a href="detail/detail001.html">ダミーテキストダミーテキスト</a></td>
                  <td class="genre"><img src="./assets/img/icon_engei.gif" width="100" height="30" alt="演芸"/></td>
                  <td class="term">2018.7.1～2018.7.15</td>
                  <td class="controll"><a href="detail/detail001.html"><img src="./assets/img/btn_detail.gif" width="92" height="35" alt="詳細"/></a></td>
                </tr>
                <tr>
                  <td class="eventTitle"><a href="detail/detail001.html">ダミーテキストダミーテキスト</a></td>
                  <td class="genre"><img src="./assets/img/icon_engeki.gif" width="100" height="30" alt="演劇"/></td>
                  <td class="term">2018.7.1～2018.7.15</td>
                  <td class="controll"><a href="detail/detail001.html"><img src="./assets/img/btn_detail.gif" width="92" height="35" alt="詳細"/></a></td>
                </tr>
                <tr>
                  <td class="eventTitle"><a href="detail/detail001.html">ダミーテキストダミーテキスト</a></td>
                  <td class="genre"><img src="./assets/img/icon_enka.gif" width="100" height="30" alt="演歌"/></td>
                  <td class="term">2018.7.1～2018.7.15</td>
                  <td class="controll"><a href="detail/detail001.html"><img src="./assets/img/btn_detail.gif" width="92" height="35" alt="詳細"/></a></td>
                </tr>
                <tr>
                  <td class="eventTitle"><a href="detail/detail001.html">ダミーテキストダミーテキストダミーテキストダミーテキスト</a></td>
                  <td class="genre"><img src="./assets/img/icon_jazz.gif" width="100" height="30" alt="ジャズ"/></td>
                  <td class="term">2018.7.1～2018.7.15</td>
                  <td class="controll"><a href="detail/detail001.html"><img src="./assets/img/btn_detail.gif" width="92" height="35" alt="詳細"/></a></td>
                </tr>
                <tr>
                  <td class="eventTitle"><a href="detail/detail001.html"><img src="./assets/img_event/thum_event_photo02.jpg" width="80" height="60" alt="イベント"　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 class="eventThum"/>ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</a></td>
                  <td class="genre"><img src="./assets/img/icon_kouen.gif" width="100" height="30" alt="講演"/></td>
                  <td class="term">2018.7.1～2018.7.15</td>
                  <td class="controll"><a href="detail/detail001.html"><img src="./assets/img/btn_detail.gif" width="92" height="35" alt="詳細"/></a></td>
                </tr>
                <tr>
                  <td class="eventTitle"><a href="detail/detail001.html"><img src="./assets/img_event/thum_event_photo01.jpg" width="80" height="60" alt="イベント"　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 class="eventThum"/>ダミーテキストダミーテキストダミーテキストダミーテキスト</a></td>
                  <td class="genre"><img src="./assets/img/icon_opera.gif" width="100" height="30" alt="オペラ"/></td>
                  <td class="term">2018.7.1～2018.7.15</td>
                  <td class="controll"><a href="detail/detail001.html"><img src="./assets/img/btn_detail.gif" width="92" height="35" alt="詳細"/></a></td>
                </tr>
                <tr>
                  <td class="eventTitle"><a href="detail/detail001.html">ダミーテキストダミーテキスト</a></td>
                  <td class="genre"><img src="./assets/img/icon_other.gif" width="100" height="30" alt="その他"/></td>
                  <td class="term">2019.1.5～2019.3.15</td>
                  <td class="controll"><a href="detail/detail001.html"><img src="./assets/img/btn_detail.gif" width="92" height="35" alt="詳細"/></a></td>
                </tr>
                <tr>
                  <td class="eventTitle"><a href="detail/detail001.html"><img src="./assets/img_event/thum_event_photo03.jpg" width="80" height="60" alt="イベント"　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 class="eventThum"/>ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</a></td>
                  <td class="genre"><img src="./assets/img/icon_pops.gif" width="100" height="30" alt="ポップス"/></td>
                  <td class="term">2018.9.2, 2018.10.11</td>
                  <td class="controll"><a href="detail/detail001.html"><img src="./assets/img/btn_detail.gif" width="92" height="35" alt="詳細"/></a></td>
                </tr>
                <tr>
                  <td class="eventTitle"><a href="detail/detail001.html">ダミーテキストダミーテキスト</a></td>
                  <td class="genre"><img src="./assets/img/icon_rock.gif" width="100" height="30" alt="ロック"/></td>
                  <td class="term">2018.11.16～2018.12.15</td>
                  <td class="controll"><a href="detail/detail001.html"><img src="./assets/img/btn_detail.gif" width="92" height="35" alt="詳細"/></a></td>
                </tr>
                <tr>
                  <td class="eventTitle"><a href="detail/detail001.html">ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</a></td>
                  <td class="genre"><img src="./assets/img/icon_sports.gif" width="100" height="30" alt="スポーツ"/></td>
                  <td class="term">2018.9.15</td>
                  <td class="controll"><a href="detail/detail001.html"><img src="./assets/img/btn_detail.gif" width="92" height="35" alt="詳細"/></a></td>
                </tr>
              </tbody>
            </table>
            </div>
            <!-- 公演一覧テーブルend -->
            
            
            <!--下部ページネーション-->
            <div class="pagination">
                <ul>
                    <li><a href="#">&lt;&lt;</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li class="current"><span>5</span></li>
                    <li><a href="#">6</a></li>
                    <li><span>...</span></li>
                    <li><a href="#">25</a></li>
                    <li><a href="#">&gt;&gt;</a></li>
                </ul>
            </div>
            <!--下部ページネーション end-->
            
        </section>
        <!-- 公演一覧トップリスト end -->
        </div>
    </main>
<!-- Main Contents end -->
</div>

	`
}