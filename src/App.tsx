import { defineComponent } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    return () => (
      <>
        {/* <div id="nav">
          <RouterLink to="/">{() => 'Home'}</RouterLink> |{' '}
          <RouterLink to="/about">{() => 'About'}</RouterLink>
        </div> */}
        <RouterView />
      </>
    )
  },
})
