import type {
  DataTableHeader,
  DataOptions,
  CalendarTimestamp as VTimestamp,
} from 'vuetify'
import type VueComponent from 'vue'
import type { DefineComponent, VNode } from 'vue'
type eventHandler = Function
interface srcObject {
  src: string
  srcset?: string
  lazySrc: string
  aspect: number
}

export type InputValidationRule = (value: any) => string | boolean
// We define our own InputValidationRules because vuetify incorrectly does not include
// boolean as a valid array member in its definition of InputValidationRules.
export type InputValidationRules = (InputValidationRule | string | boolean)[]

declare module 'vue' {
  export interface GlobalComponents {
    VApp: DefineComponent<
      {
        /** Sets the DOM id on the component */ id?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VAppBar: DefineComponent<
      {
        /** Applies position: absolute to the component. */
        absolute?: boolean | null
        /** Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop */
        app?: boolean | null
        /** Aligns the component towards the bottom. */
        bottom?: boolean | null
        /** Designates that the application's `v-navigation-drawer` that is positioned on the left is below the app-bar. */
        clippedLeft?: boolean | null
        /** Designates that the application's `v-navigation-drawer` that is positioned on the right is below the app-bar. */
        clippedRight?: boolean | null
        /** Puts the toolbar into a collapsed state reducing its maximum width. */
        collapse?: boolean | null
        /** Puts the app-bar into a collapsed state when scrolling. */
        collapseOnScroll?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Reduces the height of the toolbar content to 48px (96px when using the **prominent** prop). */
        dense?: boolean | null
        /** Elevates the app-bar when scrolling. */
        elevateOnScroll?: boolean | null
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string | null
        /** Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop, and any of the other props that affect the height of the toolbar, e.g. **prominent**, **dense**, etc., **WITH THE EXCEPTION** of **height**. */
        extended?: boolean | null
        /** Specify an explicit height for the `extension` slot.  */
        extensionHeight?: number | string | null
        /** When using the **src** prop or `img` slot, will fade the image when scrolling. */
        fadeImgOnScroll?: boolean | null
        /** Applies **position: fixed** to the component. */
        fixed?: boolean | null
        /** Removes the toolbar's box-shadow. */
        flat?: boolean | null
        /** Applies **display: inline-flex** to the component. */
        floating?: boolean | null
        /** Designates a specific height for the toolbar. Overrides the heights imposed by other props, e.g. **prominent**, **dense**, **extended**, etc. */
        height?: number | string | null
        /** Hides the app-bar when scrolling. Will still show the `extension` slot. */
        hideOnScroll?: boolean | null
        /** Hides the app-bar when scrolling down and displays it when scrolling up. */
        invertedScroll?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** Removes elevation (box-shadow) and adds a *thin* border. */
        outlined?: boolean | null
        /** Increases the height of the toolbar content to 128px. */
        prominent?: boolean | null
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string | null
        /** Hides the app-bar when scrolling. Will **NOT** show the `extension` slot. */
        scrollOffScreen?: boolean | null
        /** Designates the element to target for scrolling events. Uses `window` by default. */
        scrollTarget?: string | null
        /** The amount of scroll distance down before **hide-on-scroll** activates. */
        scrollThreshold?: string | number | null
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean | null
        /** Reduce the height of the toolbar content to 56px (112px when using the **prominent** prop). */
        short?: boolean | null
        /** Shrinks a **prominent** toolbar to a **dense** or **short** (default) one when scrolling. */
        shrinkOnScroll?: boolean | null
        /** Image source. See `v-img` for details */
        src?: string | object | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Removes the component's **border-radius**. */
        tile?: boolean | null
        /** Controls whether the component is visible or hidden. */
        value?: boolean | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Slot positioned directly under the main content of the toolbar. Height of this slot can be set explicitly with the **extension-height** prop. If this slot has no content, the **extended** prop may be used instead. */
          extension: undefined
          /** Expects the [v-img](/components/images) component. Scoped **props** should be applied with `v-bind="props"`. */
          img: (args: {
            props: { height: string; src: string | srcObject }
          }) => VNode[]
        }>
      }
    >

    VAppBarNavIcon: DefineComponent<
      {},
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VAppBarTitle: DefineComponent<
      {},
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VAlert: DefineComponent<
      {
        /** Puts a border on the alert. Accepts **top** \| **right** \| **bottom** \| **left**. */
        border?: string | null
        /** Change the default icon used for **dismissible** alerts. */
        closeIcon?: string | null
        /** Text used for *aria-label* on **dismissible** alerts. Can also be customizing globally in [Internationalization](/customization/internationalization). */
        closeLabel?: string | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the defined **color** to the alert's border. */
        coloredBorder?: boolean | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Decreases component's height. */
        dense?: boolean | null
        /** Adds a close icon that can hide the alert. */
        dismissible?: boolean | null
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string | null
        /** Sets the height for the component. */
        height?: number | string | null
        /** Designates a specific icon. */
        icon?: boolean | string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
        /** Makes the background transparent and applies a thin border. */
        outlined?: boolean | null
        /** Displays a larger vertically centered icon to draw more attention. */
        prominent?: boolean | null
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string | null
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Applies the defined **color** to text and a low opacity background of the same. */
        text?: boolean | null
        /** Removes the component's border-radius. */
        tile?: boolean | null
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: string | null
        /** Specify a **success**, **info**, **warning** or **error** alert. Uses the contextual color and has a pre-defined icon. */
        type?: string | null
        /** Controls whether the component is visible or hidden. */
        value?: boolean | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** Slot for icon at end of alert. */
          append: undefined
          /** Slot for icon used in **dismissible** prop. */
          close: (args: { toggle: (...args: any[]) => any }) => VNode[]
          /** The default Vue slot. */
          default: undefined
          /** Slot for icon at beginning of alert. */
          prepend: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** The updated bound model */
        input: (arg0: boolean) => void
      }
    >

