<template>
	<div class="nav-items-box" id="nav-items-box" ref="itemsBox">
		<div class="food-kind">
			<p><span>热销</span>大家喜欢吃，才叫真好吃。</p>
			<nav-item v-for="food in foods1" :key="food.id" :food="food"></nav-item>
		</div>
		<div class="food-kind">
			<p><span>优惠</span>大家喜欢吃，才叫真好吃。</p>
      <nav-item v-for="food in foods2" :key="food.id" :food="food"></nav-item>
		</div>
		<div class="food-kind">
			<p><span>双人套餐</span>大家喜欢吃，才叫真好吃。</p>
      <nav-item v-for="food in foods3" :key="food.id" :food="food"></nav-item>
		</div>
		<div class="food-kind">
			<p><span>主食套餐</span>大家喜欢吃，才叫真好吃。</p>
      <nav-item v-for="food in foods4" :key="food.id" :food="food"></nav-item>
		</div>
		<div class="food-kind">
			<p><span>主食饮料套餐</span>大家喜欢吃，才叫真好吃。</p>
      <nav-item v-for="food in foods5" :key="food.id" :food="food"></nav-item>
		</div>
		<div class="food-kind">
			<p><span>加食加味</span>大家喜欢吃，才叫真好吃。</p>
      <nav-item v-for="food in foods6" :key="food.id" :food="food"></nav-item>
		</div>
		<div class="food-kind">
			<p><span>蒸汤饮品</span>大家喜欢吃，才叫真好吃。</p>
      <nav-item v-for="food in foods7" :key="food.id" :food="food"></nav-item>
		</div>
		<div class="food-kind">
			<p><span>豪满足套餐</span>大家喜欢吃，才叫真好吃。</p>
      <nav-item v-for="food in foods8" :key="food.id" :food="food"></nav-item>
		</div>
		<div class="food-kind">
			<p><span>新品尝鲜</span>大家喜欢吃，才叫真好吃。</p>
      <nav-item v-for="food in foods9" :key="food.id" :food="food"></nav-item>
		</div>
		<div class="food-kind">
			<p><span>主餐彩豆套餐</span>大家喜欢吃，才叫真好吃。</p>
      <nav-item v-for="food in foods10" :key="food.id" :food="food"></nav-item>
		</div>
	</div>
