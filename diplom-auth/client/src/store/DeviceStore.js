import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: 'Холодильники'},
            {id:2, name: 'Смартфоны'}
        ]
        this._brands = [
            {id:1, name :'Samsung'},
            {id:2, name :'Apple'}
        ]

        this._device = [
            {id:1, name : 'Iphone 12', price: 100000, rating : 5, img : './img/iphone.jpg'},
            {id:2, name : 'Iphone 12', price: 100000, rating : 5, img : 'https://yandex.ru/images/search?pos=1&img_url=https%3A%2F%2Fdice.bg%2Fcontent%2Fpics%2F42107_artwizz-tpu-case-silikonov-tpu-kalyf-za-iphone-11-pro-max-cheren_114356823.jpg'},
            {id:3, name : 'Iphone 12', price: 100000, rating : 5, img : 'https://yandex.ru/images/search?pos=1&img_url=https%3A%2F%2Fdice.bg%2Fcontent%2Fpics%2F42107_artwizz-tpu-case-silikonov-tpu-kalyf-za-iphone-11-pro-max-cheren_114356823.jpg'},
            {id:4, name : 'Iphone 12', price: 100000, rating : 5, img : 'https://yandex.ru/images/search?pos=1&img_url=https%3A%2F%2Fdice.bg%2Fcontent%2Fpics%2F42107_artwizz-tpu-case-silikonov-tpu-kalyf-za-iphone-11-pro-max-cheren_114356823.jpg'},
            {id:5, name : 'Iphone 12', price: 100000, rating : 5, img : 'https://yandex.ru/images/search?pos=1&img_url=https%3A%2F%2Fdice.bg%2Fcontent%2Fpics%2F42107_artwizz-tpu-case-silikonov-tpu-kalyf-za-iphone-11-pro-max-cheren_114356823.jpg&text=iphone%20картинка&lr=47&rpt=simage&source=wiz'},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._user = brands
    }

    setDevices(devices) {
        this._user = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._device
    }
}