import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'BlankLayout',
  components: {},
  setup() {
    return () => (
      <>
        {/* <RouterView /> */}
        <transition name="zoom-fade">
          <RouterView></RouterView>
        </transition>
      </>
    )
  },
})
