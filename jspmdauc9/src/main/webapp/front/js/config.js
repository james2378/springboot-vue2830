
var projectName = '社区团购网站的设计与实现';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.jsp'
}, 
{
	name: '我的订单',
	url: '../shop-order/list.jsp'
},

{
	name: '我的地址',
	url: '../shop-address/list.jsp'
},

{
	name: '我的收藏',
	url: '../storeup/list.jsp'
}
]


var indexNav = [

{
	name: '商品信息',
	url: './pages/shangpinxinxi/list.jsp'
}, 
{
	name: '团购信息',
	url: './pages/tuangouxinxi/list.jsp'
}, 

{
	name: '公告信息',
	url: './pages/news/list.jsp'
},
]

var adminurl =  "http://localhost:8080/jspmdauc9/index.jsp";

var cartFlag = false

var chatFlag = false


cartFlag = true


var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["新增","查看","修改","删除"],"menu":"顾客","menuJump":"列表","tableName":"guke"}],"menu":"顾客管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["新增","查看","修改","删除"],"menu":"商家","menuJump":"列表","tableName":"shangjia"}],"menu":"商家管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看","删除","审核","查看评论"],"menu":"商品信息","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除"],"menu":"商品类型","menuJump":"列表","tableName":"shangpinleixing"}],"menu":"商品类型管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看","删除","审核","查看评论"],"menu":"团购信息","menuJump":"列表","tableName":"tuangouxinxi"}],"menu":"团购信息管理"},{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["查看","删除"],"menu":"拼团申请","menuJump":"列表","tableName":"pintuanshenqing"}],"menu":"拼团申请管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","删除"],"menu":"退出拼团","menuJump":"列表","tableName":"tuichupintuan"}],"menu":"退出拼团管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","删除"],"menu":"团购订单","menuJump":"列表","tableName":"tuangoudingdan"}],"menu":"团购订单管理"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","加入拼团"],"menu":"团购信息列表","menuJump":"列表","tableName":"tuangouxinxi"}],"menu":"团购信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["查看","退出拼团"],"menu":"拼团申请","menuJump":"列表","tableName":"pintuanshenqing"}],"menu":"拼团申请管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看"],"menu":"退出拼团","menuJump":"列表","tableName":"tuichupintuan"}],"menu":"退出拼团管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","支付"],"menu":"团购订单","menuJump":"列表","tableName":"tuangoudingdan"}],"menu":"团购订单管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","加入拼团"],"menu":"团购信息列表","menuJump":"列表","tableName":"tuangouxinxi"}],"menu":"团购信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"顾客","tableName":"guke"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除","查看评论"],"menu":"商品信息","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除","查看评论"],"menu":"团购信息","menuJump":"列表","tableName":"tuangouxinxi"}],"menu":"团购信息管理"},{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["查看","删除","发布订单"],"menu":"拼团申请","menuJump":"列表","tableName":"pintuanshenqing"}],"menu":"拼团申请管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","删除","审核"],"menu":"退出拼团","menuJump":"列表","tableName":"tuichupintuan"}],"menu":"退出拼团管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","修改","删除","审核"],"menu":"团购订单","menuJump":"列表","tableName":"tuangoudingdan"}],"menu":"团购订单管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","删除","物流"],"menu":"已完成订单","tableName":"orders/已完成"},{"appFrontIcon":"cuIcon-circle","buttons":["查看","删除","物流"],"menu":"已发货订单","tableName":"orders/已发货"},{"appFrontIcon":"cuIcon-form","buttons":["查看","删除"],"menu":"未支付订单","tableName":"orders/未支付"},{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","删除"],"menu":"已取消订单","tableName":"orders/已取消"},{"appFrontIcon":"cuIcon-clothes","buttons":["查看","删除","发货","物流"],"menu":"已支付订单","tableName":"orders/已支付"},{"appFrontIcon":"cuIcon-brand","buttons":["查看","删除","物流"],"menu":"已退款订单","tableName":"orders/已退款"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","加入拼团"],"menu":"团购信息列表","menuJump":"列表","tableName":"tuangouxinxi"}],"menu":"团购信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"商家","tableName":"shangjia"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
