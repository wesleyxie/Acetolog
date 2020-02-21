class JQueryObject {
    
    nodes = []

    constructor(nodes) {
        this.nodes = nodes
    }

    click = callback => {
        console.log('length', this.nodes.length)
        for(let index = 0; index < this.nodes.length; index++) {
            this.nodes[index].addEventListener('click', callback)
        }
        return this
    }

    addClass = (className) => {
        for(let index = 0; index < this.nodes.length; index++) {
            this.nodes[index].classList.add(className)
        }
    }

    removeClass = className => {
        for(let index = 0; index < this.nodes.length; index++) {
            this.nodes[index].classList.remove(className)
        }
    }
}

window.$ = function(queryObject) {
    if (typeof queryObject === 'string') {
        const nodes = document.querySelectorAll(queryObject)
        const object = new JQueryObject(nodes)
        return object
    } else {
        const object = new JQueryObject([queryObject])
        return object
    }
}