</template>
<script type="text/javascript">
import NavItem from './NavItem'

	export default{
		name : 'NavItemsBox',
		props:[
		  'activeIndex',
	      'changeActiveIndex',
	      'changeScrollTop',
	      'scrollFlag',
	      'closeFlag'
	    ],
		data (){
			return {
				isShow : false,
        scrollTop: 0,
        foods1: [
          { id:'00000001', name: '经典麦辣鸡腿汉堡套餐', sell:'220', num:0 , description: '1个经典麦辣鸡腿汉堡 1份薯条(中) 1杯可口可乐(中)', evaluate: "100%", price: '32', imgSrc: 'https://fuss10.elemecdn.com/7/d8/678b48687b91e478be0f0c1f4c8e1png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000002', name: '麦辣鸡翅2块', sell:'220', num:0 , description: '例－麦辣鸡翅2块（主要原料：鸡肉，腌料，裹粉，油）', evaluate: "100%", price: '11.5', imgSrc: 'https://fuss10.elemecdn.com/3/8b/bfa3f955cbce3330f1cb6818d0ce6png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000003', name: '经典麦辣鸡腿汉堡', sell:'220', num:0 , description: '例－主要原料：面包、鸡肉、生菜、风味沙拉酱', evaluate: "100%", price: '20', imgSrc: 'https://fuss10.elemecdn.com/5/49/f44bcf8326227d355aa3539ebd52fpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000004', name: '麦辣鸡翅4块', sell:'220', num:0 , description: '例－麦辣鸡翅4块（主要原料：鸡肉，腌料，裹粉，油）', evaluate: "100%", price: '23', imgSrc: 'https://fuss10.elemecdn.com/4/16/b9ebd6b13d45b39cac9f7a21967bapng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000005', name: '香骨鸡腿', sell:'220', num:0 , description: '例－主要原料：鸡肉，油', evaluate: "100%", price: '13', imgSrc: 'https://fuss10.elemecdn.com/4/16/b9ebd6b13d45b39cac9f7a21967bapng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000006', name: '麦乐鸡5块', sell:'220', num:0 , description: '例－5块麦乐鸡（主要原料：鸡肉，油）', evaluate: "100%", price: '11.5', imgSrc: 'https://fuss10.elemecdn.com/d/8a/a381c66769f43d76582ea65f8ef59png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000007', name: '薯条（大）', sell:'92', num:0 , description: '例－主要原料：薯条，油，盐', evaluate: "100%", price: '13', imgSrc: 'https://fuss10.elemecdn.com/a/f3/1248c3489ed58435de3f88f1ee09dpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000008', name: '奥利奥原味麦旋风', sell:'89', num:0 , description: '例－奥利奥原味麦旋风1个（主要原料：香草风味冰淇淋，奥利奥饼干碎）', evaluate: "100%", price: '12.5', imgSrc: 'https://fuss10.elemecdn.com/9/ac/14a8fd87fd35a406d89ddd262c03cpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000009', name: '那么大鸡排', sell:'88', num:0 , description: '例－奥利奥原味麦旋风1个（主要原料：香草风味冰淇淋，奥利奥饼干碎）', evaluate: "100%", price: '13', imgSrc: 'https://fuss10.elemecdn.com/6/a9/df6cf49d96f465f667c6fd41bf278png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000010', name: '朱古力新地', sell:'82', num:0 , description: '例－朱古力新地1个（主要原料：香草风味冰淇淋，朱古力酱）', evaluate: "100%", price: '9.5', imgSrc: 'https://fuss10.elemecdn.com/d/6f/d83b288529028ecc32af6396d0109png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000011', name: '限时优惠 红蓝霸霸力量条2份半价', sell:'61', num:0, num:0, description: '蓝莓山药双节派2份 草莓双节派2份(主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '￥11', imgSrc: 'https://fuss10.elemecdn.com/c/2b/7c7aa9cb1cff3d609f61d6d396846jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
        ],
        foods2: [
          { id:'00000012', name: '经典巨无霸', sell:'20', num:0, description: '份－主要原料：面包、牛肉、生菜、洋葱、腌黄瓜、芝士、风味沙拉酱', evaluate: "100%", price: '￥23', imgSrc: 'https://fuss10.elemecdn.com/b/ea/403c55f25302e3a342e2ce68d1673png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000013', name: '经典巨无霸中薯套餐', sell:'13', num:0, description: '1个巨无霸 1份薯条(中) 1杯可口可乐(中)', evaluate: "100%", price: '35', imgSrc: 'https://fuss10.elemecdn.com/3/80/8b4d7ef8b26ce409c213af117289dpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000014', name: '经典巨无霸小玉套餐', sell:'13', num:0, description: '1个巨无霸 1个玉米杯(小) 1杯可口可乐(中)', evaluate: "100%", price: '35', imgSrc: 'https://fuss10.elemecdn.com/1/a3/da966866978cc3e2312815e3b3389png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000015', name: '经典巨无霸大薯套餐', sell:'7', num:0, description: '1个巨无霸 1份薯条(大) 1杯可口可乐(大)', evaluate: "100%", price: '39', imgSrc: 'https://fuss10.elemecdn.com/7/48/b294e056a1bb23a3a813d01eb36ecpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000016', name: '经典巨无霸大玉套餐', sell:'3', num:0, description: '1个巨无霸 1个玉米杯(大) 1杯可口可乐(大)', evaluate: "100%", price: '39', imgSrc: 'https://fuss10.elemecdn.com/6/de/31307c91adab7fb85ba1867579febpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000017', name: '保护我方水晶特饮', sell:'7', num:0, description: '份－保护我方水晶特饮1杯（主要原料：西柚糖浆，汽水，果冻）', evaluate: "100%", price: '13.5', imgSrc: 'https://fuss10.elemecdn.com/6/4a/55cee081342bc7d78e596ebc1bc41png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000018', name: '红蓝霸霸力量条', sell:'3', num:0, description: '份－蓝莓山药双节派 草莓双节派（主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '11', imgSrc: 'https://fuss10.elemecdn.com/f/cf/cb0f9f8e22b5258e0468700c459c5jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000019', name: '红蓝霸霸力量条2份', sell:'220', num:0, description: '蓝莓山药双节派2份 草莓双节派2份（主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '17', imgSrc: 'https://fuss10.elemecdn.com/c/2b/7c7aa9cb1cff3d609f61d6d396846jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000020', name: '王者小食盒', sell:'22', description: '例－大鸡排1份 麦辣鸡翅1对 麦乐鸡4块', evaluate: "100%", price: '30', imgSrc: 'https://fuss10.elemecdn.com/2/81/9d0996e64c47faff68661269c8dc8jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000021', name: '团战鸡盒(含那么大鸡排)', sell:'13', num:0, description: '麦乐鸡7块 香骨鸡腿3个 麦辣鸡翅6块 中可乐2杯', evaluate: "100%", price: '92', imgSrc: 'https://fuss10.elemecdn.com/a/2c/87bf68dba4b0636dd16d6e073989cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000022', name: '团战鸡盒(含麦乐鸡)', sell:'7', num:0, description: '麦乐鸡7块 香骨鸡腿3个 麦辣鸡翅6块 中可乐2杯', evaluate: "100%", price: '92', imgSrc: 'https://fuss10.elemecdn.com/a/2c/87bf68dba4b0636dd16d6e073989cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000023', name: '5人欢享盛宴餐', sell:'10', num:0, description: '', evaluate: "100%", price: '199', imgSrc: 'https://fuss10.elemecdn.com/a/61/aadcfab73a4d9c70e8076f96de1c7png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' }
        ],
        foods3: [
          { id:'00000024', name: '经典巨无霸', sell:'20', num:0, description: '份－主要原料：面包、牛肉、生菜、洋葱、腌黄瓜、芝士、风味沙拉酱', evaluate: "100%", price: '￥23', imgSrc: 'https://fuss10.elemecdn.com/b/ea/403c55f25302e3a342e2ce68d1673png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'00000025', name: '经典巨无霸中薯套餐', sell:'13', num:0, description: '1个巨无霸 1份薯条(中) 1杯可口可乐(中)', evaluate: "100%", price: '35', imgSrc: 'https://fuss10.elemecdn.com/3/80/8b4d7ef8b26ce409c213af117289dpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000016', name: '经典巨无霸小玉套餐', sell:'13', num:0, description: '1个巨无霸 1个玉米杯(小) 1杯可口可乐(中)', evaluate: "100%", price: '35', imgSrc: 'https://fuss10.elemecdn.com/1/a3/da966866978cc3e2312815e3b3389png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000017', name: '经典巨无霸大薯套餐', sell:'7', num:0, description: '1个巨无霸 1份薯条(大) 1杯可口可乐(大)', evaluate: "100%", price: '39', imgSrc: 'https://fuss10.elemecdn.com/7/48/b294e056a1bb23a3a813d01eb36ecpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000018', name: '经典巨无霸大玉套餐', sell:'3', num:0, description: '1个巨无霸 1个玉米杯(大) 1杯可口可乐(大)', evaluate: "100%", price: '39', imgSrc: 'https://fuss10.elemecdn.com/6/de/31307c91adab7fb85ba1867579febpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000019', name: '保护我方水晶特饮', sell:'7', num:0, description: '份－保护我方水晶特饮1杯（主要原料：西柚糖浆，汽水，果冻）', evaluate: "100%", price: '13.5', imgSrc: 'https://fuss10.elemecdn.com/6/4a/55cee081342bc7d78e596ebc1bc41png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000020', name: '红蓝霸霸力量条', sell:'3', num:0, description: '份－蓝莓山药双节派 草莓双节派（主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '11', imgSrc: 'https://fuss10.elemecdn.com/f/cf/cb0f9f8e22b5258e0468700c459c5jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000021', name: '红蓝霸霸力量条2份', sell:'220', num:0, description: '蓝莓山药双节派2份 草莓双节派2份（主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '17', imgSrc: 'https://fuss10.elemecdn.com/c/2b/7c7aa9cb1cff3d609f61d6d396846jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000022', name: '王者小食盒', sell:'22', num:0, description: '例－大鸡排1份 麦辣鸡翅1对 麦乐鸡4块', evaluate: "100%", price: '30', imgSrc: 'https://fuss10.elemecdn.com/2/81/9d0996e64c47faff68661269c8dc8jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000023', name: '团战鸡盒(含那么大鸡排)', sell:'13', num:0, description: '麦乐鸡7块 香骨鸡腿3个 麦辣鸡翅6块 中可乐2杯', evaluate: "100%", price: '92', imgSrc: 'https://fuss10.elemecdn.com/a/2c/87bf68dba4b0636dd16d6e073989cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000024', name: '团战鸡盒(含麦乐鸡)', sell:'7', num:0, description: '麦乐鸡7块 香骨鸡腿3个 麦辣鸡翅6块 中可乐2杯', evaluate: "100%", price: '92', imgSrc: 'https://fuss10.elemecdn.com/a/2c/87bf68dba4b0636dd16d6e073989cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000025', name: '5人欢享盛宴餐', sell:'10', num:0, description: '', evaluate: "100%", price: '199', imgSrc: 'https://fuss10.elemecdn.com/a/61/aadcfab73a4d9c70e8076f96de1c7png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' }
        ],
        foods4: [
          { id:'0000026', name: '经典巨无霸', sell:'20', num:0, description: '份－主要原料：面包、牛肉、生菜、洋葱、腌黄瓜、芝士、风味沙拉酱', evaluate: "100%", price: '￥23', imgSrc: 'https://fuss10.elemecdn.com/b/ea/403c55f25302e3a342e2ce68d1673png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000027', name: '经典巨无霸中薯套餐', sell:'13', num:0, description: '1个巨无霸 1份薯条(中) 1杯可口可乐(中)', evaluate: "100%", price: '35', imgSrc: 'https://fuss10.elemecdn.com/3/80/8b4d7ef8b26ce409c213af117289dpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000028', name: '经典巨无霸小玉套餐', sell:'13', num:0, description: '1个巨无霸 1个玉米杯(小) 1杯可口可乐(中)', evaluate: "100%", price: '35', imgSrc: 'https://fuss10.elemecdn.com/1/a3/da966866978cc3e2312815e3b3389png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000029', name: '经典巨无霸大薯套餐', sell:'7', num:0, description: '1个巨无霸 1份薯条(大) 1杯可口可乐(大)', evaluate: "100%", price: '39', imgSrc: 'https://fuss10.elemecdn.com/7/48/b294e056a1bb23a3a813d01eb36ecpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000030', name: '经典巨无霸大玉套餐', sell:'3', num:0, description: '1个巨无霸 1个玉米杯(大) 1杯可口可乐(大)', evaluate: "100%", price: '39', imgSrc: 'https://fuss10.elemecdn.com/6/de/31307c91adab7fb85ba1867579febpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000031', name: '保护我方水晶特饮', sell:'7', num:0, description: '份－保护我方水晶特饮1杯（主要原料：西柚糖浆，汽水，果冻）', evaluate: "100%", price: '13.5', imgSrc: 'https://fuss10.elemecdn.com/6/4a/55cee081342bc7d78e596ebc1bc41png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000032', name: '红蓝霸霸力量条', sell:'3', num:0, description: '份－蓝莓山药双节派 草莓双节派（主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '11', imgSrc: 'https://fuss10.elemecdn.com/f/cf/cb0f9f8e22b5258e0468700c459c5jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000033', name: '红蓝霸霸力量条2份', sell:'220', num:0, description: '蓝莓山药双节派2份 草莓双节派2份（主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '17', imgSrc: 'https://fuss10.elemecdn.com/c/2b/7c7aa9cb1cff3d609f61d6d396846jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000034', name: '王者小食盒', sell:'22', num:0, description: '例－大鸡排1份 麦辣鸡翅1对 麦乐鸡4块', evaluate: "100%", price: '30', imgSrc: 'https://fuss10.elemecdn.com/2/81/9d0996e64c47faff68661269c8dc8jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000035', name: '团战鸡盒(含那么大鸡排)', sell:'13', num:0, description: '麦乐鸡7块 香骨鸡腿3个 麦辣鸡翅6块 中可乐2杯', evaluate: "100%", price: '92', imgSrc: 'https://fuss10.elemecdn.com/a/2c/87bf68dba4b0636dd16d6e073989cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000036', name: '团战鸡盒(含麦乐鸡)', sell:'7', num:0, description: '麦乐鸡7块 香骨鸡腿3个 麦辣鸡翅6块 中可乐2杯', evaluate: "100%", price: '92', imgSrc: 'https://fuss10.elemecdn.com/a/2c/87bf68dba4b0636dd16d6e073989cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000037', name: '5人欢享盛宴餐', sell:'10', num:0, description: '', evaluate: "100%", price: '199', imgSrc: 'https://fuss10.elemecdn.com/a/61/aadcfab73a4d9c70e8076f96de1c7png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' }
        ],
        foods5: [
          { id:'0000038', name: '经典巨无霸', sell:'20', num:0, description: '份－主要原料：面包、牛肉、生菜、洋葱、腌黄瓜、芝士、风味沙拉酱', evaluate: "100%", price: '￥23', imgSrc: 'https://fuss10.elemecdn.com/b/ea/403c55f25302e3a342e2ce68d1673png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000039', name: '经典巨无霸中薯套餐', sell:'13', num:0, description: '1个巨无霸 1份薯条(中) 1杯可口可乐(中)', evaluate: "100%", price: '35', imgSrc: 'https://fuss10.elemecdn.com/3/80/8b4d7ef8b26ce409c213af117289dpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000040', name: '经典巨无霸小玉套餐', sell:'13', num:0, description: '1个巨无霸 1个玉米杯(小) 1杯可口可乐(中)', evaluate: "100%", price: '35', imgSrc: 'https://fuss10.elemecdn.com/1/a3/da966866978cc3e2312815e3b3389png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000041', name: '经典巨无霸大薯套餐', sell:'7', num:0, description: '1个巨无霸 1份薯条(大) 1杯可口可乐(大)', evaluate: "100%", price: '39', imgSrc: 'https://fuss10.elemecdn.com/7/48/b294e056a1bb23a3a813d01eb36ecpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000042', name: '经典巨无霸大玉套餐', sell:'3', num:0, description: '1个巨无霸 1个玉米杯(大) 1杯可口可乐(大)', evaluate: "100%", price: '39', imgSrc: 'https://fuss10.elemecdn.com/6/de/31307c91adab7fb85ba1867579febpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000043', name: '保护我方水晶特饮', sell:'7', num:0, description: '份－保护我方水晶特饮1杯（主要原料：西柚糖浆，汽水，果冻）', evaluate: "100%", price: '13.5', imgSrc: 'https://fuss10.elemecdn.com/6/4a/55cee081342bc7d78e596ebc1bc41png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000044', name: '红蓝霸霸力量条', sell:'3', num:0, description: '份－蓝莓山药双节派 草莓双节派（主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '11', imgSrc: 'https://fuss10.elemecdn.com/f/cf/cb0f9f8e22b5258e0468700c459c5jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000045', name: '红蓝霸霸力量条2份', sell:'220', num:0, description: '蓝莓山药双节派2份 草莓双节派2份（主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '17', imgSrc: 'https://fuss10.elemecdn.com/c/2b/7c7aa9cb1cff3d609f61d6d396846jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000046', name: '王者小食盒', sell:'22', num:0, description: '例－大鸡排1份 麦辣鸡翅1对 麦乐鸡4块', evaluate: "100%", price: '30', imgSrc: 'https://fuss10.elemecdn.com/2/81/9d0996e64c47faff68661269c8dc8jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000047', name: '团战鸡盒(含那么大鸡排)', sell:'13', num:0, description: '麦乐鸡7块 香骨鸡腿3个 麦辣鸡翅6块 中可乐2杯', evaluate: "100%", price: '92', imgSrc: 'https://fuss10.elemecdn.com/a/2c/87bf68dba4b0636dd16d6e073989cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000048', name: '团战鸡盒(含麦乐鸡)', sell:'7', num:0, description: '麦乐鸡7块 香骨鸡腿3个 麦辣鸡翅6块 中可乐2杯', evaluate: "100%", price: '92', imgSrc: 'https://fuss10.elemecdn.com/a/2c/87bf68dba4b0636dd16d6e073989cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000049', name: '5人欢享盛宴餐', sell:'10', num:0, description: '', evaluate: "100%", price: '199', imgSrc: 'https://fuss10.elemecdn.com/a/61/aadcfab73a4d9c70e8076f96de1c7png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' }
        ],
        foods6: [
          { id:'0000050', name: '经典巨无霸', sell:'20', num:0, description: '份－主要原料：面包、牛肉、生菜、洋葱、腌黄瓜、芝士、风味沙拉酱', evaluate: "100%", price: '￥23', imgSrc: 'https://fuss10.elemecdn.com/b/ea/403c55f25302e3a342e2ce68d1673png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000051', name: '经典巨无霸中薯套餐', sell:'13', num:0, description: '1个巨无霸 1份薯条(中) 1杯可口可乐(中)', evaluate: "100%", price: '35', imgSrc: 'https://fuss10.elemecdn.com/3/80/8b4d7ef8b26ce409c213af117289dpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000052', name: '经典巨无霸小玉套餐', sell:'13', num:0, description: '1个巨无霸 1个玉米杯(小) 1杯可口可乐(中)', evaluate: "100%", price: '35', imgSrc: 'https://fuss10.elemecdn.com/1/a3/da966866978cc3e2312815e3b3389png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000053', name: '经典巨无霸大薯套餐', sell:'7', num:0, description: '1个巨无霸 1份薯条(大) 1杯可口可乐(大)', evaluate: "100%", price: '39', imgSrc: 'https://fuss10.elemecdn.com/7/48/b294e056a1bb23a3a813d01eb36ecpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000054', name: '经典巨无霸大玉套餐', sell:'3', num:0, description: '1个巨无霸 1个玉米杯(大) 1杯可口可乐(大)', evaluate: "100%", price: '39', imgSrc: 'https://fuss10.elemecdn.com/6/de/31307c91adab7fb85ba1867579febpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000055', name: '保护我方水晶特饮', sell:'7', num:0, description: '份－保护我方水晶特饮1杯（主要原料：西柚糖浆，汽水，果冻）', evaluate: "100%", price: '13.5', imgSrc: 'https://fuss10.elemecdn.com/6/4a/55cee081342bc7d78e596ebc1bc41png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000056', name: '红蓝霸霸力量条', sell:'3', num:0, description: '份－蓝莓山药双节派 草莓双节派（主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '11', imgSrc: 'https://fuss10.elemecdn.com/f/cf/cb0f9f8e22b5258e0468700c459c5jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000057', name: '红蓝霸霸力量条2份', sell:'220', num:0, description: '蓝莓山药双节派2份 草莓双节派2份（主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '17', imgSrc: 'https://fuss10.elemecdn.com/c/2b/7c7aa9cb1cff3d609f61d6d396846jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000058', name: '王者小食盒', sell:'22', num:0, description: '例－大鸡排1份 麦辣鸡翅1对 麦乐鸡4块', evaluate: "100%", price: '30', imgSrc: 'https://fuss10.elemecdn.com/2/81/9d0996e64c47faff68661269c8dc8jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000059', name: '团战鸡盒(含那么大鸡排)', sell:'13', num:0, description: '麦乐鸡7块 香骨鸡腿3个 麦辣鸡翅6块 中可乐2杯', evaluate: "100%", price: '92', imgSrc: 'https://fuss10.elemecdn.com/a/2c/87bf68dba4b0636dd16d6e073989cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000060', name: '团战鸡盒(含麦乐鸡)', sell:'7', num:0, description: '麦乐鸡7块 香骨鸡腿3个 麦辣鸡翅6块 中可乐2杯', evaluate: "100%", price: '92', imgSrc: 'https://fuss10.elemecdn.com/a/2c/87bf68dba4b0636dd16d6e073989cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000061', name: '5人欢享盛宴餐', sell:'10', num:0, description: '', evaluate: "100%", price: '199', imgSrc: 'https://fuss10.elemecdn.com/a/61/aadcfab73a4d9c70e8076f96de1c7png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' }
        ],
        foods7: [
          { id:'0000062', name: '经典巨无霸', sell:'20', num:0, description: '份－主要原料：面包、牛肉、生菜、洋葱、腌黄瓜、芝士、风味沙拉酱', evaluate: "100%", price: '￥23', imgSrc: 'https://fuss10.elemecdn.com/b/ea/403c55f25302e3a342e2ce68d1673png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000063', name: '经典巨无霸中薯套餐', sell:'13', num:0, description: '1个巨无霸 1份薯条(中) 1杯可口可乐(中)', evaluate: "100%", price: '35', imgSrc: 'https://fuss10.elemecdn.com/3/80/8b4d7ef8b26ce409c213af117289dpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000064', name: '经典巨无霸小玉套餐', sell:'13', num:0, description: '1个巨无霸 1个玉米杯(小) 1杯可口可乐(中)', evaluate: "100%", price: '35', imgSrc: 'https://fuss10.elemecdn.com/1/a3/da966866978cc3e2312815e3b3389png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000065', name: '经典巨无霸大薯套餐', sell:'7', num:0, description: '1个巨无霸 1份薯条(大) 1杯可口可乐(大)', evaluate: "100%", price: '39', imgSrc: 'https://fuss10.elemecdn.com/7/48/b294e056a1bb23a3a813d01eb36ecpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000066', name: '经典巨无霸大玉套餐', sell:'3', num:0, description: '1个巨无霸 1个玉米杯(大) 1杯可口可乐(大)', evaluate: "100%", price: '39', imgSrc: 'https://fuss10.elemecdn.com/6/de/31307c91adab7fb85ba1867579febpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000067', name: '保护我方水晶特饮', sell:'7', num:0, description: '份－保护我方水晶特饮1杯（主要原料：西柚糖浆，汽水，果冻）', evaluate: "100%", price: '13.5', imgSrc: 'https://fuss10.elemecdn.com/6/4a/55cee081342bc7d78e596ebc1bc41png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000068', name: '红蓝霸霸力量条', sell:'3', num:0, description: '份－蓝莓山药双节派 草莓双节派（主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '11', imgSrc: 'https://fuss10.elemecdn.com/f/cf/cb0f9f8e22b5258e0468700c459c5jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000069', name: '红蓝霸霸力量条2份', sell:'220', num:0, description: '蓝莓山药双节派2份 草莓双节派2份（主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '17', imgSrc: 'https://fuss10.elemecdn.com/c/2b/7c7aa9cb1cff3d609f61d6d396846jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000070', name: '王者小食盒', sell:'22', num:0, description: '例－大鸡排1份 麦辣鸡翅1对 麦乐鸡4块', evaluate: "100%", price: '30', imgSrc: 'https://fuss10.elemecdn.com/2/81/9d0996e64c47faff68661269c8dc8jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000071', name: '团战鸡盒(含那么大鸡排)', sell:'13', num:0, description: '麦乐鸡7块 香骨鸡腿3个 麦辣鸡翅6块 中可乐2杯', evaluate: "100%", price: '92', imgSrc: 'https://fuss10.elemecdn.com/a/2c/87bf68dba4b0636dd16d6e073989cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000072', name: '团战鸡盒(含麦乐鸡)', sell:'7', num:0, description: '麦乐鸡7块 香骨鸡腿3个 麦辣鸡翅6块 中可乐2杯', evaluate: "100%", price: '92', imgSrc: 'https://fuss10.elemecdn.com/a/2c/87bf68dba4b0636dd16d6e073989cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000073', name: '5人欢享盛宴餐', sell:'10', num:0, description: '', evaluate: "100%", price: '199', imgSrc: 'https://fuss10.elemecdn.com/a/61/aadcfab73a4d9c70e8076f96de1c7png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' }
        ],
        foods8: [
          { id:'0000074', name: '经典巨无霸', sell:'20', num:0, description: '份－主要原料：面包、牛肉、生菜、洋葱、腌黄瓜、芝士、风味沙拉酱', evaluate: "100%", price: '￥23', imgSrc: 'https://fuss10.elemecdn.com/b/ea/403c55f25302e3a342e2ce68d1673png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000075', name: '经典巨无霸中薯套餐', sell:'13', num:0, description: '1个巨无霸 1份薯条(中) 1杯可口可乐(中)', evaluate: "100%", price: '35', imgSrc: 'https://fuss10.elemecdn.com/3/80/8b4d7ef8b26ce409c213af117289dpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000076', name: '经典巨无霸小玉套餐', sell:'13', num:0, description: '1个巨无霸 1个玉米杯(小) 1杯可口可乐(中)', evaluate: "100%", price: '35', imgSrc: 'https://fuss10.elemecdn.com/1/a3/da966866978cc3e2312815e3b3389png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000077', name: '经典巨无霸大薯套餐', sell:'7', num:0, description: '1个巨无霸 1份薯条(大) 1杯可口可乐(大)', evaluate: "100%", price: '39', imgSrc: 'https://fuss10.elemecdn.com/7/48/b294e056a1bb23a3a813d01eb36ecpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000078', name: '经典巨无霸大玉套餐', sell:'3', num:0, description: '1个巨无霸 1个玉米杯(大) 1杯可口可乐(大)', evaluate: "100%", price: '39', imgSrc: 'https://fuss10.elemecdn.com/6/de/31307c91adab7fb85ba1867579febpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000079', name: '保护我方水晶特饮', sell:'7', num:0, description: '份－保护我方水晶特饮1杯（主要原料：西柚糖浆，汽水，果冻）', evaluate: "100%", price: '13.5', imgSrc: 'https://fuss10.elemecdn.com/6/4a/55cee081342bc7d78e596ebc1bc41png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000080', name: '红蓝霸霸力量条', sell:'3', num:0, description: '份－蓝莓山药双节派 草莓双节派（主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '11', imgSrc: 'https://fuss10.elemecdn.com/f/cf/cb0f9f8e22b5258e0468700c459c5jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000081', name: '红蓝霸霸力量条2份', sell:'220', num:0, description: '蓝莓山药双节派2份 草莓双节派2份（主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '17', imgSrc: 'https://fuss10.elemecdn.com/c/2b/7c7aa9cb1cff3d609f61d6d396846jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000082', name: '王者小食盒', sell:'22', num:0, description: '例－大鸡排1份 麦辣鸡翅1对 麦乐鸡4块', evaluate: "100%", price: '30', imgSrc: 'https://fuss10.elemecdn.com/2/81/9d0996e64c47faff68661269c8dc8jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000083', name: '团战鸡盒(含那么大鸡排)', sell:'13', num:0, description: '麦乐鸡7块 香骨鸡腿3个 麦辣鸡翅6块 中可乐2杯', evaluate: "100%", price: '92', imgSrc: 'https://fuss10.elemecdn.com/a/2c/87bf68dba4b0636dd16d6e073989cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000084', name: '团战鸡盒(含麦乐鸡)', sell:'7', num:0, description: '麦乐鸡7块 香骨鸡腿3个 麦辣鸡翅6块 中可乐2杯', evaluate: "100%", price: '92', imgSrc: 'https://fuss10.elemecdn.com/a/2c/87bf68dba4b0636dd16d6e073989cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000085', name: '5人欢享盛宴餐', sell:'10', num:0, description: '', evaluate: "100%", price: '199', imgSrc: 'https://fuss10.elemecdn.com/a/61/aadcfab73a4d9c70e8076f96de1c7png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' }
        ],
        foods9: [
          { id:'0000086', name: '经典巨无霸', sell:'20', num:0, description: '份－主要原料：面包、牛肉、生菜、洋葱、腌黄瓜、芝士、风味沙拉酱', evaluate: "100%", price: '￥23', imgSrc: 'https://fuss10.elemecdn.com/b/ea/403c55f25302e3a342e2ce68d1673png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000087', name: '经典巨无霸中薯套餐', sell:'13', num:0, description: '1个巨无霸 1份薯条(中) 1杯可口可乐(中)', evaluate: "100%", price: '35', imgSrc: 'https://fuss10.elemecdn.com/3/80/8b4d7ef8b26ce409c213af117289dpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000088', name: '经典巨无霸小玉套餐', sell:'13', num:0, description: '1个巨无霸 1个玉米杯(小) 1杯可口可乐(中)', evaluate: "100%", price: '35', imgSrc: 'https://fuss10.elemecdn.com/1/a3/da966866978cc3e2312815e3b3389png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000089', name: '经典巨无霸大薯套餐', sell:'7', num:0, description: '1个巨无霸 1份薯条(大) 1杯可口可乐(大)', evaluate: "100%", price: '39', imgSrc: 'https://fuss10.elemecdn.com/7/48/b294e056a1bb23a3a813d01eb36ecpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000090', name: '经典巨无霸大玉套餐', sell:'3', num:0, description: '1个巨无霸 1个玉米杯(大) 1杯可口可乐(大)', evaluate: "100%", price: '39', imgSrc: 'https://fuss10.elemecdn.com/6/de/31307c91adab7fb85ba1867579febpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000091', name: '保护我方水晶特饮', sell:'7', num:0, description: '份－保护我方水晶特饮1杯（主要原料：西柚糖浆，汽水，果冻）', evaluate: "100%", price: '13.5', imgSrc: 'https://fuss10.elemecdn.com/6/4a/55cee081342bc7d78e596ebc1bc41png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000092', name: '红蓝霸霸力量条', sell:'3', num:0, description: '份－蓝莓山药双节派 草莓双节派（主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '11', imgSrc: 'https://fuss10.elemecdn.com/f/cf/cb0f9f8e22b5258e0468700c459c5jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000093', name: '红蓝霸霸力量条2份', sell:'220', num:0, description: '蓝莓山药双节派2份 草莓双节派2份（主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '17', imgSrc: 'https://fuss10.elemecdn.com/c/2b/7c7aa9cb1cff3d609f61d6d396846jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000094', name: '王者小食盒', sell:'22', num:0, description: '例－大鸡排1份 麦辣鸡翅1对 麦乐鸡4块', evaluate: "100%", price: '30', imgSrc: 'https://fuss10.elemecdn.com/2/81/9d0996e64c47faff68661269c8dc8jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000095', name: '团战鸡盒(含那么大鸡排)', sell:'13', num:0, description: '麦乐鸡7块 香骨鸡腿3个 麦辣鸡翅6块 中可乐2杯', evaluate: "100%", price: '92', imgSrc: 'https://fuss10.elemecdn.com/a/2c/87bf68dba4b0636dd16d6e073989cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000096', name: '团战鸡盒(含麦乐鸡)', sell:'7', num:0, description: '麦乐鸡7块 香骨鸡腿3个 麦辣鸡翅6块 中可乐2杯', evaluate: "100%", price: '92', imgSrc: 'https://fuss10.elemecdn.com/a/2c/87bf68dba4b0636dd16d6e073989cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000097', name: '5人欢享盛宴餐', sell:'10', num:0, description: '', evaluate: "100%", price: '199', imgSrc: 'https://fuss10.elemecdn.com/a/61/aadcfab73a4d9c70e8076f96de1c7png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' }
        ],
        foods10: [
          { id:'0000098', name: '经典巨无霸', sell:'20', num:0, description: '份－主要原料：面包、牛肉、生菜、洋葱、腌黄瓜、芝士、风味沙拉酱', evaluate: "100%", price: '￥23', imgSrc: 'https://fuss10.elemecdn.com/b/ea/403c55f25302e3a342e2ce68d1673png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000099', name: '经典巨无霸中薯套餐', sell:'13', num:0, description: '1个巨无霸 1份薯条(中) 1杯可口可乐(中)', evaluate: "100%", price: '35', imgSrc: 'https://fuss10.elemecdn.com/3/80/8b4d7ef8b26ce409c213af117289dpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000100', name: '经典巨无霸小玉套餐', sell:'13', num:0, description: '1个巨无霸 1个玉米杯(小) 1杯可口可乐(中)', evaluate: "100%", price: '35', imgSrc: 'https://fuss10.elemecdn.com/1/a3/da966866978cc3e2312815e3b3389png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000101', name: '经典巨无霸大薯套餐', sell:'7', num:0, description: '1个巨无霸 1份薯条(大) 1杯可口可乐(大)', evaluate: "100%", price: '39', imgSrc: 'https://fuss10.elemecdn.com/7/48/b294e056a1bb23a3a813d01eb36ecpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000102', name: '经典巨无霸大玉套餐', sell:'3', num:0, description: '1个巨无霸 1个玉米杯(大) 1杯可口可乐(大)', evaluate: "100%", price: '39', imgSrc: 'https://fuss10.elemecdn.com/6/de/31307c91adab7fb85ba1867579febpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000103', name: '保护我方水晶特饮', sell:'7', num:0, description: '份－保护我方水晶特饮1杯（主要原料：西柚糖浆，汽水，果冻）', evaluate: "100%", price: '13.5', imgSrc: 'https://fuss10.elemecdn.com/6/4a/55cee081342bc7d78e596ebc1bc41png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000104', name: '红蓝霸霸力量条', sell:'3', num:0, description: '份－蓝莓山药双节派 草莓双节派（主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '11', imgSrc: 'https://fuss10.elemecdn.com/f/cf/cb0f9f8e22b5258e0468700c459c5jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000105', name: '红蓝霸霸力量条2份', sell:'220', num:0, description: '蓝莓山药双节派2份 草莓双节派2份（主要原料：迷你山药蓝莓派，迷你草莓派）', evaluate: "100%", price: '17', imgSrc: 'https://fuss10.elemecdn.com/c/2b/7c7aa9cb1cff3d609f61d6d396846jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000106', name: '王者小食盒', sell:'22', num:0, description: '例－大鸡排1份 麦辣鸡翅1对 麦乐鸡4块', evaluate: "100%", price: '30', imgSrc: 'https://fuss10.elemecdn.com/2/81/9d0996e64c47faff68661269c8dc8jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000107', name: '团战鸡盒(含那么大鸡排)', sell:'13', num:0, description: '麦乐鸡7块 香骨鸡腿3个 麦辣鸡翅6块 中可乐2杯', evaluate: "100%", price: '92', imgSrc: 'https://fuss10.elemecdn.com/a/2c/87bf68dba4b0636dd16d6e073989cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000108', name: '团战鸡盒(含麦乐鸡)', sell:'7', num:0, description: '麦乐鸡7块 香骨鸡腿3个 麦辣鸡翅6块 中可乐2杯', evaluate: "100%", price: '92', imgSrc: 'https://fuss10.elemecdn.com/a/2c/87bf68dba4b0636dd16d6e073989cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' },
          { id:'0000109', name: '5人欢享盛宴餐', sell:'10', num:0, description: '', evaluate: "100%", price: '199', imgSrc: 'https://fuss10.elemecdn.com/a/61/aadcfab73a4d9c70e8076f96de1c7png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' }
        ]
			}
		},
		methods: {
		},
		watch:{
			activeIndex (val) {
			  if(this.scrollFlag){
          let target = this.$refs.itemsBox.children[val].offsetTop
          $( this.$refs.itemsBox ).animate({"scrollTop":target},500);
          this.closeFlag();
        }
			},
	     	scrollTop (val, oldVal) {
		        this.changeScrollTop(val);
		        let arr = Array.from(this.$refs.itemsBox.children) ;
		        arr.forEach((item, index) => {
		          if ( val >= item.offsetTop  && val < item.offsetTop + item.offsetHeight ){
		            this.changeActiveIndex( index );
		          }
		        })
		    }
		},
		components:{
			NavItem
		},
		mounted(){
	        this.$refs.itemsBox.addEventListener("scroll", () =>{
	        this.scrollTop = this.$refs.itemsBox.scrollTop;
	      })
	    }
	}
</script>
<style type="text/css" lang="scss" scoped>
	.nav-items-box{
		float:right;
		width:5.76rem;
		height:667px;
		overflow:auto;
		overflow-x: hidden;
		position:relative;
		.food-kind{
			width:100%;
			line-height:0.59rem;
			p{
				font-size:0.1rem;
				color:#ccc;
			}
			span{
				font-size:0.24rem;
				font-weight:bold;
				color:#333;
				display:inline-block;
				margin-right:0.1rem;
			}
		}

	}
</style>
