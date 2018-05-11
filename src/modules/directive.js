import Vue from 'vue'

let handlers = {
    'scroll-fix': (el,binding,context,e) => {
        //距离
        let distance = el.getAttribute('scroll-fixed-distanc');
        if (document.documentElement.scrollTop > distance) {
            //更改数据为true
            if(!context[binding.expression]){
                context[binding.expression] = true;
            }
            return false;
        }else{
            if(context[binding.expression]){
                context[binding.expression] = false;
            }
            return false;
        }
    }
}
//传入一个数据，在某一个时刻去改为true/false
Vue.directive('scroll-fix',{
    // bind (el,binding,vnode) {
    //     console.log(el,binding,vnode)
    //     console.log(vnode.context)
    // },
    bind (el,binding,{context}) {
        //在这里给window绑定scroll事件监听
        window.addEventListener('scroll', handlers[binding.name].bind(this,el,binding,context))
    },
    unbind (el,binding) {
        //当使用指令的元素或者组件被销毁的时候会执行
        window.removeEventListener('scroll',handlers[binding.name])
    }
})