    VAutocomplete: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string | null
        /** Appends an icon to the outside the component's input, uses same syntax as `v-icon` */
        appendOuterIcon?: string | null
        /** Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. */
        attach?: any | null
        /** When searching, will always highlight the first option */
        autoSelectFirst?: boolean | null
        /** Enables autofocus */
        autofocus?: boolean | null
        /** Changes the background-color of the input */
        backgroundColor?: string | null
        /** Keeps a local _unique_ copy of all items that have been passed through the **items** prop. */
        cacheItems?: boolean | null
        /** Changes display of selections to chips */
        chips?: boolean | null
        /** Applied when using **clearable** and the input is dirty */
        clearIcon?: string | null
        /** Add input clear functionality, default icon is Material Design Icons **mdi-clear** */
        clearable?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. */
        counter?: boolean | number | string | null
        counterValue?: Function | null
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Adds a remove icon to selected chips */
        deletableChips?: boolean | null
        /** Reduces the input height */
        dense?: boolean | null
        /** Disables keyboard lookup */
        disableLookup?: boolean | null
        /** Disables the input */
        disabled?: boolean | null
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean | null
        /** Puts the input in a manual error state */
        error?: boolean | null
        /** The total number of errors that should display at once */
        errorCount?: number | string | null
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[] | null
        /** Applies the alternate filled input style */
        filled?: boolean | null
        /** The filtering algorithm used when searching. [example](https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/components/VAutocomplete/VAutocomplete.ts#L40) */
        filter?: Function | null
        /** Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props */
        flat?: boolean | null
        /** Designates input type as full-width */
        fullWidth?: boolean | null
        /** Sets the height of the input */
        height?: number | string | null
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string | null
        /** Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open. */
        hideNoData?: boolean | null
        /** Do not display in the select menu items that are already selected. Also removes checkboxes from the list when multiple */
        hideSelected?: boolean | null
        /** Hint text */
        hint?: string | null
        /** Sets the DOM id on the component */
        id?: string | null
        /** Sets color of selected items */
        itemColor?: string | null
        /** Set property of **items**'s disabled value */
        itemDisabled?: string | any[] | Function | null
        /** Set property of **items**'s text value */
        itemText?: string | any[] | Function | null
        /** Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479) */
        itemValue?: string | any[] | Function | null
        /** Can be an array of objects or array of strings. When using objects, will look for a text, value and disabled keys. This can be changed using the **item-text**, **item-value** and **item-disabled** props.  Objects that have a **header** or **divider** property are considered special cases and generate a list header or divider; these items are not selectable. */
        items?: any[] | null
        /** Sets input label */
        label?: string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Specifies the height of the loader */
        loaderHeight?: number | string | null
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string | null
        /** Pass props through to the `v-menu` component. Accepts either a string for boolean props `menu-props="auto, overflowY"`, or an object `:menu-props="{ auto: true, overflowY: true }"` */
        menuProps?: string | any[] | object | null
        /** Displays a list of messages or message if using a string */
        messages?: string | any[] | null
        /** Changes select to multiple. Accepts array for value */
        multiple?: boolean | null
        /** Display text when there is no data */
        noDataText?: string | null
        /** Do not apply filtering when searching. Useful when data is being filtered server side */
        noFilter?: boolean | null
        /** When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state */
        openOnClear?: boolean | null
        /** Applies the outlined style to the input */
        outlined?: boolean | null
        /** Forces hint to always be visible */
        persistentHint?: boolean | null
        /** Forces placeholder to always be visible */
        persistentPlaceholder?: boolean | null
        /** Sets the input's placeholder text */
        placeholder?: string | null
        /** Displays prefix text */
        prefix?: string | null
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string | null
        /** Prepends an icon inside the component's input, uses the same syntax as `v-icon` */
        prependInnerIcon?: string | null
        /** Puts input in readonly state */
        readonly?: boolean | null
        /** Changes the selection behavior to return the object directly rather than the value specified with **item-value** */
        returnObject?: boolean | null
        /** Reverses the input orientation */
        reverse?: boolean | null
        /** Adds a border radius to the input */
        rounded?: boolean | null
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: InputValidationRules | null
        /** Search value. Can be used with `.sync` modifier. */
        searchInput?: string | null
        /** Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` */
        shaped?: boolean | null
        /** Label does not move on focus/dirty */
        singleLine?: boolean | null
        /** Changes display of selections to chips with the **small** property */
        smallChips?: boolean | null
        /** Changes the style of the input */
        solo?: boolean | null
        /** Reduces element opacity until focused */
        soloInverted?: boolean | null
        /** Puts the input in a manual success state */
        success?: boolean | null
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[] | null
        /** Displays suffix text */
        suffix?: string | null
        /** Delays validation until blur event */
        validateOnBlur?: boolean | null
        /** The input's value */
        value?: any | null
        /** The comparison algorithm used for values. [More info](https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/util/helpers.ts) */
        valueComparator?: Function | null
      },
      {
        $scopedSlots: Readonly<{
          /** Adds an item inside the input and after input content */
          append: undefined
          /** Adds an item after menu content */
          'append-item': undefined
          /** Adds an item outside the input and after input content */
          'append-outer': undefined
          counter: (args: {
            props: {
              dark: boolean
              light: boolean
              max: string | number
              value: string
            }
          }) => VNode[]
          /** Define a custom item appearance */
          item: (args: {
            parent: VueComponent
            item: { [key: keyof any]: any }
            on: { [key: keyof any]: any }
            attrs: { [key: keyof any]: any }
          }) => VNode[]
          /** Replaces the default label */
          label: undefined
          message: (args: { key: number; message: string }) => VNode[]
          'no-data': undefined
          /** Adds an item outside the input and before input content */
          prepend: undefined
          /** Adds an item inside the input and before input content */
          'prepend-inner': undefined
          /** Adds an item before menu content */
          'prepend-item': undefined
          /** Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) */
          progress: undefined
          /** Define a custom selection appearance */
          selection: (args: {
            parent: VueComponent
            item: { [key: keyof any]: any }
            index: number
            select: (...args: any[]) => any
            selected: boolean
            disabled: boolean
          }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the input is blurred */
        blur: (arg0: Event) => void
        /** Emitted when the input is changed by user interaction */
        change: (arg0: any) => void
        /** Emitted when input is clicked */
        click: (arg0: MouseEvent) => void
        /** Emitted when appended icon is clicked */
        'click:append': (arg0: Event) => void
        /** Emitted when appended outer icon is clicked */
        'click:append-outer': (arg0: Event) => void
        /** Emitted when clearable icon clicked */
        'click:clear': (arg0: Event) => void
        /** Emitted when prepended icon is clicked */
        'click:prepend': (arg0: Event) => void
        /** Emitted when prepended inner icon is clicked */
        'click:prepend-inner': (arg0: Event) => void
        /** Emitted when component is focused */
        focus: (arg0: Event) => void
        /** The updated bound model */
        input: (arg0: any) => void
        /** Emitted when **any** key is pressed */
        keydown: (arg0: KeyboardEvent) => void
        /** Emitted when click is pressed */
        mousedown: (arg0: MouseEvent) => void
        /** Emitted when click is released */
        mouseup: (arg0: MouseEvent) => void
        /** The `error.sync` event */
        'update:error': (arg0: boolean) => void
        /** Emitted when menu item is selected using keyboard arrows */
        'update:list-index': (arg0: number) => void
        /** The `search-input.sync` event */
        'update:search-input': (arg0: string) => void
      }
    >

    VAvatar: DefineComponent<
      {
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Sets the height for the component. */
        height?: number | string | null
        /** Designates that the avatar is on the left side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons). */
        left?: boolean | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** Designates that the avatar is on the right side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons). */
        right?: boolean | null
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string | null
        /** Sets the height and width of the component. */
        size?: number | string | null
        /** Removes the component's **border-radius**. */
        tile?: boolean | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VBadge: DefineComponent<
      {
        /** Removes badge padding for the use of the `v-avatar` in the **badge** slot. */
        avatar?: boolean | null
        /** Applies a **2px** by default and **1.5px** border around the badge when using the **dot** property. */
        bordered?: boolean | null
        /** Aligns the component towards the bottom. */
        bottom?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Any content you want injected as text into the badge. */
        content?: any | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Reduce the size of the badge and hide its contents */
        dot?: boolean | null
        /** Designates a specific icon used in the badge. */
        icon?: string | null
        /** Moves the badge to be inline with the wrapping element. Supports the usage of the **left** prop. */
        inline?: boolean | null
        /** The **aria-label** used for the badge */
        label?: string | null
        /** Aligns the component towards the left. */
        left?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Offset the badge on the x-axis. */
        offsetX?: number | string | null
        /** Offset the badge on the y-axis. */
        offsetY?: number | string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
        /** Overlaps the slotted content on top of the component. */
        overlap?: boolean | null
        /** Removes the component's border-radius. */
        tile?: boolean | null
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: string | null
        /** Controls whether the component is visible or hidden. */
        value?: any | null
      },
      {
        $scopedSlots: Readonly<{
          /** The slot used for the badge's content. */
          badge: undefined
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VBanner: DefineComponent<
      {
        /** When used inside of `v-main`, will calculate top based upon application `v-toolbar` and `v-system-bar`. */
        app?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string | null
        /** Sets the height for the component. */
        height?: number | string | null
        /** Designates a specific icon. */
        icon?: string | null
        /** Designates a specific icon color. */
        iconColor?: string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** Sets the designated mobile breakpoint for the component. */
        mobileBreakpoint?: number | string | null
        /** Removes elevation (box-shadow) and adds a *thin* border. */
        outlined?: boolean | null
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string | null
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean | null
        /** Forces the banner onto a single line. */
        singleLine?: boolean | null
        /** Applies **position: sticky** to the component (**Evergreen browsers only**). You can find more information on the [MDN documentation for sticky position](https://developer.mozilla.org/en-US/docs/Web/CSS/position). */
        sticky?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Removes the component's **border-radius**. */
        tile?: boolean | null
        /** Controls whether the component is visible or hidden. */
        value?: boolean | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The slot used for the action's content such as a [v-btn](/components/buttons). The **dismiss** function in this slots scope, when invoked, will close the banner. */
          actions: (args: { dismiss: () => void }) => VNode[]
          /** The default Vue slot. */
          default: undefined
          /** The slot used for the icon's content. */
          icon: undefined
        }>
      }
    >

    VBottomNavigation: DefineComponent<
      {
        /** Applies **position: absolute** to the component. */
        absolute?: boolean | null
        /** The class applied to a [v-btn](/components/buttons) when activated. */
        activeClass?: string | null
        /** Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop */
        app?: boolean | null
        /** Changes the background-color for the component. */
        backgroundColor?: string | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Applies **position: fixed** to the component. */
        fixed?: boolean | null
        /** Force [v-btn](/components/buttons)s to take up all available space. */
        grow?: boolean | null
        /** Sets the height for the component. */
        height?: number | string | null
        /** Will transition the navigation off screen when scrolling up. */
        hideOnScroll?: boolean | null
        /** Uses an alternative horizontal styling for [v-btn](/components/buttons). */
        horizontal?: boolean | null
        /** Controls whether the component is visible or hidden. Supports the **.sync** modifier. */
        inputValue?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Forces a value to always be selected (if available). */
        mandatory?: boolean | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** Designates the element to target for scrolling events. Uses `window` by default. */
        scrollTarget?: string | null
        /** The amount of scroll distance down before **hide-on-scroll** activates. */
        scrollThreshold?: string | number | null
        /** Hides text of [v-btn](/components/buttons)s when they are not active. */
        shift?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Holds the value of the currently active [v-btn](/components/buttons). If the button has no value supplied, its index will be used instead.. */
        value?: any | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** The value of currently selected button. If no value is assigned, will be the current index of the button. */
        change: (arg0: any) => void
        /** The event used for `input-value.sync`. */
        'update:input-value': (arg0: string | number) => void
      }
    >

    VBottomSheet: DefineComponent<
      {
        /** Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node. */
        activator?: any | null
        /** Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. */
        attach?: any | null
        /** Milliseconds to wait before closing component. Only applies to hover and focus events. */
        closeDelay?: number | string | null
        /** Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component. */
        contentClass?: string | null
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Disables the ability to open the component. */
        disabled?: boolean | null
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean | null
        /** Changes layout for fullscreen display. */
        fullscreen?: boolean | null
        /** Hides the display of the overlay. */
        hideOverlay?: boolean | null
        /** Reduces the sheet content maximum width to 70%. */
        inset?: boolean | null
        /** Detaches the menu content inside of the component as opposed to the document. */
        internalActivator?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets the maximum width for the component. */
        maxWidth?: string | number | null
        /** Disables the bounce effect when clicking outside of a `v-dialog`'s content when using the **persistent** prop. */
        noClickAnimation?: boolean | null
        /** Milliseconds to wait before opening component. Only applies to hover and focus events. */
        openDelay?: number | string | null
        openOnClick?: boolean | null
        openOnFocus?: boolean | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
        /** Sets the overlay color. */
        overlayColor?: string | null
        /** Sets the overlay opacity. */
        overlayOpacity?: number | string | null
        /** Clicking outside of the element or pressing **esc** key will not deactivate it. */
        persistent?: boolean | null
        /** Tab focus will return to the first child of the dialog by default. Disable this when using external tools that require focus such as TinyMCE or vue-clipboard. */
        retainFocus?: boolean | null
        returnValue?: any | null
        /** When set to true, expects a `v-card` and a `v-card-text` component with a designated height. For more information, check out the [scrollable example](/components/dialogs#scrollable). */
        scrollable?: boolean | null
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: string | null
        /** Controls whether the component is visible or hidden. */
        value?: any | null
        /** Sets the width for the component. */
        width?: string | number | null
      },
      {
        $scopedSlots: Readonly<{
          /** When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation */
          activator: (args: {
            on: { [eventName: string]: eventHandler }
            value: boolean
          }) => VNode[]
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VBreadcrumbs: DefineComponent<
      {
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Specifies the dividing character between items. */
        divider?: string | null
        /** An array of objects for each breadcrumb. */
        items?: any[] | null
        /** Increase the font-size of the breadcrumb item text to 16px (14px default). */
        large?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** The slot used for dividers. */
          divider: undefined
          /** The slot used to override default `v-breadcrumbs-item` behavior when using the **items** prop. */
          item: (args: { item: any[] }) => VNode[]
        }>
      }
    >

    VBreadcrumbsItem: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string | null
        /** Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. */
        append?: boolean | null
        /** Removes the ability to click or target the component. */
        disabled?: boolean | null
        /** Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. */
        exact?: boolean | null
        /** Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. */
        exactActiveClass?: string | null
        /** Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. */
        exactPath?: boolean | null
        /** Designates the component as anchor and applies the **href** attribute. */
        href?: string | object | null
        /** Designates that the component is a link. This is automatic when using the **href** or **to** prop. */
        link?: boolean | null
        /** Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). */
        nuxt?: boolean | null
        /** Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. */
        replace?: boolean | null
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Designates the target attribute. This should only be applied when using the **href** prop. */
        target?: string | null
        /** Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. */
        to?: string | object | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VBreadcrumbsDivider: DefineComponent<
      {
        /** Specify a custom tag used on the root element. */
        tag?: string | null
      },
      {}
    >

    VBtn: DefineComponent<
      {
        /** Applies **position: absolute** to the component. */
        absolute?: boolean | null
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string | null
        /** Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. */
        append?: boolean | null
        /** Expands the button to 100% of available space. */
        block?: boolean | null
        /** Aligns the component towards the bottom. */
        bottom?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Removes the button box shadow. */
        depressed?: boolean | null
        /** Removes the ability to click or target the component. */
        disabled?: boolean | null
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string | null
        /** Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. */
        exact?: boolean | null
        /** Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. */
        exactActiveClass?: string | null
        /** Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. */
        exactPath?: boolean | null
        /** Designates the button as a floating-action-button. Button will become _round_. */
        fab?: boolean | null
        /** Applies **position: fixed** to the component. */
        fixed?: boolean | null
        /** Sets the height for the component. */
        height?: number | string | null
        /** Designates the component as anchor and applies the **href** attribute. */
        href?: string | object | null
        /** Designates the button as icon. Button will become _round_ and applies the **text** prop. */
        icon?: boolean | null
        /** Controls the button's active state. */
        inputValue?: any | null
        /** Makes the component large. */
        large?: boolean | null
        /** Aligns the component towards the left. This should be used with the **absolute** or **fixed** props. */
        left?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Designates that the component is a link. This is automatic when using the **href** or **to** prop. */
        link?: boolean | null
        /** Adds a loading icon animation. */
        loading?: boolean | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). */
        nuxt?: boolean | null
        /** Makes the background transparent and applies a thin border. */
        outlined?: boolean | null
        /** Removes the default background change applied when hovering over the button. */
        plain?: boolean | null
        /** Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. */
        replace?: boolean | null
        /** Don't blur on click. */
        retainFocusOnClick?: boolean | null
        /** Aligns the component towards the right. This should be used with the **absolute** or **fixed** props. */
        right?: boolean | null
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object | null
        /** Applies a large border radius on the button. */
        rounded?: boolean | null
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean | null
        /** Makes the component small. */
        small?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Designates the target attribute. This should only be applied when using the **href** prop. */
        target?: string | null
        /** Makes the background transparent. When using the **color** prop, the color will be applied to the button text instead of the background. */
        text?: boolean | null
        /** Removes the component's **border-radius**. */
        tile?: boolean | null
        /** Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. */
        to?: string | object | null
        /** Aligns the content towards the top. */
        top?: boolean | null
        /** Set the button's **type** attribute. */
        type?: string | null
        /** Controls whether the component is visible or hidden. */
        value?: any | null
        /** Sets the width for the component. */
        width?: number | string | null
        /** Makes the component extra large. */
        xLarge?: boolean | null
        /** Makes the component extra small. */
        xSmall?: boolean | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Custom loader. */
          loader: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Event that is emitted when the component is clicked */
        click: (arg0: Event) => void
      }
    >

    VBtnToggle: DefineComponent<
      {
        /** The **active-class** applied to children when they are activated. */
        activeClass?: string | null
        /** Changes the background-color for the component. */
        backgroundColor?: string | null
        /** Removes the group's border. */
        borderless?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Reduces the button size and padding. */
        dense?: boolean | null
        /** Generally used in [v-toolbar](/components/toolbars) and [v-app-bar](/components/app-bars). Removes background color, border and increases space between the buttons */
        group?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Forces a value to always be selected (if available). */
        mandatory?: boolean | null
        /** Sets a maximum number of selections that can be made. */
        max?: number | string | null
        /** Allow multiple selections. The **value** prop must be an _array_. */
        multiple?: boolean | null
        /** Round edge buttons */
        rounded?: boolean | null
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Removes the component's border-radius. */
        tile?: boolean | null
        /** The designated model value for the component. */
        value?: any | null
        /** Apply a custom value comparator function */
        valueComparator?: Function | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the input is changed by user interaction */
        change: (arg0: any[] | any) => void
      }
    >

    VCalendar: DefineComponent<
      {
        /** Specifies what categories to display in the `category` view. This controls the order of the categories as well. If the calendar uses events any categories specified in those events not specified in this value are dynamically rendered in the view unless `category-hide-dynamic` is true. */
        categories?: any[] | string | null
        /** The number of days to render in the `category` view. */
        categoryDays?: number | string | null
        /** The category to place events in that have invalid categories. A category is invalid when it is not a string. By default events without a category are not displayed until this value is specified. */
        categoryForInvalid?: string | null
        /** Sets whether categories specified in an event should be hidden if it's not defined in `categories`. */
        categoryHideDynamic?: boolean | null
        /** Set whether the `category` view should show all defined `categories` even if there are no events for a category. */
        categoryShowAll?: boolean | null
        /** If categories is a list of objects, you can use this to determine what property to print out as the category text on the calendar. You can provide a function to do some logic or just define the prop name. It's similar to item-text on v-select */
        categoryText?: string | Function | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Formats day of the month string that appears in a day to a specified locale */
        dayFormat?: Function | null
        /** The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. */
        end?: string | number | Date | null
        /** Set property of *event*'s category. Instead of a property a function can be given which takes an event and returns the category. */
        eventCategory?: string | Function | null
        /** A background color for all events or a function which accepts an event object passed to the calendar to return a color. */
        eventColor?: string | Function | null
        /** Set property of *event*'s end timestamp. */
        eventEnd?: string | null
        /** The height of an event in pixels in the `month` view and at the top of the `day` views. */
        eventHeight?: number | null
        /** Margin bottom for event */
        eventMarginBottom?: number | null
        /** Whether the more 'button' is displayed on a calendar with too many events in a given day. It will say something like '5 more' and when clicked generates a `click:more` event. */
        eventMore?: boolean | null
        /** The text to display in the more 'button' given the number of hidden events. */
        eventMoreText?: string | null
        /** Set property of *event*'s displayed name, or a function which accepts an event object passed to the calendar as the first argument and a flag signalling whether the name is for a timed event (true) or an event over a day. */
        eventName?: string | Function | null
        /** One of `stack`, `column`, or a custom render function */
        eventOverlapMode?: string | Function | null
        /** A value in minutes that's used to determine whether two timed events should be placed in column beside each other or should be treated as slightly overlapping events. */
        eventOverlapThreshold?: string | number | null
        /** Applies the `v-ripple` directive. */
        eventRipple?: boolean | object | null
        /** Set property of *event*'s start timestamp. */
        eventStart?: string | null
        /** A text color for all events or a function which accepts an event object passed to the calendar to return a color. */
        eventTextColor?: string | Function | null
        /** If Dates or milliseconds are used as the start or end timestamp of an event, this prop can be a string to a property on the event that is truthy if the event is a timed event or a function which takes the event and returns a truthy value if the event is a timed event. */
        eventTimed?: string | Function | null
        /** An array of event objects with a property for a start timestamp and optionally a name and end timestamp. If an end timestamp is not given, the value of start will be used. If no name is given, you must provide an implementation for the `event` slot. */
        events?: any[] | null
        /** The first interval to display in the `day` view. If `intervalMinutes` is set to 60 and this is set to 9 the first time in the view is 9am. */
        firstInterval?: number | string | null
        /** The first time to display in the `day` view. If specified, this overwrites any `firstInterval` value specified. This can be the number of minutes since midnight, a string in the format of `HH:mm`, or an object with number properties hour and minute. */
        firstTime?: number | string | object | null
        /** If the header at the top of the `day` view should be visible. */
        hideHeader?: boolean | null
        /** The number of intervals to display in the `day` view. */
        intervalCount?: number | string | null
        /** Formats time of day string that appears in the interval gutter of the `day` and `week` view to specified locale */
        intervalFormat?: Function | null
        /** The height of an interval in pixels in the `day` view. */
        intervalHeight?: number | string | null
        /** The number of minutes the intervals are in the `day` view. A common interval is 60 minutes so the intervals are an hour. */
        intervalMinutes?: number | string | null
        /** Returns CSS styling to apply to the interval. */
        intervalStyle?: Function | null
        /** The width of the interval gutter on the left side in the `day` view. */
        intervalWidth?: number | string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** The locale of the calendar. */
        locale?: string | null
        /** Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4. */
        localeFirstDayOfYear?: string | number | null
        /** The maximum number of days to display in the custom calendar if an `end` day is not set. */
        maxDays?: number | null
        /** The minimum number of weeks to display in the `month` or `week` view. */
        minWeeks?: any | null
        /** Formats month string that appears in a day to specified locale */
        monthFormat?: Function | null
        /** Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now. */
        now?: string | null
        /** If true, the intervals in the `day` view will be 9 AM as opposed to 09:00 AM */
        shortIntervals?: boolean | null
        /** Whether the short versions of a month should be used (Jan vs January). */
        shortMonths?: boolean | null
        /** Whether the short versions of a weekday should be used (Mon vs Monday). */
        shortWeekdays?: boolean | null
        /** Checks if a given day and time should be displayed in the interval gutter of the `day` view. */
        showIntervalLabel?: Function | null
        /** Whether the name of the month should be displayed on the first day of the month. */
        showMonthOnFirst?: boolean | null
        /** Whether week numbers should be displayed when using the `month` view. */
        showWeek?: boolean | null
        /** The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. */
        start?: string | number | Date | null
        /** A string which is one of `month`, `week`, `day`, `4day`, `custom-weekly`, `custom-daily`, and `category`. The custom types look at the `start` and `end` dates passed to the component as opposed to the `value`. */
        type?: string | null
        /** A date in the format of `YYYY-MM-DD` which determines what span of time for the calendar. */
        value?: string | number | Date | null
        /** Formats day of the week string that appears in the header to specified locale */
        weekdayFormat?: Function | null
        /** Specifies which days of the week to display. To display Monday through Friday only, a value of `[1, 2, 3, 4, 5]` can be used. To display a week starting on Monday a value of `[1, 2, 3, 4, 5, 6, 0]` can be used. */
        weekdays?: any[] | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The content placed in a category header for the `category` type. The category variable is null for events with invalid (non-string) categories. */
          category: (args: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
            category: string | null
          }) => VNode[]
          /** The content that is placed in a `week` or `month` view. The day & time object is passed through this slots scope. */
          day: (args: {
            outside: boolean
            index: number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
          }) => VNode[]
          /** The content that is placed in a `day` view in the scrollable interval container. The day & time object is passed through this slots scope. */
          'day-body': (args: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          }) => VNode[]
          /** The content that is placed in a `day` view in the top container. The day & time object is passed through this slots scope. */
          'day-header': (args: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          }) => VNode[]
          /** The content that is placed in the day of the month space in the `custom-weekly` or `month` view. The day & time object is passed through this slots scope. */
          'day-label': (args: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
          }) => VNode[]
          /** The content that is placed in the day of the month space in the `week`, `day`, `4day`, or `custom-daily` view. The day & time object is passed through this slots scope. */
          'day-label-header': (args: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
          }) => VNode[]
          /** The content that is placed in the month space in the `week` or `month` view. The day & time object is passed through this slots scope. */
          'day-month': (args: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
          }) => VNode[]
          /** The content placed in an event. This ignores the `event-name` prop. */
          event: (args: {
            event: any
            eventParsed: {
              input: any
              start: {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              }
              startIdentifier: number
              startTimestampIdentifier: number
              end: {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              }
              endIdentifier: number
              endTimestampIdentifier: number
              allDay: boolean
              index: number
              category: string
            }
            day: {
              outside: boolean
              index: number
              week: [
                {
                  date: string
                  time: string
                  year: number
                  month: number
                  day: number
                  hour: number
                  minute: number
                  weekday: number
                  hasDay: boolean
                  hasTime: boolean
                  past: boolean
                  present: boolean
                  future: boolean
                },
              ]
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            outside: boolean
            start: boolean
            end: boolean
            timed: boolean
            singleline: boolean
            overlapsNoon: boolean
            formatTime: (time: VTimestamp, ampm: boolean) => string
            timeSummary: () => string
            eventSummary: () => string
          }) => VNode[]
          /** The content that is placed in the interval space in the `day` view. The day & time object is passed through this slots scope. */
          interval: (args: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** The range of days displayed on the calendar changed. This is triggered on initialization. The event passed is an object with start and end date objects. */
        change: (arg0: {
          start: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
          }
          end: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
          }
        }) => void
        /** The click event on the day of the month link. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'click:date': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The click event on a day. The event passed is the day object. Native mouse event is passed as a second argument. */
        'click:day': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The click event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. */
        'click:day-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The click event on a specific event. The event passed is the day & time object. */
        'click:event': (arg0: {
          event: any
          eventParsed: {
            input: any
            start: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            startIdentifier: number
            startTimestampIdentifier: number
            end: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            endIdentifier: number
            endTimestampIdentifier: number
            allDay: boolean
            index: number
            category: string
          }
          day: {
            outside: boolean
            index: number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
          }
          outside: boolean
          start: boolean
          end: boolean
          timed: boolean
          singleline: boolean
          overlapsNoon: boolean
          formatTime: (time: VTimestamp, ampm: boolean) => string
          timeSummary: () => string
          eventSummary: () => string
          nativeEvent: MouseEvent | TouchEvent
        }) => void
        /** The click event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'click:interval': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The click event on the `X more` button on views with too many events in a day. Native mouse event is passed as a second argument. */
        'click:more': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The click event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'click:time': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The click event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'click:time-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The right-click event on the day of the month link. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'contextmenu:date': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The right-click event on a day. The event passed is the day object. Native mouse event is passed as a second argument. */
        'contextmenu:day': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The right-click event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. */
        'contextmenu:day-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The right-click event on an event. The event passed is the day & time object. */
        'contextmenu:event': (arg0: {
          event: any
          eventParsed: {
            input: any
            start: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            startIdentifier: number
            startTimestampIdentifier: number
            end: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            endIdentifier: number
            endTimestampIdentifier: number
            allDay: boolean
            index: number
            category: string
          }
          day: {
            outside: boolean
            index: number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
          }
          outside: boolean
          start: boolean
          end: boolean
          timed: boolean
          singleline: boolean
          overlapsNoon: boolean
          formatTime: (time: VTimestamp, ampm: boolean) => string
          timeSummary: () => string
          eventSummary: () => string
          nativeEvent: MouseEvent | TouchEvent
        }) => void
        /** The right-click event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'contextmenu:interval': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The right-click event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'contextmenu:time': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The right-click event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'contextmenu:time-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** An alias to the `click:date` event used to support v-model. */
        input: (arg0: {
          date: string
          time: string
          year: number
          month: number
          day: number
          hour: number
          minute: number
          weekday: number
          hasDay: boolean
          hasTime: boolean
          past: boolean
          present: boolean
          future: boolean
        }) => void
        /** The mousedown event on a day. The event passed is the day object. Native mouse event is passed as a second argument. */
        'mousedown:day': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mousedown event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. */
        'mousedown:day-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mousedown event on an event. The event passed is the day & time object. */
        'mousedown:event': (arg0: {
          event: any
          eventParsed: {
            input: any
            start: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            startIdentifier: number
            startTimestampIdentifier: number
            end: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            endIdentifier: number
            endTimestampIdentifier: number
            allDay: boolean
            index: number
            category: string
          }
          day: {
            outside: boolean
            index: number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
          }
          outside: boolean
          start: boolean
          end: boolean
          timed: boolean
          singleline: boolean
          overlapsNoon: boolean
          formatTime: (time: VTimestamp, ampm: boolean) => string
          timeSummary: () => string
          eventSummary: () => string
          nativeEvent: MouseEvent | TouchEvent
        }) => void
        /** The mousedown event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'mousedown:interval': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mousedown event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'mousedown:time': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mousedown event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'mousedown:time-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mouseenter event on a day. The event passed is the day object. Native mouse event is passed as a second argument. */
        'mouseenter:day': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mouseenter event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. */
        'mouseenter:day-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mouseenter event on an event. The event passed is the day & time object. */
        'mouseenter:event': (arg0: {
          event: any
          eventParsed: {
            input: any
            start: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            startIdentifier: number
            startTimestampIdentifier: number
            end: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            endIdentifier: number
            endTimestampIdentifier: number
            allDay: boolean
            index: number
            category: string
          }
          day: {
            outside: boolean
            index: number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
          }
          outside: boolean
          start: boolean
          end: boolean
          timed: boolean
          singleline: boolean
          overlapsNoon: boolean
          formatTime: (time: VTimestamp, ampm: boolean) => string
          timeSummary: () => string
          eventSummary: () => string
          nativeEvent: MouseEvent | TouchEvent
        }) => void
        /** The mouseenter event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'mouseenter:interval': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mouseenter event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'mouseenter:time': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mouseenter event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'mouseenter:time-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mouseleave event on a day. The event passed is the day object. Native mouse event is passed as a second argument. */
        'mouseleave:day': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mouseleave event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. */
        'mouseleave:day-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mouseleave event on an event. The event passed is the day & time object. */
        'mouseleave:event': (arg0: {
          event: any
          eventParsed: {
            input: any
            start: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            startIdentifier: number
            startTimestampIdentifier: number
            end: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            endIdentifier: number
            endTimestampIdentifier: number
            allDay: boolean
            index: number
            category: string
          }
          day: {
            outside: boolean
            index: number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
          }
          outside: boolean
          start: boolean
          end: boolean
          timed: boolean
          singleline: boolean
          overlapsNoon: boolean
          formatTime: (time: VTimestamp, ampm: boolean) => string
          timeSummary: () => string
          eventSummary: () => string
          nativeEvent: MouseEvent | TouchEvent
        }) => void
        /** The mouseleave event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'mouseleave:interval': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mouseleave event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'mouseleave:time': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mouseleave event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'mouseleave:time-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mousemove event on a day. The event passed is the day object. Native mouse event is passed as a second argument. */
        'mousemove:day': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mousemove event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. */
        'mousemove:day-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mousemove event on an event. The event passed is the day & time object. */
        'mousemove:event': (arg0: {
          event: any
          eventParsed: {
            input: any
            start: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            startIdentifier: number
            startTimestampIdentifier: number
            end: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            endIdentifier: number
            endTimestampIdentifier: number
            allDay: boolean
            index: number
            category: string
          }
          day: {
            outside: boolean
            index: number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
          }
          outside: boolean
          start: boolean
          end: boolean
          timed: boolean
          singleline: boolean
          overlapsNoon: boolean
          formatTime: (time: VTimestamp, ampm: boolean) => string
          timeSummary: () => string
          eventSummary: () => string
          nativeEvent: MouseEvent | TouchEvent
        }) => void
        /** The mousemove event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'mousemove:interval': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mousemove event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'mousemove:time': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mousemove event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'mousemove:time-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mouseup event on a day. The event passed is the day object. Native mouse event is passed as a second argument. */
        'mouseup:day': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mouseup event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. */
        'mouseup:day-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mouseup event on an event. The event passed is the day & time object. */
        'mouseup:event': (arg0: {
          event: any
          eventParsed: {
            input: any
            start: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            startIdentifier: number
            startTimestampIdentifier: number
            end: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            endIdentifier: number
            endTimestampIdentifier: number
            allDay: boolean
            index: number
            category: string
          }
          day: {
            outside: boolean
            index: number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
          }
          outside: boolean
          start: boolean
          end: boolean
          timed: boolean
          singleline: boolean
          overlapsNoon: boolean
          formatTime: (time: VTimestamp, ampm: boolean) => string
          timeSummary: () => string
          eventSummary: () => string
          nativeEvent: MouseEvent | TouchEvent
        }) => void
        /** The mouseup event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'mouseup:interval': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mouseup event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'mouseup:time': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** The mouseup event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'mouseup:time-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: MouseEvent,
        ) => void
        /** One of the functions `next`, `prev`, and `move` was called. The event passed is the day object calculated for the movement. */
        moved: (arg0: {
          date: string
          time: string
          year: number
          month: number
          day: number
          hour: number
          minute: number
          weekday: number
          hasDay: boolean
          hasTime: boolean
          past: boolean
          present: boolean
          future: boolean
        }) => void
        /** The touchend event on a day. The event passed is the day object. Native mouse event is passed as a second argument. */
        'touchend:day': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: TouchEvent,
        ) => void
        /** The touchend event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. */
        'touchend:day-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: TouchEvent,
        ) => void
        /** The touchend event on am view. The event passed is the day & time object. */
        'touchend:event': (arg0: {
          event: any
          eventParsed: {
            input: any
            start: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            startIdentifier: number
            startTimestampIdentifier: number
            end: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            endIdentifier: number
            endTimestampIdentifier: number
            allDay: boolean
            index: number
            category: string
          }
          day: {
            outside: boolean
            index: number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
          }
          outside: boolean
          start: boolean
          end: boolean
          timed: boolean
          singleline: boolean
          overlapsNoon: boolean
          formatTime: (time: VTimestamp, ampm: boolean) => string
          timeSummary: () => string
          eventSummary: () => string
          nativeEvent: MouseEvent | TouchEvent
        }) => void
        /** The touchend event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'touchend:interval': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: TouchEvent,
        ) => void
        /** The touchend event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'touchend:time': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: TouchEvent,
        ) => void
        /** The touchend event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'touchend:time-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: TouchEvent,
        ) => void
        /** The touchmove event on a day. The event passed is the day object. Native mouse event is passed as a second argument. */
        'touchmove:day': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: TouchEvent,
        ) => void
        /** The touchmove event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. */
        'touchmove:day-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: TouchEvent,
        ) => void
        /** The touchmove event on an `event` view. The event passed is the day & time object. */
        'touchmove:event': (arg0: {
          event: any
          eventParsed: {
            input: any
            start: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            startIdentifier: number
            startTimestampIdentifier: number
            end: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            endIdentifier: number
            endTimestampIdentifier: number
            allDay: boolean
            index: number
            category: string
          }
          day: {
            outside: boolean
            index: number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
          }
          outside: boolean
          start: boolean
          end: boolean
          timed: boolean
          singleline: boolean
          overlapsNoon: boolean
          formatTime: (time: VTimestamp, ampm: boolean) => string
          timeSummary: () => string
          eventSummary: () => string
          nativeEvent: MouseEvent | TouchEvent
        }) => void
        /** The touchmove event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'touchmove:interval': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: TouchEvent,
        ) => void
        /** The touchmove event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'touchmove:time': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: TouchEvent,
        ) => void
        /** The touchmove event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'touchmove:time-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: TouchEvent,
        ) => void
        /** The touchstart event on a day. The event passed is the day object. Native mouse event is passed as a second argument. */
        'touchstart:day': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: TouchEvent,
        ) => void
        /** The touchstart event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. */
        'touchstart:day-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: TouchEvent,
        ) => void
        /** The touchstart event on an event` view. The event passed is the day & time object. */
        'touchstart:event': (arg0: {
          event: any
          eventParsed: {
            input: any
            start: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            startIdentifier: number
            startTimestampIdentifier: number
            end: {
              date: string
              time: string
              year: number
              month: number
              day: number
              hour: number
              minute: number
              weekday: number
              hasDay: boolean
              hasTime: boolean
              past: boolean
              present: boolean
              future: boolean
            }
            endIdentifier: number
            endTimestampIdentifier: number
            allDay: boolean
            index: number
            category: string
          }
          day: {
            outside: boolean
            index: number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
          }
          outside: boolean
          start: boolean
          end: boolean
          timed: boolean
          singleline: boolean
          overlapsNoon: boolean
          formatTime: (time: VTimestamp, ampm: boolean) => string
          timeSummary: () => string
          eventSummary: () => string
          nativeEvent: MouseEvent | TouchEvent
        }) => void
        /** The touchstart event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'touchstart:interval': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: TouchEvent,
        ) => void
        /** The touchstart event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        'touchstart:time': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: TouchEvent,
        ) => void
        /** The touchstart event at a specific time in the `category` view. The event passed is the day & time object Native mouse event is passed as a second argument.. */
        'touchstart:time-category': (
          arg0: {
            date: string
            time: string
            year: number
            month: number
            day: number
            hour: number
            minute: number
            weekday: number
            hasDay: boolean
            hasTime: boolean
            past: boolean
            present: boolean
            future: boolean
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean,
            ) => number | false
            timeDelta: (
              time: string | number | { hour: number; minute: number },
            ) => number | false
            minutesToPixels: (minutes: number) => number
            week: [
              {
                date: string
                time: string
                year: number
                month: number
                day: number
                hour: number
                minute: number
                weekday: number
                hasDay: boolean
                hasTime: boolean
                past: boolean
                present: boolean
                future: boolean
              },
            ]
          },
          arg1: TouchEvent,
        ) => void
      }
    >

    VCalendarDaily: DefineComponent<
      {
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Formats day of the month string that appears in a day to a specified locale */
        dayFormat?: Function | null
        /** The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. */
        end?: string | number | Date | null
        /** The first interval to display in the `day` view. If `intervalMinutes` is set to 60 and this is set to 9 the first time in the view is 9am. */
        firstInterval?: number | string | null
        /** The first time to display in the `day` view. If specified, this overwrites any `firstInterval` value specified. This can be the number of minutes since midnight, a string in the format of `HH:mm`, or an object with number properties hour and minute. */
        firstTime?: number | string | object | null
        /** If the header at the top of the `day` view should be visible. */
        hideHeader?: boolean | null
        /** The number of intervals to display in the `day` view. */
        intervalCount?: number | string | null
        /** Formats time of day string that appears in the interval gutter of the `day` and `week` view to specified locale */
        intervalFormat?: Function | null
        /** The height of an interval in pixels in the `day` view. */
        intervalHeight?: number | string | null
        /** The number of minutes the intervals are in the `day` view. A common interval is 60 minutes so the intervals are an hour. */
        intervalMinutes?: number | string | null
        /** Returns CSS styling to apply to the interval. */
        intervalStyle?: Function | null
        /** The width of the interval gutter on the left side in the `day` view. */
        intervalWidth?: number | string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** The locale of the calendar. */
        locale?: string | null
        /** The maximum number of days to display in the custom calendar if an `end` day is not set. */
        maxDays?: number | null
        /** Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now. */
        now?: string | null
        /** If true, the intervals in the `day` view will be 9 AM as opposed to 09:00 AM */
        shortIntervals?: boolean | null
        /** Whether the short versions of a weekday should be used (Mon vs Monday). */
        shortWeekdays?: boolean | null
        /** Checks if a given day and time should be displayed in the interval gutter of the `day` view. */
        showIntervalLabel?: Function | null
        /** The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. */
        start?: string | number | Date | null
        /** Formats day of the week string that appears in the header to specified locale */
        weekdayFormat?: Function | null
        /** Specifies which days of the week to display. To display Monday through Friday only, a value of `[1, 2, 3, 4, 5]` can be used. To display a week starting on Monday a value of `[1, 2, 3, 4, 5, 6, 0]` can be used. */
        weekdays?: any[] | string | null
      },
      {}
    >

    VCalendarWeekly: DefineComponent<
      {
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Formats day of the month string that appears in a day to a specified locale */
        dayFormat?: Function | null
        /** The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. */
        end?: string | number | Date | null
        /** If the header at the top of the `day` view should be visible. */
        hideHeader?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** The locale of the calendar. */
        locale?: string | null
        /** Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4. */
        localeFirstDayOfYear?: string | number | null
        /** The minimum number of weeks to display in the `month` or `week` view. */
        minWeeks?: any | null
        /** Formats month string that appears in a day to specified locale */
        monthFormat?: Function | null
        /** Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now. */
        now?: string | null
        /** Whether the short versions of a month should be used (Jan vs January). */
        shortMonths?: boolean | null
        /** Whether the short versions of a weekday should be used (Mon vs Monday). */
        shortWeekdays?: boolean | null
        /** Whether the name of the month should be displayed on the first day of the month. */
        showMonthOnFirst?: boolean | null
        /** Whether week numbers should be displayed when using the `month` view. */
        showWeek?: boolean | null
        /** The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. */
        start?: string | number | Date | null
        /** Formats day of the week string that appears in the header to specified locale */
        weekdayFormat?: Function | null
        /** Specifies which days of the week to display. To display Monday through Friday only, a value of `[1, 2, 3, 4, 5]` can be used. To display a week starting on Monday a value of `[1, 2, 3, 4, 5, 6, 0]` can be used. */
        weekdays?: any[] | string | null
      },
      {}
    >

    VCalendarMonthly: DefineComponent<
      {
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Formats day of the month string that appears in a day to a specified locale */
        dayFormat?: Function | null
        /** The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. */
        end?: string | number | Date | null
        /** If the header at the top of the `day` view should be visible. */
        hideHeader?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** The locale of the calendar. */
        locale?: string | null
        /** Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4. */
        localeFirstDayOfYear?: string | number | null
        /** The minimum number of weeks to display in the `month` or `week` view. */
        minWeeks?: any | null
        /** Formats month string that appears in a day to specified locale */
        monthFormat?: Function | null
        /** Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now. */
        now?: string | null
        /** Whether the short versions of a month should be used (Jan vs January). */
        shortMonths?: boolean | null
        /** Whether the short versions of a weekday should be used (Mon vs Monday). */
        shortWeekdays?: boolean | null
        /** Whether the name of the month should be displayed on the first day of the month. */
        showMonthOnFirst?: boolean | null
        /** Whether week numbers should be displayed when using the `month` view. */
        showWeek?: boolean | null
        /** The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. */
        start?: string | number | Date | null
        /** Formats day of the week string that appears in the header to specified locale */
        weekdayFormat?: Function | null
        /** Specifies which days of the week to display. To display Monday through Friday only, a value of `[1, 2, 3, 4, 5]` can be used. To display a week starting on Monday a value of `[1, 2, 3, 4, 5, 6, 0]` can be used. */
        weekdays?: any[] | string | null
      },
      {}
    >

    VCard: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string | null
        /** Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. */
        append?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Removes the ability to click or target the component. */
        disabled?: boolean | null
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string | null
        /** Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. */
        exact?: boolean | null
        /** Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. */
        exactActiveClass?: string | null
        /** Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. */
        exactPath?: boolean | null
        /** Removes the card's elevation. */
        flat?: boolean | null
        /** Sets the height for the component. */
        height?: number | string | null
        /** Will apply an elevation of 4dp when hovered (default 2dp). You can find more information on the [elevation page](/styles/elevation). */
        hover?: boolean | null
        /** Designates the component as anchor and applies the **href** attribute. */
        href?: string | object | null
        /** Specifies an image background for the card. For more advanced implementations, it is recommended that you use the [v-img](/components/images) component. You can find a [v-img example here](/components/cards/#media-with-text). */
        img?: string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Designates that the component is a link. This is automatic when using the **href** or **to** prop. */
        link?: boolean | null
        /** Specifies the height of the loader */
        loaderHeight?: number | string | null
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). */
        nuxt?: boolean | null
        /** Removes elevation (box-shadow) and adds a *thin* border. */
        outlined?: boolean | null
        /** Specifies a higher default elevation (8dp). You can find more information on the [elevation page](/styles/elevation). */
        raised?: boolean | null
        /** Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. */
        replace?: boolean | null
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object | null
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string | null
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Designates the target attribute. This should only be applied when using the **href** prop. */
        target?: string | null
        /** Removes the component's **border-radius**. */
        tile?: boolean | null
        /** Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. */
        to?: string | object | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) */
          progress: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when component is clicked - Will trigger component to ripple when clicked unless the `.native` modifier is used */
        click: (arg0: void) => void
      }
    >

    VCardActions: DefineComponent<
      {
        /** Specify a custom tag used on the root element. */
        tag?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VCardSubtitle: DefineComponent<
      {
        /** Specify a custom tag used on the root element. */
        tag?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VCardText: DefineComponent<
      {
        /** Specify a custom tag used on the root element. */
        tag?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VCardTitle: DefineComponent<
      {
        /** Specify a custom tag used on the root element. */
        tag?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VCarousel: DefineComponent<
      {
        /** The **active-class** applied to children when they are activated. */
        activeClass?: string | null
        /** Determines whether carousel is continuous */
        continuous?: boolean | null
        /** Determines if the carousel should cycle through images. */
        cycle?: boolean | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Sets icon for carousel delimiter */
        delimiterIcon?: string | null
        /** Sets the height for the component */
        height?: number | string | null
        /** Hides the bottom delimiter background. */
        hideDelimiterBackground?: boolean | null
        /** Hides the carousel's bottom delimiters. */
        hideDelimiters?: boolean | null
        /** The duration between image cycles. Requires the **cycle** prop. */
        interval?: number | string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Forces a value to always be selected (if available). */
        mandatory?: boolean | null
        /** Sets a maximum number of selections that can be made. */
        max?: number | string | null
        /** Allow multiple selections. The **value** prop must be an _array_. */
        multiple?: boolean | null
        /** The displayed icon for forcing pagination to the next item. */
        nextIcon?: boolean | string | null
        /** The displayed icon for forcing pagination to the previous item. */
        prevIcon?: boolean | string | null
        /** Displays a carousel progress bar. Requires the **cycle** prop and **interval**. */
        progress?: boolean | null
        /** Applies specified color to progress bar. */
        progressColor?: string | null
        /** Reverse the normal transition direction. */
        reverse?: boolean | null
        /** Displays arrows for next/previous navigation. */
        showArrows?: boolean | null
        /** Displays navigation arrows only when the carousel is hovered over. */
        showArrowsOnHover?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Provide a custom **left** and **right** function when swiped left or right. */
        touch?: object | null
        /** Disable touch support. */
        touchless?: boolean | null
        /** The designated model value for the component. */
        value?: any | null
        /** Apply a custom value comparator function */
        valueComparator?: Function | null
        /** Uses a vertical transition when changing windows. */
        vertical?: boolean | null
        /** Displays carousel delimiters vertically. */
        verticalDelimiters?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Slot displaying the arrow switching to the next item */
          next: (args: {
            attrs: { 'aria-label': string }
            on: { click: eventHandler }
          }) => VNode[]
          /** Slot displaying the arrow switching to the previous item */
          prev: (args: {
            attrs: { 'aria-label': string }
            on: { click: eventHandler }
          }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the component value is changed by user interaction */
        change: (arg0: number) => void
      }
    >

    VCarouselItem: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string | null
        /** Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. */
        append?: boolean | null
        /** Removes the ability to click or target the component. */
        disabled?: boolean | null
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean | null
        /** Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. */
        exact?: boolean | null
        /** Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. */
        exactActiveClass?: string | null
        /** Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. */
        exactPath?: boolean | null
        /** Designates the component as anchor and applies the **href** attribute. */
        href?: string | object | null
        /** Designates that the component is a link. This is automatic when using the **href** or **to** prop. */
        link?: boolean | null
        /** Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). */
        nuxt?: boolean | null
        /** Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. */
        replace?: boolean | null
        /** Sets the reverse transition */
        reverseTransition?: boolean | string | null
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Designates the target attribute. This should only be applied when using the **href** prop. */
        target?: string | null
        /** Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. */
        to?: string | object | null
        /** The transition used when the component progressing through items. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: boolean | string | null
        /** The value used when the component is selected in a group. If not provided, the index will be used. */
        value?: any | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VCheckbox: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string | null
        /** Changes the background-color of the input */
        backgroundColor?: string | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Reduces the input height */
        dense?: boolean | null
        /** Disable the input */
        disabled?: boolean | null
        /** Puts the input in a manual error state */
        error?: boolean | null
        /** The total number of errors that should display at once */
        errorCount?: number | string | null
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[] | null
        /** Sets value for falsy state */
        falseValue?: any | null
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string | null
        /** Hint text */
        hint?: string | null
        /** Sets the DOM id on the component */
        id?: string | null
        /** Sets an indeterminate state for the checkbox */
        indeterminate?: boolean | null
        /** The icon used when in an indeterminate state */
        indeterminateIcon?: string | null
        /** The **v-model** bound value */
        inputValue?: any | null
        /** Sets input label */
        label?: string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Displays a list of messages or message if using a string */
        messages?: string | any[] | null
        /** Changes expected model to an array */
        multiple?: boolean | null
        /** The icon used when inactive */
        offIcon?: string | null
        /** The icon used when active */
        onIcon?: string | null
        /** Forces hint to always be visible */
        persistentHint?: boolean | null
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string | null
        /** Puts input in readonly state */
        readonly?: boolean | null
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object | null
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: InputValidationRules | null
        /** Puts the input in a manual success state */
        success?: boolean | null
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[] | null
        /** Sets value for truthy state */
        trueValue?: any | null
        /** Delays validation until blur event */
        validateOnBlur?: boolean | null
        /** The input's value */
        value?: any | null
        /** Apply a custom value comparator function */
        valueComparator?: Function | null
      },
      {
        $scopedSlots: Readonly<{
          /** Adds an item inside the input and after input content */
          append: undefined
          /** The default Vue slot. */
          default: undefined
          /** Replaces the default label */
          label: undefined
          message: (args: { key: number; message: string }) => VNode[]
          /** Adds an item outside the input and before input content */
          prepend: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the input is changed by user interaction */
        change: (arg0: any) => void
        /** Emitted when input is clicked */
        click: (arg0: MouseEvent) => void
        /** Emitted when appended icon is clicked */
        'click:append': (arg0: Event) => void
        /** Emitted when prepended icon is clicked */
        'click:prepend': (arg0: Event) => void
        /** Emitted when click is pressed */
        mousedown: (arg0: MouseEvent) => void
        /** Emitted when click is released */
        mouseup: (arg0: MouseEvent) => void
        /** The `error.sync` event */
        'update:error': (arg0: boolean) => void
        /** The **indeterminate.sync** event. */
        'update:indeterminate': (arg0: boolean) => void
      }
    >

    VSimpleCheckbox: DefineComponent<
      {
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Disables simple checkbox. */
        disabled?: boolean | null
        /** Sets an indeterminate state for the simple checkbox. */
        indeterminate?: boolean | null
        /** The icon used when in an indeterminate state. */
        indeterminateIcon?: string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** The icon used when inactive. */
        offIcon?: string | null
        /** The icon used when active. */
        onIcon?: string | null
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | null
        /** A boolean value that represents whether the simple checkbox is checked. */
        value?: boolean | null
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {
        /** The updated bound model */
        input: (arg0: Event) => void
      }
    >

    VChip: DefineComponent<
      {
        /** Determines whether the chip is visible or not. */
        active?: boolean | null
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string | null
        /** Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. */
        append?: boolean | null
        /** Adds remove button */
        close?: boolean | null
        /** Change the default icon used for **close** chips */
        closeIcon?: string | null
        /** Text used for *aria-label* on the close button in **close** chips. Can also be customized globally in [Internationalization](/customization/internationalization). */
        closeLabel?: string | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Disables the chip, making it un-selectable */
        disabled?: boolean | null
        /** Makes the chip draggable */
        draggable?: boolean | null
        /** Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. */
        exact?: boolean | null
        /** Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. */
        exactActiveClass?: string | null
        /** Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. */
        exactPath?: boolean | null
        /** Displays a selection icon when selected */
        filter?: boolean | null
        /** Change the default icon used for **filter** chips */
        filterIcon?: string | null
        /** Designates the component as anchor and applies the **href** attribute. */
        href?: string | object | null
        /** Controls the **active** state of the item. This is typically used to highlight the component. */
        inputValue?: any | null
        /** Removes circle edges */
        label?: boolean | null
        /** Makes the component large. */
        large?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Explicitly define the chip as a link */
        link?: boolean | null
        /** Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). */
        nuxt?: boolean | null
        /** Removes background and applies border and text color */
        outlined?: boolean | null
        /** Remove `v-avatar` padding */
        pill?: boolean | null
        /** Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. */
        replace?: boolean | null
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object | null
        /** Makes the component small. */
        small?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Designates the target attribute. This should only be applied when using the **href** prop. */
        target?: string | null
        /** Applies a specified color to the control text */
        textColor?: string | null
        /** Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. */
        to?: string | object | null
        /** The value used when a child of a [v-chip-group](/components/chip-groups). */
        value?: any | null
        /** Makes the component extra large. */
        xLarge?: boolean | null
        /** Makes the component extra small. */
        xSmall?: boolean | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when component is clicked, toggles chip if contained in a chip group - Will trigger component to ripple when clicked unless the `.native` modifier is used */
        click: (arg0: MouseEvent) => void
        /** Emitted when close icon is clicked */
        'click:close': (arg0: void) => void
        /** The updated bound model */
        input: (arg0: boolean) => void
        /** Emitted when close icon is clicked, sets active to `false` */
        'update:active': (arg0: boolean) => void
      }
    >

    VChipGroup: DefineComponent<
      {
        /** The **active-class** applied to children when they are activated. */
        activeClass?: string | null
        /** Forces the selected chip to be centered */
        centerActive?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Remove horizontal pagination and wrap items as needed */
        column?: boolean | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Forces a value to always be selected (if available). */
        mandatory?: boolean | null
        /** Sets a maximum number of selections that can be made. */
        max?: number | string | null
        /** Sets the designated mobile breakpoint for the component. */
        mobileBreakpoint?: number | string | null
        /** Allow multiple selections. The **value** prop must be an _array_. */
        multiple?: boolean | null
        /** Specify the icon to use for the next icon */
        nextIcon?: string | null
        /** Specify the icon to use for the prev icon */
        prevIcon?: string | null
        /** Force the display of the pagination arrows */
        showArrows?: boolean | string | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** The designated model value for the component. */
        value?: any | null
        /** Apply a custom value comparator function */
        valueComparator?: Function | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the component value is changed by user interaction */
        change: (arg0: any[] | any) => void
      }
    >

    VColorPicker: DefineComponent<
      {
        /** Height of canvas */ canvasHeight?: string | number | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Disables picker */
        disabled?: boolean | null
        /** Changes the size of the selection dot on the canvas */
        dotSize?: number | string | null
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string | null
        /** Removes elevation */
        flat?: boolean | null
        /** Hides canvas */
        hideCanvas?: boolean | null
        /** Hides inputs */
        hideInputs?: boolean | null
        /** Hides mode switch */
        hideModeSwitch?: boolean | null
        /** Hides sliders */
        hideSliders?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets mode of inputs. Available modes are 'rgba', 'hsla', and 'hexa'. Can be synced with the `.sync` modifier. */
        mode?: string | null
        /** Displays color swatches */
        showSwatches?: boolean | null
        /** Sets the available color swatches to select from - This prop only accepts rgba hex strings */
        swatches?: any[] | null
        /** Sets the maximum height of the swatches section */
        swatchesMaxHeight?: number | string | null
        /** Current color. This can be either a string representing a hex color, or an object representing a RGBA, HSLA, or HSVA value */
        value?: object | string | null
        /** Sets the width of the color picker */
        width?: number | string | null
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {
        /** Selected color. Depending on what you passed to the `value` prop this is either a string or an object */
        input: (arg0: string | object) => void
        /** Selected color. This is the internal representation of the color, containing all values. */
        'update:color': (arg0: {
          alpha: number
          hex: string
          hexa: string
          hsla: { h: number; s: number; l: number; a: number }
          hsva: { h: number; s: number; v: number; a: number }
          hue: number
          rgba: { r: number; g: number; b: number; a: number }
        }) => void
        /** Selected mode */
        'update:mode': (arg0: string) => void
      }
    >

    VContent: DefineComponent<
      {
        /** Specify a custom tag used on the root element. */
        tag?: string | null
      },
      {}
    >

    VCombobox: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string | null
        /** Appends an icon to the outside the component's input, uses same syntax as `v-icon` */
        appendOuterIcon?: string | null
        /** Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. */
        attach?: any | null
        /** When searching, will always highlight the first option */
        autoSelectFirst?: boolean | null
        /** Enables autofocus */
        autofocus?: boolean | null
        /** Changes the background-color of the input */
        backgroundColor?: string | null
        /** Keeps a local _unique_ copy of all items that have been passed through the **items** prop. */
        cacheItems?: boolean | null
        /** Changes display of selections to chips */
        chips?: boolean | null
        /** Applied when using **clearable** and the input is dirty */
        clearIcon?: string | null
        /** Add input clear functionality, default icon is Material Design Icons **mdi-clear** */
        clearable?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. */
        counter?: boolean | number | string | null
        counterValue?: Function | null
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Adds a remove icon to selected chips */
        deletableChips?: boolean | null
        /** Accepts an array of strings that will trigger a new tag when typing. Does not replace the normal Tab and Enter keys. */
        delimiters?: any[] | null
        /** Reduces the input height */
        dense?: boolean | null
        /** Disables keyboard lookup */
        disableLookup?: boolean | null
        /** Disables the input */
        disabled?: boolean | null
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean | null
        /** Puts the input in a manual error state */
        error?: boolean | null
        /** The total number of errors that should display at once */
        errorCount?: number | string | null
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[] | null
        /** Applies the alternate filled input style */
        filled?: boolean | null
        /** The function used for filtering items */
        filter?: Function | null
        /** Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props */
        flat?: boolean | null
        /** Designates input type as full-width */
        fullWidth?: boolean | null
        /** Sets the height of the input */
        height?: number | string | null
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string | null
        /** Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open. */
        hideNoData?: boolean | null
        /** Do not display in the select menu items that are already selected. Also removes checkboxes from the list when multiple */
        hideSelected?: boolean | null
        /** Hint text */
        hint?: string | null
        /** Sets the DOM id on the component */
        id?: string | null
        /** Sets color of selected items */
        itemColor?: string | null
        /** Set property of **items**'s disabled value */
        itemDisabled?: string | any[] | Function | null
        /** Set property of **items**'s text value */
        itemText?: string | any[] | Function | null
        /** Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479) */
        itemValue?: string | any[] | Function | null
        /** Can be an array of objects or array of strings. When using objects, will look for a text, value and disabled keys. This can be changed using the **item-text**, **item-value** and **item-disabled** props.  Objects that have a **header** or **divider** property are considered special cases and generate a list header or divider; these items are not selectable. */
        items?: any[] | null
        /** Sets input label */
        label?: string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Specifies the height of the loader */
        loaderHeight?: number | string | null
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string | null
        /** Pass props through to the `v-menu` component. Accepts either a string for boolean props `menu-props="auto, overflowY"`, or an object `:menu-props="{ auto: true, overflowY: true }"` */
        menuProps?: string | any[] | object | null
        /** Displays a list of messages or message if using a string */
        messages?: string | any[] | null
        /** Changes select to multiple. Accepts array for value */
        multiple?: boolean | null
        /** Display text when there is no data */
        noDataText?: string | null
        /** Do not apply filtering when searching. Useful when data is being filtered server side */
        noFilter?: boolean | null
        /** When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state */
        openOnClear?: boolean | null
        /** Applies the outlined style to the input */
        outlined?: boolean | null
        /** Forces hint to always be visible */
        persistentHint?: boolean | null
        /** Forces placeholder to always be visible */
        persistentPlaceholder?: boolean | null
        /** Sets the input's placeholder text */
        placeholder?: string | null
        /** Displays prefix text */
        prefix?: string | null
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string | null
        /** Prepends an icon inside the component's input, uses the same syntax as `v-icon` */
        prependInnerIcon?: string | null
        /** Puts input in readonly state */
        readonly?: boolean | null
        /** Changes the selection behavior to return the object directly rather than the value specified with **item-value** */
        returnObject?: boolean | null
        /** Reverses the input orientation */
        reverse?: boolean | null
        /** Adds a border radius to the input */
        rounded?: boolean | null
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: InputValidationRules | null
        /** Use the **.sync** modifier to catch user input from the search input */
        searchInput?: string | null
        /** Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` */
        shaped?: boolean | null
        /** Label does not move on focus/dirty */
        singleLine?: boolean | null
        /** Changes display of selections to chips with the **small** property */
        smallChips?: boolean | null
        /** Changes the style of the input */
        solo?: boolean | null
        /** Reduces element opacity until focused */
        soloInverted?: boolean | null
        /** Puts the input in a manual success state */
        success?: boolean | null
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[] | null
        /** Displays suffix text */
        suffix?: string | null
        /** Delays validation until blur event */
        validateOnBlur?: boolean | null
        /** The input's value */
        value?: any | null
        /** The comparison algorithm used for values. [More info](https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/util/helpers.ts) */
        valueComparator?: Function | null
      },
      {
        $scopedSlots: Readonly<{
          /** Adds an item inside the input and after input content */
          append: undefined
          /** Adds an item after menu content */
          'append-item': undefined
          /** Adds an item outside the input and after input content */
          'append-outer': undefined
          counter: (args: {
            props: {
              dark: boolean
              light: boolean
              max: string | number
              value: string
            }
          }) => VNode[]
          /** Define a custom item appearance */
          item: (args: {
            parent: VueComponent
            item: { [key: keyof any]: any }
            on: { [key: keyof any]: any }
            attrs: { [key: keyof any]: any }
          }) => VNode[]
          /** Replaces the default label */
          label: undefined
          message: (args: { key: number; message: string }) => VNode[]
          'no-data': undefined
          /** Adds an item outside the input and before input content */
          prepend: undefined
          /** Adds an item inside the input and before input content */
          'prepend-inner': undefined
          /** Adds an item before menu content */
          'prepend-item': undefined
          /** Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) */
          progress: undefined
          /** Define a custom selection appearance */
          selection: (args: {
            parent: VueComponent
            item: { [key: keyof any]: any }
            index: number
            select: (...args: any[]) => any
            selected: boolean
            disabled: boolean
          }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the input is blurred */
        blur: (arg0: Event) => void
        /** Emitted when the input is changed by user interaction */
        change: (arg0: any) => void
        /** Emitted when input is clicked */
        click: (arg0: MouseEvent) => void
        /** Emitted when appended icon is clicked */
        'click:append': (arg0: Event) => void
        /** Emitted when appended outer icon is clicked */
        'click:append-outer': (arg0: Event) => void
        /** Emitted when clearable icon clicked */
        'click:clear': (arg0: Event) => void
        /** Emitted when prepended icon is clicked */
        'click:prepend': (arg0: Event) => void
        /** Emitted when prepended inner icon is clicked */
        'click:prepend-inner': (arg0: Event) => void
        /** Emitted when component is focused */
        focus: (arg0: Event) => void
        /** The updated bound model */
        input: (arg0: any) => void
        /** Emitted when **any** key is pressed */
        keydown: (arg0: KeyboardEvent) => void
        /** Emitted when click is pressed */
        mousedown: (arg0: MouseEvent) => void
        /** Emitted when click is released */
        mouseup: (arg0: MouseEvent) => void
        /** The `error.sync` event */
        'update:error': (arg0: boolean) => void
        /** Emitted when menu item is selected using keyboard arrows */
        'update:list-index': (arg0: number) => void
        /** The `search-input.sync` event */
        'update:search-input': (arg0: string) => void
      }
    >

    VDataIterator: DefineComponent<
      {
        checkboxColor?: string | null
        /** Function to filter items */
        customFilter?: Function | null
        /** Function used to group items */
        customGroup?: Function | null
        /** Function used to sort items */
        customSort?: Function | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Disables filtering completely */
        disableFiltering?: boolean | null
        /** Disables pagination completely */
        disablePagination?: boolean | null
        /** Disables sorting completely */
        disableSort?: boolean | null
        /** Array of expanded items. Can be used with `.sync` modifier */
        expanded?: any[] | null
        /** See the [`v-data-footer`](/api/v-data-footer) API for more information */
        footerProps?: object | null
        /** Changes which item property should be used for grouping items. Currently only supports a single grouping in the format: `group` or `['group']`. When using an array, only the first element is considered. Can be used with `.sync` modifier */
        groupBy?: string | any[] | null
        /** Changes which direction grouping is done. Can be used with `.sync` modifier */
        groupDesc?: boolean | any[] | null
        /** Hides default footer */
        hideDefaultFooter?: boolean | null
        /** The property on each item that is used as a unique key */
        itemKey?: string | null
        /** The array of items to display */
        items?: any[] | null
        /** Changes how many items per page should be visible. Can be used with `.sync` modifier. Setting this prop to `-1` will display all items on the page */
        itemsPerPage?: number | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** If `true` and no items are provided, then a loading text will be shown */
        loading?: boolean | string | null
        /** Text shown when `loading` is true and no items are provided */
        loadingText?: string | null
        /** Sets the locale used for sorting. This is passed into [`Intl.Collator()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) in the default `customSort` function */
        locale?: string | null
        /** Used to set when to toggle between regular table and mobile view */
        mobileBreakpoint?: number | string | null
        /** If `true` then one can sort on multiple properties */
        multiSort?: boolean | null
        /** If `true` then one can not disable sorting, it will always switch between ascending and descending */
        mustSort?: boolean | null
        /** Text shown when no items are provided to the component */
        noDataText?: string | null
        /** Text shown when `search` prop is used and there are no results */
        noResultsText?: string | null
        options?: DataOptions | null
        page?: number | null
        /** Text input used to filter items */
        search?: string | null
        /** The property on each item that is used to determine if it is selectable or not */
        selectableKey?: string | null
        /** Used only when data is provided by a server. Should be set to the total amount of items available on server so that pagination works correctly */
        serverItemsLength?: number | null
        /** Changes expansion mode to single expand */
        singleExpand?: boolean | null
        /** Changes selection mode to single select */
        singleSelect?: boolean | null
        /** Changes which item property (or properties) should be used for sort order. Can be used with `.sync` modifier */
        sortBy?: string | any[] | null
        /** Changes which direction sorting is done. Can be used with `.sync` modifier */
        sortDesc?: boolean | any[] | null
        /** Used for controlling selected rows */
        value?: any[] | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default slot. Use this to render your items */
          default: (args: {
            items: any[]
            originalItemsLength: number
            pagination: {
              page: number
              itemsPerPage: number
              pageStart: number
              pageStop: number
              pageCount: number
              itemsLength: number
            }
            options: {
              page: number
              itemsPerPage: number
              sortBy: string[]
              sortDesc: boolean[]
              groupBy: string[]
              groupDesc: boolean[]
              multiSort: boolean
              mustSort: boolean
            }
            groupedItems: Array<{ name: string; items: any[] }>
            updateOptions: (obj: any) => void
            sort: (value: string) => void
            sortArray: (sortBy: string[]) => void
            group: (value: string) => void
            isSelected: (item: any) => boolean
            select: (item: any, value: boolean) => void
            isExpanded: (item: any) => boolean
            expand: (item: any, value: boolean) => void
          }) => VNode[]
          /** Defines a footer below the items */
          footer: (args: {
            items: any[]
            originalItemsLength: number
            pagination: {
              page: number
              itemsPerPage: number
              pageStart: number
              pageStop: number
              pageCount: number
              itemsLength: number
            }
            options: {
              page: number
              itemsPerPage: number
              sortBy: string[]
              sortDesc: boolean[]
              groupBy: string[]
              groupDesc: boolean[]
              multiSort: boolean
              mustSort: boolean
            }
            groupedItems: Array<{ name: string; items: any[] }>
            updateOptions: (obj: any) => void
            sort: (value: string) => void
            sortArray: (sortBy: string[]) => void
            group: (value: string) => void
          }) => VNode[]
          /** This slot is forwarded to the default footer. See the [`v-data-footer`](/api/v-data-footer) API for more information */
          'footer.page-text': (args: {
            pageStart: number
            pageStop: number
            itemsLength: number
          }) => VNode[]
          header: (args: {
            items: any[]
            originalItemsLength: number
            pagination: {
              page: number
              itemsPerPage: number
              pageStart: number
              pageStop: number
              pageCount: number
              itemsLength: number
            }
            options: {
              page: number
              itemsPerPage: number
              sortBy: string[]
              sortDesc: boolean[]
              groupBy: string[]
              groupDesc: boolean[]
              multiSort: boolean
              mustSort: boolean
            }
            groupedItems: Array<{ name: string; items: any[] }>
            updateOptions: (obj: any) => void
            sort: (value: string) => void
            sortArray: (sortBy: string[]) => void
            group: (value: string) => void
          }) => VNode[]
          /** Slot for each item */
          item: (args: {
            expand: (v: boolean) => void
            index: number
            item: any
            isExpanded: boolean
            isMobile: boolean
            isSelected: boolean
            select: (v: boolean) => void
          }) => VNode[]
          /** Defines content for when `loading` is true and no items are provided */
          loading: undefined
          /** Defines content for when no items are provided */
          'no-data': undefined
          /** Defines content for when `search` is provided but no results are found */
          'no-results': undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emits the items provided via the **items** prop, every time the internal **computedItems** is changed. */
        'current-items': (arg0: any[]) => void
        /** Array of selected items */
        input: (arg0: any[]) => void
        /** Event emitted when an item is expanded or closed */
        'item-expanded': (arg0: { item: any; value: boolean }) => void
        /** Event emitted when an item is selected or deselected */
        'item-selected': (arg0: { item: any; value: boolean }) => void
        /** Emits when the **pageCount** property of the **pagination** prop is updated */
        'page-count': (arg0: number) => void
        /** Emits when something changed to the `pagination` which can be provided via the `pagination` prop */
        pagination: (arg0: {
          page: number
          itemsPerPage: number
          pageStart: number
          pageStop: number
          pageCount: number
          itemsLength: number
        }) => void
        /** Emits when the `select-all` checkbox in table header is clicked. This checkbox is enabled by the **show-select** prop */
        'toggle-select-all': (arg0: { items: any[]; value: boolean }) => void
        /** The `.sync` event for `expanded` prop */
        'update:expanded': (arg0: any[]) => void
        /** Emits when the **group-by** property of the **options** property is updated */
        'update:group-by': (arg0: string | string[]) => void
        /** Emits when the **group-desc** property of the **options** prop is updated */
        'update:group-desc': (arg0: boolean | boolean[]) => void
        /** Emits when the **items-per-page** property of the **options** prop is updated */
        'update:items-per-page': (arg0: number) => void
        /** Emits when the **multi-sort** property of the **options** prop is updated */
        'update:multi-sort': (arg0: boolean) => void
        /** Emits when the **must-sort** property of the **options** prop is updated */
        'update:must-sort': (arg0: boolean) => void
        /** Emits when one of the **options** properties is updated */
        'update:options': (arg0: {
          page: number
          itemsPerPage: number
          sortBy: string[]
          sortDesc: boolean[]
          groupBy: string[]
          groupDesc: boolean[]
          multiSort: boolean
          mustSort: boolean
        }) => void
        /** Emits when the **page** property of the **options** prop is updated */
        'update:page': (arg0: number) => void
        /** Emits when the **sort-by** property of the **options** prop is updated */
        'update:sort-by': (arg0: string | string[]) => void
        /** Emits when the **sort-desc** property of the **options** prop is updated */
        'update:sort-desc': (arg0: boolean | boolean[]) => void
      }
    >

    VDataFooter: DefineComponent<
      {
        /** Disables items-per-page dropdown */
        disableItemsPerPage?: boolean | null
        /** Disables pagination buttons */
        disablePagination?: boolean | null
        /** First icon */
        firstIcon?: string | null
        /** Text for 'All' option in items-per-page dropdown */
        itemsPerPageAllText?: string | null
        /** Array of options to show in the items-per-page dropdown */
        itemsPerPageOptions?: any[] | null
        /** Text for items-per-page dropdown */
        itemsPerPageText?: string | null
        /** Last icon */
        lastIcon?: string | null
        /** Next icon */
        nextIcon?: string | null
        /** DataOptions */
        options?: object | null
        pageText?: string | null
        /** DataPagination */
        pagination?: object | null
        /** Previous icon */
        prevIcon?: string | null
        /** Show current page number between prev/next icons */
        showCurrentPage?: boolean | null
        /** Show first/last icons */
        showFirstLastPage?: boolean | null
      },
      {
        $scopedSlots: Readonly<{
          /** Defines content for the items-per-page text */
          'page-text': (args: {
            pageStart: number
            pageStop: number
            itemsLength: number
          }) => VNode[]
          /** Adds content to the empty space in the footer */
          prepend: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** The `.sync` event for `options` prop */
        'update:options': (arg0: {
          page: number
          itemsPerPage: number
          sortBy: string[]
          sortDesc: boolean[]
          groupBy: string[]
          groupDesc: boolean[]
          multiSort: boolean
          mustSort: boolean
        }) => void
      }
    >

    VDataTable: DefineComponent<
      {
        /** Enables calculation of column widths. `widths` property will be available in select scoped slots */
        calculateWidths?: boolean | null
        /** Set the caption (using `<caption>`) */
        caption?: string | null
        /** Set the color of the checkboxes (showSelect must be used) */
        checkboxColor?: string | null
        /** Function to filter items */
        customFilter?: Function | null
        /** Function used to group items */
        customGroup?: Function | null
        /** Function used to sort items */
        customSort?: Function | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Decreases the height of rows */
        dense?: boolean | null
        /** Disables filtering completely */
        disableFiltering?: boolean | null
        /** Disables pagination completely */
        disablePagination?: boolean | null
        /** Disables sorting completely */
        disableSort?: boolean | null
        /** Icon used for expand toggle button. */
        expandIcon?: string | null
        /** Array of expanded items. Can be used with `.sync` modifier */
        expanded?: any[] | null
        /** Controls how how custom column filters are combined with the default filtering. Both modes only apply the default filter to columns not specified in `customKeyFilter`.

- **union**: There is at least one match from the default filter, OR all custom column filters match.
- **intersection**: There is at least one match from the default filter, AND all custom column filters match. */
        filterMode?: string | null
        /** Fixed header to top of table. **NOTE:** Does not work in IE11 */
        fixedHeader?: boolean | null
        /** See the [`v-data-footer`](/api/v-data-footer) API for more information */
        footerProps?: object | null
        /** Changes which item property should be used for grouping items. Currently only supports a single grouping in the format: `group` or `['group']`. When using an array, only the first element is considered. Can be used with `.sync` modifier */
        groupBy?: string | any[] | null
        /** Changes which direction grouping is done. Can be used with `.sync` modifier */
        groupDesc?: boolean | any[] | null
        /** Pass props to the default header. See [`v-data-table-header` API](/api/v-data-table-header) for more information */
        headerProps?: object | null
        /** An array of objects that each describe a header column. See the example below for a definition of all properties */
        headers?: DataTableHeader[] | null
        /** Can be used in combination with `hide-default-header` to specify the number of columns in the table to allow expansion rows and loading bar to function properly */
        headersLength?: number | null
        /** Set an explicit height of table */
        height?: number | string | null
        /** Hides default footer */
        hideDefaultFooter?: boolean | null
        /** Hide the default headers */
        hideDefaultHeader?: boolean | null
        /** Property on supplied `items` that contains item's row class or function that takes an item as an argument and returns the class of corresponding row */
        itemClass?: string | Function | null
        /** The property on each item that is used as a unique key */
        itemKey?: string | null
        itemStyle?: string | Function | null
        /** The array of items to display */
        items?: any[] | null
        /** Changes how many items per page should be visible. Can be used with `.sync` modifier. Setting this prop to `-1` will display all items on the page */
        itemsPerPage?: number | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Specifies the height of the loader */
        loaderHeight?: number | string | null
        /** If `true` and no items are provided, then a loading text will be shown */
        loading?: boolean | string | null
        /** Text shown when `loading` is true and no items are provided */
        loadingText?: string | null
        /** Sets the locale used for sorting. This is passed into [`Intl.Collator()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) in the default `customSort` function */
        locale?: string | null
        /** Used to set when to toggle between regular table and mobile view */
        mobileBreakpoint?: number | string | null
        /** If `true` then one can sort on multiple properties */
        multiSort?: boolean | null
        /** If `true` then one can not disable sorting, it will always switch between ascending and descending */
        mustSort?: boolean | null
        /** Text shown when no items are provided to the component */
        noDataText?: string | null
        /** Text shown when `search` prop is used and there are no results */
        noResultsText?: string | null
        options?: DataOptions | null
        /** The current displayed page number (1-indexed) */
        page?: number | null
        /** Text input used to filter items */
        search?: string | null
        /** The property on each item that is used to determine if it is selectable or not */
        selectableKey?: string | null
        /** Used only when data is provided by a server. Should be set to the total amount of items available on server so that pagination works correctly */
        serverItemsLength?: number | null
        /** Shows the expand toggle in default rows */
        showExpand?: boolean | null
        /** Shows the group by toggle in the header and enables grouped rows */
        showGroupBy?: boolean | null
        /** Shows the select checkboxes in both the header and rows (if using default rows) */
        showSelect?: boolean | null
        /** Changes expansion mode to single expand */
        singleExpand?: boolean | null
        /** Changes selection mode to single select */
        singleSelect?: boolean | null
        /** Changes which item property (or properties) should be used for sort order. Can be used with `.sync` modifier */
        sortBy?: string | any[] | null
        /** Changes which direction sorting is done. Can be used with `.sync` modifier */
        sortDesc?: boolean | any[] | null
        /** Used for controlling selected rows */
        value?: any[] | null
      },
      {
        $scopedSlots: Readonly<{
          /** Slot to replace the default table `<tbody>` */
          body: (args: {
            items: any[]
            originalItemsLength: number
            pagination: {
              page: number
              itemsPerPage: number
              pageStart: number
              pageStop: number
              pageCount: number
              itemsLength: number
            }
            options: {
              page: number
              itemsPerPage: number
              sortBy: string[]
              sortDesc: boolean[]
              groupBy: string[]
              groupDesc: boolean[]
              multiSort: boolean
              mustSort: boolean
            }
            groupedItems: Array<{ name: string; items: any[] }>
            updateOptions: (obj: any) => void
            sort: (value: string) => void
            sortArray: (sortBy: string[]) => void
            group: (value: string) => void
            headers: DataTableHeader[]
            isMobile: boolean
            isSelected: (item: any) => boolean
            select: (item: any, value: boolean) => void
            isExpanded: (item: any) => boolean
            expand: (item: any, value: boolean) => void
          }) => VNode[]
          /** Appends elements to the end of the default table `<tbody>` */
          'body.append': (args: {
            items: any[]
            originalItemsLength: number
            pagination: {
              page: number
              itemsPerPage: number
              pageStart: number
              pageStop: number
              pageCount: number
              itemsLength: number
            }
            options: {
              page: number
              itemsPerPage: number
              sortBy: string[]
              sortDesc: boolean[]
              groupBy: string[]
              groupDesc: boolean[]
              multiSort: boolean
              mustSort: boolean
            }
            groupedItems: Array<{ name: string; items: any[] }>
            updateOptions: (obj: any) => void
            sort: (value: string) => void
            sortArray: (sortBy: string[]) => void
            group: (value: string) => void
            headers: DataTableHeader[]
            isMobile: boolean
            isSelected: (item: any) => boolean
            select: (item: any, value: boolean) => void
            isExpanded: (item: any) => boolean
            expand: (item: any, value: boolean) => void
          }) => VNode[]
          /** Prepends elements to the start of the default table `<tbody>` */
          'body.prepend': (args: {
            items: any[]
            originalItemsLength: number
            pagination: {
              page: number
              itemsPerPage: number
              pageStart: number
              pageStop: number
              pageCount: number
              itemsLength: number
            }
            options: {
              page: number
              itemsPerPage: number
              sortBy: string[]
              sortDesc: boolean[]
              groupBy: string[]
              groupDesc: boolean[]
              multiSort: boolean
              mustSort: boolean
            }
            groupedItems: Array<{ name: string; items: any[] }>
            updateOptions: (obj: any) => void
            sort: (value: string) => void
            sortArray: (sortBy: string[]) => void
            group: (value: string) => void
            headers: DataTableHeader[]
            isMobile: boolean
            isSelected: (item: any) => boolean
            select: (item: any, value: boolean) => void
            isExpanded: (item: any) => boolean
            expand: (item: any, value: boolean) => void
          }) => VNode[]
          /** Slot to customize expanded rows */
          'expanded-item': (args: {
            isMobile: boolean
            item: any
            headers: DataTableHeader[]
          }) => VNode[]
          /** Slot to add a `<tfoot>` element after the `<tbody>`. Not to be confused with the `footer` slot */
          foot: (args: {
            items: any[]
            originalItemsLength: number
            pagination: {
              page: number
              itemsPerPage: number
              pageStart: number
              pageStop: number
              pageCount: number
              itemsLength: number
            }
            options: {
              page: number
              itemsPerPage: number
              sortBy: string[]
              sortDesc: boolean[]
              groupBy: string[]
              groupDesc: boolean[]
              multiSort: boolean
              mustSort: boolean
            }
            groupedItems: Array<{ name: string; items: any[] }>
            updateOptions: (obj: any) => void
            sort: (value: string) => void
            sortArray: (sortBy: string[]) => void
            group: (value: string) => void
          }) => VNode[]
          /** Slot to add a custom footer */
          footer: (args: {
            props: {
              options: {
                page: number
                itemsPerPage: number
                sortBy: string[]
                sortDesc: boolean[]
                groupBy: string[]
                groupDesc: boolean[]
                multiSort: boolean
                mustSort: boolean
              }
              pagination: {
                page: number
                itemsPerPage: number
                pageStart: number
                pageStop: number
                pageCount: number
                itemsLength: number
              }
              itemsPerPageText: string
            }
            on: {}
            headers: DataTableHeader[]
            widths: []
          }) => VNode[]
          /** Slot to customize footer page text */
          'footer.page-text': (args: {
            pageStart: number
            pageStop: number
            itemsLength: number
          }) => VNode[]
          /** Adds content to the empty space in the footer */
          'footer.prepend': undefined
          /** Slot to replace the default rendering of grouped rows */
          group: (args: {
            group: string
            options: {
              page: number
              itemsPerPage: number
              sortBy: string[]
              sortDesc: boolean[]
              groupBy: string[]
              groupDesc: boolean[]
              multiSort: boolean
              mustSort: boolean
            }
            isMobile: boolean
            items: any[]
            headers: DataTableHeader[]
          }) => VNode[]
          /** Slot to customize the default rendering of group headers */
          'group.header': (args: {
            group: string
            groupBy: string[]
            isMobile: boolean
            items: any[]
            headers: DataTableHeader[]
            isOpen: boolean
            toggle: () => void
            remove: () => void
          }) => VNode[]
          /** Slot to customize the default rendering of group summaries */
          'group.summary': (args: {
            group: string
            groupBy: string[]
            isMobile: boolean
            items: any[]
            headers: DataTableHeader[]
            isOpen: boolean
            toggle: () => void
          }) => VNode[]
          header: (args: {
            isMobile: boolean
            props: {
              headers: DataTableHeader[]
              options: {
                page: number
                itemsPerPage: number
                sortBy: string[]
                sortDesc: boolean[]
                groupBy: string[]
                groupDesc: boolean[]
                multiSort: boolean
                mustSort: boolean
              }
              mobile: boolean
              showGroupBy: boolean
              someItems: boolean
              everyItem: boolean
            }
            on: {
              sort: (value: string) => void
              group: (value: string) => void
              'toggle-select-all': (value: boolean) => void
            }
          }) => VNode[]
          /** Slot to customize a specific header column */
          [name: `header.${string}`]: (args: {
            header: DataTableHeader
          }) => VNode[]
          /** Slot to replace the default `v-simple-checkbox` in header */
          //@ts-expect-error
          'header.data-table-select': (args: {
            isMobile: boolean
            props: { value: boolean; indeterminate: boolean }
            on: { input: (value: boolean) => void }
          }) => VNode[]
          /** Slot to replace the default rendering of a row */
          item: (args: {
            expand: (v: boolean) => void
            index: number
            item: any
            isExpanded: boolean
            isMobile: boolean
            isSelected: boolean
            select: (v: boolean) => void
            headers: DataTableHeader[]
            on: {
              click: (event: MouseEvent) => void
              contextmenu: (event: MouseEvent) => void
              dblclick: (event: MouseEvent) => void
            }
            attrs: { class: { [key: keyof any]: any } }
          }) => VNode[]
          /** Slot to customize a specific column */
          [name: `item.${string}`]: (args: {
            isMobile: boolean
            item: any
            header: DataTableHeader
            value: any
            index: number
          }) => VNode[]
          /** Slot to replace the default `v-icon` used when expanding rows */
          //@ts-expect-error
          'item.data-table-expand': (args: {
            expand: (v: boolean) => void
            index: number
            item: any
            isExpanded: boolean
            isMobile: boolean
            isSelected: boolean
            select: (v: boolean) => void
            headers: DataTableHeader[]
            on: {
              click: (event: MouseEvent) => void
              contextmenu: (event: MouseEvent) => void
              dblclick: (event: MouseEvent) => void
            }
            attrs: { class: { [key: keyof any]: any } }
          }) => VNode[]
          /** Slot to replace the default `v-simple-checkbox` used when selecting rows */
          //@ts-expect-error
          'item.data-table-select': (args: {
            expand: (v: boolean) => void
            index: number
            item: any
            isExpanded: boolean
            isMobile: boolean
            isSelected: boolean
            select: (v: boolean) => void
            headers: DataTableHeader[]
            on: {
              click: (event: MouseEvent) => void
              contextmenu: (event: MouseEvent) => void
              dblclick: (event: MouseEvent) => void
            }
            attrs: { class: { [key: keyof any]: any } }
          }) => VNode[]
          /** Defines content for when `loading` is true and no items are provided */
          loading: undefined
          /** Defines content for when no items are provided */
          'no-data': undefined
          /** Defines content for when `search` is provided but no results are found */
          'no-results': undefined
          /** Slot to replace the default `<v-progress-linear>` component */
          progress: undefined
          /** Slot to add content above the table */
          top: (args: {
            items: any[]
            originalItemsLength: number
            pagination: {
              page: number
              itemsPerPage: number
              pageStart: number
              pageStop: number
              pageCount: number
              itemsLength: number
            }
            options: {
              page: number
              itemsPerPage: number
              sortBy: string[]
              sortDesc: boolean[]
              groupBy: string[]
              groupDesc: boolean[]
              multiSort: boolean
              mustSort: boolean
            }
            groupedItems: Array<{ name: string; items: any[] }>
            updateOptions: (obj: any) => void
            sort: (value: string) => void
            sortArray: (sortBy: string[]) => void
            group: (value: string) => void
            isMobile: boolean
          }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Pass through any native event listener to the table row elements. The first argument is the event object and the second is related data provided to the item slot. **NOTE:** will not emit when table rows are defined through a slot such as `item` or `body`. */
        [name: `${string}:row`]: (
          arg0: {
            expand: (value: boolean) => void
            headers: DataTableHeader[]
            isExpanded: boolean
            isMobile: boolean
            isSelected: boolean
            item: any
            select: (value: boolean) => void
          },
          arg1: Event,
        ) => void
        /** Emits when a table row is clicked. This event provides 3 arguments: the first is the item data that was clicked, the second is the other related data provided by the `item` slot, and the third is the native click event. **NOTE:** will not emit when table rows are defined through a slot such as `item` or `body`. */
        //@ts-expect-error
        'click:row': (
          arg0: any,
          arg1: {
            expand: (value: boolean) => void
            headers: DataTableHeader[]
            isExpanded: boolean
            isMobile: boolean
            isSelected: boolean
            item: any
            select: (value: boolean) => void
          },
          arg2: MouseEvent,
        ) => void
        /** Emits the items provided via the **items** prop, every time the internal **computedItems** is changed. */
        'current-items': (arg0: any[]) => void
        /** Array of selected items */
        input: (arg0: any[]) => void
        /** Event emitted when an item is expanded or closed */
        'item-expanded': (arg0: { item: any; value: boolean }) => void
        /** Event emitted when an item is selected or deselected */
        'item-selected': (arg0: { item: any; value: boolean }) => void
        /** Emits when the **pageCount** property of the **pagination** prop is updated */
        'page-count': (arg0: number) => void
        /** Emits when something changed to the `pagination` which can be provided via the `pagination` prop */
        pagination: (arg0: {
          page: number
          itemsPerPage: number
          pageStart: number
          pageStop: number
          pageCount: number
          itemsLength: number
        }) => void
        /** Emits when the `select-all` checkbox in table header is clicked. This checkbox is enabled by the **show-select** prop */
        'toggle-select-all': (arg0: { items: any[]; value: boolean }) => void
        /** The `.sync` event for `expanded` prop */
        'update:expanded': (arg0: any[]) => void
        /** Emits when the **group-by** property of the **options** property is updated */
        'update:group-by': (arg0: string | string[]) => void
        /** Emits when the **group-desc** property of the **options** prop is updated */
        'update:group-desc': (arg0: boolean | boolean[]) => void
        /** Emits when the **items-per-page** property of the **options** prop is updated */
        'update:items-per-page': (arg0: number) => void
        /** Emits when the **multi-sort** property of the **options** prop is updated */
        'update:multi-sort': (arg0: boolean) => void
        /** Emits when the **must-sort** property of the **options** prop is updated */
        'update:must-sort': (arg0: boolean) => void
        /** Emits when one of the **options** properties is updated */
        'update:options': (arg0: {
          page: number
          itemsPerPage: number
          sortBy: string[]
          sortDesc: boolean[]
          groupBy: string[]
          groupDesc: boolean[]
          multiSort: boolean
          mustSort: boolean
        }) => void
        /** Emits when the **page** property of the **options** prop is updated */
        'update:page': (arg0: number) => void
        /** Emits when the **sort-by** property of the **options** prop is updated */
        'update:sort-by': (arg0: string | string[]) => void
        /** Emits when the **sort-desc** property of the **options** prop is updated */
        'update:sort-desc': (arg0: boolean | boolean[]) => void
      }
    >

    VEditDialog: DefineComponent<
      {
        /** Sets the default text for the cancel button when using the **large** prop */
        cancelText?: any | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean | null
        /** Attaches a submit and cancel button to the dialog */
        large?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Clicking outside or pressing **esc** key will not dismiss the dialog */
        persistent?: boolean | null
        returnValue?: any | null
        /** Sets the default text for the save button when using the **large** prop */
        saveText?: any | null
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Slot used to denote input component for v-edit-dialog */
          input: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emits when editing is canceled */
        cancel: (arg0: void) => void
        /** Emits when edit-dialog close button is pressed */
        close: (arg0: void) => void
        /** Emits when editing is opened */
        open: (arg0: void) => void
        /** Emits when edit-dialog save button is pressed */
        save: (arg0: void) => void
      }
    >

    VDataTableHeader: DefineComponent<
      {
        checkboxColor?: string | null
        /** Toggles rendering of sort button */
        disableSort?: boolean | null
        /** Indicates if all items in table are selected */
        everyItem?: boolean | null
        /** Array of header items to display */
        headers?: any[] | null
        /** Renders mobile view of headers */
        mobile?: boolean | null
        /** Options object. Identical to the one on `v-data-table` */
        options?: object | null
        /** Shows group by button */
        showGroupBy?: boolean | null
        /** Toggles rendering of select-all checkbox */
        singleSelect?: boolean | null
        /** Indicates if one or more items in table are selected */
        someItems?: boolean | null
        /** Sets the label text used by the default sort-by selector when `v-data-table` is rendering the mobile view */
        sortByText?: string | null
        /** Icon used for sort button */
        sortIcon?: string | null
      },
      {}
    >

    VSimpleTable: DefineComponent<
      {
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Decreases paddings to render a dense table */
        dense?: boolean | null
        /** Sets table header to fixed mode */
        fixedHeader?: boolean | null
        /** Sets the height for the component */
        height?: number | string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VDatePicker: DefineComponent<
      {
        /** Determines which picker in the date or month picker is being displayed. Allowed values: `'DATE'`, `'MONTH'`, `'YEAR'` */
        activePicker?: string | null
        /** Restricts which dates can be selected */
        allowedDates?: Function | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Allows you to customize the format of the day string that appears in the date table. Called with date (ISO 8601 **date** string) arguments. */
        dayFormat?: Function | null
        /** Disables interaction with the picker */
        disabled?: boolean | null
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string | null
        /** Sets the color for event dot. It can be string (all events will have the same color) or `object` where attribute is the event date and value is boolean/color/array of colors for specified date or `function` taking date as a parameter and returning boolean/color/array of colors for that date */
        eventColor?: any[] | Function | object | string | null
        /** Array of dates or object defining events or colors or function returning boolean/color/array of colors */
        events?: any[] | Function | object | null
        /** Sets the first day of the week, starting with 0 for Sunday. */
        firstDayOfWeek?: string | number | null
        /** Removes  elevation */
        flat?: boolean | null
        /** Forces 100% width */
        fullWidth?: boolean | null
        /** Defines the header color. If not specified it will use the color defined by <code>color</code> prop or the default picker color */
        headerColor?: string | null
        /** Allows you to customize the format of the month string that appears in the header of the calendar. Called with date (ISO 8601 **date** string) arguments. */
        headerDateFormat?: Function | null
        /** Orients picker horizontal */
        landscape?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets the locale. Accepts a string with a BCP 47 language tag. */
        locale?: string | null
        /** Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4. */
        localeFirstDayOfYear?: string | number | null
        /** Maximum allowed date/month (ISO 8601 format) */
        max?: string | null
        /** Minimum allowed date/month (ISO 8601 format) */
        min?: string | null
        /** Formatting function used for displaying months in the months table. Called with date (ISO 8601 **date** string) arguments. */
        monthFormat?: Function | null
        /** Allow the selection of multiple dates */
        multiple?: boolean | null
        /** Sets the icon for next month/year button */
        nextIcon?: string | null
        nextMonthAriaLabel?: string | null
        nextYearAriaLabel?: string | null
        /** Hide the picker title */
        noTitle?: boolean | null
        /** Displayed year/month */
        pickerDate?: string | null
        /** Sets the icon for previous month/year button */
        prevIcon?: string | null
        prevMonthAriaLabel?: string | null
        prevYearAriaLabel?: string | null
        /** Allow the selection of date range */
        range?: boolean | null
        /** Updates the picker model when changing months/years automatically */
        reactive?: boolean | null
        /** Makes the picker readonly (doesn't allow to select new date) */
        readonly?: boolean | null
        /** Allows changing displayed month with mouse scroll */
        scrollable?: boolean | null
        /** Text used for translating the number of selected dates when using *multiple* prop. Can also be customizing globally in [Internationalization](/customization/internationalization). */
        selectedItemsText?: string | null
        /** Toggles visibility of days from previous and next months */
        showAdjacentMonths?: boolean | null
        /** Toggles visibility of the current date/month outline or shows the provided date/month as a current */
        showCurrent?: boolean | string | null
        /** Toggles visibility of the week numbers in the body of the calendar */
        showWeek?: boolean | null
        /** Allows you to customize the format of the date string that appears in the title of the date picker. Called with date (ISO 8601 **date** string) arguments. */
        titleDateFormat?: Function | null
        /** Determines the type of the picker - `date` for date picker, `month` for month picker */
        type?: string | null
        /** Date picker model (ISO 8601 format, YYYY-mm-dd or YYYY-mm) */
        value?: any[] | string | null
        /** Allows you to customize the format of the weekday string that appears in the body of the calendar. Called with date (ISO 8601 **date** string) arguments. */
        weekdayFormat?: Function | null
        /** Width of the picker */
        width?: number | string | null
        /** Allows you to customize the format of the year string that appears in the header of the calendar. Called with date (ISO 8601 **date** string) arguments. */
        yearFormat?: Function | null
        /** Sets the icon in the year selection button */
        yearIcon?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** Displayed below the calendar, can be used for example for adding action button (`OK` and `Cancel`) */
          default: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the specified DOM event occurs on the date button */
        '<domevent>:date': (arg0: string) => void
        /** Emitted when the specified DOM event occurs on the month button */
        '<domevent>:month': (arg0: string) => void
        /** Emitted when the specified DOM event occurs on the year button */
        '<domevent>:year': (arg0: number) => void
        /** Reactive date picker emits `input` even when any part of the date (year/month/day) changes, but `change` event is emitted only when the day (for date pickers) or month (for month pickers) changes. If `range` prop is set, date picker emits `change` when both [from, to] are selected. */
        change: (arg0: string) => void
        /** The updated bound model */
        input: (arg0: string) => void
        /** The `.sync` event for `active-picker` prop */
        'update:active-picker': (arg0: string) => void
        /** The `.sync` event for `picker-date` prop */
        'update:picker-date': (arg0: string) => void
      }
    >

    VDialog: DefineComponent<
      {
        /** Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node. */
        activator?: any | null
        /** Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. */
        attach?: any | null
        /** Milliseconds to wait before closing component. Only applies to hover and focus events. */
        closeDelay?: number | string | null
        /** Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component. */
        contentClass?: string | null
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Disables the ability to open the component. */
        disabled?: boolean | null
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean | null
        /** Changes layout for fullscreen display. */
        fullscreen?: boolean | null
        /** Hides the display of the overlay. */
        hideOverlay?: boolean | null
        /** Detaches the menu content inside of the component as opposed to the document. */
        internalActivator?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets the maximum width for the component. */
        maxWidth?: string | number | null
        /** Disables the bounce effect when clicking outside of a `v-dialog`'s content when using the **persistent** prop. */
        noClickAnimation?: boolean | null
        /** Milliseconds to wait before opening component. Only applies to hover and focus events. */
        openDelay?: number | string | null
        openOnClick?: boolean | null
        openOnFocus?: boolean | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
        /** Sets the overlay color. */
        overlayColor?: string | null
        /** Sets the overlay opacity. */
        overlayOpacity?: number | string | null
        /** Clicking outside of the element or pressing **esc** key will not deactivate it. */
        persistent?: boolean | null
        /** Tab focus will return to the first child of the dialog by default. Disable this when using external tools that require focus such as TinyMCE or vue-clipboard. */
        retainFocus?: boolean | null
        returnValue?: any | null
        /** When set to true, expects a `v-card` and a `v-card-text` component with a designated height. For more information, check out the [scrollable example](/components/dialogs#scrollable). */
        scrollable?: boolean | null
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: string | boolean | null
        /** Controls whether the component is visible or hidden. */
        value?: any | null
        /** Sets the width for the component. */
        width?: string | number | null
      },
      {
        $scopedSlots: Readonly<{
          /** When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation */
          activator: (args: {
            on: { [eventName: string]: eventHandler }
            value: boolean
            attrs: {
              role: string
              'aria-haspopup': boolean
              'aria-expanded': string
            }
          }) => VNode[]
          /** The default Vue slot. */
          default: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Event that fires when clicking outside an active dialog. */
        'click:outside': (arg0: MouseEvent) => void
        /** The updated bound model */
        input: (arg0: Boolean) => void
        /** Event that fires when key is pressed. If dialog is active and not using the **persistent** prop, the **esc** key will deactivate it. */
        keydown: (arg0: KeyboardEvent) => void
      }
    >

    VDivider: DefineComponent<
      {
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Adds indentation (72px) for **normal** dividers, reduces max height for **vertical**. */
        inset?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Displays dividers vertically */
        vertical?: boolean | null
      },
      {}
    >

    VExpansionPanels: DefineComponent<
      {
        /** Removes the margin around open panels */ accordion?: boolean | null
        /** The **active-class** applied to children when they are activated. */
        activeClass?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Disables the entire expansion-panel */
        disabled?: boolean | null
        /** Removes the expansion-panel's elevation and borders */
        flat?: boolean | null
        /** Makes the expansion-panel headers focusable */
        focusable?: boolean | null
        /** Applies a background-color shift on hover to expansion panel headers */
        hover?: boolean | null
        /** Makes the expansion-panel open with a inset style */
        inset?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Forces a value to always be selected (if available). */
        mandatory?: boolean | null
        /** Sets a maximum number of selections that can be made. */
        max?: number | string | null
        /** Allow multiple selections. The **value** prop must be an _array_. */
        multiple?: boolean | null
        /** Makes the expansion-panel open with an popout style */
        popout?: boolean | null
        /** Makes the entire expansion-panel read only. */
        readonly?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Removes the border-radius */
        tile?: boolean | null
        /** Controls the opened/closed state of content in the expansion-panel. Corresponds to a zero-based index of the currently opened content. If the `multiple` prop (previously `expand` in 1.5.x) is used then it is an array of numbers where each entry corresponds to the index of the opened content.  The index order is not relevant. */
        value?: any | null
        /** Apply a custom value comparator function */
        valueComparator?: Function | null
      },
      {}
    >

    VExpansionPanel: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string | null
        /** Disables the expansion-panel content */
        disabled?: boolean | null
        /** Makes the expansion-panel content read only. */
        readonly?: boolean | null
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {
        /** Toggles the value of the selected panel */
        change: (arg0: void) => void
        /** Mouse click event */
        click: (arg0: MouseEvent) => void
      }
    >

    VExpansionPanelHeader: DefineComponent<
      {
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Removes the icon rotation animation when expanding a panel */
        disableIconRotate?: boolean | null
        /** Set the expand action icon */
        expandIcon?: string | null
        /** Hide the expand icon in the content header */
        hideActions?: boolean | null
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object | null
      },
      {
        $scopedSlots: Readonly<{
          /** Expansion header actions */
          actions: (args: { open: boolean }) => VNode[]
          /** The default Vue slot. */
          default: (args: { open: boolean }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Mouse click event */
        click: (arg0: MouseEvent) => void
      }
    >

    VExpansionPanelContent: DefineComponent<
      {
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: (args: { open: boolean }) => VNode[]
        }>
      }
    >

    VFileInput: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string | null
        /** Appends an icon to the outside the component's input, uses same syntax as `v-icon` */
        appendOuterIcon?: string | null
        /** Enables autofocus */
        autofocus?: boolean | null
        /** Changes the background-color of the input */
        backgroundColor?: string | null
        /** Changes display of selections to chips */
        chips?: boolean | null
        /** Applied when using **clearable** and the input is dirty */
        clearIcon?: string | null
        /** Add input clear functionality, default icon is Material Design Icons **mdi-clear** */
        clearable?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. */
        counter?: boolean | number | string | null
        /** The text displayed when using the **counter** and **show-size** props. Can also be customized globally on the [internationalization page](/customization/internationalization). */
        counterSizeString?: string | null
        /** The text displayed when using the **counter** prop. Can also be customized globally on the [internationalization page](/customization/internationalization). */
        counterString?: string | null
        counterValue?: Function | null
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Reduces the input height */
        dense?: boolean | null
        /** Disable the input */
        disabled?: boolean | null
        /** Puts the input in a manual error state */
        error?: boolean | null
        /** The total number of errors that should display at once */
        errorCount?: number | string | null
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[] | null
        /** Applies the alternate filled input style */
        filled?: boolean | null
        /** Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props */
        flat?: boolean | null
        /** Designates input type as full-width */
        fullWidth?: boolean | null
        /** Sets the height of the input */
        height?: number | string | null
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string | null
        /** Display the icon only without the input (file names) */
        hideInput?: boolean | null
        /** Hint text */
        hint?: string | null
        /** Sets the DOM id on the component */
        id?: string | null
        /** Sets input label */
        label?: string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Specifies the height of the loader */
        loaderHeight?: number | string | null
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string | null
        /** Displays a list of messages or message if using a string */
        messages?: string | any[] | null
        /** Adds the **multiple** attribute to the input, allowing multiple file selections. */
        multiple?: boolean | null
        /** Applies the outlined style to the input */
        outlined?: boolean | null
        /** Forces hint to always be visible */
        persistentHint?: boolean | null
        /** Forces placeholder to always be visible */
        persistentPlaceholder?: boolean | null
        /** Sets the input's placeholder text */
        placeholder?: string | null
        /** Displays prefix text */
        prefix?: string | null
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string | null
        /** Prepends an icon inside the component's input, uses the same syntax as `v-icon` */
        prependInnerIcon?: string | null
        /** Reverses the input orientation */
        reverse?: boolean | null
        /** Adds a border radius to the input */
        rounded?: boolean | null
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: InputValidationRules | null
        /** Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` */
        shaped?: boolean | null
        /** Sets the displayed size of selected file(s). When using **true** will default to _1000_ displaying (**kB, MB, GB**) while _1024_ will display (**KiB, MiB, GiB**). */
        showSize?: boolean | number | null
        /** Label does not move on focus/dirty */
        singleLine?: boolean | null
        /** Changes display of selections to chips with the **small** property */
        smallChips?: boolean | null
        /** Changes the style of the input */
        solo?: boolean | null
        /** Reduces element opacity until focused */
        soloInverted?: boolean | null
        /** Puts the input in a manual success state */
        success?: boolean | null
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[] | null
        /** Displays suffix text */
        suffix?: string | null
        /** The length of a filename before it is truncated with ellipsis */
        truncateLength?: number | string | null
        /** Delays validation until blur event */
        validateOnBlur?: boolean | null
        /** A single or array of [File objects](https://developer.mozilla.org/en-US/docs/Web/API/File). */
        value?: any | null
      },
      {
        $scopedSlots: Readonly<{
          /** Adds an item inside the input and after input content */
          append: undefined
          /** Adds an item outside the input and after input content */
          'append-outer': undefined
          counter: (args: {
            props: {
              dark: boolean
              light: boolean
              max: string | number
              value: string
            }
          }) => VNode[]
          /** Replaces the default label */
          label: undefined
          message: (args: { key: number; message: string }) => VNode[]
          /** Adds an item outside the input and before input content */
          prepend: undefined
          /** Adds an item inside the input and before input content */
          'prepend-inner': undefined
          /** Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) */
          progress: undefined
          /** Slot for defining a custom appearance for selected item(s). Provides the current **index**, **text** (truncated) and [file](https://developer.mozilla.org/en-US/docs/Web/API/File). */
          selection: (args: {
            file: File
            index: number
            multiple: boolean
            text: string
          }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the input is blurred */
        blur: (arg0: Event) => void
        /** Emitted when the input is changed by user interaction */
        change: (arg0: File[]) => void
        /** Emitted when input is clicked */
        click: (arg0: MouseEvent) => void
        /** Emitted when appended icon is clicked */
        'click:append': (arg0: Event) => void
        /** Emitted when appended outer icon is clicked */
        'click:append-outer': (arg0: Event) => void
        /** Emitted when clearable icon clicked */
        'click:clear': (arg0: Event) => void
        /** Emitted when prepended icon is clicked */
        'click:prepend': (arg0: Event) => void
        /** Emitted when prepended inner icon is clicked */
        'click:prepend-inner': (arg0: Event) => void
        /** Emitted when component is focused */
        focus: (arg0: Event) => void
        /** The updated bound model */
        input: (arg0: any) => void
        /** Emitted when **any** key is pressed */
        keydown: (arg0: KeyboardEvent) => void
        /** Emitted when click is pressed */
        mousedown: (arg0: MouseEvent) => void
        /** Emitted when click is released */
        mouseup: (arg0: MouseEvent) => void
        /** The `error.sync` event */
        'update:error': (arg0: boolean) => void
      }
    >

    VFooter: DefineComponent<
      {
        /** Applies **position: absolute** to the component. */
        absolute?: boolean | null
        /** Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop */
        app?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string | null
        /** Applies **position: fixed** to the component. */
        fixed?: boolean | null
        /** Sets the height for the component. */
        height?: number | string | null
        /** Positions the toolbar offset from an application `v-navigation-drawer` */
        inset?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** Removes elevation (box-shadow) and adds a *thin* border. */
        outlined?: boolean | null
        /** Remove all padding from the footer */
        padless?: boolean | null
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string | null
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Removes the component's **border-radius**. */
        tile?: boolean | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VForm: DefineComponent<
      {
        /** Puts all children inputs into a disabled state. */
        disabled?: boolean | null
        /** If enabled, **value** will always be _true_ unless there are visible validation errors. You can still call `validate()` to manually trigger validation */
        lazyValidation?: boolean | null
        /** Puts all children inputs into a readonly state. */
        readonly?: boolean | null
        /** A boolean value representing the validity of the form. */
        value?: boolean | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** The updated bound model */
        input: (arg0: boolean) => void
        /** Emitted when form is submitted */
        submit: (arg0: Event) => void
      }
    >

    VContainer: DefineComponent<
      {
        /** Removes viewport maximum-width size breakpoints */
        fluid?: boolean | null
        /** Sets the DOM id on the component */
        id?: string | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VCol: DefineComponent<
      {
        /** Applies the [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) css property. Available options are **start**, **center**, **end**, **auto**, **baseline** and **stretch**. */
        alignSelf?: string | null
        /** Sets the default number of columns the component extends. Available options are **1 -> 12** and **auto**. */
        cols?: boolean | string | number | null
        /** Changes the number of columns on large and greater breakpoints. */
        lg?: boolean | string | number | null
        /** Changes the number of columns on medium and greater breakpoints. */
        md?: boolean | string | number | null
        /** Sets the default offset for the column. */
        offset?: string | number | null
        /** Changes the offset of the component on large and greater breakpoints. */
        offsetLg?: string | number | null
        /** Changes the offset of the component on medium and greater breakpoints. */
        offsetMd?: string | number | null
        /** Changes the offset of the component on small and greater breakpoints. */
        offsetSm?: string | number | null
        /** Changes the offset of the component on extra large and greater breakpoints. */
        offsetXl?: string | number | null
        /** Sets the default [order](https://developer.mozilla.org/en-US/docs/Web/CSS/order) for the column. */
        order?: string | number | null
        /** Changes the order of the component on large and greater breakpoints. */
        orderLg?: string | number | null
        /** Changes the order of the component on medium and greater breakpoints. */
        orderMd?: string | number | null
        /** Changes the order of the component on small and greater breakpoints. */
        orderSm?: string | number | null
        /** Changes the order of the component on extra large and greater breakpoints. */
        orderXl?: string | number | null
        /** Changes the number of columns on small and greater breakpoints. */
        sm?: boolean | string | number | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Changes the number of columns on extra large and greater breakpoints. */
        xl?: boolean | string | number | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VRow: DefineComponent<
      {
        /** Applies the [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) css property. Available options are **start**, **center**, **end**, **baseline** and **stretch**. */
        align?: string | null
        /** Applies the [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) css property. Available options are **start**, **center**, **end**, **space-between**, **space-around** and **stretch**. */
        alignContent?: string | null
        /** Changes the **align-content** property on large and greater breakpoints. */
        alignContentLg?: string | null
        /** Changes the **align-content** property on medium and greater breakpoints. */
        alignContentMd?: string | null
        /** Changes the **align-content** property on small and greater breakpoints. */
        alignContentSm?: string | null
        /** Changes the **align-content** property on extra large and greater breakpoints. */
        alignContentXl?: string | null
        /** Changes the **align-items** property on large and greater breakpoints. */
        alignLg?: string | null
        /** Changes the **align-items** property on medium and greater breakpoints. */
        alignMd?: string | null
        /** Changes the **align-items** property on small and greater breakpoints. */
        alignSm?: string | null
        /** Changes the **align-items** property on extra large and greater breakpoints. */
        alignXl?: string | null
        /** Reduces the gutter between `v-col`s. */
        dense?: boolean | null
        /** Applies the [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) css property. Available options are **start**, **center**, **end**, **space-between** and **space-around**. */
        justify?: string | null
        /** Changes the **justify-content** property on large and greater breakpoints. */
        justifyLg?: string | null
        /** Changes the **justify-content** property on medium and greater breakpoints. */
        justifyMd?: string | null
        /** Changes the **justify-content** property on small and greater breakpoints. */
        justifySm?: string | null
        /** Changes the **justify-content** property on extra large and greater breakpoints. */
        justifyXl?: string | null
        /** Removes the gutter between `v-col`s. */
        noGutters?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VSpacer: DefineComponent<
      {
        /** Specify a custom tag used on the root element. */
        tag?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VHover: DefineComponent<
      {
        /** Milliseconds to wait before closing component. Only applies to hover and focus events. */
        closeDelay?: number | string | null
        /** Turns off hover functionality */
        disabled?: boolean | null
        /** Milliseconds to wait before opening component. Only applies to hover and focus events. */
        openDelay?: number | string | null
        /** Controls whether the component is visible or hidden. */
        value?: boolean | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: (args: { hover: boolean }) => VNode[]
        }>
      }
    >

    VIcon: DefineComponent<
      {
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Makes icon smaller (20px) */
        dense?: boolean | null
        /** Disable the input */
        disabled?: boolean | null
        /** Makes the component large. */
        large?: boolean | null
        /** Applies appropriate margins to the icon inside of a button when placed to the **left** of another element or text */
        left?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Applies appropriate margins to the icon inside of a button when placed to the **right** of another element or text */
        right?: boolean | null
        /** Specifies a custom font size for the icon */
        size?: number | string | null
        /** Makes the component small. */
        small?: boolean | null
        /** Specifies a custom tag to be used */
        tag?: string | null
        /** Makes the component extra large. */
        xLarge?: boolean | null
        /** Makes the component extra small. */
        xSmall?: boolean | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VImg: DefineComponent<
      {
        /** Alternate text for screen readers. Leave empty for decorative images */
        alt?: string | null
        /** Calculated as `width/height`, so for a 1920x1080px image this will be `1.7778`. Will be calculated automatically if omitted */
        aspectRatio?: string | number | null
        /** Prevents the image from being cropped if it doesn't fit */
        contain?: boolean | null
        /** Apply a custom class to the responsive content div. */
        contentClass?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean | null
        /** Overlays a gradient onto the image. Only supports [linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) syntax, anything else should be done with classes (see examples) */
        gradient?: string | null
        /** Sets the height for the component. */
        height?: number | string | null
        /** Something to show while waiting for the main image to load, typically a small base64-encoded thumbnail. Has a slight blur filter applied.

Use [vuetify-loader](https://github.com/vuetifyjs/vuetify-loader) to generate automatically */
        lazySrc?: string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** Options that are passed to the [Intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) constructor. */
        options?: object | null
        /** Overrides the default to change which parts get cropped off. Uses the same syntax as [`background-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) */
        position?: string | null
        /** For use with `srcset`, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes) */
        sizes?: string | null
        /** The image URL. This prop is mandatory */
        src?: string | object | null
        /** A set of alternate images to use based on device size. [Read more...](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset) */
        srcset?: string | null
        /** The transition to use when switching from `lazy-src` to `src` */
        transition?: boolean | string | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Slot for image placeholder */
          placeholder: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when there is an error */
        error: (arg0: object | string) => void
        /** Emitted when image is loaded */
        load: (arg0: object | string) => void
        /** Emitted when the image starts to load */
        loadstart: (arg0: string) => void
      }
    >

    VInput: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string | null
        /** Changes the background-color of the input */
        backgroundColor?: string | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Reduces the input height */
        dense?: boolean | null
        /** Disable the input */
        disabled?: boolean | null
        /** Puts the input in a manual error state */
        error?: boolean | null
        /** The total number of errors that should display at once */
        errorCount?: number | string | null
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[] | null
        /** Sets the height of the input */
        height?: number | string | null
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string | null
        /** Hides spin buttons on the input when type is set to `number`. */
        hideSpinButtons?: boolean | null
        /** Hint text */
        hint?: string | null
        /** Sets the DOM id on the component */
        id?: string | null
        /** Sets input label */
        label?: string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | null
        /** Displays a list of messages or message if using a string */
        messages?: string | any[] | null
        /** Forces hint to always be visible */
        persistentHint?: boolean | null
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string | null
        /** Puts input in readonly state */
        readonly?: boolean | null
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: InputValidationRules | null
        /** Puts the input in a manual success state */
        success?: boolean | null
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[] | null
        /** Delays validation until blur event */
        validateOnBlur?: boolean | null
        /** The input's value */
        value?: any | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Replaces the default label */
          label: undefined
          message: (args: { key: number; message: string }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the input is changed by user interaction */
        change: (arg0: any) => void
        /** Emitted when appended icon is clicked */
        'click:append': (arg0: Event) => void
        /** Emitted when prepended icon is clicked */
        'click:prepend': (arg0: Event) => void
        /** Emitted when click is pressed */
        mousedown: (arg0: MouseEvent) => void
        /** Emitted when click is released */
        mouseup: (arg0: MouseEvent) => void
        /** The `error.sync` event */
        'update:error': (arg0: boolean) => void
      }
    >

    VItem: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string | null
        /** Removes the ability to click or target the component. */
        disabled?: boolean | null
        /** The value used when the component is selected in a group. If not provided, the index will be used. */
        value?: any | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: (args: {
            active: boolean
            toggle: (...args: any[]) => any
          }) => VNode[]
        }>
      }
    >

    VItemGroup: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Forces a value to always be selected (if available). */
        mandatory?: boolean | null
        /** Sets a maximum number of selections that can be made. */
        max?: number | string | null
        /** Allow multiple selections. The **value** prop must be an _array_. */
        multiple?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** The designated model value for the component. */
        value?: any | null
        /** Apply a custom value comparator function */
        valueComparator?: Function | null
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the component value is changed by user interaction */
        change: (arg0: any[] | any) => void
      }
    >

    VLazy: DefineComponent<
      {
        /** Sets the height for the component. */
        height?: number | string | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** Options that are passed to the [Intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) constructor. */
        options?: object | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: string | null
        /** Controls whether the component is visible or hidden. */
        value?: any | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VListItemActionText: DefineComponent<
      {
        /** Specify a custom tag used on the root element. */
        tag?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VListItemContent: DefineComponent<
      {
        /** Specify a custom tag used on the root element. */
        tag?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VListItemTitle: DefineComponent<
      {
        /** Specify a custom tag used on the root element. */
        tag?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VListItemSubtitle: DefineComponent<
      {
        /** Specify a custom tag used on the root element. */
        tag?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VList: DefineComponent<
      {
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Lowers max height of list tiles */
        dense?: boolean | null
        /** Disables all children `v-list-item` components */
        disabled?: boolean | null
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string | null
        /** Will only collapse when explicitly closed */
        expand?: boolean | null
        /** Remove the highlighted background on active `v-list-item`s */
        flat?: boolean | null
        /** Sets the height for the component. */
        height?: number | string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** An alternative styling that reduces `v-list-item` width and rounds the corners. Typically used with **[v-navigation-drawer](/components/navigation-drawers)** */
        nav?: boolean | null
        /** Removes elevation (box-shadow) and adds a *thin* border. */
        outlined?: boolean | null
        /** Rounds the `v-list-item` edges */
        rounded?: boolean | null
        /** Provides an alternative active style for `v-list-item`. */
        shaped?: boolean | null
        /** Removes top padding. Used when previous sibling is a header */
        subheader?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Increases list-item height for three lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers. */
        threeLine?: boolean | null
        /** Removes the component's **border-radius**. */
        tile?: boolean | null
        /** Increases list-item height for two lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers. */
        twoLine?: boolean | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VListGroup: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string | null
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Disables all children `v-list-item` components */
        disabled?: boolean | null
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean | null
        /** Assign a route namespace. Accepts a string or regexp for determining active state */
        group?: string | RegExp | null
        /** Removes left padding assigned for action icons from group items */
        noAction?: boolean | null
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string | null
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object | null
        /** Designate the component as nested list group */
        subGroup?: boolean | null
        /** Expands / Collapse the list-group */
        value?: any | null
      },
      {
        $scopedSlots: Readonly<{
          /** When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation */
          activator: undefined
          /** Appends an icon to the component, uses the same syntax as `v-icon` */
          appendIcon: undefined
          /** The default Vue slot. */
          default: undefined
          /** Prepends an icon to the component, uses the same syntax as `v-icon` */
          prependIcon: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Event that is emitted when the component is clicked */
        click: (arg0: MouseEvent) => void
      }
    >

    VListItem: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string | null
        /** Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. */
        append?: boolean | null
        /** Applies specified color to the control when in an **active** state or **input-value** is **true** - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`) */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Lowers max height of list tiles */
        dense?: boolean | null
        /** Disables the component */
        disabled?: boolean | null
        /** Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. */
        exact?: boolean | null
        /** Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. */
        exactActiveClass?: string | null
        /** Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. */
        exactPath?: boolean | null
        /** Designates the component as anchor and applies the **href** attribute. */
        href?: string | object | null
        /** If set, the list tile will not be rendered as a link even if it has to/href prop or @click handler */
        inactive?: boolean | null
        /** Controls the **active** state of the item. This is typically used to highlight the component */
        inputValue?: any | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Designates that the component is a link. This is automatic when using the **href** or **to** prop. */
        link?: boolean | null
        /** Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). */
        nuxt?: boolean | null
        /** Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. */
        replace?: boolean | null
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object | null
        /** Allow text selection inside `v-list-item`. This prop uses [user-select](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select) */
        selectable?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Designates the target attribute. This should only be applied when using the **href** prop. */
        target?: string | null
        /** Increases list-item height for three lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers. */
        threeLine?: boolean | null
        /** Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. */
        to?: string | object | null
        /** Increases list-item height for two lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers. */
        twoLine?: boolean | null
        /** The value used when a child of a [v-list-item-group](/components/list-item-groups). */
        value?: any | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: (args: {
            active: boolean
            toggle: (...args: any[]) => any
          }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Event that is emitted when the component is clicked */
        click: (arg0: MouseEvent | KeyboardEvent) => void
        keydown: (arg0: KeyboardEvent) => void
      }
    >

    VListItemAction: DefineComponent<
      {},
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VListItemAvatar: DefineComponent<
      {
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Sets the height for the component. */
        height?: number | string | null
        /** Uses an alternative horizontal style. */
        horizontal?: boolean | null
        /** Designates that the avatar is on the left side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons). */
        left?: boolean | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** Designates that the avatar is on the right side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons). */
        right?: boolean | null
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string | null
        /** Sets the height and width of the component. */
        size?: number | string | null
        /** Removes the component's **border-radius**. */
        tile?: boolean | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VListItemIcon: DefineComponent<
      {},
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VListItemGroup: DefineComponent<
      {
        /** The **active-class** applied to children when they are activated. */
        activeClass?: string | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Forces a value to always be selected (if available). */
        mandatory?: boolean | null
        /** Sets a maximum number of selections that can be made. */
        max?: number | string | null
        /** Allow multiple selections. The **value** prop must be an _array_. */
        multiple?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Sets the active list-item inside the list-group */
        value?: any | null
        /** Apply a custom value comparator function */
        valueComparator?: Function | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the component value is changed by user interaction */
        change: (arg0: any[] | any) => void
      }
    >

    VMain: DefineComponent<
      {
        /** Specify a custom tag used on the root element. */
        tag?: string | null
      },
      {}
    >

    VMenu: DefineComponent<
      {
        /** Applies **position: absolute** to the component. */
        absolute?: boolean | null
        /** Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node. */
        activator?: any | null
        /** Removes overflow re-positioning for the content */
        allowOverflow?: boolean | null
        /** Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. */
        attach?: any | null
        /** Centers list on selected element */
        auto?: boolean | null
        /** Aligns the component towards the bottom. */
        bottom?: boolean | null
        /** Milliseconds to wait before closing component. Only works with the **open-on-hover** prop */
        closeDelay?: number | string | null
        /** Designates if menu should close on outside-activator click */
        closeOnClick?: boolean | null
        /** Designates if menu should close when its content is clicked */
        closeOnContentClick?: boolean | null
        /** Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component. */
        contentClass?: string | null
        /** Applies props/attributes to the detached menu. This is useful because the content is moved to the beginning of the `v-app` component (unless the attach prop is provided) and is not targetable by classes passed directly on the component. You could use this for example for applying a `data-cy` for cypress testing purposes. */
        contentProps?: object | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Removes all keyboard interaction */
        disableKeys?: boolean | null
        /** Disables the menu */
        disabled?: boolean | null
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean | null
        /** Detaches the menu content inside of the component as opposed to the document. */
        internalActivator?: boolean | null
        /** Aligns the component towards the left. */
        left?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets the max height of the menu content */
        maxHeight?: number | string | null
        /** Sets the maximum width for the content */
        maxWidth?: number | string | null
        /** Sets the minimum width for the content */
        minWidth?: number | string | null
        /** Nudge the content to the bottom */
        nudgeBottom?: number | string | null
        /** Nudge the content to the left */
        nudgeLeft?: number | string | null
        /** Nudge the content to the right */
        nudgeRight?: number | string | null
        /** Nudge the content to the top */
        nudgeTop?: number | string | null
        /** Nudge the content width */
        nudgeWidth?: number | string | null
        /** Causes the component to flip to the opposite side when repositioned due to overflow */
        offsetOverflow?: boolean | null
        /** Offset the menu on the x-axis. Works in conjunction with direction left/right */
        offsetX?: boolean | null
        /** Offset the menu on the y-axis. Works in conjunction with direction top/bottom */
        offsetY?: boolean | null
        /** Milliseconds to wait before opening component. Only works with the **open-on-hover** prop */
        openDelay?: number | string | null
        /** Designates whether menu should open on activator click */
        openOnClick?: boolean | null
        openOnFocus?: boolean | null
        /** Designates whether menu should open on activator hover */
        openOnHover?: boolean | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
        /** Used to position the content when not using an activator slot */
        positionX?: number | null
        /** Used to position the content when not using an activator slot */
        positionY?: number | null
        /** The value that is updated when the menu is closed - must be primitive. Dot notation is supported */
        returnValue?: any | null
        /** Aligns the component towards the right. */
        right?: boolean | null
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string | null
        /** Removes the component's **border-radius**. */
        tile?: boolean | null
        /** Aligns the content towards the top. */
        top?: boolean | null
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: boolean | string | null
        /** Controls whether the component is visible or hidden. */
        value?: any | null
        /** The z-index used for the component */
        zIndex?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation */
          activator: (args: {
            attrs: {
              role: string
              'aria-haspopup': boolean
              'aria-expanded': string
            }
            on: { [eventName: string]: eventHandler }
            value: boolean
          }) => VNode[]
          /** The default Vue slot. */
          default: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** The updated bound model */
        input: (arg0: boolean) => void
      }
    >

    VNavigationDrawer: DefineComponent<
      {
        /** Applies **position: absolute** to the component. */
        absolute?: boolean | null
        /** Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop */
        app?: boolean | null
        /** Expands from the bottom of the screen on mobile devices */
        bottom?: boolean | null
        /** A clipped drawer rests under the application toolbar. **Note:** requires the **clipped-left** or **clipped-right** prop on `v-app-bar` to work as intended */
        clipped?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Will automatically open/close drawer when resized depending if mobile or desktop. */
        disableResizeWatcher?: boolean | null
        /** Disables opening of navigation drawer when route changes */
        disableRouteWatcher?: boolean | null
        /** Collapses the drawer to a **mini-variant** until hovering with the mouse */
        expandOnHover?: boolean | null
        /** Applies **position: fixed** to the component. */
        fixed?: boolean | null
        /** A floating drawer has no visible container (no border-right) */
        floating?: boolean | null
        /** Sets the height of the navigation drawer */
        height?: number | string | null
        /** Hides the display of the overlay. */
        hideOverlay?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Condenses navigation drawer width, also accepts the **.sync** modifier. With this, the drawer will re-open when clicking it */
        miniVariant?: boolean | null
        /** Designates the width assigned when the `mini` prop is turned on */
        miniVariantWidth?: number | string | null
        /** Sets the designated mobile breakpoint for the component. This will apply alternate styles for mobile devices such as the `temporary` prop, or activate the `bottom` prop when the breakpoint value is met. Setting the value to `0` will disable this functionality. */
        mobileBreakpoint?: number | string | null
        /** Sets the overlay color. */
        overlayColor?: string | null
        /** Sets the overlay opacity. */
        overlayOpacity?: number | string | null
        /** The drawer remains visible regardless of screen size */
        permanent?: boolean | null
        /** Places the navigation drawer on the right */
        right?: boolean | null
        /** Specifies a [v-img](/components/images) as the component's background. */
        src?: string | object | null
        /** Remove all automated state functionality (resize, mobile, route) and manually control the drawer state */
        stateless?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** A temporary drawer sits above its application and uses a scrim (overlay) to darken the background */
        temporary?: boolean | null
        /** Disable mobile touch functionality */
        touchless?: boolean | null
        /** Controls whether the component is visible or hidden. */
        value?: any | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** A slot at the bottom of the drawer */
          append: undefined
          /** The default Vue slot. */
          default: undefined
          /** Used to modify `v-img` properties when using the **src** prop */
          img: (args: { height: string; src: string | srcObject }) => VNode[]
          /** A slot at the top of the drawer */
          prepend: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** The updated bound model */
        input: (arg0: boolean) => void
        /** Emits event object when transition is complete. */
        transitionend: (arg0: object) => void
        /** The `mini-variant.sync` event */
        'update:mini-variant': (arg0: boolean) => void
      }
    >

    VOtpInput: DefineComponent<
      {
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Disable the input */
        disabled?: boolean | null
        /** Sets the DOM id on the component */
        id?: string | null
        /** The OTP field's length */
        length?: number | string | null
        /** Outlined style applied by default to the input, set to `true` to apply plain style */
        plain?: boolean | null
        /** Puts input in readonly state */
        readonly?: boolean | null
        /** Supported types: `text`, `password`, `number` */
        type?: string | null
        /** The input's value */
        value?: any | null
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the input is changed by user interaction */
        change: (arg0: string) => void
        /** Emitted when the input is filled completely and cursor is blurred */
        finish: (arg0: string) => void
        /** The updated bound model */
        input: (arg0: string) => void
      }
    >

    VOverflowBtn: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string | null
        /** Appends an icon to the outside the component's input, uses same syntax as `v-icon` */
        appendOuterIcon?: string | null
        /** Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. */
        attach?: any | null
        /** When searching, will always highlight the first option */
        autoSelectFirst?: boolean | null
        /** Enables autofocus */
        autofocus?: boolean | null
        /** Changes the background-color of the input */
        backgroundColor?: string | null
        /** Keeps a local _unique_ copy of all items that have been passed through the **items** prop. */
        cacheItems?: boolean | null
        /** Changes display of selections to chips */
        chips?: boolean | null
        /** Applied when using **clearable** and the input is dirty */
        clearIcon?: string | null
        /** Add input clear functionality, default icon is Material Design Icons **mdi-clear** */
        clearable?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. */
        counter?: boolean | number | string | null
        counterValue?: Function | null
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Adds a remove icon to selected chips */
        deletableChips?: boolean | null
        /** Reduces the input height */
        dense?: boolean | null
        /** Disables keyboard lookup */
        disableLookup?: boolean | null
        /** Disables the input */
        disabled?: boolean | null
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean | null
        /** Creates an editable button */
        editable?: boolean | null
        /** Puts the input in a manual error state */
        error?: boolean | null
        /** The total number of errors that should display at once */
        errorCount?: number | string | null
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[] | null
        /** Applies the alternate filled input style */
        filled?: boolean | null
        /** The function used for filtering items */
        filter?: Function | null
        /** Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props */
        flat?: boolean | null
        /** Designates input type as full-width */
        fullWidth?: boolean | null
        /** Sets the height of the input */
        height?: number | string | null
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string | null
        /** Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open. */
        hideNoData?: boolean | null
        /** Do not display in the select menu items that are already selected. Also removes checkboxes from the list when multiple */
        hideSelected?: boolean | null
        /** Hint text */
        hint?: string | null
        /** Sets the DOM id on the component */
        id?: string | null
        /** Sets color of selected items */
        itemColor?: string | null
        /** Set property of **items**'s disabled value */
        itemDisabled?: string | any[] | Function | null
        /** Set property of **items**'s text value */
        itemText?: string | any[] | Function | null
        /** Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479) */
        itemValue?: string | any[] | Function | null
        /** Can be an array of objects or array of strings. When using objects, will look for a text, value and disabled keys. This can be changed using the **item-text**, **item-value** and **item-disabled** props.  Objects that have a **header** or **divider** property are considered special cases and generate a list header or divider; these items are not selectable. */
        items?: any[] | null
        /** Sets input label */
        label?: string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Specifies the height of the loader */
        loaderHeight?: number | string | null
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string | null
        /** Pass props through to the `v-menu` component. Accepts either a string for boolean props `menu-props="auto, overflowY"`, or an object `:menu-props="{ auto: true, overflowY: true }"` */
        menuProps?: string | any[] | object | null
        /** Displays a list of messages or message if using a string */
        messages?: string | any[] | null
        /** Changes select to multiple. Accepts array for value */
        multiple?: boolean | null
        /** Display text when there is no data */
        noDataText?: string | null
        /** Do not apply filtering when searching. Useful when data is being filtered server side */
        noFilter?: boolean | null
        /** When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state */
        openOnClear?: boolean | null
        /** Applies the outlined style to the input */
        outlined?: boolean | null
        /** Forces hint to always be visible */
        persistentHint?: boolean | null
        /** Forces label to always be visible */
        persistentPlaceholder?: boolean | null
        /** Sets the input's placeholder text */
        placeholder?: string | null
        /** Displays prefix text */
        prefix?: string | null
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string | null
        /** Prepends an icon inside the component's input, uses the same syntax as `v-icon` */
        prependInnerIcon?: string | null
        /** Puts input in readonly state */
        readonly?: boolean | null
        /** Changes the selection behavior to return the object directly rather than the value specified with **item-value** */
        returnObject?: boolean | null
        /** Reverses the input orientation */
        reverse?: boolean | null
        /** Adds a border radius to the input */
        rounded?: boolean | null
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: InputValidationRules | null
        /** Use the **.sync** modifier to catch user input from the search input */
        searchInput?: string | null
        /** Creates a segmented button */
        segmented?: boolean | null
        /** Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` */
        shaped?: boolean | null
        /** Label does not move on focus/dirty */
        singleLine?: boolean | null
        /** Changes display of selections to chips with the **small** property */
        smallChips?: boolean | null
        /** Changes the style of the input */
        solo?: boolean | null
        /** Reduces element opacity until focused */
        soloInverted?: boolean | null
        /** Puts the input in a manual success state */
        success?: boolean | null
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[] | null
        /** Displays suffix text */
        suffix?: string | null
        /** Delays validation until blur event */
        validateOnBlur?: boolean | null
        /** The input's value */
        value?: any | null
        /** The comparison algorithm used for values. [More info](https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/util/helpers.ts) */
        valueComparator?: Function | null
      },
      {
        $scopedSlots: Readonly<{
          /** Adds an item inside the input and after input content */
          append: undefined
          /** Adds an item after menu content */
          'append-item': undefined
          /** Adds an item outside the input and after input content */
          'append-outer': undefined
          counter: (args: {
            props: {
              dark: boolean
              light: boolean
              max: string | number
              value: string
            }
          }) => VNode[]
          /** Define a custom item appearance */
          item: (args: {
            parent: VueComponent
            item: { [key: keyof any]: any }
            on: { [key: keyof any]: any }
            attrs: { [key: keyof any]: any }
          }) => VNode[]
          /** Replaces the default label */
          label: undefined
          message: (args: { key: number; message: string }) => VNode[]
          'no-data': undefined
          /** Adds an item outside the input and before input content */
          prepend: undefined
          /** Adds an item inside the input and before input content */
          'prepend-inner': undefined
          /** Adds an item before menu content */
          'prepend-item': undefined
          /** Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) */
          progress: undefined
          /** Define a custom selection appearance */
          selection: (args: {
            parent: VueComponent
            item: { [key: keyof any]: any }
            index: number
            select: (...args: any[]) => any
            selected: boolean
            disabled: boolean
          }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the input is blurred */
        blur: (arg0: Event) => void
        /** Emitted when the input is changed by user interaction */
        change: (arg0: any) => void
        /** Emitted when input is clicked */
        click: (arg0: MouseEvent) => void
        /** Emitted when appended icon is clicked */
        'click:append': (arg0: Event) => void
        /** Emitted when appended outer icon is clicked */
        'click:append-outer': (arg0: Event) => void
        /** Emitted when clearable icon clicked */
        'click:clear': (arg0: Event) => void
        /** Emitted when prepended icon is clicked */
        'click:prepend': (arg0: Event) => void
        /** Emitted when prepended inner icon is clicked */
        'click:prepend-inner': (arg0: Event) => void
        /** Emitted when component is focused */
        focus: (arg0: Event) => void
        /** The updated bound model */
        input: (arg0: any) => void
        /** Emitted when **any** key is pressed */
        keydown: (arg0: KeyboardEvent) => void
        /** Emitted when click is pressed */
        mousedown: (arg0: MouseEvent) => void
        /** Emitted when click is released */
        mouseup: (arg0: MouseEvent) => void
        /** The `error.sync` event */
        'update:error': (arg0: boolean) => void
        /** Emitted when menu item is selected using keyboard arrows */
        'update:list-index': (arg0: number) => void
        /** The `search-input.sync` event */
        'update:search-input': (arg0: string) => void
      }
    >

    VOverlay: DefineComponent<
      {
        /** Applies **position: absolute** to the component. */
        absolute?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets the overlay opacity */
        opacity?: number | string | null
        /** Controls whether the component is visible or hidden. */
        value?: any | null
        /** The z-index used for the component */
        zIndex?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VPagination: DefineComponent<
      {
        /** Shape pagination elements as circles */ circle?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        currentPageAriaLabel?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Disables component */
        disabled?: boolean | null
        /** The length of the pagination component */
        length?: number | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        navigationColor?: string | null
        navigationTextColor?: string | null
        nextAriaLabel?: string | null
        /** Specify the icon to use for the next icon */
        nextIcon?: string | null
        pageAriaLabel?: string | null
        /** Specify the icon to use for the prev icon */
        prevIcon?: string | null
        previousAriaLabel?: string | null
        /** Specify the max total visible pagination numbers */
        totalVisible?: number | string | null
        /** Current selected page */
        value?: number | null
        wrapperAriaLabel?: string | null
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {
        /** The updated bound model */
        input: (arg0: number) => void
        /** Emitted when going to next item */
        next: (arg0: void) => void
        /** Emitted when going to previous item */
        previous: (arg0: void) => void
      }
    >

    VSheet: DefineComponent<
      {
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string | null
        /** Sets the height for the component. */
        height?: number | string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** Removes elevation (box-shadow) and adds a *thin* border. */
        outlined?: boolean | null
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string | null
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Removes the component's **border-radius**. */
        tile?: boolean | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VParallax: DefineComponent<
      {
        /** Attaches an alt property to the parallax image */
        alt?: string | null
        /** Sets the height for the component */
        height?: string | number | null
        /** The image to parallax */
        src?: string | null
        /** A set of alternate images to use based on device size. [Read more...](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset) */
        srcset?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VProgressCircular: DefineComponent<
      {
        /** Deprecated - Pending removal */ button?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Constantly animates, use when loading progress is unknown. */
        indeterminate?: boolean | null
        /** Rotates the circle start point in deg */
        rotate?: number | string | null
        /** Sets the diameter of the circle in pixels */
        size?: number | string | null
        /** The percentage value for current progress */
        value?: number | string | null
        /** Sets the stroke of the circle in pixels */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: (args: { value: number }) => VNode[]
        }>
      }
    >

    VProgressLinear: DefineComponent<
      {
        /** Applies **position: absolute** to the component. */
        absolute?: boolean | null
        /** Reduce the height to 0, hiding component */
        active?: boolean | null
        /** Background color, set to component's color if null */
        backgroundColor?: string | null
        /** Background opacity, if null it defaults to 0.3 if background color is not specified or 1 otherwise */
        backgroundOpacity?: number | string | null
        /** Aligns the component towards the bottom. */
        bottom?: boolean | null
        /** The percentage value for the buffer */
        bufferValue?: number | string | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Applies **position: fixed** to the component. */
        fixed?: boolean | null
        /** Sets the height for the component */
        height?: number | string | null
        /** Constantly animates, use when loading progress is unknown. */
        indeterminate?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Animates like **indeterminate** prop but inverse */
        query?: boolean | null
        /** Displays reversed progress (right to left in LTR mode and left to right in RTL) */
        reverse?: boolean | null
        /** Adds a border radius to the progress component */
        rounded?: boolean | null
        /** An alternative style for portraying loading that works in tandem with **buffer-value** */
        stream?: boolean | null
        /** Adds a stripe background to the filled portion of the progress component */
        striped?: boolean | null
        /** Aligns the content towards the top. */
        top?: boolean | null
        /** The designated model value for the component. */
        value?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** Provides the current value of the component */
          default: (args: { value: number }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the component value is changed by user interaction */
        change: (arg0: number) => void
      }
    >

    VRadioGroup: DefineComponent<
      {
        /** The **active-class** applied to children when they are activated. */
        activeClass?: string | null
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string | null
        /** Changes the background-color of the input */
        backgroundColor?: string | null
        /** Displays radio buttons in column */
        column?: boolean | null
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Reduces the input height */
        dense?: boolean | null
        /** Disable the input */
        disabled?: boolean | null
        /** Puts the input in a manual error state */
        error?: boolean | null
        /** The total number of errors that should display at once */
        errorCount?: number | string | null
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[] | null
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string | null
        /** Hint text */
        hint?: string | null
        /** Sets the DOM id on the component */
        id?: string | null
        /** Sets input label */
        label?: string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Forces a value to always be selected (if available). */
        mandatory?: boolean | null
        /** Sets a maximum number of selections that can be made. */
        max?: number | string | null
        /** Displays a list of messages or message if using a string */
        messages?: string | any[] | null
        /** Allow multiple selections. The **value** prop must be an _array_. */
        multiple?: boolean | null
        /** Sets the component's name attribute */
        name?: string | null
        /** Forces hint to always be visible */
        persistentHint?: boolean | null
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string | null
        /** Puts input in readonly state */
        readonly?: boolean | null
        /** Displays radio buttons in row */
        row?: boolean | null
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: InputValidationRules | null
        /** Puts the input in a manual success state */
        success?: boolean | null
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[] | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Delays validation until blur event */
        validateOnBlur?: boolean | null
        /** The input's value */
        value?: any | null
        /** Apply a custom value comparator function */
        valueComparator?: Function | null
      },
      {
        $scopedSlots: Readonly<{
          /** Adds an item inside the input and after input content */
          append: undefined
          /** The default Vue slot. */
          default: undefined
          /** Replaces the default label */
          label: undefined
          message: (args: { key: number; message: string }) => VNode[]
          /** Adds an item outside the input and before input content */
          prepend: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the input is changed by user interaction */
        change: (arg0: any) => void
        /** Emitted when appended icon is clicked */
        'click:append': (arg0: Event) => void
        /** Emitted when prepended icon is clicked */
        'click:prepend': (arg0: Event) => void
        /** Emitted when click is pressed */
        mousedown: (arg0: MouseEvent) => void
        /** Emitted when click is released */
        mouseup: (arg0: MouseEvent) => void
        /** The `error.sync` event */
        'update:error': (arg0: boolean) => void
      }
    >

    VRadio: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Removes the ability to click or target the component. */
        disabled?: boolean | null
        /** Sets the DOM id on the component */
        id?: string | null
        /** Sets input label */
        label?: string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets the component's name attribute */
        name?: string | null
        /** The icon used when inactive */
        offIcon?: string | null
        /** The icon used when active */
        onIcon?: string | null
        /** Puts input in readonly state */
        readonly?: boolean | null
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object | null
        /** The value used when the component is selected in a group. If not provided, the index will be used. */
        value?: any | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Replaces the default label */
          label: undefined
          message: (args: { key: number; message: string }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the input is changed by user interaction */
        change: (arg0: any) => void
        /** Emitted when input is clicked. **Note:** the **change** event should be used instead of **click** when monitoring state change */
        click: (arg0: MouseEvent) => void
        /** Emitted when appended icon is clicked */
        'click:append': (arg0: Event) => void
        /** Emitted when prepended icon is clicked */
        'click:prepend': (arg0: Event) => void
        /** Emitted when click is pressed */
        mousedown: (arg0: MouseEvent) => void
        /** Emitted when click is released */
        mouseup: (arg0: MouseEvent) => void
        /** The `error.sync` event */
        'update:error': (arg0: boolean) => void
      }
    >

    VRangeSlider: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string | null
        /** Changes the background-color of the input */
        backgroundColor?: string | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Reduces the input height */
        dense?: boolean | null
        /** Disable the input */
        disabled?: boolean | null
        /** Puts the input in a manual error state */
        error?: boolean | null
        /** The total number of errors that should display at once */
        errorCount?: number | string | null
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[] | null
        /** Sets the height of the input */
        height?: number | string | null
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string | null
        /** Hint text */
        hint?: string | null
        /** Sets the DOM id on the component */
        id?: string | null
        /** Reverse the label position. Works with **rtl**. */
        inverseLabel?: boolean | null
        /** Sets input label */
        label?: string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Specifies the height of the loader */
        loaderHeight?: number | string | null
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string | null
        /** Sets the maximum allowed value */
        max?: number | string | null
        /** Displays a list of messages or message if using a string */
        messages?: string | any[] | null
        /** Sets the minimum allowed value */
        min?: number | string | null
        /** Forces hint to always be visible */
        persistentHint?: boolean | null
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string | null
        /** Puts input in readonly state */
        readonly?: boolean | null
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: InputValidationRules | null
        /** If greater than 0, sets step interval for ticks */
        step?: number | string | null
        /** Puts the input in a manual success state */
        success?: boolean | null
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[] | null
        /** Sets the thumb and thumb label color */
        thumbColor?: string | null
        /** Show thumb label. If `true` it shows label when using slider. If set to `'always'` it always shows label. */
        thumbLabel?: boolean | string | null
        /** Controls the size of the thumb label. */
        thumbSize?: number | string | null
        /** When provided with Array<string>, will attempt to map the labels to each step in index order */
        tickLabels?: any[] | null
        /** Controls the size of **ticks** */
        tickSize?: number | string | null
        /** Show track ticks. If `true` it shows ticks when using slider. If set to `'always'` it always shows ticks. */
        ticks?: boolean | string | null
        /** Sets the track's color */
        trackColor?: string | null
        /** Sets the track's fill color */
        trackFillColor?: string | null
        /** Delays validation until blur event */
        validateOnBlur?: boolean | null
        /** The input's value */
        value?: any | null
        /** Changes slider direction to vertical */
        vertical?: boolean | null
      },
      {
        $scopedSlots: Readonly<{
          /** Adds an item inside the input and after input content */
          append: undefined
          /** The default Vue slot. */
          default: undefined
          /** Replaces the default label */
          label: undefined
          message: (args: { key: number; message: string }) => VNode[]
          /** Adds an item outside the input and before input content */
          prepend: undefined
          /** Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) */
          progress: undefined
          /** Replaces the content inside the thumb label */
          'thumb-label': (args: { value: number | string }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the input is changed by user interaction */
        change: (arg0: any[]) => void
        /** Emitted when input is clicked */
        click: (arg0: MouseEvent) => void
        /** Emitted when appended icon is clicked */
        'click:append': (arg0: Event) => void
        /** Emitted when prepended icon is clicked */
        'click:prepend': (arg0: Event) => void
        /** Slider value emitted at the end of slider movement */
        end: (arg0: any[]) => void
        /** The updated bound model */
        input: (arg0: any[]) => void
        /** Emitted when click is pressed */
        mousedown: (arg0: MouseEvent) => void
        /** Emitted when click is released */
        mouseup: (arg0: MouseEvent) => void
        /** Slider value emitted at start of slider movement */
        start: (arg0: any[]) => void
        /** The `error.sync` event */
        'update:error': (arg0: boolean) => void
      }
    >

    VRating: DefineComponent<
      {
        /** The color used for empty icons */ backgroundColor?: string | null
        /** Allows for the component to be cleared. Triggers when the icon containing the current value is clicked. */
        clearable?: boolean | null
        /** Milliseconds to wait before closing component. Only applies to hover and focus events. */
        closeDelay?: number | string | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Icons have a smaller size */
        dense?: boolean | null
        /** The icon displayed when empty */
        emptyIcon?: string | null
        /** The icon displayed when full */
        fullIcon?: string | null
        /** The icon displayed when half (requires **half-increments** prop) */
        halfIcon?: string | null
        /** Allows the selection of half increments */
        halfIncrements?: boolean | null
        /** Provides visual feedback when hovering over icons */
        hover?: boolean | null
        /** The **aria-label** used for icons */
        iconLabel?: string | null
        /** Makes the component large. */
        large?: boolean | null
        /** The amount of ratings to show */
        length?: number | string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Milliseconds to wait before opening component. Only applies to hover and focus events. */
        openDelay?: number | string | null
        /** Removes all hover effects and pointer events */
        readonly?: boolean | null
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object | null
        /** Sets the height and width of the component. */
        size?: number | string | null
        /** Makes the component small. */
        small?: boolean | null
        /** The rating value */
        value?: number | null
        /** Makes the component extra large. */
        xLarge?: boolean | null
        /** Makes the component extra small. */
        xSmall?: boolean | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** The slot for rendered items */
          item: (args: {
            click: (i: number) => void
            index: number
            isFilled: boolean
            isHalfFilled: boolean | undefined
            isHalfHovered: boolean | undefined
            isHovered: boolean
            value: number
          }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emits the rating number when this value changes */
        input: (arg0: Number) => void
      }
    >

    VResponsive: DefineComponent<
      {
        /** Sets a base aspect ratio, calculated as width/height. This will only set a **minimum** height, the component can still grow if it has a lot of content. */
        aspectRatio?: string | number | null
        /** Apply a custom class to the responsive content div. */
        contentClass?: string | null
        /** Sets the height for the component. */
        height?: number | string | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VSelect: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string | null
        /** Appends an icon to the outside the component's input, uses same syntax as `v-icon` */
        appendOuterIcon?: string | null
        /** Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. */
        attach?: any | null
        /** Enables autofocus */
        autofocus?: boolean | null
        /** Changes the background-color of the input */
        backgroundColor?: string | null
        /** Keeps a local _unique_ copy of all items that have been passed through the **items** prop. */
        cacheItems?: boolean | null
        /** Changes display of selections to chips */
        chips?: boolean | null
        /** Applied when using **clearable** and the input is dirty */
        clearIcon?: string | null
        /** Add input clear functionality, default icon is Material Design Icons **mdi-clear** */
        clearable?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. */
        counter?: boolean | number | string | null
        counterValue?: Function | null
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Adds a remove icon to selected chips */
        deletableChips?: boolean | null
        /** Reduces the input height */
        dense?: boolean | null
        /** Disables keyboard lookup */
        disableLookup?: boolean | null
        /** Disables the input */
        disabled?: boolean | null
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean | null
        /** Puts the input in a manual error state */
        error?: boolean | null
        /** The total number of errors that should display at once */
        errorCount?: number | string | null
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[] | null
        /** Applies the alternate filled input style */
        filled?: boolean | null
        /** Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props */
        flat?: boolean | null
        /** Designates input type as full-width */
        fullWidth?: boolean | null
        /** Sets the height of the input */
        height?: number | string | null
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string | null
        /** Do not display in the select menu items that are already selected. Also removes checkboxes from the list when multiple */
        hideSelected?: boolean | null
        /** Hint text */
        hint?: string | null
        /** Sets the DOM id on the component */
        id?: string | null
        /** Sets color of selected items */
        itemColor?: string | null
        /** Set property of **items**'s disabled value */
        itemDisabled?: string | any[] | Function | null
        /** Set property of **items**'s text value */
        itemText?: string | any[] | Function | null
        /** Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479) */
        itemValue?: string | any[] | Function | null
        /** Can be an array of objects or array of strings. When using objects, will look for a text, value and disabled keys. This can be changed using the **item-text**, **item-value** and **item-disabled** props.  Objects that have a **header** or **divider** property are considered special cases and generate a list header or divider; these items are not selectable. */
        items?: any[] | null
        /** Sets input label */
        label?: string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Specifies the height of the loader */
        loaderHeight?: number | string | null
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string | null
        /** Pass props through to the `v-menu` component. Accepts either a string for boolean props `menu-props="auto, overflowY"`, or an object `:menu-props="{ auto: true, overflowY: true }"` */
        menuProps?: string | any[] | object | null
        /** Displays a list of messages or message if using a string */
        messages?: string | any[] | null
        /** Changes select to multiple. Accepts array for value */
        multiple?: boolean | null
        /** Display text when there is no data */
        noDataText?: string | null
        /** When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state */
        openOnClear?: boolean | null
        /** Applies the outlined style to the input */
        outlined?: boolean | null
        /** Forces hint to always be visible */
        persistentHint?: boolean | null
        /** Forces placeholder to always be visible */
        persistentPlaceholder?: boolean | null
        /** Sets the input's placeholder text */
        placeholder?: string | null
        /** Displays prefix text */
        prefix?: string | null
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string | null
        /** Prepends an icon inside the component's input, uses the same syntax as `v-icon` */
        prependInnerIcon?: string | null
        /** Puts input in readonly state */
        readonly?: boolean | null
        /** Changes the selection behavior to return the object directly rather than the value specified with **item-value** */
        returnObject?: boolean | null
        /** Reverses the input orientation */
        reverse?: boolean | null
        /** Adds a border radius to the input */
        rounded?: boolean | null
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: InputValidationRules | null
        /** Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` */
        shaped?: boolean | null
        /** Label does not move on focus/dirty */
        singleLine?: boolean | null
        /** Changes display of selections to chips with the **small** property */
        smallChips?: boolean | null
        /** Changes the style of the input */
        solo?: boolean | null
        /** Reduces element opacity until focused */
        soloInverted?: boolean | null
        /** Puts the input in a manual success state */
        success?: boolean | null
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[] | null
        /** Displays suffix text */
        suffix?: string | null
        /** Delays validation until blur event */
        validateOnBlur?: boolean | null
        /** The input's value */
        value?: any | null
        /** The comparison algorithm used for values. [More info](https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/util/helpers.ts) */
        valueComparator?: Function | null
      },
      {
        $scopedSlots: Readonly<{
          /** Adds an item inside the input and after input content */
          append: undefined
          /** Adds an item after menu content */
          'append-item': undefined
          /** Adds an item outside the input and after input content */
          'append-outer': undefined
          counter: (args: {
            props: {
              dark: boolean
              light: boolean
              max: string | number
              value: string
            }
          }) => VNode[]
          /** Define a custom item appearance */
          item: (args: {
            parent: VueComponent
            item: { [key: keyof any]: any }
            on: { [key: keyof any]: any }
            attrs: { [key: keyof any]: any }
          }) => VNode[]
          /** Replaces the default label */
          label: undefined
          message: (args: { key: number; message: string }) => VNode[]
          'no-data': undefined
          /** Adds an item outside the input and before input content */
          prepend: undefined
          /** Adds an item inside the input and before input content */
          'prepend-inner': undefined
          /** Adds an item before menu content */
          'prepend-item': undefined
          /** Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) */
          progress: undefined
          /** Define a custom selection appearance */
          selection: (args: {
            parent: VueComponent
            item: { [key: keyof any]: any }
            index: number
            select: (...args: any[]) => any
            selected: boolean
            disabled: boolean
          }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the input is blurred */
        blur: (arg0: Event) => void
        /** Emitted when the input is changed by user interaction */
        change: (arg0: any) => void
        /** Emitted when input is clicked */
        click: (arg0: MouseEvent) => void
        /** Emitted when appended icon is clicked */
        'click:append': (arg0: Event) => void
        /** Emitted when appended outer icon is clicked */
        'click:append-outer': (arg0: Event) => void
        /** Emitted when clearable icon clicked */
        'click:clear': (arg0: Event) => void
        /** Emitted when prepended icon is clicked */
        'click:prepend': (arg0: Event) => void
        /** Emitted when prepended inner icon is clicked */
        'click:prepend-inner': (arg0: Event) => void
        /** Emitted when component is focused */
        focus: (arg0: Event) => void
        /** The updated bound model */
        input: (arg0: any) => void
        /** Emitted when **any** key is pressed */
        keydown: (arg0: KeyboardEvent) => void
        /** Emitted when click is pressed */
        mousedown: (arg0: MouseEvent) => void
        /** Emitted when click is released */
        mouseup: (arg0: MouseEvent) => void
        /** The `error.sync` event */
        'update:error': (arg0: boolean) => void
        /** Emitted when menu item is selected using keyboard arrows */
        'update:list-index': (arg0: number) => void
        /** The `search-input.sync` event */
        'update:search-input': (arg0: string) => void
      }
    >

    VSkeletonLoader: DefineComponent<
      {
        /** Remove the loading animation from the skeleton */
        boilerplate?: boolean | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string | null
        /** Sets the height for the component. */
        height?: number | string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Applies a loading animation with a on-hover loading cursor. A value of **false** will only work when there is content in the `default` slot. */
        loading?: boolean | null
        loadingText?: string | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** Removes the component's border-radius */
        tile?: boolean | null
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: string | null
        /** A string delimited list of skeleton components to create such as `type="text@3"` or `type="card, list-item"`. Will recursively generate a corresponding skeleton from the provided string. Also supports short-hand for multiple elements such as **article@3** and **paragraph@2** which will generate 3 _article_ skeletons and 2 _paragraph_ skeletons. Please see below for a list of available pre-defined options. */
        type?: string | null
        /** A custom types object that will be combined with the pre-defined options. For a list of available pre-defined options, see the **type** prop. */
        types?: object | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VSlider: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string | null
        /** Changes the background-color of the input */
        backgroundColor?: string | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Reduces the input height */
        dense?: boolean | null
        /** Disable the input */
        disabled?: boolean | null
        /** Puts the input in a manual error state */
        error?: boolean | null
        /** The total number of errors that should display at once */
        errorCount?: number | string | null
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[] | null
        /** Sets the height of the input */
        height?: number | string | null
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string | null
        /** Hint text */
        hint?: string | null
        /** Sets the DOM id on the component */
        id?: string | null
        /** Reverse the label position. Works with **rtl**. */
        inverseLabel?: boolean | null
        /** Sets input label */
        label?: string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Specifies the height of the loader */
        loaderHeight?: number | string | null
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string | null
        /** Sets the maximum allowed value */
        max?: number | string | null
        /** Displays a list of messages or message if using a string */
        messages?: string | any[] | null
        /** Sets the minimum allowed value */
        min?: number | string | null
        /** Forces hint to always be visible */
        persistentHint?: boolean | null
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string | null
        /** Puts input in readonly state */
        readonly?: boolean | null
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: InputValidationRules | null
        /** If greater than 0, sets step interval for ticks */
        step?: number | string | null
        /** Puts the input in a manual success state */
        success?: boolean | null
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[] | null
        /** Sets the thumb and thumb label color */
        thumbColor?: string | null
        /** Show thumb label. If `true` it shows label when using slider. If set to `'always'` it always shows label. */
        thumbLabel?: boolean | string | null
        /** Controls the size of the thumb label. */
        thumbSize?: number | string | null
        /** When provided with Array<string>, will attempt to map the labels to each step in index order */
        tickLabels?: any[] | null
        /** Controls the size of **ticks** */
        tickSize?: number | string | null
        /** Show track ticks. If `true` it shows ticks when using slider. If set to `'always'` it always shows ticks. */
        ticks?: boolean | string | null
        /** Sets the track's color */
        trackColor?: string | null
        /** Sets the track's fill color */
        trackFillColor?: string | null
        /** Delays validation until blur event */
        validateOnBlur?: boolean | null
        /** The input's value */
        value?: any | null
        /** Changes slider direction to vertical */
        vertical?: boolean | null
      },
      {
        $scopedSlots: Readonly<{
          /** Adds an item inside the input and after input content */
          append: undefined
          /** The default Vue slot. */
          default: undefined
          /** Replaces the default label */
          label: undefined
          message: (args: { key: number; message: string }) => VNode[]
          /** Adds an item outside the input and before input content */
          prepend: undefined
          /** Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) */
          progress: undefined
          /** Replaces the content inside the thumb label */
          'thumb-label': (args: { value: number | string }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the input is changed by user interaction */
        change: (arg0: number) => void
        /** Emitted when input is clicked */
        click: (arg0: MouseEvent) => void
        /** Emitted when appended icon is clicked */
        'click:append': (arg0: Event) => void
        /** Emitted when prepended icon is clicked */
        'click:prepend': (arg0: Event) => void
        /** Slider value emitted at the end of slider movement */
        end: (arg0: number) => void
        /** The updated bound model */
        input: (arg0: number) => void
        /** Emitted when click is pressed */
        mousedown: (arg0: MouseEvent) => void
        /** Emitted when click is released */
        mouseup: (arg0: MouseEvent) => void
        /** Slider value emitted at start of slider movement */
        start: (arg0: number) => void
        /** The `error.sync` event */
        'update:error': (arg0: boolean) => void
      }
    >

    VSlideGroup: DefineComponent<
      {
        /** The **active-class** applied to children when they are activated. */
        activeClass?: string | null
        /** Forces the selected component to be centered */
        centerActive?: boolean | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Forces a value to always be selected (if available). */
        mandatory?: boolean | null
        /** Sets a maximum number of selections that can be made. */
        max?: number | string | null
        /** Sets the designated mobile breakpoint for the component. */
        mobileBreakpoint?: number | string | null
        /** Allow multiple selections. The **value** prop must be an _array_. */
        multiple?: boolean | null
        /** The appended slot when arrows are shown */
        nextIcon?: string | null
        /** The prepended slot when arrows are shown */
        prevIcon?: string | null
        /** Change when the overflow arrow indicators are shown. By **default**, arrows *always* display on Desktop when the container is overflowing. When the container overflows on mobile, arrows are not shown by default. A **show-arrows** value of `true` allows these arrows to show on Mobile if the container overflowing. A value of `desktop` *always* displays arrows on Desktop while a value of `mobile` always displays arrows on Mobile. A value of `always` always displays arrows on Desktop *and* Mobile. A value of `never` always hides the arrows. Find more information on how to customize breakpoint thresholds on the [breakpoints page](/customizing/breakpoints). */
        showArrows?: boolean | string | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** The designated model value for the component. */
        value?: any | null
        /** Apply a custom value comparator function */
        valueComparator?: Function | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** The next slot */
          next: undefined
          /** The prev slot */
          prev: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the component value is changed by user interaction */
        change: (arg0: any[] | any) => void
        /** Emitted when the next is clicked */
        'click:next': (arg0: void) => void
        /** Emitted when the prev is clicked */
        'click:prev': (arg0: void) => void
      }
    >

    VSlideItem: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string | null
        /** Removes the ability to click or target the component. */
        disabled?: boolean | null
        /** The value used when the component is selected in a group. If not provided, the index will be used. */
        value?: any | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: (args: {
            active: boolean
            toggle: (...args: any[]) => any
          }) => VNode[]
        }>
      }
    >

    VSnackbar: DefineComponent<
      {
        /** Applies **position: absolute** to the component. */
        absolute?: boolean | null
        /** Respects boundaries of—and will not overlap with—other `app` components like `v-app-bar`, `v-navigation-drawer`, and `v-footer`. */
        app?: boolean | null
        /** Aligns the component towards the bottom. */
        bottom?: boolean | null
        /** Positions the snackbar in the center of the screen, (x and y axis). */
        centered?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Apply a custom class to the snackbar content */
        contentClass?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string | null
        /** Sets the height for the component. */
        height?: number | string | null
        /** Aligns the component towards the left. */
        left?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** Gives the snackbar a larger minimum height. */
        multiLine?: boolean | null
        /** Removes elevation (box-shadow) and adds a *thin* border. */
        outlined?: boolean | null
        /** Aligns the component towards the right. */
        right?: boolean | null
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string | null
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Applies the defined **color** to text and a low opacity background of the same. */
        text?: boolean | null
        /** Removes the component's **border-radius**. */
        tile?: boolean | null
        /** Time (in milliseconds) to wait until snackbar is automatically hidden.  Use `-1` to keep open indefinitely (`0` in version < 2.3 ). It is recommended for this number to be between `4000` and `10000`. Changes to this property will reset the timeout. */
        timeout?: number | string | null
        /** Aligns the content towards the top. */
        top?: boolean | null
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: boolean | string | null
        /** Controls whether the component is visible or hidden. */
        value?: any | null
        /** Stacks snackbar content on top of the actions (button). */
        vertical?: boolean | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** Used to bind styles to [v-btn](/components/buttons) to match MD2 specification. */
          action: (args: { attrs: { [key: keyof any]: any } }) => VNode[]
          /** The default Vue slot. */
          default: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** The updated bound model */
        input: (arg0: boolean) => void
      }
    >

    VSparkline: DefineComponent<
      {
        /** Trace the length of the line when first rendered */
        autoDraw?: boolean | null
        /** Amount of time (in ms) to run the trace animation */
        autoDrawDuration?: number | null
        /** The easing function to use for the trace animation */
        autoDrawEasing?: string | null
        /** Automatically expand bars to use space efficiently */
        autoLineWidth?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Using the **fill** property allows you to better customize the look and feel of your sparkline. */
        fill?: boolean | null
        /** An array of colors to use as a linear-gradient */
        gradient?: any[] | null
        /** The direction the gradient should run */
        gradientDirection?: string | null
        /** Height of the SVG trendline or bars */
        height?: string | number | null
        /** The label font size */
        labelSize?: number | string | null
        /** An array of string labels that correspond to the same index as its data counterpart */
        labels?: any[] | null
        /** The thickness of the line, in px */
        lineWidth?: string | number | null
        /** Low `smooth` or high `line-width` values may result in cropping, increase padding to compensate */
        padding?: string | number | null
        /** Show labels below each data point */
        showLabels?: boolean | null
        /** Number of px to use as a corner radius. `true` defaults to 8, `false` is 0 */
        smooth?: boolean | number | string | null
        /** Choose between a trendline or bars */
        type?: string | null
        /** An array of numbers. */
        value?: any[] | null
        /** Width of the SVG trendline or bars */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** Replaces the default label */
          label: undefined
        }>
      }
    >

    VSpeedDial: DefineComponent<
      {
        /** Applies **position: absolute** to the component. */
        absolute?: boolean | null
        /** Aligns the component towards the bottom. */
        bottom?: boolean | null
        /** Direction in which speed-dial content will show. Possible values are `top`, `bottom`, `left`, `right`. */
        direction?: string | null
        /** Applies **position: fixed** to the component. */
        fixed?: boolean | null
        /** Aligns the component towards the left. */
        left?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Opens speed-dial on hover */
        openOnHover?: boolean | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
        /** Aligns the component towards the right. */
        right?: boolean | null
        /** Aligns the content towards the top. */
        top?: boolean | null
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: string | null
        /** Controls whether the component is visible or hidden. */
        value?: any | null
      },
      {
        $scopedSlots: Readonly<{
          /** When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation */
          activator: undefined
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VStepper: DefineComponent<
      {
        /** Places the labels beneath the step */ altLabels?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string | null
        /** Removes the stepper's elevation. */
        flat?: boolean | null
        /** Sets the height for the component. */
        height?: number | string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** Allow user to jump to any step */
        nonLinear?: boolean | null
        /** Removes elevation (box-shadow) and adds a *thin* border. */
        outlined?: boolean | null
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string | null
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Removes the component's **border-radius**. */
        tile?: boolean | null
        /** The designated model value for the component. */
        value?: any | null
        /** Display steps vertically */
        vertical?: boolean | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when step is changed by user interaction */
        change: (arg0: number) => void
      }
    >

    VStepperContent: DefineComponent<
      {
        /** Sets step to associate the content to */
        step?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VStepperStep: DefineComponent<
      {
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Marks step as complete */
        complete?: boolean | null
        /** Icon to display when step is marked as completed */
        completeIcon?: string | null
        /** Icon to display when step is editable */
        editIcon?: string | null
        /** Marks step as editable */
        editable?: boolean | null
        /** Icon to display when step has an error */
        errorIcon?: string | null
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: InputValidationRules | null
        /** Content to display inside step circle */
        step?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when component is clicked */
        click: (arg0: MouseEvent) => void
      }
    >

    VStepperHeader: DefineComponent<
      {
        /** Specify a custom tag used on the root element. */
        tag?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VStepperItems: DefineComponent<
      {
        /** Specify a custom tag used on the root element. */
        tag?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VSubheader: DefineComponent<
      {
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Adds indentation (72px) */
        inset?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VSwitch: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string | null
        /** Changes the background-color of the input */
        backgroundColor?: string | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Reduces the input height */
        dense?: boolean | null
        /** Disable the input */
        disabled?: boolean | null
        /** Puts the input in a manual error state */
        error?: boolean | null
        /** The total number of errors that should display at once */
        errorCount?: number | string | null
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[] | null
        /** Sets value for falsy state */
        falseValue?: any | null
        /** Display component without elevation. Default elevation for thumb is 4dp, `flat` resets it */
        flat?: boolean | null
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string | null
        /** Hint text */
        hint?: string | null
        /** Sets the DOM id on the component */
        id?: string | null
        /** The **v-model** bound value */
        inputValue?: any | null
        /** Enlarge the `v-switch` track to encompass the thumb */
        inset?: boolean | null
        /** Sets input label */
        label?: string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Displays circular progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - primary, secondary, success, info, warning, error) or a Boolean which uses the component color (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string | null
        /** Displays a list of messages or message if using a string */
        messages?: string | any[] | null
        /** Changes expected model to an array */
        multiple?: boolean | null
        /** Forces hint to always be visible */
        persistentHint?: boolean | null
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string | null
        /** Puts input in readonly state */
        readonly?: boolean | null
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object | null
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: InputValidationRules | null
        /** Puts the input in a manual success state */
        success?: boolean | null
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[] | null
        /** Sets value for truthy state */
        trueValue?: any | null
        /** Delays validation until blur event */
        validateOnBlur?: boolean | null
        /** The input's value */
        value?: any | null
        /** Apply a custom value comparator function */
        valueComparator?: Function | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Replaces the default label */
          label: undefined
          message: (args: { key: number; message: string }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the input is changed by user interaction */
        change: (arg0: any) => void
        /** Emitted when input is clicked. **Note:** the **change** event should be used instead of **click** when monitoring state change */
        click: (arg0: MouseEvent) => void
        /** Emitted when appended icon is clicked */
        'click:append': (arg0: Event) => void
        /** Emitted when prepended icon is clicked */
        'click:prepend': (arg0: Event) => void
        /** Emitted when click is pressed */
        mousedown: (arg0: MouseEvent) => void
        /** Emitted when click is released */
        mouseup: (arg0: MouseEvent) => void
        /** The `error.sync` event */
        'update:error': (arg0: boolean) => void
      }
    >

    VSystemBar: DefineComponent<
      {
        /** Applies **position: absolute** to the component. */
        absolute?: boolean | null
        /** Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop */
        app?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Applies **position: fixed** to the component. */
        fixed?: boolean | null
        /** Sets the height for the component. */
        height?: number | string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Reduces the system bar opacity. */
        lightsOut?: boolean | null
        /** Increases the system bar height to 32px (24px default). */
        window?: boolean | null
      },
      {}
    >

    VTabs: DefineComponent<
      {
        /** The **active-class** applied to children when they are activated. */
        activeClass?: string | null
        /** Make `v-tabs` lined up with the toolbar title */
        alignWithTitle?: boolean | null
        /** Changes the background color of the component. */
        backgroundColor?: string | null
        /** Forces the selected tab to be centered */
        centerActive?: boolean | null
        /** Centers the tabs */
        centered?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** `v-tabs-item` min-width 160px, max-width 360px */
        fixedTabs?: boolean | null
        /** Force `v-tab`'s to take up all available space */
        grow?: boolean | null
        /** Sets the height of the tabs bar */
        height?: number | string | null
        /** Hide's the generated `v-tabs-slider` */
        hideSlider?: boolean | null
        /** Will stack icon and text vertically */
        iconsAndText?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets the designated mobile breakpoint for the component. */
        mobileBreakpoint?: string | number | null
        /** Right pagination icon */
        nextIcon?: string | null
        /** Does not require an active item. Useful when using `v-tab` as a `router-link` */
        optional?: boolean | null
        /** Left pagination icon */
        prevIcon?: string | null
        /** Aligns tabs to the right */
        right?: boolean | null
        /** Show pagination arrows if the tab items overflow their container. For mobile devices, arrows will only display when using this prop. */
        showArrows?: boolean | string | null
        /** Changes the background color of an auto-generated `v-tabs-slider` */
        sliderColor?: string | null
        /** Changes the size of the slider, **height** for horizontal, **width** for vertical. */
        sliderSize?: number | string | null
        /** The designated model value for the component. */
        value?: any | null
        /** Stacks tabs on top of each other vertically. */
        vertical?: boolean | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when tab is changed by user interaction. Returns a string if **href** attribute is set and number if it is not. */
        change: (arg0: number | string) => void
      }
    >

    VTab: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string | null
        /** Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. */
        append?: boolean | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Removes the ability to click or target the component. */
        disabled?: boolean | null
        /** Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. */
        exact?: boolean | null
        /** Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. */
        exactActiveClass?: string | null
        /** Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. */
        exactPath?: boolean | null
        /** Designates the component as anchor and applies the **href** attribute. */
        href?: string | object | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Designates that the component is a link. This is automatic when using the **href** or **to** prop. */
        link?: boolean | null
        /** Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). */
        nuxt?: boolean | null
        /** Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. */
        replace?: boolean | null
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object | null
        tabValue?: any | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Designates the target attribute. This should only be applied when using the **href** prop. */
        target?: string | null
        /** Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. */
        to?: string | object | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when tab becomes active */
        change: (arg0: void) => void
        /** Emitted when the component is clicked */
        click: (arg0: MouseEvent) => void
        /** Emitted when **enter** key is pressed */
        keydown: (arg0: KeyboardEvent) => void
      }
    >

    VTabItem: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string | null
        /** Removes the ability to click or target the component. */
        disabled?: boolean | null
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean | null
        /** Sets the DOM id on the component */
        id?: string | null
        /** Sets the reverse transition */
        reverseTransition?: boolean | string | null
        /** The transition used when the component progressing through items. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: boolean | string | null
        /** Sets the value of the tab. If not provided, the index will be used. */
        value?: any | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VTabsItems: DefineComponent<
      {
        /** The **active-class** applied to children when they are activated. */
        activeClass?: string | null
        /** If `true`, window will "wrap around" from the last item to the first, and from the first item to the last */
        continuous?: boolean | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Forces a value to always be selected (if available). */
        mandatory?: boolean | null
        /** Sets a maximum number of selections that can be made. */
        max?: number | string | null
        /** Allow multiple selections. The **value** prop must be an _array_. */
        multiple?: boolean | null
        /** Icon used for the "next" button if `show-arrows` is `true` */
        nextIcon?: boolean | string | null
        /** Icon used for the "prev" button if `show-arrows` is `true` */
        prevIcon?: boolean | string | null
        /** Reverse the normal transition direction. */
        reverse?: boolean | null
        /** Display the "next" and "prev" buttons */
        showArrows?: boolean | null
        /** Display the "next" and "prev" buttons on hover. `show-arrows` MUST ALSO be set. */
        showArrowsOnHover?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Provide a custom **left** and **right** function when swiped left or right. */
        touch?: object | null
        /** Disable touch support. */
        touchless?: boolean | null
        /** The designated model value for the component. */
        value?: any | null
        /** Apply a custom value comparator function */
        valueComparator?: Function | null
        /** Uses a vertical transition when changing windows. */
        vertical?: boolean | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when user swipes between tabs. */
        change: (arg0: string) => void
      }
    >

    VTabsSlider: DefineComponent<
      {
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
      },
      {}
    >

    VTextarea: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string | null
        /** Appends an icon to the outside the component's input, uses same syntax as `v-icon` */
        appendOuterIcon?: string | null
        /** Automatically grow the textarea depending on amount of text */
        autoGrow?: boolean | null
        /** Enables autofocus */
        autofocus?: boolean | null
        /** Changes the background-color of the input */
        backgroundColor?: string | null
        /** Applied when using **clearable** and the input is dirty */
        clearIcon?: string | null
        /** Add input clear functionality, default icon is Material Design Icons **mdi-clear** */
        clearable?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. */
        counter?: boolean | number | string | null
        counterValue?: Function | null
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Reduces the input height */
        dense?: boolean | null
        /** Disable the input */
        disabled?: boolean | null
        /** Puts the input in a manual error state */
        error?: boolean | null
        /** The total number of errors that should display at once */
        errorCount?: number | string | null
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[] | null
        /** Applies the alternate filled input style */
        filled?: boolean | null
        /** Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props */
        flat?: boolean | null
        /** Designates input type as full-width */
        fullWidth?: boolean | null
        /** Sets the height of the input */
        height?: number | string | null
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string | null
        /** Hint text */
        hint?: string | null
        /** Sets the DOM id on the component */
        id?: string | null
        /** Sets input label */
        label?: string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Specifies the height of the loader */
        loaderHeight?: number | string | null
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string | null
        /** Displays a list of messages or message if using a string */
        messages?: string | any[] | null
        /** Remove resize handle */
        noResize?: boolean | null
        /** Applies the outlined style to the input */
        outlined?: boolean | null
        /** Forces hint to always be visible */
        persistentHint?: boolean | null
        /** Forces placeholder to always be visible */
        persistentPlaceholder?: boolean | null
        /** Sets the input's placeholder text */
        placeholder?: string | null
        /** Displays prefix text */
        prefix?: string | null
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string | null
        /** Prepends an icon inside the component's input, uses the same syntax as `v-icon` */
        prependInnerIcon?: string | null
        /** Puts input in readonly state */
        readonly?: boolean | null
        /** Reverses the input orientation */
        reverse?: boolean | null
        /** Adds a border radius to the input */
        rounded?: boolean | null
        /** Height value for each row. Requires the use of the **auto-grow** prop. */
        rowHeight?: number | string | null
        /** Default row count */
        rows?: number | string | null
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: InputValidationRules | null
        /** Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` */
        shaped?: boolean | null
        /** Label does not move on focus/dirty */
        singleLine?: boolean | null
        /** Changes the style of the input */
        solo?: boolean | null
        /** Reduces element opacity until focused */
        soloInverted?: boolean | null
        /** Puts the input in a manual success state */
        success?: boolean | null
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[] | null
        /** Displays suffix text */
        suffix?: string | null
        /** Delays validation until blur event */
        validateOnBlur?: boolean | null
        /** The input's value */
        value?: any | null
      },
      {
        $scopedSlots: Readonly<{
          /** Adds an item inside the input and after input content */
          append: undefined
          /** Adds an item outside the input and after input content */
          'append-outer': undefined
          counter: (args: {
            props: {
              dark: boolean
              light: boolean
              max: string | number
              value: string
            }
          }) => VNode[]
          /** Replaces the default label */
          label: undefined
          message: (args: { key: number; message: string }) => VNode[]
          /** Adds an item outside the input and before input content */
          prepend: undefined
          /** Adds an item inside the input and before input content */
          'prepend-inner': undefined
          /** Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) */
          progress: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the input is blurred */
        blur: (arg0: Event) => void
        /** Emitted when the input is changed by user interaction */
        change: (arg0: any) => void
        /** Emitted when input is clicked */
        click: (arg0: MouseEvent) => void
        /** Emitted when appended icon is clicked */
        'click:append': (arg0: Event) => void
        /** Emitted when appended outer icon is clicked */
        'click:append-outer': (arg0: Event) => void
        /** Emitted when clearable icon clicked */
        'click:clear': (arg0: Event) => void
        /** Emitted when prepended icon is clicked */
        'click:prepend': (arg0: Event) => void
        /** Emitted when prepended inner icon is clicked */
        'click:prepend-inner': (arg0: Event) => void
        /** Emitted when component is focused */
        focus: (arg0: Event) => void
        /** The updated bound model */
        input: (arg0: any) => void
        /** Emitted when **any** key is pressed */
        keydown: (arg0: KeyboardEvent) => void
        /** Emitted when click is pressed */
        mousedown: (arg0: MouseEvent) => void
        /** Emitted when click is released */
        mouseup: (arg0: MouseEvent) => void
        /** The `error.sync` event */
        'update:error': (arg0: boolean) => void
      }
    >

    VTextField: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string | null
        /** Appends an icon to the outside the component's input, uses same syntax as `v-icon` */
        appendOuterIcon?: string | null
        /** Enables autofocus */
        autofocus?: boolean | null
        /** Changes the background-color of the input */
        backgroundColor?: string | null
        /** Applied when using **clearable** and the input is dirty */
        clearIcon?: string | null
        /** Add input clear functionality, default icon is Material Design Icons **mdi-clear** */
        clearable?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. */
        counter?: boolean | number | string | null
        counterValue?: Function | null
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Reduces the input height */
        dense?: boolean | null
        /** Disable the input */
        disabled?: boolean | null
        /** Puts the input in a manual error state */
        error?: boolean | null
        /** The total number of errors that should display at once */
        errorCount?: number | string | null
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[] | null
        /** Applies the alternate filled input style */
        filled?: boolean | null
        /** Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props */
        flat?: boolean | null
        /** Designates input type as full-width */
        fullWidth?: boolean | null
        /** Sets the height of the input */
        height?: number | string | null
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string | null
        /** Hides spin buttons on the input when type is set to `number`. */
        hideSpinButtons?: boolean | null
        /** Hint text */
        hint?: string | null
        /** Sets the DOM id on the component */
        id?: string | null
        /** Sets input label */
        label?: string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Specifies the height of the loader */
        loaderHeight?: number | string | null
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string | null
        /** Displays a list of messages or message if using a string */
        messages?: string | any[] | null
        /** Applies the outlined style to the input */
        outlined?: boolean | null
        /** Forces hint to always be visible */
        persistentHint?: boolean | null
        /** Forces placeholder to always be visible */
        persistentPlaceholder?: boolean | null
        /** Sets the input’s placeholder text */
        placeholder?: string | null
        /** Displays prefix text */
        prefix?: string | null
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string | null
        /** Prepends an icon inside the component's input, uses the same syntax as `v-icon` */
        prependInnerIcon?: string | null
        /** Puts input in readonly state */
        readonly?: boolean | null
        /** Reverses the input orientation */
        reverse?: boolean | null
        /** Adds a border radius to the input */
        rounded?: boolean | null
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: InputValidationRules | null
        /** Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` */
        shaped?: boolean | null
        /** Label does not move on focus/dirty */
        singleLine?: boolean | null
        /** Changes the style of the input */
        solo?: boolean | null
        /** Reduces element opacity until focused */
        soloInverted?: boolean | null
        /** Puts the input in a manual success state */
        success?: boolean | null
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[] | null
        /** Displays suffix text */
        suffix?: string | null
        /** Sets input type */
        type?: string | null
        /** Delays validation until blur event */
        validateOnBlur?: boolean | null
        /** The input's value */
        value?: any | null
      },
      {
        $scopedSlots: Readonly<{
          /** Adds an item inside the input and after input content */
          append: undefined
          /** Adds an item outside the input and after input content */
          'append-outer': undefined
          counter: (args: {
            props: {
              dark: boolean
              light: boolean
              max: string | number
              value: string
            }
          }) => VNode[]
          /** Replaces the default label */
          label: undefined
          message: (args: { key: number; message: string }) => VNode[]
          /** Adds an item outside the input and before input content */
          prepend: undefined
          /** Adds an item inside the input and before input content */
          'prepend-inner': undefined
          /** Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) */
          progress: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the input is blurred */
        blur: (arg0: Event) => void
        /** Emitted when the input is changed by user interaction */
        change: (arg0: any) => void
        /** Emitted when input is clicked */
        click: (arg0: MouseEvent) => void
        /** Emitted when appended icon is clicked */
        'click:append': (arg0: Event) => void
        /** Emitted when appended outer icon is clicked */
        'click:append-outer': (arg0: Event) => void
        /** Emitted when clearable icon clicked */
        'click:clear': (arg0: Event) => void
        /** Emitted when prepended icon is clicked */
        'click:prepend': (arg0: Event) => void
        /** Emitted when prepended inner icon is clicked */
        'click:prepend-inner': (arg0: Event) => void
        /** Emitted when component is focused */
        focus: (arg0: Event) => void
        /** The updated bound model */
        input: (arg0: any) => void
        /** Emitted when **any** key is pressed */
        keydown: (arg0: KeyboardEvent) => void
        /** Emitted when click is pressed */
        mousedown: (arg0: MouseEvent) => void
        /** Emitted when click is released */
        mouseup: (arg0: MouseEvent) => void
        /** The `error.sync` event */
        'update:error': (arg0: boolean) => void
      }
    >

    VThemeProvider: DefineComponent<
      {
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Use the current value of `$vuetify.theme.dark` as opposed to the provided one. */
        root?: boolean | null
      },
      {}
    >

    VTimeline: DefineComponent<
      {
        /** Align caret and dot of timeline items to the top */
        alignTop?: boolean | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Hide opposite slot content, and position all items to one side of timeline */
        dense?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Reverse direction of timeline items */
        reverse?: boolean | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VTimelineItem: DefineComponent<
      {
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Remove padding from dot container */
        fillDot?: boolean | null
        /** Hide display of timeline dot */
        hideDot?: boolean | null
        /** Specify icon for dot container */
        icon?: string | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        iconColor?: string | null
        /** Large size dot */
        large?: boolean | null
        /** Explicitly set the item to a left orientation */
        left?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Explicitly set the item to a right orientation */
        right?: boolean | null
        /** Small size dot */
        small?: boolean | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Used to customize the icon inside the timeline item's dot */
          icon: undefined
          /** Used to customize the opposite side of timeline items */
          opposite: undefined
        }>
      }
    >

    VTimePicker: DefineComponent<
      {
        /** Determines which picker is being displayed. Allowed values: `'HOUR'`, `'MINUTE'`, `'SECOND'` */
        activePicker?: string | null
        /** Restricts which hours can be selected */
        allowedHours?: Function | any[] | null
        /** Restricts which minutes can be selected */
        allowedMinutes?: Function | any[] | null
        /** Restricts which seconds can be selected */
        allowedSeconds?: Function | any[] | null
        /** Place AM/PM switch in title, not near the clock. */
        ampmInTitle?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** disables picker */
        disabled?: boolean | null
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string | null
        /** Removes  elevation */
        flat?: boolean | null
        /** Defines the format of a time displayed in picker. Available options are `ampm` and `24hr`. */
        format?: string | null
        /** Forces 100% width */
        fullWidth?: boolean | null
        /** Defines the header color. If not specified it will use the color defined by <code>color</code> prop or the default picker color */
        headerColor?: string | null
        /** Orients picker horizontal */
        landscape?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Maximum allowed time */
        max?: string | null
        /** Minimum allowed time */
        min?: string | null
        /** Hide the picker title */
        noTitle?: boolean | null
        /** Puts picker in readonly state */
        readonly?: boolean | null
        /** Allows changing hour/minute with mouse scroll */
        scrollable?: boolean | null
        /** Toggles the use of seconds in picker */
        useSeconds?: boolean | null
        /** Time picker model (ISO 8601 format, 24hr hh:mm) */
        value?: any | null
        /** Width of the picker */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** Displayed below the clock, can be used for example for adding action button (`OK` and `Cancel`) */
          default: undefined
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the time selection is done (when user changes the minute for HH:MM picker and the second for HH:MM:SS picker */
        change: (arg0: string) => void
        /** Emitted when user selects the hour */
        'click:hour': (arg0: string) => void
        /** Emitted when user selects the minute */
        'click:minute': (arg0: string) => void
        /** Emitted when user selects the second */
        'click:second': (arg0: string) => void
        /** The updated bound model */
        input: (arg0: string) => void
        /** The `.sync` event for `active-picker` prop */
        'update:active-picker': (arg0: string) => void
        /** Emitted when user clicks the AM/PM button */
        'update:period': (arg0: string) => void
      }
    >

    VToolbar: DefineComponent<
      {
        /** Applies position: absolute to the component. */
        absolute?: boolean | null
        /** Aligns the component towards the bottom. */
        bottom?: boolean | null
        /** Puts the toolbar into a collapsed state reducing its maximum width. */
        collapse?: boolean | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Reduces the height of the toolbar content to 48px (96px when using the **prominent** prop). */
        dense?: boolean | null
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string | null
        /** Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop, and any of the other props that affect the height of the toolbar, e.g. **prominent**, **dense**, etc., **WITH THE EXCEPTION** of **height**. */
        extended?: boolean | null
        /** Specify an explicit height for the `extension` slot.  */
        extensionHeight?: number | string | null
        /** Removes the toolbar's box-shadow. */
        flat?: boolean | null
        /** Applies **display: inline-flex** to the component. */
        floating?: boolean | null
        /** Designates a specific height for the toolbar. Overrides the heights imposed by other props, e.g. **prominent**, **dense**, **extended**, etc. */
        height?: number | string | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** Removes elevation (box-shadow) and adds a *thin* border. */
        outlined?: boolean | null
        /** Increases the height of the toolbar content to 128px. */
        prominent?: boolean | null
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string | null
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean | null
        /** Reduce the height of the toolbar content to 56px (112px when using the **prominent** prop). */
        short?: boolean | null
        /** Specifies a [v-img](/components/images) as the component's background. */
        src?: string | object | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Removes the component's **border-radius**. */
        tile?: boolean | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Slot positioned directly under the main content of the toolbar. Height of this slot can be set explicitly with the **extension-height** prop. If this slot has no content, the **extended** prop may be used instead. */
          extension: undefined
          /** Expects the [v-img](/components/images) component. Scoped **props** should be applied with `v-bind="props"`. */
          img: (args: {
            props: { height: string; src: string | srcObject }
          }) => VNode[]
        }>
      }
    >

    VToolbarItems: DefineComponent<
      {
        /** Specify a custom tag used on the root element. */
        tag?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VToolbarTitle: DefineComponent<
      {
        /** Specify a custom tag used on the root element. */
        tag?: string | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VTooltip: DefineComponent<
      {
        /** Applies **position: absolute** to the component. */
        absolute?: boolean | null
        /** Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node. */
        activator?: any | null
        /** Removes overflow re-positioning for the content */
        allowOverflow?: boolean | null
        /** Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. */
        attach?: any | null
        /** Aligns the component towards the bottom. */
        bottom?: boolean | null
        /** Delay (in ms) after which menu closes (when open-on-hover prop is set to true) */
        closeDelay?: number | string | null
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null
        /** Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component. */
        contentClass?: string | null
        /** Disables the tooltip */
        disabled?: boolean | null
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean | null
        /** Designates whether to use an internal activator */
        internalActivator?: boolean | null
        /** Aligns the component towards the left. */
        left?: boolean | null
        /** Sets the maximum width for the content */
        maxWidth?: number | string | null
        /** Sets the minimum width for the content */
        minWidth?: number | string | null
        /** Nudge the content to the bottom */
        nudgeBottom?: number | string | null
        /** Nudge the content to the left */
        nudgeLeft?: number | string | null
        /** Nudge the content to the right */
        nudgeRight?: number | string | null
        /** Nudge the content to the top */
        nudgeTop?: number | string | null
        /** Nudge the content width */
        nudgeWidth?: number | string | null
        /** Causes the component to flip to the opposite side when repositioned due to overflow */
        offsetOverflow?: boolean | null
        /** Delay (in ms) after which tooltip opens (when `open-on-hover` prop is set to **true**) */
        openDelay?: number | string | null
        /** Designates whether the tooltip should open on activator click */
        openOnClick?: boolean | null
        openOnFocus?: boolean | null
        /** Designates whether the tooltip should open on activator hover */
        openOnHover?: boolean | null
        /** Used to position the content when not using an activator slot */
        positionX?: number | null
        /** Used to position the content when not using an activator slot */
        positionY?: number | null
        /** Aligns the component towards the right. */
        right?: boolean | null
        /** Specifies a custom tag for the activator wrapper */
        tag?: string | null
        /** Aligns the content towards the top. */
        top?: boolean | null
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: string | null
        /** Controls whether the component is visible or hidden. */
        value?: any | null
        /** The z-index used for the component */
        zIndex?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation */
          activator: (args: {
            on: { [eventName: string]: eventHandler }
            value: boolean
          }) => VNode[]
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VTreeview: DefineComponent<
      {
        /** Allows user to mark a node as active by clicking on it */
        activatable?: boolean | null
        /** Syncable prop that allows one to control which nodes are active. The array consists of the `item-key` of each active item. */
        active?: any[] | null
        /** The class applied to the node when active */
        activeClass?: string | null
        /** Sets the color of the active node */
        color?: string | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Decreases the height of the items */
        dense?: boolean | null
        /** Prevents disabling children nodes */
        disablePerNode?: boolean | null
        /** Disables selection for all nodes */
        disabled?: boolean | null
        /** Icon used to indicate that a node can be expanded */
        expandIcon?: string | null
        /** Custom item filtering function. By default it will use case-insensitive search in item's label. */
        filter?: Function | null
        /** Applies a hover class when mousing over nodes */
        hoverable?: boolean | null
        /** Icon used when node is in an indeterminate state. Only visible when `selectable` is `true`. */
        indeterminateIcon?: string | null
        /** Property on supplied `items` that contains its children */
        itemChildren?: string | null
        /** Property on supplied `items` that contains the disabled state of the item */
        itemDisabled?: string | null
        /** Property on supplied `items` used to keep track of node state. The value of this property has to be unique among all items. */
        itemKey?: string | null
        /** Property on supplied `items` that contains its label text */
        itemText?: string | null
        /** An array of items used to build the treeview */
        items?: any[] | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** A function used when dynamically loading children. If this prop is set, then the supplied function will be run if expanding an item that has a `item-children` property that is an empty array. Supports returning a Promise. */
        loadChildren?: Function | null
        /** Icon used when node is in a loading state */
        loadingIcon?: string | null
        /** When `true`, allows user to have multiple active nodes at the same time */
        multipleActive?: boolean | null
        /** Icon used when node is not selected. Only visible when `selectable` is `true`. */
        offIcon?: string | null
        /** Icon used when leaf node is selected or when a branch node is fully selected. Only visible when `selectable` is `true`. */
        onIcon?: string | null
        /** Syncable prop that allows one to control which nodes are open. The array consists of the `item-key` of each open item. */
        open?: any[] | null
        /** When `true` will cause all branch nodes to be opened when component is mounted */
        openAll?: boolean | null
        /** When `true` will cause nodes to be opened by clicking anywhere on it, instead of only opening by clicking on expand icon. When using this prop with `activatable` you will be unable to mark nodes with children as active. */
        openOnClick?: boolean | null
        /** When `true` will make `v-model`, `active.sync` and `open.sync` return the complete object instead of just the key */
        returnObject?: boolean | null
        /** Provides an alternative active style for `v-treeview` node. Only visible when `activatable` is `true` and should not be used in conjunction with the `shaped` prop. */
        rounded?: boolean | null
        /** The search model for filtering results */
        search?: string | null
        /** Will render a checkbox next to each node allowing them to be selected */
        selectable?: boolean | null
        /** The color of the selection checkbox */
        selectedColor?: string | null
        /** Controls how the treeview selects nodes. There are two modes available: 'leaf' and 'independent' */
        selectionType?: string | null
        /** Provides an alternative active style for `v-treeview` node. Only visible when `activatable` is `true` and should not be used in conjunction with the `rounded` prop. */
        shaped?: boolean | null
        /** Applies a transition when nodes are opened and closed */
        transition?: boolean | null
        /** Allows one to control which nodes are selected. The array consists of the `item-key` of each selected item. Is used with `@input` event to allow for `v-model` binding. */
        value?: any[] | null
      },
      {
        $scopedSlots: Readonly<{
          /** Appends content after label */
          append: (args: {
            item: any
            leaf: boolean
            selected: boolean
            indeterminate: boolean
            active: boolean
            open: boolean
          }) => VNode[]
          /** Label content */
          label: (args: {
            item: any
            leaf: boolean
            selected: boolean
            indeterminate: boolean
            active: boolean
            open: boolean
          }) => VNode[]
          /** Prepends content before label */
          prepend: (args: {
            item: any
            leaf: boolean
            selected: boolean
            indeterminate: boolean
            active: boolean
            open: boolean
          }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emits the array of selected items when this value changes */
        input: (arg0: any[]) => void
        /** Emits the array of active items when this value changes */
        'update:active': (arg0: any[]) => void
        /** Emits the array of open items when this value changes */
        'update:open': (arg0: any[]) => void
      }
    >

    VVirtualScroll: DefineComponent<
      {
        /** The number of items **outside** the user view that are rendered (even if they are **not** viewable); to help prevent empty white space when scrolling *fast*. */
        bench?: number | string | null
        /** Height of the component as a css value */
        height?: number | string | null
        /** Height in pixels of the items to display */
        itemHeight?: number | string | null
        /** The array of items to display */
        items?: any[] | null
        /** Sets the maximum height for the component. */
        maxHeight?: number | string | null
        /** Sets the maximum width for the component. */
        maxWidth?: number | string | null
        /** Sets the minimum height for the component. */
        minHeight?: number | string | null
        /** Sets the minimum width for the component. */
        minWidth?: number | string | null
        /** Sets the width for the component. */
        width?: number | string | null
      },
      {
        $scopedSlots: Readonly<{
          /** Default slot to customize items appearance */
          default: (args: { index: number; item: any }) => VNode[]
        }>
      }
    >

    VWindow: DefineComponent<
      {
        /** The **active-class** applied to children when they are activated. */
        activeClass?: string | null
        /** If `true`, window will "wrap around" from the last item to the first, and from the first item to the last */
        continuous?: boolean | null
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null
        /** Applies the light theme variant to the component. */
        light?: boolean | null
        /** Icon used for the "next" button if `show-arrows` is `true` */
        nextIcon?: boolean | string | null
        /** Icon used for the "prev" button if `show-arrows` is `true` */
        prevIcon?: boolean | string | null
        /** Reverse the normal transition direction. */
        reverse?: boolean | null
        /** Display the "next" and "prev" buttons */
        showArrows?: boolean | null
        /** Display the "next" and "prev" buttons on hover. `show-arrows` MUST ALSO be set. */
        showArrowsOnHover?: boolean | null
        /** Specify a custom tag used on the root element. */
        tag?: string | null
        /** Provide a custom **left** and **right** function when swiped left or right. */
        touch?: object | null
        /** Disable touch support. */
        touchless?: boolean | null
        /** The designated model value for the component. */
        value?: any | null
        /** Apply a custom value comparator function */
        valueComparator?: Function | null
        /** Uses a vertical transition when changing windows. */
        vertical?: boolean | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Slot displaying the arrow switching to the next item */
          next: (args: {
            attrs: { 'aria-label': string }
            on: { click: eventHandler }
          }) => VNode[]
          /** Slot displaying the arrow switching to the previous item */
          prev: (args: {
            attrs: { 'aria-label': string }
            on: { click: eventHandler }
          }) => VNode[]
        }>
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** Emitted when the component value is changed by user interaction */
        change: (arg0: number) => void
      }
    >

    VWindowItem: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string | null
        /** Prevents the item from becoming active when using the "next" and "prev" buttons or the `toggle` method */
        disabled?: boolean | null
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean | null
        /** Sets the reverse transition */
        reverseTransition?: boolean | string | null
        /** The transition used when the component progressing through items. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: boolean | string | null
        /** The value used when the component is selected in a group. If not provided, the index will be used. */
        value?: any | null
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >

    VCarouselTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VCarouselReverseTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VTabTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VTabReverseTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VMenuTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VFabTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VDialogTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VDialogBottomTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VDialogTopTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VFadeTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VScaleTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VScrollXTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VScrollXReverseTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VScrollYTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VScrollYReverseTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VSlideXTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VSlideXReverseTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VSlideYTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VSlideYReverseTransition: DefineComponent<
      {
        /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
        group?: boolean | null
        /** Hides the leaving element (no exit animation) */
        hideOnLeave?: boolean | null
        /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
        leaveAbsolute?: boolean | null
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string | null
      },
      {}
    >

    VExpandTransition: DefineComponent<
      {
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
      },
      {}
    >

    VExpandXTransition: DefineComponent<
      {
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string | null
      },
      {}
    >
  }
}

export {}
