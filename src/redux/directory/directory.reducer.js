const initialState = {
  sections: [
    {
      title: 'MONITOR',
      path: 'shop/monitor',
      imgURL:
        'https://res.cloudinary.com/piedev/image/upload/v1616611848/jubilant-potato/monitor_rvnwr7.jpg',
    },
    {
      title: 'PROCESSOR',
      path: 'shop/cpu',
      imgURL:
        'https://res.cloudinary.com/piedev/image/upload/v1616611853/jubilant-potato/cpu_vaeb7u.jpg',
    },
    {
      title: 'GRAPHICS CARD',
      path: 'shop/gpu',
      imgURL:
        'https://res.cloudinary.com/piedev/image/upload/v1616611849/jubilant-potato/gpu_zpdc2y.jpg',
    },
    {
      title: 'POWER SUPPLY',
      path: 'shop/psu',
      imgURL:
        'https://res.cloudinary.com/piedev/image/upload/v1616611848/jubilant-potato/psu_uijoaf.jpg',
    },
    {
      title: 'STORAGE',
      path: 'shop/ssd',
      imgURL:
        'https://res.cloudinary.com/piedev/image/upload/v1616611852/jubilant-potato/ssd_nhjxtu.jpg',
    },
    {
      title: 'MEMORY',
      path: 'shop/ram',
      imgURL:
        'https://res.cloudinary.com/piedev/image/upload/v1616612178/jubilant-potato/ram_i3kfom.jpg',
    },
  ],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}
