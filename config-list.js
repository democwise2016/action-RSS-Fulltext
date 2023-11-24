const ItemFilters = require('./app/config/ItemFilters.js')

let feedList = [
  {
    title: 'PokemonGoJiang on Twitter',
    feedID: 'PokemonGoJiang',
    feedURL: 'https://rss.app/feeds/SI3KHkg8RwMrRYbr.xml',
    itemFilters: [
      ItemFilters['twitter'].ItemFilterTwitter,
      ItemFilters['sites'].ItemFilterTwitterPokemonGoJiang
    ],
  },
  {
    title: '電腦王阿達',
    feedID: 'kocpc',
    feedURL: 'https://www.kocpc.com.tw/feed',
    thumbnail: 'https://blogger.googleusercontent.com/img/a/AVvXsEh8KyFU8q9VBYbldI_qsuqPS4uFb3dbmQQR4LmjV8hbz9I1zHeSoVc2KStLIDD45r4iEsw5jO_rEOg33zvOOqcaAJ_Q3UKKE_p0Nl2dQIswqzPZug5Pt9duk5kzGbZGMHJq5xl0VzWMTBdqyPYfeLXMSJNIjrnTzklW7-KgS9gxuAT71FPGayV2_A',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog
    ],
    options: {
      selector: '.Zi_ad_ar_iR'
    }
  },
  {
    title: '湯姆群情報站',
    feedID: 'tomchun',
    feedURL: 'https://tomchun.tw/tomchun/feed/',
    thumbnail: 'https://blogger.googleusercontent.com/img/a/AVvXsEju5EFJOlLKSu22pqf32N4FdZJcFuhZaDZGDNZxMK5MM6NErgYh3NR969XS7dnbpQfQufGn5b8UUo3VaB9oC1GbozqQb_sC1KmP1HScuFSrqLPyUe1sFVyX68YYpwwAaDxDjYVm-f1TATBzxShTEdz44qMtL3_O-hSnp1hsh2wGau1FTFLcDXrwig',
    itemFilters: [
      ItemFilters['common'].ItemFilterArticleClean,
      ItemFilters['common'].ItemFilterImageEmbed,
    ],
  },
  {
    title: '通知：Steam特價',
    feedID: 'sub-steam-wishlist-2017',
    thumbnail: 'https://i.ibb.co/XYqDC20/image.png',
    feedURL: 'https://sub-steam-wishlist-2017.blogspot.com/feeds/posts/default?alt=rss',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBloggerSteamWishlist,
    ],
  },
  {
    title: '電子報：政大電算中心 MailGates Notification',
    feedID: 'sub-nccu-cc-2016',
    thumbnail: 'https://i.ibb.co/27HTsCm/image.png',
    feedURL: 'https://sub-nccu-cc-2016.blogspot.com/feeds/posts/default?alt=rss',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBloggerNCCUCC,
    ],
  },
  {
    title: '熊阿貝教電腦',
    feedID: 'bearteach',
    feedURL: 'https://bearteach.com/feed',
    thumbnail: 'https://bearteach.com/wp-content/uploads/cropped-ico2-192x192.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog
    ],
    options: {
      selector: '.entry-content[itemprop="text"]'
    }
  },
  {
    title: '硬是要學 SOFT4FUN',
    feedID: 'soft4fun',
    feedURL: 'https://www.soft4fun.net/feed',
    thumbnail: 'https://www.soft4fun.net/wp-content/uploads/2017/06/soft4fun_logo_facebook.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog
    ],
    options: {
      selector: '.tdb_single_content .tdb-block-inner.td-fix-index'
    }
  },
  {
    title: '米薩克 聊 3C',
    feedID: 'mesak',
    feedURL: 'https://mesak.tw/feed',
    thumbnail: 'https://mesak.tw/wp-content/uploads/2014/03/navbar-logo-big.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: '.post-entry'
    }
  },
  { // <outline type="rss" text="海芋小站++" title="海芋小站++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$1227-1844$/http%3A%2F%2Ffeedproxy.google.com%2Finotetw" htmlUrl="https://www.inote.tw"/>
    title: '海芋小站',
    feedID: 'inote',
    feedURL: 'https://www.inote.tw/feed',
    thumbnail: 'https://www.inote.tw/wp-content/uploads/2017/05/cropped-site_icon-192x192.jpg',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: '.entry-content'
    }
  },
  { // <outline type="rss" text="海芋小站++" title="海芋小站++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$1227-1844$/http%3A%2F%2Ffeedproxy.google.com%2Finotetw" htmlUrl="https://www.inote.tw"/>
    title: 'OSCHINA 社区最新新闻',
    feedID: 'oschina',
    feedURL: 'https://www.oschina.net/news/rss',
    itemFilters: [
      ItemFilters['sites'].ItemFilterOSChina,
      ItemFilters['common'].ItemFilterImageEmbed,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
  },
  { // <outline type="rss" text="海芋小站++" title="海芋小站++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$1227-1844$/http%3A%2F%2Ffeedproxy.google.com%2Finotetw" htmlUrl="https://www.inote.tw"/>
    title: '奇客Solidot',
    feedID: 'Solidot',
    feedURL: 'https://www.solidot.org/index.rss',
    thumbnail: 'https://icon.solidot.org/images/m/logo.jpg',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      ItemFilters['sites'].ItemFilterSolidot
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: '.p_mainnew'
    }
  },
  { // <outline type="rss" text="海芋小站++" title="海芋小站++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$1227-1844$/http%3A%2F%2Ffeedproxy.google.com%2Finotetw" htmlUrl="https://www.inote.tw"/>
    title: 'ePrice 比價王 手機品牌新聞',
    feedID: 'eprice-mobile',
    feedURL: 'http://www.eprice.com.tw/mobile/news/rss.xml',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: '.first-thread > .user-comment-block'
    }
  },
  { // <outline type="rss" text="开源工场++" title="开源工场++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/https%3A%2F%2Fopeningsource.org%2Ffeed%2F" htmlUrl="https://openingsource.org/"/>
    title: '开源工场',
    feedID: 'openingsource',
    feedURL: 'https://openingsource.org/feed/',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: '.post> .card-body > .post-content'
    }
  },
  { // <outline type="rss" text="鷹眼觀察++$0414-1925$" title="鷹眼觀察++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/http%3A%2F%2Ffeeds.feedburner.com%2FVedfolnir" htmlUrl="https://www.vedfolnir.com"/>
    title: '鷹眼觀察',
    feedID: 'vedfolnir',
    feedURL: 'https://www.vedfolnir.com/feed',
    itemFilters: [
      ItemFilters['common'].ItemFilterThumbnail,
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: '.wp-block-column > .entry-content'
    }
  },
  { // <outline type="rss" text="電獺少女++" title="電獺少女++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/http%3A%2F%2Fagirls.aotter.net%2F%3Ffeed%3Drss2" htmlUrl="https://agirls.aotter.net/"/>
    title: '電獺少女',
    feedID: 'agirls',
    feedURL: 'https://agirls.aotter.net/feed',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: 'article > .ag-article__content'
    }
  },
  { // <outline type="rss" text="ePrice 比價王 平板品牌新聞++$1227-1844$" title="ePrice 比價王 平板品牌新聞++$1227-1844$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$1227-1844$/http%3A%2F%2Fwww.eprice.com.tw%2Fpad%2Fnews%2Frss.xml" htmlUrl="https://www.eprice.com.tw"/>
    title: 'ePrice 比價王 平板品牌新聞',
    feedID: 'eprice-pad',
    feedURL: 'http://www.eprice.com.tw/pad/news/rss.xml',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: '.first-thread > .user-comment-block'
    }
  },
  { // <outline type="rss" text="傻瓜狐狸的雜碎物品 :: 痞客邦 PIXNET ::++$0414-1925$" title="傻瓜狐狸的雜碎物品 :: 痞客邦 PIXNET ::++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/http%3A%2F%2Ffeed.pixnet.net%2Fblog%2Fposts%2Frss%2Fshowmer" htmlUrl="http://www.fox-saying.com/blog"/>
    title: '傻瓜狐狸的雜碎物品',
    feedID: 'fox-saying',
    feedURL: 'http://feed.pixnet.net/blog/posts/rss/showmer',
    thumbnail: 'https://s1.pimg.tw/avatar/showmer/0/0/zoomcrop/256x256.png?v=1353688144',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: '#article-content-inner[itemprop="articleBody"]'
    }
  },
  { // <outline type="rss" text="Linuxeden开源社区++$0413-0909$" title="Linuxeden开源社区++$0413-0909$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0413-0909$,/http%3A%2F%2Fwww.linuxeden.com%2Ffeed" htmlUrl="http://www.linuxeden.com"/>
    title: 'Linuxeden开源社区',
    feedID: 'linuxeden',
    feedURL: 'http://www.linuxeden.com/feed',
    thumbnail: 'http://www.linuxeden.com/image/logonew2009.gif',
    itemFilters: [
      // ItemFilters['sites'].ItemFilterBlog,
      ItemFilters['common'].ItemFilterImageEmbed,
      ItemFilters['common'].ItemFilterArticleClean,
      ItemFilters['sites'].ItemFilterLinuxeden,
    ],
    // options: {
    //   selector: '#article-content-inner[itemprop="articleBody"]'
    // }
  },
  { // <outline type="rss" text="我是黃喬伊++$1227-1844$" title="我是黃喬伊++$1227-1844$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$1227-1844$/https%3A%2F%2Fiamjoyhuang.com%2Ffeed%2F" htmlUrl="https://iamjoyhuang.com"/>
    title: '黃喬伊教英文',
    feedID: 'iamjoyhuang',
    feedURL: 'https://iamjoyhuang.com/feed/',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: '.entry-content'
    }
  },
  { // <outline type="rss" text="挨踢路人甲++$1227-1844$" title="挨踢路人甲++$1227-1844$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$1227-1844$/https%3A%2F%2Ffeeds.feedburner.com%2Fitwalker" htmlUrl="https://walker-a.com/"/>
    title: '挨踢路人甲',
    feedID: 'walker-a',
    feedURL: 'https://walker-a.com/feed',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: 'article[id] > .entry-content'
    }
  },
  { // <outline type="rss" text="軟體玩家++" title="軟體玩家++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/https%3A%2F%2Ffeeds.feedburner.com%2Fquicktop" htmlUrl="https://pcrookie.com/"/>
    title: '軟體玩家',
    feedID: 'quicktop',
    feedURL: 'https://pcrookie.com/?feed=rss2',
    thumbnail: 'https://pcrookie.com/wp-content/uploads/2019/11/blog-LOGO-2.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      ItemFilters['sites'].ItemFilterPCRookie,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: 'article[id] > .td-post-content'
    }
  },
  { // <outline type="rss" text="靖技場++" title="靖技場++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/http%3A%2F%2Fjinnsblog.blogspot.com%2Ffeeds%2Fposts%2Fdefault" htmlUrl="https://www.jinnsblog.com/"/>
    title: '靖技場 聊 3C',
    feedID: 'jinnsblog',
    feedURL: 'https://www.jinnsblog.com/feed',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: 'article[id] > .entry-content'
    }
  },
  { // <outline type="rss" text="要改的地方太多了，那就改天吧++" title="要改的地方太多了，那就改天吧++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/https%3A%2F%2Fblog.user.today%2Ffeed%2F" htmlUrl="https://blog.user.today"/>
    title: '要改的地方太多了，那就改天吧',
    feedID: 'user.today',
    feedURL: 'https://blog.user.today/feed',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: 'article[id] > .entry__content'
    }
  },
  { // <outline type="rss" text="3C匠-喜愛玩各種3C產品++$0414-1925$" title="3C匠-喜愛玩各種3C產品++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/https%3A%2F%2F3cjohnhardware.wordpress.com%2Ffeed%2F" htmlUrl="https://3cjohnhardware.wordpress.com"/>
    title: '3C匠',
    feedID: '3cjohnhardware',
    feedURL: 'https://3cjohnhardware.wordpress.com/feed',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: 'article[id] > .entry-content'
    }
  },
  { // <outline type="rss" text="香腸炒章魚 :: 痞客邦 PIXNET ::++$0414-1925$" title="香腸炒章魚 :: 痞客邦 PIXNET ::++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/http%3A%2F%2Ffeed.pixnet.net%2Fblog%2Fposts%2Frss%2Fmitblog" htmlUrl="http://mitblog.pixnet.net/blog"/>
    title: '香腸炒章魚',
    feedID: 'mitblog',
    feedURL: 'https://feed.pixnet.net/blog/posts/rss/mitblog',
    thumbnail: 'https://i.ibb.co/HNYFwkF/sausage.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: '#article-content-inner[itemprop="articleBody"]'
    }
  },
  { // <outline type="rss" text="linux-apps.com - Latest Products++" title="linux-apps.com - Latest Products++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/https%3A%2F%2Fwww.linux-apps.com%2Fcontent.rdf"/>
    title: 'Linux Apps',
    feedID: 'linux-apps',
    feedURL: 'https://www.linux-apps.com/content.rdf',
    thumbnail: 'https://www.linux-apps.com/stores/media/store_logo/storeLogo.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterLinuxApps,
      ItemFilters['common'].ItemFilterThumbnail,
    ],
  },
  { // <outline type="rss" text="梅問題．教學網++$0414-1925$" title="梅問題．教學網++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/http%3A%2F%2Ffeeds.feedburner.com%2Fminwt%2FLZgW" htmlUrl="https://www.minwt.com/"/>
    title: '梅問題．教學網',
    feedID: 'minwt',
    feedURL: 'http://feeds.feedburner.com/minwt/LZgW',
    thumbnail: 'https://www.minwt.com/images/Icon@2.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: 'article > [itemprop="articleBody"]'
    }
  },
  { // <outline type="rss" text="黑暗執行緒++" title="黑暗執行緒++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/http%3A%2F%2Fblog.darkthread.net%2Fblogs%2Fdarkthreadtw%2Frss.aspx" htmlUrl="https://blog.darkthread.net/"/>
    title: '黑暗執行緒',
    feedID: 'darkthread',
    feedURL: 'https://blog.darkthread.net/feed/rss/',
    thumbnail: 'https://blog.darkthread.net/img/icon512x512.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: 'article > [itemprop="articleBody mainEntityOfPage"]'
    }
  },
  { // <outline type="rss" text="异次元软件世界++" title="异次元软件世界++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/http%3A%2F%2Ffeed.iplaysoft.com%2F" htmlUrl="https://www.iplaysoft.com"/>
    title: '异次元软件世界',
    feedID: 'iplaysoft',
    feedURL: 'https://feed.iplaysoft.com',
    thumbnail: 'https://cdn.iplaysoft.com/ips/logo/200x200.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: '#content > .post > .entry-content'
    }
  },
  { // <outline type="rss" text="Linuxeden开源社区++$0413-0909$" title="Linuxeden开源社区++$0413-0909$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0413-0909$,/http%3A%2F%2Fwww.linuxeden.com%2Ffeed" htmlUrl="http://www.linuxeden.com"/>
    title: '批踢踢實業坊 Hearthstone 板',
    feedID: 'ptt-Hearthstone',
    feedURL: 'https://www.ptt.cc/atom/Hearthstone.xml',
    thumbnail: 'https://i.ibb.co/Fm611Y1/Ptt-Chrome-200x198.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      ItemFilters['sites'].ItemFilterPTT,
    ],
    options: {
      selector: '#main-container'
    }
  },
  { // <outline type="rss" text="Linuxeden开源社区++$0413-0909$" title="Linuxeden开源社区++$0413-0909$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0413-0909$,/http%3A%2F%2Fwww.linuxeden.com%2Ffeed" htmlUrl="http://www.linuxeden.com"/>
    title: '批踢踢實業坊 PokemonGo 板',
    feedID: 'ptt-PokemonGo',
    feedURL: 'https://www.ptt.cc/atom/PokemonGo.xml',
    thumbnail: 'https://i.ibb.co/Fm611Y1/Ptt-Chrome-200x198.png',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      ItemFilters['sites'].ItemFilterPTT,
    ],
    options: {
      selector: '#main-container'
    }
  },
  { // <outline type="rss" text="Linuxeden开源社区++$0413-0909$" title="Linuxeden开源社区++$0413-0909$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0413-0909$,/http%3A%2F%2Fwww.linuxeden.com%2Ffeed" htmlUrl="http://www.linuxeden.com"/>
    title: 'Chrome Unboxed',
    feedID: 'chromeunboxed',
    feedURL: 'https://chromeunboxed.com/feed/',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      ItemFilters['common'].ItemFilterImageEmbed,
      ItemFilters['common'].ItemFilterThumbnailCache,
    ],
    options: {
      selector: 'article > .entry-content'
    }
  },
  { // <outline type="rss" text="FUNTOP資訊網++$0414-1925$" title="FUNTOP資訊網++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/http%3A%2F%2Ffuntop.tw%2Ffeed%2F" htmlUrl="https://funtop.tw/"/>
    title: 'FUNTOP資訊網',
    feedID: 'funtop',
    feedURL: 'https://funtop.tw/feed/',
    thumbnail: 'https://funtop.tw/wp-content/themes/funtop/img/favicon.ico?ver=1',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      ItemFilters['sites'].ItemFilterFuntop,
      // ItemFilters['common'].ItemFilterImageEmbed,
    ],
    options: {
      selector: 'article[id]',
      proxy: true
    }
  },
  { // <outline type="rss" text="學不完．教不停．用不盡 :: 痞客邦 PIXNET ::" title="學不完．教不停．用不盡 :: 痞客邦 PIXNET ::" xmlUrl="http://feeds.feedburner.com/pixnetisvincent"/>
    title: '學不完．教不停．用不盡',
    feedID: 'pixnetisvincent',
    feedURL: 'http://feeds.feedburner.com/pixnetisvincent',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
      // ItemFilters['common'].ItemFilterThumbnailCache,
    ],
    options: {
      selector: '.article-body > .article-content > .article-content-inner'
    }
  },
  { // <outline type="rss" text="承風雅傳HSU 電腦工作室 BLOG :: 痞客邦 PIXNET ::" title="承風雅傳HSU 電腦工作室 BLOG :: 痞客邦 PIXNET ::" xmlUrl="http://feed.pixnet.net/blog/posts/rss/hsuanthony" htmlUrl="http://hsuanthony.pixnet.net/blog"/>
    title: '承風雅傳HSU 電腦工作室 BLOG',
    feedID: 'hsuanthony',
    feedURL: 'http://feed.pixnet.net/blog/posts/rss/hsuanthony',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
      // ItemFilters['common'].ItemFilterThumbnailCache,
    ],
    options: {
      selector: '.article-body > .article-content > .article-content-inner'
    }
  },
  { // <outline type="rss" text="承風雅傳HSU 電腦工作室 BLOG :: 痞客邦 PIXNET ::" title="承風雅傳HSU 電腦工作室 BLOG :: 痞客邦 PIXNET ::" xmlUrl="http://feed.pixnet.net/blog/posts/rss/hsuanthony" htmlUrl="http://hsuanthony.pixnet.net/blog"/>
    title: '科技狗',
    feedID: '3cdogs',
    feedURL: 'https://3cdogs.com/feed/',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
      // ItemFilters['common'].ItemFilterThumbnailCache,
    ],
    options: {
      selector: 'article[id] > .entry-content'
    }
  },
  { // <outline type="rss" text="承風雅傳HSU 電腦工作室 BLOG :: 痞客邦 PIXNET ::" title="承風雅傳HSU 電腦工作室 BLOG :: 痞客邦 PIXNET ::" xmlUrl="http://feed.pixnet.net/blog/posts/rss/hsuanthony" htmlUrl="http://hsuanthony.pixnet.net/blog"/>
    title: 'XDA',
    feedID: 'xda',
    feedURL: 'http://www.xda-developers.com/feed/',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
      // ItemFilters['common'].ItemFilterThumbnailCache,
    ],
    options: {
      selector: '#article-body > .content-block-regular'
    }
  },
  {
    title: '极客FUN',
    feedID: 'eiefun',
    feedURL: 'https://www.eiefun.com/feed',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
      // ItemFilters['common'].ItemFilterThumbnailCache,
    ],
    options: {
      selector: 'article[id] > .post-content-wrap > .post-content'
    }
  },
  { // <outline type="rss" text="FUNTOP資訊網++$0414-1925$" title="FUNTOP資訊網++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/http%3A%2F%2Ffuntop.tw%2Ffeed%2F" htmlUrl="https://funtop.tw/"/>
    title: 'Android Central',
    feedID: 'AndroidCentral',
    feedURL: 'https://www.androidcentral.com/rss.xml',
    itemFilters: [
      // ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['common'].ItemFilterImageEmbed,
      // ItemFilters['common'].ItemFilterThumbnailCache,
    ],
    options: {
      selector: '#article-body'
    }
  },
  { // <outline type="rss" text="FUNTOP資訊網++$0414-1925$" title="FUNTOP資訊網++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/http%3A%2F%2Ffuntop.tw%2Ffeed%2F" htmlUrl="https://funtop.tw/"/>
    title: '關鍵應用',
    feedID: 'key-chtouch',
    feedURL: 'https://key.chtouch.com/rss.xml',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      // ItemFilters['sites'].ItemFilterKeyChtouch,
      ItemFilters['common'].ItemFilterImageEmbed,
      ItemFilters['common'].ItemFilterThumbnailRemove,
    ],
    options: {
      selector: 'article > .entry-content',
      proxy: true,
    }
  },
  {
    title: '天瓏書局',
    feedID: 'tenlong',
    feedURL: 'https://sub-tenlong-2021.blogspot.com/feeds/posts/default',
    itemFilters: [
      ItemFilters['sites'].ItemFilterTenlong,
    ],
  },
  {
    title: '硬核观察 | Linux 中国◆开源社区',
    feedID: 'linux-cn-weekly-news',
    feedURL: 'http://linux.cn/rss.xml',
    itemFilters: [
      ItemFilters['sites'].ItemFilterLinuxCNWeeklyNews,
    ],
  },
  {
    title: '公視新聞網',
    feedID: 'pts-news',
    feedURL: 'https://news.pts.org.tw/xml/newsfeed.xml',
    itemFilters: [
      ItemFilters['sites'].ItemFilterBlog,
      ItemFilters['sites'].ItemFilterPTSNews
    ],
    options: {
      selector: 'body > article',
    }
  },
]
// ----------------------------------------------------------------

// feedList = [
//   { // <outline type="rss" text="學不完．教不停．用不盡 :: 痞客邦 PIXNET ::" title="學不完．教不停．用不盡 :: 痞客邦 PIXNET ::" xmlUrl="http://feeds.feedburner.com/pixnetisvincent"/>
//     title: '公視新聞網',
//     feedID: 'pts-news',
//     feedURL: 'https://news.pts.org.tw/xml/newsfeed.xml',
//     itemFilters: [
//       ItemFilters['sites'].ItemFilterBlog,
//       ItemFilters['sites'].ItemFilterPTSNews,
//     ],
//     options: {
//       selector: 'body > article',
//       proxy: true,
//     }
//   },
// ]

module.exports = feedList