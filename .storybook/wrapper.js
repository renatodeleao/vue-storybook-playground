/**
 * @note this can be a .vue component, because preview get's
 * fuck up, as in, clicking on stories doesn't reload it.
 */
const withWrapper = () => ({
  data: () => ({
    pad: {
      display: 'flex',
      flexDirection: 'column'
    },
    padInner: {
      display: 'flex',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }),
  template: `
    <div :style="pad">
      <div :style="padInner">
        <story />
      </div>
    </div>
  `
})

export default withWrapper