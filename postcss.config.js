import cssnano from 'cssnano';

export default {
  plugins: [
    cssnano({
      preset: ['default', {
        discardEmpty: false,
        mergeMedia: true,
      }]
    })
  ]
}