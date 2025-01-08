import {
  createElementVNode as a,
  watch as d,
  ref as i,
  toDisplayString as m,
  createElementBlock as p,
  openBlock as r,
  defineComponent as s,
} from 'vue'

const f = ['disabled', 'indeterminate', 'checked'],
  h = /* @__PURE__ */ s({
    __name: 'TriStateCheckbox',
    props: {
      label: {},
      modelValue: { type: [Boolean, null] },
      disabled: { type: Boolean },
      color: { default: '#2f4fef' },
    },
    emits: ['update:modelValue'],
    setup(t, { emit: n }) {
      const o = t,
        u = n,
        e = i(!1),
        c = () => {
          e.value === !1 ? (e.value = null) : e.value === null ? (e.value = !0) : (e.value = !1),
            u('update:modelValue', e.value)
        }
      return (
        d(
          () => o.modelValue,
          (l) => (e.value = l)
        ),
        (l, b) => (
          r(),
          p('label', null, [
            a(
              'input',
              {
                type: 'checkbox',
                disabled: l.disabled,
                indeterminate: e.value === null,
                checked: e.value === !0,
                onClick: c,
              },
              null,
              8,
              f
            ),
            a('span', null, m(l.label), 1),
          ])
        )
      )
    },
  })
export { h as TriStateCheckbox }
