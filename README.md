# 目的
1. 实际上，虽然叫做blog，而实际上可能并不会去写一些技术文章：)
2. 但本项目存在的最大的作用是：作为自己对(新)技术实验(不限于js)，也就是说这个项目可能会包含很多的技术，随着时间的推移，可能会越来越多，并不是统一的技术栈，凡事我觉得有趣的东西都会加入进去...
3. 另外样式不会太过深究，能看就行了，毕竟样式这块东西最简单了...
4. 所以，你大概明白了，blog不写文字，是不是很坑爹？但是blog的本身确是各个方向技术的尝试，就是是说其实写code的同事也是在写blog...

# 规划
  本项目分为三个部分，基本上也是一个blog系统所需要的，以下是各个部分大概要做的事情：
  ---
部分 | 说明 | 涉及技术
--- | --- | ---
server | 后端服务，给前端（web/native）提供接口，包括不限于ajax/webscokt/grahql的接口，以及带权限的不带权限的 | koa2
front | web主站部分，打算还是用Vue生态圈，加之其他类库的组合，以及现在流行的pwa等等  | vue/ssr/pwa/rxjs...
admin | 作为中控台，会用到react生态圈，以及现在流行的antd | react/antd
mobile | 正如你看到的，如果你用手机访问的话front样式是乱七八糟，嗯，front确实没有写关于移动端的部分，所以，以后可能会单独开一个项目来写移动端的东西 | angular?
native app | 嗯，这块也是不能少的，毕竟当下的前端并不仅仅限于web这一层了，so，这块后续也会考虑进来 | React Native?

### 另外，会用到redis/mongdb/grahql/pm2/typescript等

# 愿景

### 说了这么多，其实是希望做一些最佳实践方面的事情，每一部分都会单独拿出来改改可用
#### 这个项目是全https以及h2的实现，所以安全性和速度也会得到保证