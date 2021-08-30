export const state = () => ({
    display: false,
    product: {}
  })
  
  export const getters = {
    getModalDisplay: state => state.display,
    getModalProduct: state => state.product
  }

  export const mutations = {
    setModalDisplay: (state, display) => state.display = display,
    setModalProduct: (state, product) => state.product = product
  }

  export const actions = {}