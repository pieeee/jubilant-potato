const initialState = {
  sections: [
    {
      title: 'MONITOR',
      imgURL:
        'https://res.cloudinary.com/piedev/image/upload/v1616611848/jubilant-potato/monitor_rvnwr7.jpg',
    },
    {
      title: 'PROCESSORS',
      imgURL:
        'https://res.cloudinary.com/piedev/image/upload/v1616611853/jubilant-potato/cpu_vaeb7u.jpg',
    },
    {
      title: 'GRAPHICS CARD',
      imgURL:
        'https://res.cloudinary.com/piedev/image/upload/v1616611849/jubilant-potato/gpu_zpdc2y.jpg',
    },
    {
      title: 'POWER SUPPLY',
      imgURL:
        'https://res.cloudinary.com/piedev/image/upload/v1616611848/jubilant-potato/psu_uijoaf.jpg',
    },
    {
      title: 'STORAGE (SSD)',
      imgURL:
        'https://res.cloudinary.com/piedev/image/upload/v1616611852/jubilant-potato/ssd_nhjxtu.jpg',
    },
    {
      title: 'MEMORY',
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
