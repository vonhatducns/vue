var routes = [ 
{path: '/', name: 'Home',component: Home},
{path: '/Register',name: 'Register', component: Register},
{path: '/Guide',name: 'Guide', component: Guide},
{path: '/Information',name: 'Information', component: Information},
{path: '/Login',name: 'Login', component: Login},
{path: '/FormLogin',name: '	FormLogin', component: FormLogin},
{path: '/Help',name: '	Help', component: Help},
{path: '/Privacy',name: 'Privacy', component: Privacy},
{path: '/GetApi',name: 'GetApi', component: GetApi}
];
var router = new VueRouter({mode: 'history',routes: routes, base: '/vue'});
