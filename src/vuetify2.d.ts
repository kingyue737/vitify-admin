import type { DefineComponent, VNode } from 'vue'
import type { DataTableHeader, DataOptions } from 'vuetify'
type eventHandler = Function

declare module 'vue' {
  export interface GlobalComponents {
    VApp: DefineComponent<
      {
        /** Sets the DOM id on the component */ id?: string
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
        /** Applies position: absolute to the component. */ absolute?: boolean
        /** Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop */
        app?: boolean
        /** Aligns the component towards the bottom. */
        bottom?: boolean
        /** Designates that the application's `v-navigation-drawer` that is positioned on the left is below the app-bar. */
        clippedLeft?: boolean
        /** Designates that the application's `v-navigation-drawer` that is positioned on the right is below the app-bar. */
        clippedRight?: boolean
        /** Puts the toolbar into a collapsed state reducing its maximum width. */
        collapse?: boolean
        /** Puts the app-bar into a collapsed state when scrolling. */
        collapseOnScroll?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Reduces the height of the toolbar content to 48px (96px when using the **prominent** prop). */
        dense?: boolean
        /** Elevates the app-bar when scrolling. */
        elevateOnScroll?: boolean
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string
        /** Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop, and any of the other props that affect the height of the toolbar, e.g. **prominent**, **dense**, etc., **WITH THE EXCEPTION** of **height**. */
        extended?: boolean
        /** Specify an explicit height for the `extension` slot.  */
        extensionHeight?: number | string
        /** When using the **src** prop or `img` slot, will fade the image when scrolling. */
        fadeImgOnScroll?: boolean
        /** Applies **position: fixed** to the component. */
        fixed?: boolean
        /** Removes the toolbar's box-shadow. */
        flat?: boolean
        /** Applies **display: inline-flex** to the component. */
        floating?: boolean
        /** Designates a specific height for the toolbar. Overrides the heights imposed by other props, e.g. **prominent**, **dense**, **extended**, etc. */
        height?: number | string
        /** Hides the app-bar when scrolling. Will still show the `extension` slot. */
        hideOnScroll?: boolean
        /** Hides the app-bar when scrolling down and displays it when scrolling up. */
        invertedScroll?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** Removes elevation (box-shadow) and adds a *thin* border. */
        outlined?: boolean
        /** Increases the height of the toolbar content to 128px. */
        prominent?: boolean
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string
        /** Hides the app-bar when scrolling. Will **NOT** show the `extension` slot. */
        scrollOffScreen?: boolean
        /** Designates the element to target for scrolling events. Uses `window` by default. */
        scrollTarget?: string
        /** The amount of scroll distance down before **hide-on-scroll** activates. */
        scrollThreshold?: string | number
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean
        /** Reduce the height of the toolbar content to 56px (112px when using the **prominent** prop). */
        short?: boolean
        /** Shrinks a **prominent** toolbar to a **dense** or **short** (default) one when scrolling. */
        shrinkOnScroll?: boolean
        /** Image source. See `v-img` for details */
        src?: string | object
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Removes the component's **border-radius**. */
        tile?: boolean
        /** Controls whether the component is visible or hidden. */
        value?: boolean
        /** Sets the width for the component. */
        width?: number | string
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
        border?: string
        /** Change the default icon used for **dismissible** alerts. */
        closeIcon?: string
        /** Text used for *aria-label* on **dismissible** alerts. Can also be customizing globally in [Internationalization](/customization/internationalization). */
        closeLabel?: string
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the defined **color** to the alert's border. */
        coloredBorder?: boolean
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Decreases component's height. */
        dense?: boolean
        /** Adds a close icon that can hide the alert. */
        dismissible?: boolean
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string
        /** Sets the height for the component. */
        height?: number | string
        /** Designates a specific icon. */
        icon?: boolean | string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string
        /** Makes the background transparent and applies a thin border. */
        outlined?: boolean
        /** Displays a larger vertically centered icon to draw more attention. */
        prominent?: boolean
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Applies the defined **color** to text and a low opacity background of the same. */
        text?: boolean
        /** Removes the component's border-radius. */
        tile?: boolean
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: string
        /** Specify a **success**, **info**, **warning** or **error** alert. Uses the contextual color and has a pre-defined icon. */
        type?: string
        /** Controls whether the component is visible or hidden. */
        value?: boolean
        /** Sets the width for the component. */
        width?: number | string
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
      }
    >
    VAutocomplete: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string
        /** Appends an icon to the outside the component's input, uses same syntax as `v-icon` */
        appendOuterIcon?: string
        /** Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. */
        attach?: any
        /** When searching, will always highlight the first option */
        autoSelectFirst?: boolean
        /** Enables autofocus */
        autofocus?: boolean
        /** Changes the background-color of the input */
        backgroundColor?: string
        /** Keeps a local _unique_ copy of all items that have been passed through the **items** prop. */
        cacheItems?: boolean
        /** Changes display of selections to chips */
        chips?: boolean
        /** Applied when using **clearable** and the input is dirty */
        clearIcon?: string
        /** Add input clear functionality, default icon is Material Design Icons **mdi-clear** */
        clearable?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. */
        counter?: boolean | number | string
        counterValue?: Function
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Adds a remove icon to selected chips */
        deletableChips?: boolean
        /** Reduces the input height */
        dense?: boolean
        /** Disables keyboard lookup */
        disableLookup?: boolean
        /** Disables the input */
        disabled?: boolean
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean
        /** Puts the input in a manual error state */
        error?: boolean
        /** The total number of errors that should display at once */
        errorCount?: number | string
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[]
        /** Applies the alternate filled input style */
        filled?: boolean
        /** The filtering algorithm used when searching. [example](https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/components/VAutocomplete/VAutocomplete.ts#L40) */
        filter?: Function
        /** Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props */
        flat?: boolean
        /** Designates input type as full-width */
        fullWidth?: boolean
        /** Sets the height of the input */
        height?: number | string
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string
        /** Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open. */
        hideNoData?: boolean
        /** Do not display in the select menu items that are already selected. Also removes checkboxes from the list when multiple */
        hideSelected?: boolean
        /** Hint text */
        hint?: string
        /** Sets the DOM id on the component */
        id?: string
        /** Sets color of selected items */
        itemColor?: string
        /** Set property of **items**'s disabled value */
        itemDisabled?: string | any[] | Function
        /** Set property of **items**'s text value */
        itemText?: string | any[] | Function
        /** Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479) */
        itemValue?: string | any[] | Function
        /** Can be an array of objects or array of strings. When using objects, will look for a text, value and disabled keys. This can be changed using the **item-text**, **item-value** and **item-disabled** props.  Objects that have a **header** or **divider** property are considered special cases and generate a list header or divider; these items are not selectable. */
        items?: any[]
        /** Sets input label */
        label?: string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Specifies the height of the loader */
        loaderHeight?: number | string
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string
        /** Pass props through to the `v-menu` component. Accepts either a string for boolean props `menu-props="auto, overflowY"`, or an object `:menu-props="{ auto: true, overflowY: true }"` */
        menuProps?: string | any[] | object
        /** Displays a list of messages or message if using a string */
        messages?: string | any[]
        /** Changes select to multiple. Accepts array for value */
        multiple?: boolean
        /** Display text when there is no data */
        noDataText?: string
        /** Do not apply filtering when searching. Useful when data is being filtered server side */
        noFilter?: boolean
        /** When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state */
        openOnClear?: boolean
        /** Applies the outlined style to the input */
        outlined?: boolean
        /** Forces hint to always be visible */
        persistentHint?: boolean
        /** Forces placeholder to always be visible */
        persistentPlaceholder?: boolean
        /** Sets the input's placeholder text */
        placeholder?: string
        /** Displays prefix text */
        prefix?: string
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string
        /** Prepends an icon inside the component's input, uses the same syntax as `v-icon` */
        prependInnerIcon?: string
        /** Puts input in readonly state */
        readonly?: boolean
        /** Changes the selection behavior to return the object directly rather than the value specified with **item-value** */
        returnObject?: boolean
        /** Reverses the input orientation */
        reverse?: boolean
        /** Adds a border radius to the input */
        rounded?: boolean
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: any[]
        /** Search value. Can be used with `.sync` modifier. */
        searchInput?: string
        /** Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` */
        shaped?: boolean
        /** Label does not move on focus/dirty */
        singleLine?: boolean
        /** Changes display of selections to chips with the **small** property */
        smallChips?: boolean
        /** Changes the style of the input */
        solo?: boolean
        /** Reduces element opacity until focused */
        soloInverted?: boolean
        /** Puts the input in a manual success state */
        success?: boolean
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[]
        /** Displays suffix text */
        suffix?: string
        /** Delays validation until blur event */
        validateOnBlur?: boolean
        /** The input's value */
        value?: any
        /** The comparison algorithm used for values. [More info](https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/util/helpers.ts) */
        valueComparator?: Function
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
            select: function
            selected: boolean
            disabled: boolean
          }) => VNode[]
        }>
      }
    >
    VAvatar: DefineComponent<
      {
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Sets the height for the component. */
        height?: number | string
        /** Designates that the avatar is on the left side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons). */
        left?: boolean
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** Designates that the avatar is on the right side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons). */
        right?: boolean
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string
        /** Sets the height and width of the component. */
        size?: number | string
        /** Removes the component's **border-radius**. */
        tile?: boolean
        /** Sets the width for the component. */
        width?: number | string
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
        avatar?: boolean
        /** Applies a **2px** by default and **1.5px** border around the badge when using the **dot** property. */
        bordered?: boolean
        /** Aligns the component towards the bottom. */
        bottom?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Any content you want injected as text into the badge. */
        content?: any
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Reduce the size of the badge and hide its contents */
        dot?: boolean
        /** Designates a specific icon used in the badge. */
        icon?: string
        /** Moves the badge to be inline with the wrapping element. Supports the usage of the **left** prop. */
        inline?: boolean
        /** The **aria-label** used for the badge */
        label?: string
        /** Aligns the component towards the left. */
        left?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string
        /** Offset the badge on the x-axis. */
        offsetX?: number | string
        /** Offset the badge on the y-axis. */
        offsetY?: number | string
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string
        /** Overlaps the slotted content on top of the component. */
        overlap?: boolean
        /** Removes the component's border-radius. */
        tile?: boolean
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: string
        /** Controls whether the component is visible or hidden. */
        value?: any
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
        app?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string
        /** Sets the height for the component. */
        height?: number | string
        /** Designates a specific icon. */
        icon?: string
        /** Designates a specific icon color. */
        iconColor?: string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** Sets the designated mobile breakpoint for the component. */
        mobileBreakpoint?: number | string
        /** Removes elevation (box-shadow) and adds a *thin* border. */
        outlined?: boolean
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean
        /** Forces the banner onto a single line. */
        singleLine?: boolean
        /** Applies **position: sticky** to the component (**Evergreen browsers only**). You can find more information on the [MDN documentation for sticky position](https://developer.mozilla.org/en-US/docs/Web/CSS/position). */
        sticky?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Removes the component's **border-radius**. */
        tile?: boolean
        /** Controls whether the component is visible or hidden. */
        value?: boolean
        /** Sets the width for the component. */
        width?: number | string
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
        absolute?: boolean
        /** The class applied to a [v-btn](/components/buttons) when activated. */
        activeClass?: string
        /** Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop */
        app?: boolean
        /** Changes the background-color for the component. */
        backgroundColor?: string
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Applies **position: fixed** to the component. */
        fixed?: boolean
        /** Force [v-btn](/components/buttons)s to take up all available space. */
        grow?: boolean
        /** Sets the height for the component. */
        height?: number | string
        /** Will transition the navigation off screen when scrolling up. */
        hideOnScroll?: boolean
        /** Uses an alternative horizontal styling for [v-btn](/components/buttons). */
        horizontal?: boolean
        /** Controls whether the component is visible or hidden. Supports the **.sync** modifier. */
        inputValue?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Forces a value to always be selected (if available). */
        mandatory?: boolean
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** Designates the element to target for scrolling events. Uses `window` by default. */
        scrollTarget?: string
        /** The amount of scroll distance down before **hide-on-scroll** activates. */
        scrollThreshold?: string | number
        /** Hides text of [v-btn](/components/buttons)s when they are not active. */
        shift?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Holds the value of the currently active [v-btn](/components/buttons). If the button has no value supplied, its index will be used instead.. */
        value?: any
        /** Sets the width for the component. */
        width?: number | string
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >
    VBottomSheet: DefineComponent<
      {
        /** Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node. */
        activator?: any
        /** Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. */
        attach?: any
        /** Milliseconds to wait before closing component. Only applies to hover and focus events. */
        closeDelay?: number | string
        /** Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component. */
        contentClass?: string
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Disables the ability to open the component. */
        disabled?: boolean
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean
        /** Changes layout for fullscreen display. */
        fullscreen?: boolean
        /** Hides the display of the overlay. */
        hideOverlay?: boolean
        /** Reduces the sheet content maximum width to 70%. */
        inset?: boolean
        /** Detaches the menu content inside of the component as opposed to the document. */
        internalActivator?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Sets the maximum width for the component. */
        maxWidth?: string | number
        /** Disables the bounce effect when clicking outside of a `v-dialog`'s content when using the **persistent** prop. */
        noClickAnimation?: boolean
        /** Milliseconds to wait before opening component. Only applies to hover and focus events. */
        openDelay?: number | string
        openOnClick?: boolean
        openOnFocus?: boolean
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string
        /** Sets the overlay color. */
        overlayColor?: string
        /** Sets the overlay opacity. */
        overlayOpacity?: number | string
        /** Clicking outside of the element or pressing **esc** key will not deactivate it. */
        persistent?: boolean
        /** Tab focus will return to the first child of the dialog by default. Disable this when using external tools that require focus such as TinyMCE or vue-clipboard. */
        retainFocus?: boolean
        returnValue?: any
        /** When set to true, expects a `v-card` and a `v-card-text` component with a designated height. For more information, check out the [scrollable example](/components/dialogs#scrollable). */
        scrollable?: boolean
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: string
        /** Controls whether the component is visible or hidden. */
        value?: any
        /** Sets the width for the component. */
        width?: string | number
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
        dark?: boolean
        /** Specifies the dividing character between items. */
        divider?: string
        /** An array of objects for each breadcrumb. */
        items?: any[]
        /** Increase the font-size of the breadcrumb item text to 16px (14px default). */
        large?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
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
        activeClass?: string
        /** Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. */
        append?: boolean
        /** Removes the ability to click or target the component. */
        disabled?: boolean
        /** Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. */
        exact?: boolean
        /** Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. */
        exactActiveClass?: string
        /** Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. */
        exactPath?: boolean
        /** Designates the component as anchor and applies the **href** attribute. */
        href?: string | object
        /** Designates that the component is a link. This is automatic when using the **href** or **to** prop. */
        link?: boolean
        /** Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). */
        nuxt?: boolean
        /** Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. */
        replace?: boolean
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Designates the target attribute. This should only be applied when using the **href** prop. */
        target?: string
        /** Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. */
        to?: string | object
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >
    VBreadcrumbsDivider: DefineComponent<{
      /** Specify a custom tag used on the root element. */ tag?: string
    }>
    VBtn: DefineComponent<
      {
        /** Applies **position: absolute** to the component. */
        absolute?: boolean
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string
        /** Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. */
        append?: boolean
        /** Expands the button to 100% of available space. */
        block?: boolean
        /** Aligns the component towards the bottom. */
        bottom?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Removes the button box shadow. */
        depressed?: boolean
        /** Removes the ability to click or target the component. */
        disabled?: boolean
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string
        /** Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. */
        exact?: boolean
        /** Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. */
        exactActiveClass?: string
        /** Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. */
        exactPath?: boolean
        /** Designates the button as a floating-action-button. Button will become _round_. */
        fab?: boolean
        /** Applies **position: fixed** to the component. */
        fixed?: boolean
        /** Sets the height for the component. */
        height?: number | string
        /** Designates the component as anchor and applies the **href** attribute. */
        href?: string | object
        /** Designates the button as icon. Button will become _round_ and applies the **text** prop. */
        icon?: boolean
        /** Controls the button's active state. */
        inputValue?: any
        /** Makes the component large. */
        large?: boolean
        /** Aligns the component towards the left. This should be used with the **absolute** or **fixed** props. */
        left?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Designates that the component is a link. This is automatic when using the **href** or **to** prop. */
        link?: boolean
        /** Adds a loading icon animation. */
        loading?: boolean
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). */
        nuxt?: boolean
        /** Makes the background transparent and applies a thin border. */
        outlined?: boolean
        /** Removes the default background change applied when hovering over the button. */
        plain?: boolean
        /** Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. */
        replace?: boolean
        /** Don't blur on click. */
        retainFocusOnClick?: boolean
        /** Aligns the component towards the right. This should be used with the **absolute** or **fixed** props. */
        right?: boolean
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object
        /** Applies a large border radius on the button. */
        rounded?: boolean
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean
        /** Makes the component small. */
        small?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Designates the target attribute. This should only be applied when using the **href** prop. */
        target?: string
        /** Makes the background transparent. When using the **color** prop, the color will be applied to the button text instead of the background. */
        text?: boolean
        /** Removes the component's **border-radius**. */
        tile?: boolean
        /** Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. */
        to?: string | object
        /** Aligns the content towards the top. */
        top?: boolean
        /** Set the button's **type** attribute. */
        type?: string
        /** Controls whether the component is visible or hidden. */
        value?: any
        /** Sets the width for the component. */
        width?: number | string
        /** Makes the component extra large. */
        xLarge?: boolean
        /** Makes the component extra small. */
        xSmall?: boolean
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Custom loader. */
          loader: undefined
        }>
      }
    >
    VBtnToggle: DefineComponent<
      {
        /** The **active-class** applied to children when they are activated. */
        activeClass?: string
        /** Changes the background-color for the component. */
        backgroundColor?: string
        /** Removes the group's border. */
        borderless?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Reduces the button size and padding. */
        dense?: boolean
        /** Generally used in [v-toolbar](/components/toolbars) and [v-app-bar](/components/app-bars). Removes background color, border and increases space between the buttons */
        group?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Forces a value to always be selected (if available). */
        mandatory?: boolean
        /** Sets a maximum number of selections that can be made. */
        max?: number | string
        /** Allow multiple selections. The **value** prop must be an _array_. */
        multiple?: boolean
        /** Round edge buttons */
        rounded?: boolean
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Removes the component's border-radius. */
        tile?: boolean
        /** The designated model value for the component. */
        value?: any
        /** Apply a custom value comparator function */
        valueComparator?: Function
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >
    VCalendar: DefineComponent<
      {
        /** Specifies what categories to display in the `category` view. This controls the order of the categories as well. If the calendar uses events any categories specified in those events not specified in this value are dynamically rendered in the view unless `category-hide-dynamic` is true. */
        categories?: any[] | string
        /** The number of days to render in the `category` view. */
        categoryDays?: number | string
        /** The category to place events in that have invalid categories. A category is invalid when it is not a string. By default events without a category are not displayed until this value is specified. */
        categoryForInvalid?: string
        /** Sets whether categories specified in an event should be hidden if it's not defined in `categories`. */
        categoryHideDynamic?: boolean
        /** Set whether the `category` view should show all defined `categories` even if there are no events for a category. */
        categoryShowAll?: boolean
        /** If categories is a list of objects, you can use this to determine what property to print out as the category text on the calendar. You can provide a function to do some logic or just define the prop name. It's similar to item-text on v-select */
        categoryText?: string | Function
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Formats day of the month string that appears in a day to a specified locale */
        dayFormat?: Function
        /** The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. */
        end?: string | number | Date
        /** Set property of *event*'s category. Instead of a property a function can be given which takes an event and returns the category. */
        eventCategory?: string | Function
        /** A background color for all events or a function which accepts an event object passed to the calendar to return a color. */
        eventColor?: string | Function
        /** Set property of *event*'s end timestamp. */
        eventEnd?: string
        /** The height of an event in pixels in the `month` view and at the top of the `day` views. */
        eventHeight?: number
        /** Margin bottom for event */
        eventMarginBottom?: number
        /** Whether the more 'button' is displayed on a calendar with too many events in a given day. It will say something like '5 more' and when clicked generates a `click:more` event. */
        eventMore?: boolean
        /** The text to display in the more 'button' given the number of hidden events. */
        eventMoreText?: string
        /** Set property of *event*'s displayed name, or a function which accepts an event object passed to the calendar as the first argument and a flag signalling whether the name is for a timed event (true) or an event over a day. */
        eventName?: string | Function
        /** One of `stack`, `column`, or a custom render function */
        eventOverlapMode?: string | Function
        /** A value in minutes that's used to determine whether two timed events should be placed in column beside each other or should be treated as slightly overlapping events. */
        eventOverlapThreshold?: string | number
        /** Applies the `v-ripple` directive. */
        eventRipple?: boolean | object
        /** Set property of *event*'s start timestamp. */
        eventStart?: string
        /** A text color for all events or a function which accepts an event object passed to the calendar to return a color. */
        eventTextColor?: string | Function
        /** If Dates or milliseconds are used as the start or end timestamp of an event, this prop can be a string to a property on the event that is truthy if the event is a timed event or a function which takes the event and returns a truthy value if the event is a timed event. */
        eventTimed?: string | Function
        /** An array of event objects with a property for a start timestamp and optionally a name and end timestamp. If an end timestamp is not given, the value of start will be used. If no name is given, you must provide an implementation for the `event` slot. */
        events?: any[]
        /** The first interval to display in the `day` view. If `intervalMinutes` is set to 60 and this is set to 9 the first time in the view is 9am. */
        firstInterval?: number | string
        /** The first time to display in the `day` view. If specified, this overwrites any `firstInterval` value specified. This can be the number of minutes since midnight, a string in the format of `HH:mm`, or an object with number properties hour and minute. */
        firstTime?: number | string | object
        /** If the header at the top of the `day` view should be visible. */
        hideHeader?: boolean
        /** The number of intervals to display in the `day` view. */
        intervalCount?: number | string
        /** Formats time of day string that appears in the interval gutter of the `day` and `week` view to specified locale */
        intervalFormat?: Function
        /** The height of an interval in pixels in the `day` view. */
        intervalHeight?: number | string
        /** The number of minutes the intervals are in the `day` view. A common interval is 60 minutes so the intervals are an hour. */
        intervalMinutes?: number | string
        /** Returns CSS styling to apply to the interval. */
        intervalStyle?: Function
        /** The width of the interval gutter on the left side in the `day` view. */
        intervalWidth?: number | string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** The locale of the calendar. */
        locale?: string
        /** Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4. */
        localeFirstDayOfYear?: string | number
        /** The maximum number of days to display in the custom calendar if an `end` day is not set. */
        maxDays?: number
        /** The minimum number of weeks to display in the `month` or `week` view. */
        minWeeks?: any
        /** Formats month string that appears in a day to specified locale */
        monthFormat?: Function
        /** Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now. */
        now?: string
        /** If true, the intervals in the `day` view will be 9 AM as opposed to 09:00 AM */
        shortIntervals?: boolean
        /** Whether the short versions of a month should be used (Jan vs January). */
        shortMonths?: boolean
        /** Whether the short versions of a weekday should be used (Mon vs Monday). */
        shortWeekdays?: boolean
        /** Checks if a given day and time should be displayed in the interval gutter of the `day` view. */
        showIntervalLabel?: Function
        /** Whether the name of the month should be displayed on the first day of the month. */
        showMonthOnFirst?: boolean
        /** Whether week numbers should be displayed when using the `month` view. */
        showWeek?: boolean
        /** The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. */
        start?: string | number | Date
        /** A string which is one of `month`, `week`, `day`, `4day`, `custom-weekly`, `custom-daily`, and `category`. The custom types look at the `start` and `end` dates passed to the component as opposed to the `value`. */
        type?: string
        /** A date in the format of `YYYY-MM-DD` which determines what span of time for the calendar. */
        value?: string | number | Date
        /** Formats day of the week string that appears in the header to specified locale */
        weekdayFormat?: Function
        /** Specifies which days of the week to display. To display Monday through Friday only, a value of `[1, 2, 3, 4, 5]` can be used. To display a week starting on Monday a value of `[1, 2, 3, 4, 5, 6, 0]` can be used. */
        weekdays?: any[] | string
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
              clamp: boolean = false,
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
              clamp: boolean = false,
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
              clamp: boolean = false,
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
      }
    >
    VCalendarDaily: DefineComponent<{
      /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
      color?: string
      /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
      dark?: boolean
      /** Formats day of the month string that appears in a day to a specified locale */
      dayFormat?: Function
      /** The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. */
      end?: string | number | Date
      /** The first interval to display in the `day` view. If `intervalMinutes` is set to 60 and this is set to 9 the first time in the view is 9am. */
      firstInterval?: number | string
      /** The first time to display in the `day` view. If specified, this overwrites any `firstInterval` value specified. This can be the number of minutes since midnight, a string in the format of `HH:mm`, or an object with number properties hour and minute. */
      firstTime?: number | string | object
      /** If the header at the top of the `day` view should be visible. */
      hideHeader?: boolean
      /** The number of intervals to display in the `day` view. */
      intervalCount?: number | string
      /** Formats time of day string that appears in the interval gutter of the `day` and `week` view to specified locale */
      intervalFormat?: Function
      /** The height of an interval in pixels in the `day` view. */
      intervalHeight?: number | string
      /** The number of minutes the intervals are in the `day` view. A common interval is 60 minutes so the intervals are an hour. */
      intervalMinutes?: number | string
      /** Returns CSS styling to apply to the interval. */
      intervalStyle?: Function
      /** The width of the interval gutter on the left side in the `day` view. */
      intervalWidth?: number | string
      /** Applies the light theme variant to the component. */
      light?: boolean
      /** The locale of the calendar. */
      locale?: string
      /** The maximum number of days to display in the custom calendar if an `end` day is not set. */
      maxDays?: number
      /** Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now. */
      now?: string
      /** If true, the intervals in the `day` view will be 9 AM as opposed to 09:00 AM */
      shortIntervals?: boolean
      /** Whether the short versions of a weekday should be used (Mon vs Monday). */
      shortWeekdays?: boolean
      /** Checks if a given day and time should be displayed in the interval gutter of the `day` view. */
      showIntervalLabel?: Function
      /** The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. */
      start?: string | number | Date
      /** Formats day of the week string that appears in the header to specified locale */
      weekdayFormat?: Function
      /** Specifies which days of the week to display. To display Monday through Friday only, a value of `[1, 2, 3, 4, 5]` can be used. To display a week starting on Monday a value of `[1, 2, 3, 4, 5, 6, 0]` can be used. */
      weekdays?: any[] | string
    }>
    VCalendarWeekly: DefineComponent<{
      /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
      color?: string
      /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
      dark?: boolean
      /** Formats day of the month string that appears in a day to a specified locale */
      dayFormat?: Function
      /** The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. */
      end?: string | number | Date
      /** If the header at the top of the `day` view should be visible. */
      hideHeader?: boolean
      /** Applies the light theme variant to the component. */
      light?: boolean
      /** The locale of the calendar. */
      locale?: string
      /** Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4. */
      localeFirstDayOfYear?: string | number
      /** The minimum number of weeks to display in the `month` or `week` view. */
      minWeeks?: any
      /** Formats month string that appears in a day to specified locale */
      monthFormat?: Function
      /** Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now. */
      now?: string
      /** Whether the short versions of a month should be used (Jan vs January). */
      shortMonths?: boolean
      /** Whether the short versions of a weekday should be used (Mon vs Monday). */
      shortWeekdays?: boolean
      /** Whether the name of the month should be displayed on the first day of the month. */
      showMonthOnFirst?: boolean
      /** Whether week numbers should be displayed when using the `month` view. */
      showWeek?: boolean
      /** The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. */
      start?: string | number | Date
      /** Formats day of the week string that appears in the header to specified locale */
      weekdayFormat?: Function
      /** Specifies which days of the week to display. To display Monday through Friday only, a value of `[1, 2, 3, 4, 5]` can be used. To display a week starting on Monday a value of `[1, 2, 3, 4, 5, 6, 0]` can be used. */
      weekdays?: any[] | string
    }>
    VCalendarMonthly: DefineComponent<{
      /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
      color?: string
      /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
      dark?: boolean
      /** Formats day of the month string that appears in a day to a specified locale */
      dayFormat?: Function
      /** The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. */
      end?: string | number | Date
      /** If the header at the top of the `day` view should be visible. */
      hideHeader?: boolean
      /** Applies the light theme variant to the component. */
      light?: boolean
      /** The locale of the calendar. */
      locale?: string
      /** Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4. */
      localeFirstDayOfYear?: string | number
      /** The minimum number of weeks to display in the `month` or `week` view. */
      minWeeks?: any
      /** Formats month string that appears in a day to specified locale */
      monthFormat?: Function
      /** Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now. */
      now?: string
      /** Whether the short versions of a month should be used (Jan vs January). */
      shortMonths?: boolean
      /** Whether the short versions of a weekday should be used (Mon vs Monday). */
      shortWeekdays?: boolean
      /** Whether the name of the month should be displayed on the first day of the month. */
      showMonthOnFirst?: boolean
      /** Whether week numbers should be displayed when using the `month` view. */
      showWeek?: boolean
      /** The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. */
      start?: string | number | Date
      /** Formats day of the week string that appears in the header to specified locale */
      weekdayFormat?: Function
      /** Specifies which days of the week to display. To display Monday through Friday only, a value of `[1, 2, 3, 4, 5]` can be used. To display a week starting on Monday a value of `[1, 2, 3, 4, 5, 6, 0]` can be used. */
      weekdays?: any[] | string
    }>
    VCard: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string
        /** Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. */
        append?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Removes the ability to click or target the component. */
        disabled?: boolean
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string
        /** Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. */
        exact?: boolean
        /** Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. */
        exactActiveClass?: string
        /** Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. */
        exactPath?: boolean
        /** Removes the card's elevation. */
        flat?: boolean
        /** Sets the height for the component. */
        height?: number | string
        /** Will apply an elevation of 4dp when hovered (default 2dp). You can find more information on the [elevation page](/styles/elevation). */
        hover?: boolean
        /** Designates the component as anchor and applies the **href** attribute. */
        href?: string | object
        /** Specifies an image background for the card. For more advanced implementations, it is recommended that you use the [v-img](/components/images) component. You can find a [v-img example here](/components/cards/#media-with-text). */
        img?: string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Designates that the component is a link. This is automatic when using the **href** or **to** prop. */
        link?: boolean
        /** Specifies the height of the loader */
        loaderHeight?: number | string
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). */
        nuxt?: boolean
        /** Removes elevation (box-shadow) and adds a *thin* border. */
        outlined?: boolean
        /** Specifies a higher default elevation (8dp). You can find more information on the [elevation page](/styles/elevation). */
        raised?: boolean
        /** Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. */
        replace?: boolean
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Designates the target attribute. This should only be applied when using the **href** prop. */
        target?: string
        /** Removes the component's **border-radius**. */
        tile?: boolean
        /** Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. */
        to?: string | object
        /** Sets the width for the component. */
        width?: number | string
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) */
          progress: undefined
        }>
      }
    >
    VCardActions: DefineComponent<
      {
        /** Specify a custom tag used on the root element. */ tag?: string
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
        /** Specify a custom tag used on the root element. */ tag?: string
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
        /** Specify a custom tag used on the root element. */ tag?: string
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
        /** Specify a custom tag used on the root element. */ tag?: string
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
        activeClass?: string
        /** Determines whether carousel is continuous */
        continuous?: boolean
        /** Determines if the carousel should cycle through images. */
        cycle?: boolean
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Sets icon for carousel delimiter */
        delimiterIcon?: string
        /** Sets the height for the component */
        height?: number | string
        /** Hides the bottom delimiter background. */
        hideDelimiterBackground?: boolean
        /** Hides the carousel's bottom delimiters. */
        hideDelimiters?: boolean
        /** The duration between image cycles. Requires the **cycle** prop. */
        interval?: number | string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Forces a value to always be selected (if available). */
        mandatory?: boolean
        /** Sets a maximum number of selections that can be made. */
        max?: number | string
        /** Allow multiple selections. The **value** prop must be an _array_. */
        multiple?: boolean
        /** The displayed icon for forcing pagination to the next item. */
        nextIcon?: boolean | string
        /** The displayed icon for forcing pagination to the previous item. */
        prevIcon?: boolean | string
        /** Displays a carousel progress bar. Requires the **cycle** prop and **interval**. */
        progress?: boolean
        /** Applies specified color to progress bar. */
        progressColor?: string
        /** Reverse the normal transition direction. */
        reverse?: boolean
        /** Displays arrows for next/previous navigation. */
        showArrows?: boolean
        /** Displays navigation arrows only when the carousel is hovered over. */
        showArrowsOnHover?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Provide a custom **left** and **right** function when swiped left or right. */
        touch?: object
        /** Disable touch support. */
        touchless?: boolean
        /** The designated model value for the component. */
        value?: any
        /** Apply a custom value comparator function */
        valueComparator?: Function
        /** Uses a vertical transition when changing windows. */
        vertical?: boolean
        /** Displays carousel delimiters vertically. */
        verticalDelimiters?: string
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
      }
    >
    VCarouselItem: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string
        /** Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. */
        append?: boolean
        /** Removes the ability to click or target the component. */
        disabled?: boolean
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean
        /** Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. */
        exact?: boolean
        /** Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. */
        exactActiveClass?: string
        /** Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. */
        exactPath?: boolean
        /** Designates the component as anchor and applies the **href** attribute. */
        href?: string | object
        /** Designates that the component is a link. This is automatic when using the **href** or **to** prop. */
        link?: boolean
        /** Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). */
        nuxt?: boolean
        /** Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. */
        replace?: boolean
        /** Sets the reverse transition */
        reverseTransition?: boolean | string
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Designates the target attribute. This should only be applied when using the **href** prop. */
        target?: string
        /** Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. */
        to?: string | object
        /** The transition used when the component progressing through items. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: boolean | string
        /** The value used when the component is selected in a group. If not provided, the index will be used. */
        value?: any
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
        appendIcon?: string
        /** Changes the background-color of the input */
        backgroundColor?: string
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Reduces the input height */
        dense?: boolean
        /** Disable the input */
        disabled?: boolean
        /** Puts the input in a manual error state */
        error?: boolean
        /** The total number of errors that should display at once */
        errorCount?: number | string
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[]
        /** Sets value for falsy state */
        falseValue?: any
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string
        /** Hint text */
        hint?: string
        /** Sets the DOM id on the component */
        id?: string
        /** Sets an indeterminate state for the checkbox */
        indeterminate?: boolean
        /** The icon used when in an indeterminate state */
        indeterminateIcon?: string
        /** The **v-model** bound value */
        inputValue?: any
        /** Sets input label */
        label?: string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Displays a list of messages or message if using a string */
        messages?: string | any[]
        /** Changes expected model to an array */
        multiple?: boolean
        /** The icon used when inactive */
        offIcon?: string
        /** The icon used when active */
        onIcon?: string
        /** Forces hint to always be visible */
        persistentHint?: boolean
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string
        /** Puts input in readonly state */
        readonly?: boolean
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: any[]
        /** Puts the input in a manual success state */
        success?: boolean
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[]
        /** Sets value for truthy state */
        trueValue?: any
        /** Delays validation until blur event */
        validateOnBlur?: boolean
        /** The input's value */
        value?: any
        /** Apply a custom value comparator function */
        valueComparator?: Function
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
      }
    >
    VSimpleCheckbox: DefineComponent<{
      /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
      color?: string
      /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
      dark?: boolean
      /** Disables simple checkbox. */
      disabled?: boolean
      /** Sets an indeterminate state for the simple checkbox. */
      indeterminate?: boolean
      /** The icon used when in an indeterminate state. */
      indeterminateIcon?: string
      /** Applies the light theme variant to the component. */
      light?: boolean
      /** The icon used when inactive. */
      offIcon?: string
      /** The icon used when active. */
      onIcon?: string
      /** Applies the [v-ripple](/directives/ripple) directive. */
      ripple?: boolean
      /** A boolean value that represents whether the simple checkbox is checked. */
      value?: boolean
    }>
    VChip: DefineComponent<
      {
        /** Determines whether the chip is visible or not. */ active?: boolean
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string
        /** Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. */
        append?: boolean
        /** Adds remove button */
        close?: boolean
        /** Change the default icon used for **close** chips */
        closeIcon?: string
        /** Text used for *aria-label* on the close button in **close** chips. Can also be customized globally in [Internationalization](/customization/internationalization). */
        closeLabel?: string
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Disables the chip, making it un-selectable */
        disabled?: boolean
        /** Makes the chip draggable */
        draggable?: boolean
        /** Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. */
        exact?: boolean
        /** Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. */
        exactActiveClass?: string
        /** Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. */
        exactPath?: boolean
        /** Displays a selection icon when selected */
        filter?: boolean
        /** Change the default icon used for **filter** chips */
        filterIcon?: string
        /** Designates the component as anchor and applies the **href** attribute. */
        href?: string | object
        /** Controls the **active** state of the item. This is typically used to highlight the component. */
        inputValue?: any
        /** Removes circle edges */
        label?: boolean
        /** Makes the component large. */
        large?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Explicitly define the chip as a link */
        link?: boolean
        /** Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). */
        nuxt?: boolean
        /** Removes background and applies border and text color */
        outlined?: boolean
        /** Remove `v-avatar` padding */
        pill?: boolean
        /** Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. */
        replace?: boolean
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object
        /** Makes the component small. */
        small?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Designates the target attribute. This should only be applied when using the **href** prop. */
        target?: string
        /** Applies a specified color to the control text */
        textColor?: string
        /** Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. */
        to?: string | object
        /** The value used when a child of a [v-chip-group](/components/chip-groups). */
        value?: any
        /** Makes the component extra large. */
        xLarge?: boolean
        /** Makes the component extra small. */
        xSmall?: boolean
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >
    VChipGroup: DefineComponent<
      {
        /** The **active-class** applied to children when they are activated. */
        activeClass?: string
        /** Forces the selected chip to be centered */
        centerActive?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Remove horizontal pagination and wrap items as needed */
        column?: boolean
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Forces a value to always be selected (if available). */
        mandatory?: boolean
        /** Sets a maximum number of selections that can be made. */
        max?: number | string
        /** Sets the designated mobile breakpoint for the component. */
        mobileBreakpoint?: number | string
        /** Allow multiple selections. The **value** prop must be an _array_. */
        multiple?: boolean
        /** Specify the icon to use for the next icon */
        nextIcon?: string
        /** Specify the icon to use for the prev icon */
        prevIcon?: string
        /** Force the display of the pagination arrows */
        showArrows?: boolean | string
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** The designated model value for the component. */
        value?: any
        /** Apply a custom value comparator function */
        valueComparator?: Function
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >
    VColorPicker: DefineComponent<{
      /** Height of canvas */ canvasHeight?: string | number
      /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
      dark?: boolean
      /** Disables picker */
      disabled?: boolean
      /** Changes the size of the selection dot on the canvas */
      dotSize?: number | string
      /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
      elevation?: number | string
      /** Removes elevation */
      flat?: boolean
      /** Hides canvas */
      hideCanvas?: boolean
      /** Hides inputs */
      hideInputs?: boolean
      /** Hides mode switch */
      hideModeSwitch?: boolean
      /** Hides sliders */
      hideSliders?: boolean
      /** Applies the light theme variant to the component. */
      light?: boolean
      /** Sets mode of inputs. Available modes are 'rgba', 'hsla', and 'hexa'. Can be synced with the `.sync` modifier. */
      mode?: string
      /** Displays color swatches */
      showSwatches?: boolean
      /** Sets the available color swatches to select from - This prop only accepts rgba hex strings */
      swatches?: any[]
      /** Sets the maximum height of the swatches section */
      swatchesMaxHeight?: number | string
      /** Current color. This can be either a string representing a hex color, or an object representing a RGBA, HSLA, or HSVA value */
      value?: object | string
      /** Sets the width of the color picker */
      width?: number | string
    }>
    VContent: DefineComponent<{
      /** Specify a custom tag used on the root element. */ tag?: string
    }>
    VCombobox: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string
        /** Appends an icon to the outside the component's input, uses same syntax as `v-icon` */
        appendOuterIcon?: string
        /** Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. */
        attach?: any
        /** When searching, will always highlight the first option */
        autoSelectFirst?: boolean
        /** Enables autofocus */
        autofocus?: boolean
        /** Changes the background-color of the input */
        backgroundColor?: string
        /** Keeps a local _unique_ copy of all items that have been passed through the **items** prop. */
        cacheItems?: boolean
        /** Changes display of selections to chips */
        chips?: boolean
        /** Applied when using **clearable** and the input is dirty */
        clearIcon?: string
        /** Add input clear functionality, default icon is Material Design Icons **mdi-clear** */
        clearable?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. */
        counter?: boolean | number | string
        counterValue?: Function
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Adds a remove icon to selected chips */
        deletableChips?: boolean
        /** Accepts an array of strings that will trigger a new tag when typing. Does not replace the normal Tab and Enter keys. */
        delimiters?: any[]
        /** Reduces the input height */
        dense?: boolean
        /** Disables keyboard lookup */
        disableLookup?: boolean
        /** Disables the input */
        disabled?: boolean
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean
        /** Puts the input in a manual error state */
        error?: boolean
        /** The total number of errors that should display at once */
        errorCount?: number | string
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[]
        /** Applies the alternate filled input style */
        filled?: boolean
        /** The function used for filtering items */
        filter?: Function
        /** Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props */
        flat?: boolean
        /** Designates input type as full-width */
        fullWidth?: boolean
        /** Sets the height of the input */
        height?: number | string
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string
        /** Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open. */
        hideNoData?: boolean
        /** Do not display in the select menu items that are already selected. Also removes checkboxes from the list when multiple */
        hideSelected?: boolean
        /** Hint text */
        hint?: string
        /** Sets the DOM id on the component */
        id?: string
        /** Sets color of selected items */
        itemColor?: string
        /** Set property of **items**'s disabled value */
        itemDisabled?: string | any[] | Function
        /** Set property of **items**'s text value */
        itemText?: string | any[] | Function
        /** Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479) */
        itemValue?: string | any[] | Function
        /** Can be an array of objects or array of strings. When using objects, will look for a text, value and disabled keys. This can be changed using the **item-text**, **item-value** and **item-disabled** props.  Objects that have a **header** or **divider** property are considered special cases and generate a list header or divider; these items are not selectable. */
        items?: any[]
        /** Sets input label */
        label?: string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Specifies the height of the loader */
        loaderHeight?: number | string
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string
        /** Pass props through to the `v-menu` component. Accepts either a string for boolean props `menu-props="auto, overflowY"`, or an object `:menu-props="{ auto: true, overflowY: true }"` */
        menuProps?: string | any[] | object
        /** Displays a list of messages or message if using a string */
        messages?: string | any[]
        /** Changes select to multiple. Accepts array for value */
        multiple?: boolean
        /** Display text when there is no data */
        noDataText?: string
        /** Do not apply filtering when searching. Useful when data is being filtered server side */
        noFilter?: boolean
        /** When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state */
        openOnClear?: boolean
        /** Applies the outlined style to the input */
        outlined?: boolean
        /** Forces hint to always be visible */
        persistentHint?: boolean
        /** Forces placeholder to always be visible */
        persistentPlaceholder?: boolean
        /** Sets the input's placeholder text */
        placeholder?: string
        /** Displays prefix text */
        prefix?: string
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string
        /** Prepends an icon inside the component's input, uses the same syntax as `v-icon` */
        prependInnerIcon?: string
        /** Puts input in readonly state */
        readonly?: boolean
        /** Changes the selection behavior to return the object directly rather than the value specified with **item-value** */
        returnObject?: boolean
        /** Reverses the input orientation */
        reverse?: boolean
        /** Adds a border radius to the input */
        rounded?: boolean
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: any[]
        /** Use the **.sync** modifier to catch user input from the search input */
        searchInput?: string
        /** Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` */
        shaped?: boolean
        /** Label does not move on focus/dirty */
        singleLine?: boolean
        /** Changes display of selections to chips with the **small** property */
        smallChips?: boolean
        /** Changes the style of the input */
        solo?: boolean
        /** Reduces element opacity until focused */
        soloInverted?: boolean
        /** Puts the input in a manual success state */
        success?: boolean
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[]
        /** Displays suffix text */
        suffix?: string
        /** Delays validation until blur event */
        validateOnBlur?: boolean
        /** The input's value */
        value?: any
        /** The comparison algorithm used for values. [More info](https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/util/helpers.ts) */
        valueComparator?: Function
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
            select: function
            selected: boolean
            disabled: boolean
          }) => VNode[]
        }>
      }
    >
    VDataIterator: DefineComponent<
      {
        checkboxColor?: string
        /** Function to filter items */
        customFilter?: Function
        /** Function used to group items */
        customGroup?: Function
        /** Function used to sort items */
        customSort?: Function
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Disables filtering completely */
        disableFiltering?: boolean
        /** Disables pagination completely */
        disablePagination?: boolean
        /** Disables sorting completely */
        disableSort?: boolean
        /** Array of expanded items. Can be used with `.sync` modifier */
        expanded?: any[]
        /** See the [`v-data-footer`](/api/v-data-footer) API for more information */
        footerProps?: object
        /** Changes which item property should be used for grouping items. Currently only supports a single grouping in the format: `group` or `['group']`. When using an array, only the first element is considered. Can be used with `.sync` modifier */
        groupBy?: string | any[]
        /** Changes which direction grouping is done. Can be used with `.sync` modifier */
        groupDesc?: boolean | any[]
        /** Hides default footer */
        hideDefaultFooter?: boolean
        /** The property on each item that is used as a unique key */
        itemKey?: string
        /** The array of items to display */
        items?: any[]
        /** Changes how many items per page should be visible. Can be used with `.sync` modifier. Setting this prop to `-1` will display all items on the page */
        itemsPerPage?: number
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** If `true` and no items are provided, then a loading text will be shown */
        loading?: boolean | string
        /** Text shown when `loading` is true and no items are provided */
        loadingText?: string
        /** Sets the locale used for sorting. This is passed into [`Intl.Collator()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) in the default `customSort` function */
        locale?: string
        /** Used to set when to toggle between regular table and mobile view */
        mobileBreakpoint?: number | string
        /** If `true` then one can sort on multiple properties */
        multiSort?: boolean
        /** If `true` then one can not disable sorting, it will always switch between ascending and descending */
        mustSort?: boolean
        /** Text shown when no items are provided to the component */
        noDataText?: string
        /** Text shown when `search` prop is used and there are no results */
        noResultsText?: string
        options?: DataOptions
        page?: number
        /** Text input used to filter items */
        search?: string
        /** The property on each item that is used to determine if it is selectable or not */
        selectableKey?: string
        /** Used only when data is provided by a server. Should be set to the total amount of items available on server so that pagination works correctly */
        serverItemsLength?: number
        /** Changes expansion mode to single expand */
        singleExpand?: boolean
        /** Changes selection mode to single select */
        singleSelect?: boolean
        /** Changes which item property (or properties) should be used for sort order. Can be used with `.sync` modifier */
        sortBy?: string | any[]
        /** Changes which direction sorting is done. Can be used with `.sync` modifier */
        sortDesc?: boolean | any[]
        /** Used for controlling selected rows */
        value?: any[]
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
      }
    >
    VDataFooter: DefineComponent<
      {
        /** Disables items-per-page dropdown */ disableItemsPerPage?: boolean
        /** Disables pagination buttons */
        disablePagination?: boolean
        /** First icon */
        firstIcon?: string
        /** Text for 'All' option in items-per-page dropdown */
        itemsPerPageAllText?: string
        /** Array of options to show in the items-per-page dropdown */
        itemsPerPageOptions?: any[]
        /** Text for items-per-page dropdown */
        itemsPerPageText?: string
        /** Last icon */
        lastIcon?: string
        /** Next icon */
        nextIcon?: string
        /** DataOptions */
        options?: object
        pageText?: string
        /** DataPagination */
        pagination?: object
        /** Previous icon */
        prevIcon?: string
        /** Show current page number between prev/next icons */
        showCurrentPage?: boolean
        /** Show first/last icons */
        showFirstLastPage?: boolean
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
      }
    >
    VDataTable: DefineComponent<
      {
        /** Enables calculation of column widths. `widths` property will be available in select scoped slots */
        calculateWidths?: boolean
        /** Set the caption (using `<caption>`) */
        caption?: string
        /** Set the color of the checkboxes (showSelect must be used) */
        checkboxColor?: string
        /** Function to filter items */
        customFilter?: Function
        /** Function used to group items */
        customGroup?: Function
        /** Function used to sort items */
        customSort?: Function
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Decreases the height of rows */
        dense?: boolean
        /** Disables filtering completely */
        disableFiltering?: boolean
        /** Disables pagination completely */
        disablePagination?: boolean
        /** Disables sorting completely */
        disableSort?: boolean
        /** Icon used for expand toggle button. */
        expandIcon?: string
        /** Array of expanded items. Can be used with `.sync` modifier */
        expanded?: any[]
        /** Controls how how custom column filters are combined with the default filtering. Both modes only apply the default filter to columns not specified in `customKeyFilter`.

- **union**: There is at least one match from the default filter, OR all custom column filters match.
- **intersection**: There is at least one match from the default filter, AND all custom column filters match. */
        filterMode?: string
        /** Fixed header to top of table. **NOTE:** Does not work in IE11 */
        fixedHeader?: boolean
        /** See the [`v-data-footer`](/api/v-data-footer) API for more information */
        footerProps?: object
        /** Changes which item property should be used for grouping items. Currently only supports a single grouping in the format: `group` or `['group']`. When using an array, only the first element is considered. Can be used with `.sync` modifier */
        groupBy?: string | any[]
        /** Changes which direction grouping is done. Can be used with `.sync` modifier */
        groupDesc?: boolean | any[]
        /** Pass props to the default header. See [`v-data-table-header` API](/api/v-data-table-header) for more information */
        headerProps?: object
        /** An array of objects that each describe a header column. See the example below for a definition of all properties */
        headers?: DataTableHeader[]
        /** Can be used in combination with `hide-default-header` to specify the number of columns in the table to allow expansion rows and loading bar to function properly */
        headersLength?: number
        /** Set an explicit height of table */
        height?: number | string
        /** Hides default footer */
        hideDefaultFooter?: boolean
        /** Hide the default headers */
        hideDefaultHeader?: boolean
        /** Property on supplied `items` that contains item's row class or function that takes an item as an argument and returns the class of corresponding row */
        itemClass?: string | Function
        /** The property on each item that is used as a unique key */
        itemKey?: string
        itemStyle?: string | Function
        /** The array of items to display */
        items?: any[]
        /** Changes how many items per page should be visible. Can be used with `.sync` modifier. Setting this prop to `-1` will display all items on the page */
        itemsPerPage?: number
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Specifies the height of the loader */
        loaderHeight?: number | string
        /** If `true` and no items are provided, then a loading text will be shown */
        loading?: boolean | string
        /** Text shown when `loading` is true and no items are provided */
        loadingText?: string
        /** Sets the locale used for sorting. This is passed into [`Intl.Collator()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) in the default `customSort` function */
        locale?: string
        /** Used to set when to toggle between regular table and mobile view */
        mobileBreakpoint?: number | string
        /** If `true` then one can sort on multiple properties */
        multiSort?: boolean
        /** If `true` then one can not disable sorting, it will always switch between ascending and descending */
        mustSort?: boolean
        /** Text shown when no items are provided to the component */
        noDataText?: string
        /** Text shown when `search` prop is used and there are no results */
        noResultsText?: string
        options?: DataOptions
        /** The current displayed page number (1-indexed) */
        page?: number
        /** Text input used to filter items */
        search?: string
        /** The property on each item that is used to determine if it is selectable or not */
        selectableKey?: string
        /** Used only when data is provided by a server. Should be set to the total amount of items available on server so that pagination works correctly */
        serverItemsLength?: number
        /** Shows the expand toggle in default rows */
        showExpand?: boolean
        /** Shows the group by toggle in the header and enables grouped rows */
        showGroupBy?: boolean
        /** Shows the select checkboxes in both the header and rows (if using default rows) */
        showSelect?: boolean
        /** Changes expansion mode to single expand */
        singleExpand?: boolean
        /** Changes selection mode to single select */
        singleSelect?: boolean
        /** Changes which item property (or properties) should be used for sort order. Can be used with `.sync` modifier */
        sortBy?: string | any[]
        /** Changes which direction sorting is done. Can be used with `.sync` modifier */
        sortDesc?: boolean | any[]
        /** Used for controlling selected rows */
        value?: any[]
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
      }
    >
    VEditDialog: DefineComponent<
      {
        /** Sets the default text for the cancel button when using the **large** prop */
        cancelText?: any
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean
        /** Attaches a submit and cancel button to the dialog */
        large?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Clicking outside or pressing **esc** key will not dismiss the dialog */
        persistent?: boolean
        returnValue?: any
        /** Sets the default text for the save button when using the **large** prop */
        saveText?: any
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: string
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Slot used to denote input component for v-edit-dialog */
          input: undefined
        }>
      }
    >
    VDataTableHeader: DefineComponent<{
      checkboxColor?: string
      /** Toggles rendering of sort button */
      disableSort?: boolean
      /** Indicates if all items in table are selected */
      everyItem?: boolean
      /** Array of header items to display */
      headers?: any[]
      /** Renders mobile view of headers */
      mobile?: boolean
      /** Options object. Identical to the one on `v-data-table` */
      options?: object
      /** Shows group by button */
      showGroupBy?: boolean
      /** Toggles rendering of select-all checkbox */
      singleSelect?: boolean
      /** Indicates if one or more items in table are selected */
      someItems?: boolean
      /** Sets the label text used by the default sort-by selector when `v-data-table` is rendering the mobile view */
      sortByText?: string
      /** Icon used for sort button */
      sortIcon?: string
    }>
    VSimpleTable: DefineComponent<
      {
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Decreases paddings to render a dense table */
        dense?: boolean
        /** Sets table header to fixed mode */
        fixedHeader?: boolean
        /** Sets the height for the component */
        height?: number | string
        /** Applies the light theme variant to the component. */
        light?: boolean
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
        activePicker?: string
        /** Restricts which dates can be selected */
        allowedDates?: Function
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Allows you to customize the format of the day string that appears in the date table. Called with date (ISO 8601 **date** string) arguments. */
        dayFormat?: Function
        /** Disables interaction with the picker */
        disabled?: boolean
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string
        /** Sets the color for event dot. It can be string (all events will have the same color) or `object` where attribute is the event date and value is boolean/color/array of colors for specified date or `function` taking date as a parameter and returning boolean/color/array of colors for that date */
        eventColor?: any[] | Function | object | string
        /** Array of dates or object defining events or colors or function returning boolean/color/array of colors */
        events?: any[] | Function | object
        /** Sets the first day of the week, starting with 0 for Sunday. */
        firstDayOfWeek?: string | number
        /** Removes  elevation */
        flat?: boolean
        /** Forces 100% width */
        fullWidth?: boolean
        /** Defines the header color. If not specified it will use the color defined by <code>color</code> prop or the default picker color */
        headerColor?: string
        /** Allows you to customize the format of the month string that appears in the header of the calendar. Called with date (ISO 8601 **date** string) arguments. */
        headerDateFormat?: Function
        /** Orients picker horizontal */
        landscape?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Sets the locale. Accepts a string with a BCP 47 language tag. */
        locale?: string
        /** Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4. */
        localeFirstDayOfYear?: string | number
        /** Maximum allowed date/month (ISO 8601 format) */
        max?: string
        /** Minimum allowed date/month (ISO 8601 format) */
        min?: string
        /** Formatting function used for displaying months in the months table. Called with date (ISO 8601 **date** string) arguments. */
        monthFormat?: Function
        /** Allow the selection of multiple dates */
        multiple?: boolean
        /** Sets the icon for next month/year button */
        nextIcon?: string
        nextMonthAriaLabel?: string
        nextYearAriaLabel?: string
        /** Hide the picker title */
        noTitle?: boolean
        /** Displayed year/month */
        pickerDate?: string
        /** Sets the icon for previous month/year button */
        prevIcon?: string
        prevMonthAriaLabel?: string
        prevYearAriaLabel?: string
        /** Allow the selection of date range */
        range?: boolean
        /** Updates the picker model when changing months/years automatically */
        reactive?: boolean
        /** Makes the picker readonly (doesn't allow to select new date) */
        readonly?: boolean
        /** Allows changing displayed month with mouse scroll */
        scrollable?: boolean
        /** Text used for translating the number of selected dates when using *multiple* prop. Can also be customizing globally in [Internationalization](/customization/internationalization). */
        selectedItemsText?: string
        /** Toggles visibility of days from previous and next months */
        showAdjacentMonths?: boolean
        /** Toggles visibility of the current date/month outline or shows the provided date/month as a current */
        showCurrent?: boolean | string
        /** Toggles visibility of the week numbers in the body of the calendar */
        showWeek?: boolean
        /** Allows you to customize the format of the date string that appears in the title of the date picker. Called with date (ISO 8601 **date** string) arguments. */
        titleDateFormat?: Function
        /** Determines the type of the picker - `date` for date picker, `month` for month picker */
        type?: string
        /** Date picker model (ISO 8601 format, YYYY-mm-dd or YYYY-mm) */
        value?: any[] | string
        /** Allows you to customize the format of the weekday string that appears in the body of the calendar. Called with date (ISO 8601 **date** string) arguments. */
        weekdayFormat?: Function
        /** Width of the picker */
        width?: number | string
        /** Allows you to customize the format of the year string that appears in the header of the calendar. Called with date (ISO 8601 **date** string) arguments. */
        yearFormat?: Function
        /** Sets the icon in the year selection button */
        yearIcon?: string
      },
      {
        $scopedSlots: Readonly<{
          /** Displayed below the calendar, can be used for example for adding action button (`OK` and `Cancel`) */
          default: undefined
        }>
      }
    >
    VDialog: DefineComponent<
      {
        /** Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node. */
        activator?: any
        /** Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. */
        attach?: any
        /** Milliseconds to wait before closing component. Only applies to hover and focus events. */
        closeDelay?: number | string
        /** Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component. */
        contentClass?: string
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Disables the ability to open the component. */
        disabled?: boolean
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean
        /** Changes layout for fullscreen display. */
        fullscreen?: boolean
        /** Hides the display of the overlay. */
        hideOverlay?: boolean
        /** Detaches the menu content inside of the component as opposed to the document. */
        internalActivator?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Sets the maximum width for the component. */
        maxWidth?: string | number
        /** Disables the bounce effect when clicking outside of a `v-dialog`'s content when using the **persistent** prop. */
        noClickAnimation?: boolean
        /** Milliseconds to wait before opening component. Only applies to hover and focus events. */
        openDelay?: number | string
        openOnClick?: boolean
        openOnFocus?: boolean
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string
        /** Sets the overlay color. */
        overlayColor?: string
        /** Sets the overlay opacity. */
        overlayOpacity?: number | string
        /** Clicking outside of the element or pressing **esc** key will not deactivate it. */
        persistent?: boolean
        /** Tab focus will return to the first child of the dialog by default. Disable this when using external tools that require focus such as TinyMCE or vue-clipboard. */
        retainFocus?: boolean
        returnValue?: any
        /** When set to true, expects a `v-card` and a `v-card-text` component with a designated height. For more information, check out the [scrollable example](/components/dialogs#scrollable). */
        scrollable?: boolean
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: string | boolean
        /** Controls whether the component is visible or hidden. */
        value?: any
        /** Sets the width for the component. */
        width?: string | number
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
      }
    >
    VDivider: DefineComponent<{
      /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
      dark?: boolean
      /** Adds indentation (72px) for **normal** dividers, reduces max height for **vertical**. */
      inset?: boolean
      /** Applies the light theme variant to the component. */
      light?: boolean
      /** Displays dividers vertically */
      vertical?: boolean
    }>
    VExpansionPanels: DefineComponent<{
      /** Removes the margin around open panels */ accordion?: boolean
      /** The **active-class** applied to children when they are activated. */
      activeClass?: string
      /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
      dark?: boolean
      /** Disables the entire expansion-panel */
      disabled?: boolean
      /** Removes the expansion-panel's elevation and borders */
      flat?: boolean
      /** Makes the expansion-panel headers focusable */
      focusable?: boolean
      /** Applies a background-color shift on hover to expansion panel headers */
      hover?: boolean
      /** Makes the expansion-panel open with a inset style */
      inset?: boolean
      /** Applies the light theme variant to the component. */
      light?: boolean
      /** Forces a value to always be selected (if available). */
      mandatory?: boolean
      /** Sets a maximum number of selections that can be made. */
      max?: number | string
      /** Allow multiple selections. The **value** prop must be an _array_. */
      multiple?: boolean
      /** Makes the expansion-panel open with an popout style */
      popout?: boolean
      /** Makes the entire expansion-panel read only. */
      readonly?: boolean
      /** Specify a custom tag used on the root element. */
      tag?: string
      /** Removes the border-radius */
      tile?: boolean
      /** Controls the opened/closed state of content in the expansion-panel. Corresponds to a zero-based index of the currently opened content. If the `multiple` prop (previously `expand` in 1.5.x) is used then it is an array of numbers where each entry corresponds to the index of the opened content.  The index order is not relevant. */
      value?: any
      /** Apply a custom value comparator function */
      valueComparator?: Function
    }>
    VExpansionPanel: DefineComponent<{
      /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
      activeClass?: string
      /** Disables the expansion-panel content */
      disabled?: boolean
      /** Makes the expansion-panel content read only. */
      readonly?: boolean
    }>
    VExpansionPanelHeader: DefineComponent<
      {
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Removes the icon rotation animation when expanding a panel */
        disableIconRotate?: boolean
        /** Set the expand action icon */
        expandIcon?: string
        /** Hide the expand icon in the content header */
        hideActions?: boolean
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object
      },
      {
        $scopedSlots: Readonly<{
          /** Expansion header actions */
          actions: (args: { open: boolean }) => VNode[]
          /** The default Vue slot. */
          default: (args: { open: boolean }) => VNode[]
        }>
      }
    >
    VExpansionPanelContent: DefineComponent<
      {
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean
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
        appendIcon?: string
        /** Appends an icon to the outside the component's input, uses same syntax as `v-icon` */
        appendOuterIcon?: string
        /** Enables autofocus */
        autofocus?: boolean
        /** Changes the background-color of the input */
        backgroundColor?: string
        /** Changes display of selections to chips */
        chips?: boolean
        /** Applied when using **clearable** and the input is dirty */
        clearIcon?: string
        /** Add input clear functionality, default icon is Material Design Icons **mdi-clear** */
        clearable?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. */
        counter?: boolean | number | string
        /** The text displayed when using the **counter** and **show-size** props. Can also be customized globally on the [internationalization page](/customization/internationalization). */
        counterSizeString?: string
        /** The text displayed when using the **counter** prop. Can also be customized globally on the [internationalization page](/customization/internationalization). */
        counterString?: string
        counterValue?: Function
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Reduces the input height */
        dense?: boolean
        /** Disable the input */
        disabled?: boolean
        /** Puts the input in a manual error state */
        error?: boolean
        /** The total number of errors that should display at once */
        errorCount?: number | string
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[]
        /** Applies the alternate filled input style */
        filled?: boolean
        /** Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props */
        flat?: boolean
        /** Designates input type as full-width */
        fullWidth?: boolean
        /** Sets the height of the input */
        height?: number | string
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string
        /** Display the icon only without the input (file names) */
        hideInput?: boolean
        /** Hint text */
        hint?: string
        /** Sets the DOM id on the component */
        id?: string
        /** Sets input label */
        label?: string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Specifies the height of the loader */
        loaderHeight?: number | string
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string
        /** Displays a list of messages or message if using a string */
        messages?: string | any[]
        /** Adds the **multiple** attribute to the input, allowing multiple file selections. */
        multiple?: boolean
        /** Applies the outlined style to the input */
        outlined?: boolean
        /** Forces hint to always be visible */
        persistentHint?: boolean
        /** Forces placeholder to always be visible */
        persistentPlaceholder?: boolean
        /** Sets the input's placeholder text */
        placeholder?: string
        /** Displays prefix text */
        prefix?: string
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string
        /** Prepends an icon inside the component's input, uses the same syntax as `v-icon` */
        prependInnerIcon?: string
        /** Reverses the input orientation */
        reverse?: boolean
        /** Adds a border radius to the input */
        rounded?: boolean
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: any[]
        /** Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` */
        shaped?: boolean
        /** Sets the displayed size of selected file(s). When using **true** will default to _1000_ displaying (**kB, MB, GB**) while _1024_ will display (**KiB, MiB, GiB**). */
        showSize?: boolean | number
        /** Label does not move on focus/dirty */
        singleLine?: boolean
        /** Changes display of selections to chips with the **small** property */
        smallChips?: boolean
        /** Changes the style of the input */
        solo?: boolean
        /** Reduces element opacity until focused */
        soloInverted?: boolean
        /** Puts the input in a manual success state */
        success?: boolean
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[]
        /** Displays suffix text */
        suffix?: string
        /** The length of a filename before it is truncated with ellipsis */
        truncateLength?: number | string
        /** Delays validation until blur event */
        validateOnBlur?: boolean
        /** A single or array of [File objects](https://developer.mozilla.org/en-US/docs/Web/API/File). */
        value?: any
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
      }
    >
    VFooter: DefineComponent<
      {
        /** Applies **position: absolute** to the component. */
        absolute?: boolean
        /** Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop */
        app?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string
        /** Applies **position: fixed** to the component. */
        fixed?: boolean
        /** Sets the height for the component. */
        height?: number | string
        /** Positions the toolbar offset from an application `v-navigation-drawer` */
        inset?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** Removes elevation (box-shadow) and adds a *thin* border. */
        outlined?: boolean
        /** Remove all padding from the footer */
        padless?: boolean
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Removes the component's **border-radius**. */
        tile?: boolean
        /** Sets the width for the component. */
        width?: number | string
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
        disabled?: boolean
        /** If enabled, **value** will always be _true_ unless there are visible validation errors. You can still call `validate()` to manually trigger validation */
        lazyValidation?: boolean
        /** Puts all children inputs into a readonly state. */
        readonly?: boolean
        /** A boolean value representing the validity of the form. */
        value?: boolean
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >
    VContainer: DefineComponent<
      {
        /** Removes viewport maximum-width size breakpoints */ fluid?: boolean
        /** Sets the DOM id on the component */
        id?: string
        /** Specify a custom tag used on the root element. */
        tag?: string
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
        alignSelf?: string
        /** Sets the default number of columns the component extends. Available options are **1 -> 12** and **auto**. */
        cols?: boolean | string | number
        /** Changes the number of columns on large and greater breakpoints. */
        lg?: boolean | string | number
        /** Changes the number of columns on medium and greater breakpoints. */
        md?: boolean | string | number
        /** Sets the default offset for the column. */
        offset?: string | number
        /** Changes the offset of the component on large and greater breakpoints. */
        offsetLg?: string | number
        /** Changes the offset of the component on medium and greater breakpoints. */
        offsetMd?: string | number
        /** Changes the offset of the component on small and greater breakpoints. */
        offsetSm?: string | number
        /** Changes the offset of the component on extra large and greater breakpoints. */
        offsetXl?: string | number
        /** Sets the default [order](https://developer.mozilla.org/en-US/docs/Web/CSS/order) for the column. */
        order?: string | number
        /** Changes the order of the component on large and greater breakpoints. */
        orderLg?: string | number
        /** Changes the order of the component on medium and greater breakpoints. */
        orderMd?: string | number
        /** Changes the order of the component on small and greater breakpoints. */
        orderSm?: string | number
        /** Changes the order of the component on extra large and greater breakpoints. */
        orderXl?: string | number
        /** Changes the number of columns on small and greater breakpoints. */
        sm?: boolean | string | number
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Changes the number of columns on extra large and greater breakpoints. */
        xl?: boolean | string | number
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
        align?: string
        /** Applies the [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) css property. Available options are **start**, **center**, **end**, **space-between**, **space-around** and **stretch**. */
        alignContent?: string
        /** Changes the **align-content** property on large and greater breakpoints. */
        alignContentLg?: string
        /** Changes the **align-content** property on medium and greater breakpoints. */
        alignContentMd?: string
        /** Changes the **align-content** property on small and greater breakpoints. */
        alignContentSm?: string
        /** Changes the **align-content** property on extra large and greater breakpoints. */
        alignContentXl?: string
        /** Changes the **align-items** property on large and greater breakpoints. */
        alignLg?: string
        /** Changes the **align-items** property on medium and greater breakpoints. */
        alignMd?: string
        /** Changes the **align-items** property on small and greater breakpoints. */
        alignSm?: string
        /** Changes the **align-items** property on extra large and greater breakpoints. */
        alignXl?: string
        /** Reduces the gutter between `v-col`s. */
        dense?: boolean
        /** Applies the [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) css property. Available options are **start**, **center**, **end**, **space-between** and **space-around**. */
        justify?: string
        /** Changes the **justify-content** property on large and greater breakpoints. */
        justifyLg?: string
        /** Changes the **justify-content** property on medium and greater breakpoints. */
        justifyMd?: string
        /** Changes the **justify-content** property on small and greater breakpoints. */
        justifySm?: string
        /** Changes the **justify-content** property on extra large and greater breakpoints. */
        justifyXl?: string
        /** Removes the gutter between `v-col`s. */
        noGutters?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
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
        /** Specify a custom tag used on the root element. */ tag?: string
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
        closeDelay?: number | string
        /** Turns off hover functionality */
        disabled?: boolean
        /** Milliseconds to wait before opening component. Only applies to hover and focus events. */
        openDelay?: number | string
        /** Controls whether the component is visible or hidden. */
        value?: boolean
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
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Makes icon smaller (20px) */
        dense?: boolean
        /** Disable the input */
        disabled?: boolean
        /** Makes the component large. */
        large?: boolean
        /** Applies appropriate margins to the icon inside of a button when placed to the **left** of another element or text */
        left?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Applies appropriate margins to the icon inside of a button when placed to the **right** of another element or text */
        right?: boolean
        /** Specifies a custom font size for the icon */
        size?: number | string
        /** Makes the component small. */
        small?: boolean
        /** Specifies a custom tag to be used */
        tag?: string
        /** Makes the component extra large. */
        xLarge?: boolean
        /** Makes the component extra small. */
        xSmall?: boolean
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
        alt?: string
        /** Calculated as `width/height`, so for a 1920x1080px image this will be `1.7778`. Will be calculated automatically if omitted */
        aspectRatio?: string | number
        /** Prevents the image from being cropped if it doesn't fit */
        contain?: boolean
        /** Apply a custom class to the responsive content div. */
        contentClass?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean
        /** Overlays a gradient onto the image. Only supports [linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) syntax, anything else should be done with classes (see examples) */
        gradient?: string
        /** Sets the height for the component. */
        height?: number | string
        /** Something to show while waiting for the main image to load, typically a small base64-encoded thumbnail. Has a slight blur filter applied.

Use [vuetify-loader](https://github.com/vuetifyjs/vuetify-loader) to generate automatically */
        lazySrc?: string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** Options that are passed to the [Intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) constructor. */
        options?: object
        /** Overrides the default to change which parts get cropped off. Uses the same syntax as [`background-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) */
        position?: string
        /** For use with `srcset`, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes) */
        sizes?: string
        /** The image URL. This prop is mandatory */
        src?: string | object
        /** A set of alternate images to use based on device size. [Read more...](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset) */
        srcset?: string
        /** The transition to use when switching from `lazy-src` to `src` */
        transition?: boolean | string
        /** Sets the width for the component. */
        width?: number | string
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Slot for image placeholder */
          placeholder: undefined
        }>
      }
    >
    VInput: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string
        /** Changes the background-color of the input */
        backgroundColor?: string
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Reduces the input height */
        dense?: boolean
        /** Disable the input */
        disabled?: boolean
        /** Puts the input in a manual error state */
        error?: boolean
        /** The total number of errors that should display at once */
        errorCount?: number | string
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[]
        /** Sets the height of the input */
        height?: number | string
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string
        /** Hides spin buttons on the input when type is set to `number`. */
        hideSpinButtons?: boolean
        /** Hint text */
        hint?: string
        /** Sets the DOM id on the component */
        id?: string
        /** Sets input label */
        label?: string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean
        /** Displays a list of messages or message if using a string */
        messages?: string | any[]
        /** Forces hint to always be visible */
        persistentHint?: boolean
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string
        /** Puts input in readonly state */
        readonly?: boolean
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: any[]
        /** Puts the input in a manual success state */
        success?: boolean
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[]
        /** Delays validation until blur event */
        validateOnBlur?: boolean
        /** The input's value */
        value?: any
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Replaces the default label */
          label: undefined
          message: (args: { key: number; message: string }) => VNode[]
        }>
      }
    >
    VItem: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string
        /** Removes the ability to click or target the component. */
        disabled?: boolean
        /** The value used when the component is selected in a group. If not provided, the index will be used. */
        value?: any
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
    VItemGroup: DefineComponent<{
      /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
      activeClass?: string
      /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
      dark?: boolean
      /** Applies the light theme variant to the component. */
      light?: boolean
      /** Forces a value to always be selected (if available). */
      mandatory?: boolean
      /** Sets a maximum number of selections that can be made. */
      max?: number | string
      /** Allow multiple selections. The **value** prop must be an _array_. */
      multiple?: boolean
      /** Specify a custom tag used on the root element. */
      tag?: string
      /** The designated model value for the component. */
      value?: any
      /** Apply a custom value comparator function */
      valueComparator?: Function
    }>
    VLazy: DefineComponent<
      {
        /** Sets the height for the component. */ height?: number | string
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** Options that are passed to the [Intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) constructor. */
        options?: object
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: string
        /** Controls whether the component is visible or hidden. */
        value?: any
        /** Sets the width for the component. */
        width?: number | string
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
        /** Specify a custom tag used on the root element. */ tag?: string
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
        /** Specify a custom tag used on the root element. */ tag?: string
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
        /** Specify a custom tag used on the root element. */ tag?: string
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
        /** Specify a custom tag used on the root element. */ tag?: string
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
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Lowers max height of list tiles */
        dense?: boolean
        /** Disables all children `v-list-item` components */
        disabled?: boolean
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string
        /** Will only collapse when explicitly closed */
        expand?: boolean
        /** Remove the highlighted background on active `v-list-item`s */
        flat?: boolean
        /** Sets the height for the component. */
        height?: number | string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** An alternative styling that reduces `v-list-item` width and rounds the corners. Typically used with **[v-navigation-drawer](/components/navigation-drawers)** */
        nav?: boolean
        /** Removes elevation (box-shadow) and adds a *thin* border. */
        outlined?: boolean
        /** Rounds the `v-list-item` edges */
        rounded?: boolean
        /** Provides an alternative active style for `v-list-item`. */
        shaped?: boolean
        /** Removes top padding. Used when previous sibling is a header */
        subheader?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Increases list-item height for three lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers. */
        threeLine?: boolean
        /** Removes the component's **border-radius**. */
        tile?: boolean
        /** Increases list-item height for two lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers. */
        twoLine?: boolean
        /** Sets the width for the component. */
        width?: number | string
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
        activeClass?: string
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Disables all children `v-list-item` components */
        disabled?: boolean
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean
        /** Assign a route namespace. Accepts a string or regexp for determining active state */
        group?: string | RegExp
        /** Removes left padding assigned for action icons from group items */
        noAction?: boolean
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object
        /** Designate the component as nested list group */
        subGroup?: boolean
        /** Expands / Collapse the list-group */
        value?: any
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
      }
    >
    VListItem: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string
        /** Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. */
        append?: boolean
        /** Applies specified color to the control when in an **active** state or **input-value** is **true** - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`) */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Lowers max height of list tiles */
        dense?: boolean
        /** Disables the component */
        disabled?: boolean
        /** Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. */
        exact?: boolean
        /** Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. */
        exactActiveClass?: string
        /** Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. */
        exactPath?: boolean
        /** Designates the component as anchor and applies the **href** attribute. */
        href?: string | object
        /** If set, the list tile will not be rendered as a link even if it has to/href prop or @click handler */
        inactive?: boolean
        /** Controls the **active** state of the item. This is typically used to highlight the component */
        inputValue?: any
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Designates that the component is a link. This is automatic when using the **href** or **to** prop. */
        link?: boolean
        /** Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). */
        nuxt?: boolean
        /** Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. */
        replace?: boolean
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object
        /** Allow text selection inside `v-list-item`. This prop uses [user-select](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select) */
        selectable?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Designates the target attribute. This should only be applied when using the **href** prop. */
        target?: string
        /** Increases list-item height for three lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers. */
        threeLine?: boolean
        /** Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. */
        to?: string | object
        /** Increases list-item height for two lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers. */
        twoLine?: boolean
        /** The value used when a child of a [v-list-item-group](/components/list-item-groups). */
        value?: any
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
        color?: string
        /** Sets the height for the component. */
        height?: number | string
        /** Uses an alternative horizontal style. */
        horizontal?: boolean
        /** Designates that the avatar is on the left side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons). */
        left?: boolean
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** Designates that the avatar is on the right side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons). */
        right?: boolean
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string
        /** Sets the height and width of the component. */
        size?: number | string
        /** Removes the component's **border-radius**. */
        tile?: boolean
        /** Sets the width for the component. */
        width?: number | string
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
        activeClass?: string
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Forces a value to always be selected (if available). */
        mandatory?: boolean
        /** Sets a maximum number of selections that can be made. */
        max?: number | string
        /** Allow multiple selections. The **value** prop must be an _array_. */
        multiple?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Sets the active list-item inside the list-group */
        value?: any
        /** Apply a custom value comparator function */
        valueComparator?: Function
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >
    VMain: DefineComponent<{
      /** Specify a custom tag used on the root element. */ tag?: string
    }>
    VMenu: DefineComponent<
      {
        /** Applies **position: absolute** to the component. */
        absolute?: boolean
        /** Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node. */
        activator?: any
        /** Removes overflow re-positioning for the content */
        allowOverflow?: boolean
        /** Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. */
        attach?: any
        /** Centers list on selected element */
        auto?: boolean
        /** Aligns the component towards the bottom. */
        bottom?: boolean
        /** Milliseconds to wait before closing component. Only works with the **open-on-hover** prop */
        closeDelay?: number | string
        /** Designates if menu should close on outside-activator click */
        closeOnClick?: boolean
        /** Designates if menu should close when its content is clicked */
        closeOnContentClick?: boolean
        /** Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component. */
        contentClass?: string
        /** Applies props/attributes to the detached menu. This is useful because the content is moved to the beginning of the `v-app` component (unless the attach prop is provided) and is not targetable by classes passed directly on the component. You could use this for example for applying a `data-cy` for cypress testing purposes. */
        contentProps?: object
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Removes all keyboard interaction */
        disableKeys?: boolean
        /** Disables the menu */
        disabled?: boolean
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean
        /** Detaches the menu content inside of the component as opposed to the document. */
        internalActivator?: boolean
        /** Aligns the component towards the left. */
        left?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Sets the max height of the menu content */
        maxHeight?: number | string
        /** Sets the maximum width for the content */
        maxWidth?: number | string
        /** Sets the minimum width for the content */
        minWidth?: number | string
        /** Nudge the content to the bottom */
        nudgeBottom?: number | string
        /** Nudge the content to the left */
        nudgeLeft?: number | string
        /** Nudge the content to the right */
        nudgeRight?: number | string
        /** Nudge the content to the top */
        nudgeTop?: number | string
        /** Nudge the content width */
        nudgeWidth?: number | string
        /** Causes the component to flip to the opposite side when repositioned due to overflow */
        offsetOverflow?: boolean
        /** Offset the menu on the x-axis. Works in conjunction with direction left/right */
        offsetX?: boolean
        /** Offset the menu on the y-axis. Works in conjunction with direction top/bottom */
        offsetY?: boolean
        /** Milliseconds to wait before opening component. Only works with the **open-on-hover** prop */
        openDelay?: number | string
        /** Designates whether menu should open on activator click */
        openOnClick?: boolean
        openOnFocus?: boolean
        /** Designates whether menu should open on activator hover */
        openOnHover?: boolean
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string
        /** Used to position the content when not using an activator slot */
        positionX?: number
        /** Used to position the content when not using an activator slot */
        positionY?: number
        /** The value that is updated when the menu is closed - must be primitive. Dot notation is supported */
        returnValue?: any
        /** Aligns the component towards the right. */
        right?: boolean
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string
        /** Removes the component's **border-radius**. */
        tile?: boolean
        /** Aligns the content towards the top. */
        top?: boolean
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: boolean | string
        /** Controls whether the component is visible or hidden. */
        value?: any
        /** The z-index used for the component */
        zIndex?: number | string
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
      }
    >
    VNavigationDrawer: DefineComponent<
      {
        /** Applies **position: absolute** to the component. */
        absolute?: boolean
        /** Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop */
        app?: boolean
        /** Expands from the bottom of the screen on mobile devices */
        bottom?: boolean
        /** A clipped drawer rests under the application toolbar. **Note:** requires the **clipped-left** or **clipped-right** prop on `v-app-bar` to work as intended */
        clipped?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Will automatically open/close drawer when resized depending if mobile or desktop. */
        disableResizeWatcher?: boolean
        /** Disables opening of navigation drawer when route changes */
        disableRouteWatcher?: boolean
        /** Collapses the drawer to a **mini-variant** until hovering with the mouse */
        expandOnHover?: boolean
        /** Applies **position: fixed** to the component. */
        fixed?: boolean
        /** A floating drawer has no visible container (no border-right) */
        floating?: boolean
        /** Sets the height of the navigation drawer */
        height?: number | string
        /** Hides the display of the overlay. */
        hideOverlay?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Condenses navigation drawer width, also accepts the **.sync** modifier. With this, the drawer will re-open when clicking it */
        miniVariant?: boolean
        /** Designates the width assigned when the `mini` prop is turned on */
        miniVariantWidth?: number | string
        /** Sets the designated mobile breakpoint for the component. This will apply alternate styles for mobile devices such as the `temporary` prop, or activate the `bottom` prop when the breakpoint value is met. Setting the value to `0` will disable this functionality. */
        mobileBreakpoint?: number | string
        /** Sets the overlay color. */
        overlayColor?: string
        /** Sets the overlay opacity. */
        overlayOpacity?: number | string
        /** The drawer remains visible regardless of screen size */
        permanent?: boolean
        /** Places the navigation drawer on the right */
        right?: boolean
        /** Specifies a [v-img](/components/images) as the component's background. */
        src?: string | object
        /** Remove all automated state functionality (resize, mobile, route) and manually control the drawer state */
        stateless?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** A temporary drawer sits above its application and uses a scrim (overlay) to darken the background */
        temporary?: boolean
        /** Disable mobile touch functionality */
        touchless?: boolean
        /** Controls whether the component is visible or hidden. */
        value?: any
        /** Sets the width for the component. */
        width?: number | string
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
      }
    >
    VOtpInput: DefineComponent<{
      /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
      dark?: boolean
      /** Disable the input */
      disabled?: boolean
      /** Sets the DOM id on the component */
      id?: string
      /** The OTP field's length */
      length?: number | string
      /** Outlined style applied by default to the input, set to `true` to apply plain style */
      plain?: boolean
      /** Puts input in readonly state */
      readonly?: boolean
      /** Supported types: `text`, `password`, `number` */
      type?: string
      /** The input's value */
      value?: any
    }>
    VOverflowBtn: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string
        /** Appends an icon to the outside the component's input, uses same syntax as `v-icon` */
        appendOuterIcon?: string
        /** Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. */
        attach?: any
        /** When searching, will always highlight the first option */
        autoSelectFirst?: boolean
        /** Enables autofocus */
        autofocus?: boolean
        /** Changes the background-color of the input */
        backgroundColor?: string
        /** Keeps a local _unique_ copy of all items that have been passed through the **items** prop. */
        cacheItems?: boolean
        /** Changes display of selections to chips */
        chips?: boolean
        /** Applied when using **clearable** and the input is dirty */
        clearIcon?: string
        /** Add input clear functionality, default icon is Material Design Icons **mdi-clear** */
        clearable?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. */
        counter?: boolean | number | string
        counterValue?: Function
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Adds a remove icon to selected chips */
        deletableChips?: boolean
        /** Reduces the input height */
        dense?: boolean
        /** Disables keyboard lookup */
        disableLookup?: boolean
        /** Disables the input */
        disabled?: boolean
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean
        /** Creates an editable button */
        editable?: boolean
        /** Puts the input in a manual error state */
        error?: boolean
        /** The total number of errors that should display at once */
        errorCount?: number | string
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[]
        /** Applies the alternate filled input style */
        filled?: boolean
        /** The function used for filtering items */
        filter?: Function
        /** Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props */
        flat?: boolean
        /** Designates input type as full-width */
        fullWidth?: boolean
        /** Sets the height of the input */
        height?: number | string
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string
        /** Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open. */
        hideNoData?: boolean
        /** Do not display in the select menu items that are already selected. Also removes checkboxes from the list when multiple */
        hideSelected?: boolean
        /** Hint text */
        hint?: string
        /** Sets the DOM id on the component */
        id?: string
        /** Sets color of selected items */
        itemColor?: string
        /** Set property of **items**'s disabled value */
        itemDisabled?: string | any[] | Function
        /** Set property of **items**'s text value */
        itemText?: string | any[] | Function
        /** Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479) */
        itemValue?: string | any[] | Function
        /** Can be an array of objects or array of strings. When using objects, will look for a text, value and disabled keys. This can be changed using the **item-text**, **item-value** and **item-disabled** props.  Objects that have a **header** or **divider** property are considered special cases and generate a list header or divider; these items are not selectable. */
        items?: any[]
        /** Sets input label */
        label?: string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Specifies the height of the loader */
        loaderHeight?: number | string
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string
        /** Pass props through to the `v-menu` component. Accepts either a string for boolean props `menu-props="auto, overflowY"`, or an object `:menu-props="{ auto: true, overflowY: true }"` */
        menuProps?: string | any[] | object
        /** Displays a list of messages or message if using a string */
        messages?: string | any[]
        /** Changes select to multiple. Accepts array for value */
        multiple?: boolean
        /** Display text when there is no data */
        noDataText?: string
        /** Do not apply filtering when searching. Useful when data is being filtered server side */
        noFilter?: boolean
        /** When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state */
        openOnClear?: boolean
        /** Applies the outlined style to the input */
        outlined?: boolean
        /** Forces hint to always be visible */
        persistentHint?: boolean
        /** Forces label to always be visible */
        persistentPlaceholder?: boolean
        /** Sets the input's placeholder text */
        placeholder?: string
        /** Displays prefix text */
        prefix?: string
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string
        /** Prepends an icon inside the component's input, uses the same syntax as `v-icon` */
        prependInnerIcon?: string
        /** Puts input in readonly state */
        readonly?: boolean
        /** Changes the selection behavior to return the object directly rather than the value specified with **item-value** */
        returnObject?: boolean
        /** Reverses the input orientation */
        reverse?: boolean
        /** Adds a border radius to the input */
        rounded?: boolean
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: any[]
        /** Use the **.sync** modifier to catch user input from the search input */
        searchInput?: string
        /** Creates a segmented button */
        segmented?: boolean
        /** Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` */
        shaped?: boolean
        /** Label does not move on focus/dirty */
        singleLine?: boolean
        /** Changes display of selections to chips with the **small** property */
        smallChips?: boolean
        /** Changes the style of the input */
        solo?: boolean
        /** Reduces element opacity until focused */
        soloInverted?: boolean
        /** Puts the input in a manual success state */
        success?: boolean
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[]
        /** Displays suffix text */
        suffix?: string
        /** Delays validation until blur event */
        validateOnBlur?: boolean
        /** The input's value */
        value?: any
        /** The comparison algorithm used for values. [More info](https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/util/helpers.ts) */
        valueComparator?: Function
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
            select: function
            selected: boolean
            disabled: boolean
          }) => VNode[]
        }>
      }
    >
    VOverlay: DefineComponent<
      {
        /** Applies **position: absolute** to the component. */
        absolute?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Sets the overlay opacity */
        opacity?: number | string
        /** Controls whether the component is visible or hidden. */
        value?: any
        /** The z-index used for the component */
        zIndex?: number | string
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >
    VPagination: DefineComponent<{
      /** Shape pagination elements as circles */ circle?: boolean
      /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
      color?: string
      currentPageAriaLabel?: string
      /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
      dark?: boolean
      /** Disables component */
      disabled?: boolean
      /** The length of the pagination component */
      length?: number
      /** Applies the light theme variant to the component. */
      light?: boolean
      navigationColor?: string
      navigationTextColor?: string
      nextAriaLabel?: string
      /** Specify the icon to use for the next icon */
      nextIcon?: string
      pageAriaLabel?: string
      /** Specify the icon to use for the prev icon */
      prevIcon?: string
      previousAriaLabel?: string
      /** Specify the max total visible pagination numbers */
      totalVisible?: number | string
      /** Current selected page */
      value?: number
      wrapperAriaLabel?: string
    }>
    VSheet: DefineComponent<
      {
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string
        /** Sets the height for the component. */
        height?: number | string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** Removes elevation (box-shadow) and adds a *thin* border. */
        outlined?: boolean
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Removes the component's **border-radius**. */
        tile?: boolean
        /** Sets the width for the component. */
        width?: number | string
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
        /** Attaches an alt property to the parallax image */ alt?: string
        /** Sets the height for the component */
        height?: string | number
        /** The image to parallax */
        src?: string
        /** A set of alternate images to use based on device size. [Read more...](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset) */
        srcset?: string
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
        /** Deprecated - Pending removal */ button?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Constantly animates, use when loading progress is unknown. */
        indeterminate?: boolean
        /** Rotates the circle start point in deg */
        rotate?: number | string
        /** Sets the diameter of the circle in pixels */
        size?: number | string
        /** The percentage value for current progress */
        value?: number | string
        /** Sets the stroke of the circle in pixels */
        width?: number | string
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
        absolute?: boolean
        /** Reduce the height to 0, hiding component */
        active?: boolean
        /** Background color, set to component's color if null */
        backgroundColor?: string
        /** Background opacity, if null it defaults to 0.3 if background color is not specified or 1 otherwise */
        backgroundOpacity?: number | string
        /** Aligns the component towards the bottom. */
        bottom?: boolean
        /** The percentage value for the buffer */
        bufferValue?: number | string
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Applies **position: fixed** to the component. */
        fixed?: boolean
        /** Sets the height for the component */
        height?: number | string
        /** Constantly animates, use when loading progress is unknown. */
        indeterminate?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Animates like **indeterminate** prop but inverse */
        query?: boolean
        /** Displays reversed progress (right to left in LTR mode and left to right in RTL) */
        reverse?: boolean
        /** Adds a border radius to the progress component */
        rounded?: boolean
        /** An alternative style for portraying loading that works in tandem with **buffer-value** */
        stream?: boolean
        /** Adds a stripe background to the filled portion of the progress component */
        striped?: boolean
        /** Aligns the content towards the top. */
        top?: boolean
        /** The designated model value for the component. */
        value?: number | string
      },
      {
        $scopedSlots: Readonly<{
          /** Provides the current value of the component */
          default: (args: { value: number }) => VNode[]
        }>
      }
    >
    VRadioGroup: DefineComponent<
      {
        /** The **active-class** applied to children when they are activated. */
        activeClass?: string
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string
        /** Changes the background-color of the input */
        backgroundColor?: string
        /** Displays radio buttons in column */
        column?: boolean
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Reduces the input height */
        dense?: boolean
        /** Disable the input */
        disabled?: boolean
        /** Puts the input in a manual error state */
        error?: boolean
        /** The total number of errors that should display at once */
        errorCount?: number | string
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[]
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string
        /** Hint text */
        hint?: string
        /** Sets the DOM id on the component */
        id?: string
        /** Sets input label */
        label?: string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Forces a value to always be selected (if available). */
        mandatory?: boolean
        /** Sets a maximum number of selections that can be made. */
        max?: number | string
        /** Displays a list of messages or message if using a string */
        messages?: string | any[]
        /** Allow multiple selections. The **value** prop must be an _array_. */
        multiple?: boolean
        /** Sets the component's name attribute */
        name?: string
        /** Forces hint to always be visible */
        persistentHint?: boolean
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string
        /** Puts input in readonly state */
        readonly?: boolean
        /** Displays radio buttons in row */
        row?: boolean
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: any[]
        /** Puts the input in a manual success state */
        success?: boolean
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[]
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Delays validation until blur event */
        validateOnBlur?: boolean
        /** The input's value */
        value?: any
        /** Apply a custom value comparator function */
        valueComparator?: Function
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
      }
    >
    VRadio: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Removes the ability to click or target the component. */
        disabled?: boolean
        /** Sets the DOM id on the component */
        id?: string
        /** Sets input label */
        label?: string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Sets the component's name attribute */
        name?: string
        /** The icon used when inactive */
        offIcon?: string
        /** The icon used when active */
        onIcon?: string
        /** Puts input in readonly state */
        readonly?: boolean
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object
        /** The value used when the component is selected in a group. If not provided, the index will be used. */
        value?: any
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Replaces the default label */
          label: undefined
          message: (args: { key: number; message: string }) => VNode[]
        }>
      }
    >
    VRangeSlider: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string
        /** Changes the background-color of the input */
        backgroundColor?: string
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Reduces the input height */
        dense?: boolean
        /** Disable the input */
        disabled?: boolean
        /** Puts the input in a manual error state */
        error?: boolean
        /** The total number of errors that should display at once */
        errorCount?: number | string
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[]
        /** Sets the height of the input */
        height?: number | string
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string
        /** Hint text */
        hint?: string
        /** Sets the DOM id on the component */
        id?: string
        /** Reverse the label position. Works with **rtl**. */
        inverseLabel?: boolean
        /** Sets input label */
        label?: string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Specifies the height of the loader */
        loaderHeight?: number | string
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string
        /** Sets the maximum allowed value */
        max?: number | string
        /** Displays a list of messages or message if using a string */
        messages?: string | any[]
        /** Sets the minimum allowed value */
        min?: number | string
        /** Forces hint to always be visible */
        persistentHint?: boolean
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string
        /** Puts input in readonly state */
        readonly?: boolean
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: any[]
        /** If greater than 0, sets step interval for ticks */
        step?: number | string
        /** Puts the input in a manual success state */
        success?: boolean
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[]
        /** Sets the thumb and thumb label color */
        thumbColor?: string
        /** Show thumb label. If `true` it shows label when using slider. If set to `'always'` it always shows label. */
        thumbLabel?: boolean | string
        /** Controls the size of the thumb label. */
        thumbSize?: number | string
        /** When provided with Array<string>, will attempt to map the labels to each step in index order */
        tickLabels?: any[]
        /** Controls the size of **ticks** */
        tickSize?: number | string
        /** Show track ticks. If `true` it shows ticks when using slider. If set to `'always'` it always shows ticks. */
        ticks?: boolean | string
        /** Sets the track's color */
        trackColor?: string
        /** Sets the track's fill color */
        trackFillColor?: string
        /** Delays validation until blur event */
        validateOnBlur?: boolean
        /** The input's value */
        value?: any
        /** Changes slider direction to vertical */
        vertical?: boolean
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
      }
    >
    VRating: DefineComponent<
      {
        /** The color used for empty icons */ backgroundColor?: string
        /** Allows for the component to be cleared. Triggers when the icon containing the current value is clicked. */
        clearable?: boolean
        /** Milliseconds to wait before closing component. Only applies to hover and focus events. */
        closeDelay?: number | string
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Icons have a smaller size */
        dense?: boolean
        /** The icon displayed when empty */
        emptyIcon?: string
        /** The icon displayed when full */
        fullIcon?: string
        /** The icon displayed when half (requires **half-increments** prop) */
        halfIcon?: string
        /** Allows the selection of half increments */
        halfIncrements?: boolean
        /** Provides visual feedback when hovering over icons */
        hover?: boolean
        /** The **aria-label** used for icons */
        iconLabel?: string
        /** Makes the component large. */
        large?: boolean
        /** The amount of ratings to show */
        length?: number | string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Milliseconds to wait before opening component. Only applies to hover and focus events. */
        openDelay?: number | string
        /** Removes all hover effects and pointer events */
        readonly?: boolean
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object
        /** Sets the height and width of the component. */
        size?: number | string
        /** Makes the component small. */
        small?: boolean
        /** The rating value */
        value?: number
        /** Makes the component extra large. */
        xLarge?: boolean
        /** Makes the component extra small. */
        xSmall?: boolean
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
            isHalfFilled: ?boolean
            isHalfHovered: ?boolean
            isHovered: boolean
            value: number
          }) => VNode[]
        }>
      }
    >
    VResponsive: DefineComponent<
      {
        /** Sets a base aspect ratio, calculated as width/height. This will only set a **minimum** height, the component can still grow if it has a lot of content. */
        aspectRatio?: string | number
        /** Apply a custom class to the responsive content div. */
        contentClass?: string
        /** Sets the height for the component. */
        height?: number | string
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** Sets the width for the component. */
        width?: number | string
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
        appendIcon?: string
        /** Appends an icon to the outside the component's input, uses same syntax as `v-icon` */
        appendOuterIcon?: string
        /** Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. */
        attach?: any
        /** Enables autofocus */
        autofocus?: boolean
        /** Changes the background-color of the input */
        backgroundColor?: string
        /** Keeps a local _unique_ copy of all items that have been passed through the **items** prop. */
        cacheItems?: boolean
        /** Changes display of selections to chips */
        chips?: boolean
        /** Applied when using **clearable** and the input is dirty */
        clearIcon?: string
        /** Add input clear functionality, default icon is Material Design Icons **mdi-clear** */
        clearable?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. */
        counter?: boolean | number | string
        counterValue?: Function
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Adds a remove icon to selected chips */
        deletableChips?: boolean
        /** Reduces the input height */
        dense?: boolean
        /** Disables keyboard lookup */
        disableLookup?: boolean
        /** Disables the input */
        disabled?: boolean
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean
        /** Puts the input in a manual error state */
        error?: boolean
        /** The total number of errors that should display at once */
        errorCount?: number | string
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[]
        /** Applies the alternate filled input style */
        filled?: boolean
        /** Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props */
        flat?: boolean
        /** Designates input type as full-width */
        fullWidth?: boolean
        /** Sets the height of the input */
        height?: number | string
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string
        /** Do not display in the select menu items that are already selected. Also removes checkboxes from the list when multiple */
        hideSelected?: boolean
        /** Hint text */
        hint?: string
        /** Sets the DOM id on the component */
        id?: string
        /** Sets color of selected items */
        itemColor?: string
        /** Set property of **items**'s disabled value */
        itemDisabled?: string | any[] | Function
        /** Set property of **items**'s text value */
        itemText?: string | any[] | Function
        /** Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479) */
        itemValue?: string | any[] | Function
        /** Can be an array of objects or array of strings. When using objects, will look for a text, value and disabled keys. This can be changed using the **item-text**, **item-value** and **item-disabled** props.  Objects that have a **header** or **divider** property are considered special cases and generate a list header or divider; these items are not selectable. */
        items?: any[]
        /** Sets input label */
        label?: string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Specifies the height of the loader */
        loaderHeight?: number | string
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string
        /** Pass props through to the `v-menu` component. Accepts either a string for boolean props `menu-props="auto, overflowY"`, or an object `:menu-props="{ auto: true, overflowY: true }"` */
        menuProps?: string | any[] | object
        /** Displays a list of messages or message if using a string */
        messages?: string | any[]
        /** Changes select to multiple. Accepts array for value */
        multiple?: boolean
        /** Display text when there is no data */
        noDataText?: string
        /** When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state */
        openOnClear?: boolean
        /** Applies the outlined style to the input */
        outlined?: boolean
        /** Forces hint to always be visible */
        persistentHint?: boolean
        /** Forces placeholder to always be visible */
        persistentPlaceholder?: boolean
        /** Sets the input's placeholder text */
        placeholder?: string
        /** Displays prefix text */
        prefix?: string
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string
        /** Prepends an icon inside the component's input, uses the same syntax as `v-icon` */
        prependInnerIcon?: string
        /** Puts input in readonly state */
        readonly?: boolean
        /** Changes the selection behavior to return the object directly rather than the value specified with **item-value** */
        returnObject?: boolean
        /** Reverses the input orientation */
        reverse?: boolean
        /** Adds a border radius to the input */
        rounded?: boolean
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: any[]
        /** Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` */
        shaped?: boolean
        /** Label does not move on focus/dirty */
        singleLine?: boolean
        /** Changes display of selections to chips with the **small** property */
        smallChips?: boolean
        /** Changes the style of the input */
        solo?: boolean
        /** Reduces element opacity until focused */
        soloInverted?: boolean
        /** Puts the input in a manual success state */
        success?: boolean
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[]
        /** Displays suffix text */
        suffix?: string
        /** Delays validation until blur event */
        validateOnBlur?: boolean
        /** The input's value */
        value?: any
        /** The comparison algorithm used for values. [More info](https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/util/helpers.ts) */
        valueComparator?: Function
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
            select: function
            selected: boolean
            disabled: boolean
          }) => VNode[]
        }>
      }
    >
    VSkeletonLoader: DefineComponent<
      {
        /** Remove the loading animation from the skeleton */
        boilerplate?: boolean
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string
        /** Sets the height for the component. */
        height?: number | string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Applies a loading animation with a on-hover loading cursor. A value of **false** will only work when there is content in the `default` slot. */
        loading?: boolean
        loadingText?: string
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** Removes the component's border-radius */
        tile?: boolean
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: string
        /** A string delimited list of skeleton components to create such as `type="text@3"` or `type="card, list-item"`. Will recursively generate a corresponding skeleton from the provided string. Also supports short-hand for multiple elements such as **article@3** and **paragraph@2** which will generate 3 _article_ skeletons and 2 _paragraph_ skeletons. Please see below for a list of available pre-defined options. */
        type?: string
        /** A custom types object that will be combined with the pre-defined options. For a list of available pre-defined options, see the **type** prop. */
        types?: object
        /** Sets the width for the component. */
        width?: number | string
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
        appendIcon?: string
        /** Changes the background-color of the input */
        backgroundColor?: string
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Reduces the input height */
        dense?: boolean
        /** Disable the input */
        disabled?: boolean
        /** Puts the input in a manual error state */
        error?: boolean
        /** The total number of errors that should display at once */
        errorCount?: number | string
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[]
        /** Sets the height of the input */
        height?: number | string
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string
        /** Hint text */
        hint?: string
        /** Sets the DOM id on the component */
        id?: string
        /** Reverse the label position. Works with **rtl**. */
        inverseLabel?: boolean
        /** Sets input label */
        label?: string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Specifies the height of the loader */
        loaderHeight?: number | string
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string
        /** Sets the maximum allowed value */
        max?: number | string
        /** Displays a list of messages or message if using a string */
        messages?: string | any[]
        /** Sets the minimum allowed value */
        min?: number | string
        /** Forces hint to always be visible */
        persistentHint?: boolean
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string
        /** Puts input in readonly state */
        readonly?: boolean
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: any[]
        /** If greater than 0, sets step interval for ticks */
        step?: number | string
        /** Puts the input in a manual success state */
        success?: boolean
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[]
        /** Sets the thumb and thumb label color */
        thumbColor?: string
        /** Show thumb label. If `true` it shows label when using slider. If set to `'always'` it always shows label. */
        thumbLabel?: boolean | string
        /** Controls the size of the thumb label. */
        thumbSize?: number | string
        /** When provided with Array<string>, will attempt to map the labels to each step in index order */
        tickLabels?: any[]
        /** Controls the size of **ticks** */
        tickSize?: number | string
        /** Show track ticks. If `true` it shows ticks when using slider. If set to `'always'` it always shows ticks. */
        ticks?: boolean | string
        /** Sets the track's color */
        trackColor?: string
        /** Sets the track's fill color */
        trackFillColor?: string
        /** Delays validation until blur event */
        validateOnBlur?: boolean
        /** The input's value */
        value?: any
        /** Changes slider direction to vertical */
        vertical?: boolean
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
      }
    >
    VSlideGroup: DefineComponent<
      {
        /** The **active-class** applied to children when they are activated. */
        activeClass?: string
        /** Forces the selected component to be centered */
        centerActive?: boolean
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Forces a value to always be selected (if available). */
        mandatory?: boolean
        /** Sets a maximum number of selections that can be made. */
        max?: number | string
        /** Sets the designated mobile breakpoint for the component. */
        mobileBreakpoint?: number | string
        /** Allow multiple selections. The **value** prop must be an _array_. */
        multiple?: boolean
        /** The appended slot when arrows are shown */
        nextIcon?: string
        /** The prepended slot when arrows are shown */
        prevIcon?: string
        /** Change when the overflow arrow indicators are shown. By **default**, arrows *always* display on Desktop when the container is overflowing. When the container overflows on mobile, arrows are not shown by default. A **show-arrows** value of `true` allows these arrows to show on Mobile if the container overflowing. A value of `desktop` *always* displays arrows on Desktop while a value of `mobile` always displays arrows on Mobile. A value of `always` always displays arrows on Desktop *and* Mobile. A value of `never` always hides the arrows. Find more information on how to customize breakpoint thresholds on the [breakpoints page](/customizing/breakpoints). */
        showArrows?: boolean | string
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** The designated model value for the component. */
        value?: any
        /** Apply a custom value comparator function */
        valueComparator?: Function
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
      }
    >
    VSlideItem: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string
        /** Removes the ability to click or target the component. */
        disabled?: boolean
        /** The value used when the component is selected in a group. If not provided, the index will be used. */
        value?: any
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
        absolute?: boolean
        /** Respects boundaries of—and will not overlap with—other `app` components like `v-app-bar`, `v-navigation-drawer`, and `v-footer`. */
        app?: boolean
        /** Aligns the component towards the bottom. */
        bottom?: boolean
        /** Positions the snackbar in the center of the screen, (x and y axis). */
        centered?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Apply a custom class to the snackbar content */
        contentClass?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string
        /** Sets the height for the component. */
        height?: number | string
        /** Aligns the component towards the left. */
        left?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** Gives the snackbar a larger minimum height. */
        multiLine?: boolean
        /** Removes elevation (box-shadow) and adds a *thin* border. */
        outlined?: boolean
        /** Aligns the component towards the right. */
        right?: boolean
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Applies the defined **color** to text and a low opacity background of the same. */
        text?: boolean
        /** Removes the component's **border-radius**. */
        tile?: boolean
        /** Time (in milliseconds) to wait until snackbar is automatically hidden.  Use `-1` to keep open indefinitely (`0` in version < 2.3 ). It is recommended for this number to be between `4000` and `10000`. Changes to this property will reset the timeout. */
        timeout?: number | string
        /** Aligns the content towards the top. */
        top?: boolean
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: boolean | string
        /** Controls whether the component is visible or hidden. */
        value?: any
        /** Stacks snackbar content on top of the actions (button). */
        vertical?: boolean
        /** Sets the width for the component. */
        width?: number | string
      },
      {
        $scopedSlots: Readonly<{
          /** Used to bind styles to [v-btn](/components/buttons) to match MD2 specification. */
          action: (args: { attrs: { [key: keyof any]: any } }) => VNode[]
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >
    VSparkline: DefineComponent<
      {
        /** Trace the length of the line when first rendered */
        autoDraw?: boolean
        /** Amount of time (in ms) to run the trace animation */
        autoDrawDuration?: number
        /** The easing function to use for the trace animation */
        autoDrawEasing?: string
        /** Automatically expand bars to use space efficiently */
        autoLineWidth?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Using the **fill** property allows you to better customize the look and feel of your sparkline. */
        fill?: boolean
        /** An array of colors to use as a linear-gradient */
        gradient?: any[]
        /** The direction the gradient should run */
        gradientDirection?: string
        /** Height of the SVG trendline or bars */
        height?: string | number
        /** The label font size */
        labelSize?: number | string
        /** An array of string labels that correspond to the same index as its data counterpart */
        labels?: any[]
        /** The thickness of the line, in px */
        lineWidth?: string | number
        /** Low `smooth` or high `line-width` values may result in cropping, increase padding to compensate */
        padding?: string | number
        /** Show labels below each data point */
        showLabels?: boolean
        /** Number of px to use as a corner radius. `true` defaults to 8, `false` is 0 */
        smooth?: boolean | number | string
        /** Choose between a trendline or bars */
        type?: string
        /** An array of numbers. */
        value?: any[]
        /** Width of the SVG trendline or bars */
        width?: number | string
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
        absolute?: boolean
        /** Aligns the component towards the bottom. */
        bottom?: boolean
        /** Direction in which speed-dial content will show. Possible values are `top`, `bottom`, `left`, `right`. */
        direction?: string
        /** Applies **position: fixed** to the component. */
        fixed?: boolean
        /** Aligns the component towards the left. */
        left?: boolean
        /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
        mode?: string
        /** Opens speed-dial on hover */
        openOnHover?: boolean
        /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
        origin?: string
        /** Aligns the component towards the right. */
        right?: boolean
        /** Aligns the content towards the top. */
        top?: boolean
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: string
        /** Controls whether the component is visible or hidden. */
        value?: any
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
        /** Places the labels beneath the step */ altLabels?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string
        /** Removes the stepper's elevation. */
        flat?: boolean
        /** Sets the height for the component. */
        height?: number | string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** Allow user to jump to any step */
        nonLinear?: boolean
        /** Removes elevation (box-shadow) and adds a *thin* border. */
        outlined?: boolean
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Removes the component's **border-radius**. */
        tile?: boolean
        /** The designated model value for the component. */
        value?: any
        /** Display steps vertically */
        vertical?: boolean
        /** Sets the width for the component. */
        width?: number | string
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >
    VStepperContent: DefineComponent<
      {
        /** Sets step to associate the content to */ step?: number | string
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
        color?: string
        /** Marks step as complete */
        complete?: boolean
        /** Icon to display when step is marked as completed */
        completeIcon?: string
        /** Icon to display when step is editable */
        editIcon?: string
        /** Marks step as editable */
        editable?: boolean
        /** Icon to display when step has an error */
        errorIcon?: string
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: any[]
        /** Content to display inside step circle */
        step?: number | string
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >
    VStepperHeader: DefineComponent<
      {
        /** Specify a custom tag used on the root element. */ tag?: string
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
        /** Specify a custom tag used on the root element. */ tag?: string
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
        dark?: boolean
        /** Adds indentation (72px) */
        inset?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
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
        appendIcon?: string
        /** Changes the background-color of the input */
        backgroundColor?: string
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Reduces the input height */
        dense?: boolean
        /** Disable the input */
        disabled?: boolean
        /** Puts the input in a manual error state */
        error?: boolean
        /** The total number of errors that should display at once */
        errorCount?: number | string
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[]
        /** Sets value for falsy state */
        falseValue?: any
        /** Display component without elevation. Default elevation for thumb is 4dp, `flat` resets it */
        flat?: boolean
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string
        /** Hint text */
        hint?: string
        /** Sets the DOM id on the component */
        id?: string
        /** The **v-model** bound value */
        inputValue?: any
        /** Enlarge the `v-switch` track to encompass the thumb */
        inset?: boolean
        /** Sets input label */
        label?: string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Displays circular progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - primary, secondary, success, info, warning, error) or a Boolean which uses the component color (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string
        /** Displays a list of messages or message if using a string */
        messages?: string | any[]
        /** Changes expected model to an array */
        multiple?: boolean
        /** Forces hint to always be visible */
        persistentHint?: boolean
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string
        /** Puts input in readonly state */
        readonly?: boolean
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: any[]
        /** Puts the input in a manual success state */
        success?: boolean
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[]
        /** Sets value for truthy state */
        trueValue?: any
        /** Delays validation until blur event */
        validateOnBlur?: boolean
        /** The input's value */
        value?: any
        /** Apply a custom value comparator function */
        valueComparator?: Function
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
          /** Replaces the default label */
          label: undefined
          message: (args: { key: number; message: string }) => VNode[]
        }>
      }
    >
    VSystemBar: DefineComponent<{
      /** Applies **position: absolute** to the component. */ absolute?: boolean
      /** Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop */
      app?: boolean
      /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
      color?: string
      /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
      dark?: boolean
      /** Applies **position: fixed** to the component. */
      fixed?: boolean
      /** Sets the height for the component. */
      height?: number | string
      /** Applies the light theme variant to the component. */
      light?: boolean
      /** Reduces the system bar opacity. */
      lightsOut?: boolean
      /** Increases the system bar height to 32px (24px default). */
      window?: boolean
    }>
    VTabs: DefineComponent<
      {
        /** The **active-class** applied to children when they are activated. */
        activeClass?: string
        /** Make `v-tabs` lined up with the toolbar title */
        alignWithTitle?: boolean
        /** Changes the background color of the component. */
        backgroundColor?: string
        /** Forces the selected tab to be centered */
        centerActive?: boolean
        /** Centers the tabs */
        centered?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** `v-tabs-item` min-width 160px, max-width 360px */
        fixedTabs?: boolean
        /** Force `v-tab`'s to take up all available space */
        grow?: boolean
        /** Sets the height of the tabs bar */
        height?: number | string
        /** Hide's the generated `v-tabs-slider` */
        hideSlider?: boolean
        /** Will stack icon and text vertically */
        iconsAndText?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Sets the designated mobile breakpoint for the component. */
        mobileBreakpoint?: string | number
        /** Right pagination icon */
        nextIcon?: string
        /** Does not require an active item. Useful when using `v-tab` as a `router-link` */
        optional?: boolean
        /** Left pagination icon */
        prevIcon?: string
        /** Aligns tabs to the right */
        right?: boolean
        /** Show pagination arrows if the tab items overflow their container. For mobile devices, arrows will only display when using this prop. */
        showArrows?: boolean | string
        /** Changes the background color of an auto-generated `v-tabs-slider` */
        sliderColor?: string
        /** Changes the size of the slider, **height** for horizontal, **width** for vertical. */
        sliderSize?: number | string
        /** The designated model value for the component. */
        value?: any
        /** Stacks tabs on top of each other vertically. */
        vertical?: boolean
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >
    VTab: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string
        /** Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. */
        append?: boolean
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Removes the ability to click or target the component. */
        disabled?: boolean
        /** Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. */
        exact?: boolean
        /** Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. */
        exactActiveClass?: string
        /** Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. */
        exactPath?: boolean
        /** Designates the component as anchor and applies the **href** attribute. */
        href?: string | object
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Designates that the component is a link. This is automatic when using the **href** or **to** prop. */
        link?: boolean
        /** Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). */
        nuxt?: boolean
        /** Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. */
        replace?: boolean
        /** Applies the [v-ripple](/directives/ripple) directive. */
        ripple?: boolean | object
        tabValue?: any
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Designates the target attribute. This should only be applied when using the **href** prop. */
        target?: string
        /** Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. */
        to?: string | object
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >
    VTabItem: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string
        /** Removes the ability to click or target the component. */
        disabled?: boolean
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean
        /** Sets the DOM id on the component */
        id?: string
        /** Sets the reverse transition */
        reverseTransition?: boolean | string
        /** The transition used when the component progressing through items. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: boolean | string
        /** Sets the value of the tab. If not provided, the index will be used. */
        value?: any
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
        activeClass?: string
        /** If `true`, window will "wrap around" from the last item to the first, and from the first item to the last */
        continuous?: boolean
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Forces a value to always be selected (if available). */
        mandatory?: boolean
        /** Sets a maximum number of selections that can be made. */
        max?: number | string
        /** Allow multiple selections. The **value** prop must be an _array_. */
        multiple?: boolean
        /** Icon used for the "next" button if `show-arrows` is `true` */
        nextIcon?: boolean | string
        /** Icon used for the "prev" button if `show-arrows` is `true` */
        prevIcon?: boolean | string
        /** Reverse the normal transition direction. */
        reverse?: boolean
        /** Display the "next" and "prev" buttons */
        showArrows?: boolean
        /** Display the "next" and "prev" buttons on hover. `show-arrows` MUST ALSO be set. */
        showArrowsOnHover?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Provide a custom **left** and **right** function when swiped left or right. */
        touch?: object
        /** Disable touch support. */
        touchless?: boolean
        /** The designated model value for the component. */
        value?: any
        /** Apply a custom value comparator function */
        valueComparator?: Function
        /** Uses a vertical transition when changing windows. */
        vertical?: boolean
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >
    VTabsSlider: DefineComponent<{
      /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
      color?: string
    }>
    VTextarea: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string
        /** Appends an icon to the outside the component's input, uses same syntax as `v-icon` */
        appendOuterIcon?: string
        /** Automatically grow the textarea depending on amount of text */
        autoGrow?: boolean
        /** Enables autofocus */
        autofocus?: boolean
        /** Changes the background-color of the input */
        backgroundColor?: string
        /** Applied when using **clearable** and the input is dirty */
        clearIcon?: string
        /** Add input clear functionality, default icon is Material Design Icons **mdi-clear** */
        clearable?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. */
        counter?: boolean | number | string
        counterValue?: Function
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Reduces the input height */
        dense?: boolean
        /** Disable the input */
        disabled?: boolean
        /** Puts the input in a manual error state */
        error?: boolean
        /** The total number of errors that should display at once */
        errorCount?: number | string
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[]
        /** Applies the alternate filled input style */
        filled?: boolean
        /** Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props */
        flat?: boolean
        /** Designates input type as full-width */
        fullWidth?: boolean
        /** Sets the height of the input */
        height?: number | string
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string
        /** Hint text */
        hint?: string
        /** Sets the DOM id on the component */
        id?: string
        /** Sets input label */
        label?: string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Specifies the height of the loader */
        loaderHeight?: number | string
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string
        /** Displays a list of messages or message if using a string */
        messages?: string | any[]
        /** Remove resize handle */
        noResize?: boolean
        /** Applies the outlined style to the input */
        outlined?: boolean
        /** Forces hint to always be visible */
        persistentHint?: boolean
        /** Forces placeholder to always be visible */
        persistentPlaceholder?: boolean
        /** Sets the input's placeholder text */
        placeholder?: string
        /** Displays prefix text */
        prefix?: string
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string
        /** Prepends an icon inside the component's input, uses the same syntax as `v-icon` */
        prependInnerIcon?: string
        /** Puts input in readonly state */
        readonly?: boolean
        /** Reverses the input orientation */
        reverse?: boolean
        /** Adds a border radius to the input */
        rounded?: boolean
        /** Height value for each row. Requires the use of the **auto-grow** prop. */
        rowHeight?: number | string
        /** Default row count */
        rows?: number | string
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: any[]
        /** Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` */
        shaped?: boolean
        /** Label does not move on focus/dirty */
        singleLine?: boolean
        /** Changes the style of the input */
        solo?: boolean
        /** Reduces element opacity until focused */
        soloInverted?: boolean
        /** Puts the input in a manual success state */
        success?: boolean
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[]
        /** Displays suffix text */
        suffix?: string
        /** Delays validation until blur event */
        validateOnBlur?: boolean
        /** The input's value */
        value?: any
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
      }
    >
    VTextField: DefineComponent<
      {
        /** Appends an icon to the component, uses the same syntax as `v-icon` */
        appendIcon?: string
        /** Appends an icon to the outside the component's input, uses same syntax as `v-icon` */
        appendOuterIcon?: string
        /** Enables autofocus */
        autofocus?: boolean
        /** Changes the background-color of the input */
        backgroundColor?: string
        /** Applied when using **clearable** and the input is dirty */
        clearIcon?: string
        /** Add input clear functionality, default icon is Material Design Icons **mdi-clear** */
        clearable?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. */
        counter?: boolean | number | string
        counterValue?: Function
        /** Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Reduces the input height */
        dense?: boolean
        /** Disable the input */
        disabled?: boolean
        /** Puts the input in a manual error state */
        error?: boolean
        /** The total number of errors that should display at once */
        errorCount?: number | string
        /** Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation */
        errorMessages?: string | any[]
        /** Applies the alternate filled input style */
        filled?: boolean
        /** Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props */
        flat?: boolean
        /** Designates input type as full-width */
        fullWidth?: boolean
        /** Sets the height of the input */
        height?: number | string
        /** Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display */
        hideDetails?: boolean | string
        /** Hides spin buttons on the input when type is set to `number`. */
        hideSpinButtons?: boolean
        /** Hint text */
        hint?: string
        /** Sets the DOM id on the component */
        id?: string
        /** Sets input label */
        label?: string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Specifies the height of the loader */
        loaderHeight?: number | string
        /** Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color */
        loading?: boolean | string
        /** Displays a list of messages or message if using a string */
        messages?: string | any[]
        /** Applies the outlined style to the input */
        outlined?: boolean
        /** Forces hint to always be visible */
        persistentHint?: boolean
        /** Forces placeholder to always be visible */
        persistentPlaceholder?: boolean
        /** Sets the input’s placeholder text */
        placeholder?: string
        /** Displays prefix text */
        prefix?: string
        /** Prepends an icon to the component, uses the same syntax as `v-icon` */
        prependIcon?: string
        /** Prepends an icon inside the component's input, uses the same syntax as `v-icon` */
        prependInnerIcon?: string
        /** Puts input in readonly state */
        readonly?: boolean
        /** Reverses the input orientation */
        reverse?: boolean
        /** Adds a border radius to the input */
        rounded?: boolean
        /** Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` */
        rules?: any[]
        /** Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` */
        shaped?: boolean
        /** Label does not move on focus/dirty */
        singleLine?: boolean
        /** Changes the style of the input */
        solo?: boolean
        /** Reduces element opacity until focused */
        soloInverted?: boolean
        /** Puts the input in a manual success state */
        success?: boolean
        /** Puts the input in a success state and passes through custom success messages. */
        successMessages?: string | any[]
        /** Displays suffix text */
        suffix?: string
        /** Sets input type */
        type?: string
        /** Delays validation until blur event */
        validateOnBlur?: boolean
        /** The input's value */
        value?: any
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
      }
    >
    VThemeProvider: DefineComponent<{
      /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
      dark?: boolean
      /** Applies the light theme variant to the component. */
      light?: boolean
      /** Use the current value of `$vuetify.theme.dark` as opposed to the provided one. */
      root?: boolean
    }>
    VTimeline: DefineComponent<
      {
        /** Align caret and dot of timeline items to the top */
        alignTop?: boolean
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Hide opposite slot content, and position all items to one side of timeline */
        dense?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Reverse direction of timeline items */
        reverse?: boolean
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
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Remove padding from dot container */
        fillDot?: boolean
        /** Hide display of timeline dot */
        hideDot?: boolean
        /** Specify icon for dot container */
        icon?: string
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        iconColor?: string
        /** Large size dot */
        large?: boolean
        /** Explicitly set the item to a left orientation */
        left?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Explicitly set the item to a right orientation */
        right?: boolean
        /** Small size dot */
        small?: boolean
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
        activePicker?: string
        /** Restricts which hours can be selected */
        allowedHours?: Function | any[]
        /** Restricts which minutes can be selected */
        allowedMinutes?: Function | any[]
        /** Restricts which seconds can be selected */
        allowedSeconds?: Function | any[]
        /** Place AM/PM switch in title, not near the clock. */
        ampmInTitle?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** disables picker */
        disabled?: boolean
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string
        /** Removes  elevation */
        flat?: boolean
        /** Defines the format of a time displayed in picker. Available options are `ampm` and `24hr`. */
        format?: string
        /** Forces 100% width */
        fullWidth?: boolean
        /** Defines the header color. If not specified it will use the color defined by <code>color</code> prop or the default picker color */
        headerColor?: string
        /** Orients picker horizontal */
        landscape?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Maximum allowed time */
        max?: string
        /** Minimum allowed time */
        min?: string
        /** Hide the picker title */
        noTitle?: boolean
        /** Puts picker in readonly state */
        readonly?: boolean
        /** Allows changing hour/minute with mouse scroll */
        scrollable?: boolean
        /** Toggles the use of seconds in picker */
        useSeconds?: boolean
        /** Time picker model (ISO 8601 format, 24hr hh:mm) */
        value?: any
        /** Width of the picker */
        width?: number | string
      },
      {
        $scopedSlots: Readonly<{
          /** Displayed below the clock, can be used for example for adding action button (`OK` and `Cancel`) */
          default: undefined
        }>
      }
    >
    VToolbar: DefineComponent<
      {
        /** Applies position: absolute to the component. */ absolute?: boolean
        /** Aligns the component towards the bottom. */
        bottom?: boolean
        /** Puts the toolbar into a collapsed state reducing its maximum width. */
        collapse?: boolean
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Reduces the height of the toolbar content to 48px (96px when using the **prominent** prop). */
        dense?: boolean
        /** Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). */
        elevation?: number | string
        /** Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop, and any of the other props that affect the height of the toolbar, e.g. **prominent**, **dense**, etc., **WITH THE EXCEPTION** of **height**. */
        extended?: boolean
        /** Specify an explicit height for the `extension` slot.  */
        extensionHeight?: number | string
        /** Removes the toolbar's box-shadow. */
        flat?: boolean
        /** Applies **display: inline-flex** to the component. */
        floating?: boolean
        /** Designates a specific height for the toolbar. Overrides the heights imposed by other props, e.g. **prominent**, **dense**, **extended**, etc. */
        height?: number | string
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** Removes elevation (box-shadow) and adds a *thin* border. */
        outlined?: boolean
        /** Increases the height of the toolbar content to 128px. */
        prominent?: boolean
        /** Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). */
        rounded?: boolean | string
        /** Applies a large border radius on the top left and bottom right of the card. */
        shaped?: boolean
        /** Reduce the height of the toolbar content to 56px (112px when using the **prominent** prop). */
        short?: boolean
        /** Specifies a [v-img](/components/images) as the component's background. */
        src?: string | object
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Removes the component's **border-radius**. */
        tile?: boolean
        /** Sets the width for the component. */
        width?: number | string
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
        /** Specify a custom tag used on the root element. */ tag?: string
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
        /** Specify a custom tag used on the root element. */ tag?: string
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
        absolute?: boolean
        /** Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node. */
        activator?: any
        /** Removes overflow re-positioning for the content */
        allowOverflow?: boolean
        /** Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. */
        attach?: any
        /** Aligns the component towards the bottom. */
        bottom?: boolean
        /** Delay (in ms) after which menu closes (when open-on-hover prop is set to true) */
        closeDelay?: number | string
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string
        /** Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component. */
        contentClass?: string
        /** Disables the tooltip */
        disabled?: boolean
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean
        /** Designates whether to use an internal activator */
        internalActivator?: boolean
        /** Aligns the component towards the left. */
        left?: boolean
        /** Sets the maximum width for the content */
        maxWidth?: number | string
        /** Sets the minimum width for the content */
        minWidth?: number | string
        /** Nudge the content to the bottom */
        nudgeBottom?: number | string
        /** Nudge the content to the left */
        nudgeLeft?: number | string
        /** Nudge the content to the right */
        nudgeRight?: number | string
        /** Nudge the content to the top */
        nudgeTop?: number | string
        /** Nudge the content width */
        nudgeWidth?: number | string
        /** Causes the component to flip to the opposite side when repositioned due to overflow */
        offsetOverflow?: boolean
        /** Delay (in ms) after which tooltip opens (when `open-on-hover` prop is set to **true**) */
        openDelay?: number | string
        /** Designates whether the tooltip should open on activator click */
        openOnClick?: boolean
        openOnFocus?: boolean
        /** Designates whether the tooltip should open on activator hover */
        openOnHover?: boolean
        /** Used to position the content when not using an activator slot */
        positionX?: number
        /** Used to position the content when not using an activator slot */
        positionY?: number
        /** Aligns the component towards the right. */
        right?: boolean
        /** Specifies a custom tag for the activator wrapper */
        tag?: string
        /** Aligns the content towards the top. */
        top?: boolean
        /** Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: string
        /** Controls whether the component is visible or hidden. */
        value?: any
        /** The z-index used for the component */
        zIndex?: number | string
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
        activatable?: boolean
        /** Syncable prop that allows one to control which nodes are active. The array consists of the `item-key` of each active item. */
        active?: any[]
        /** The class applied to the node when active */
        activeClass?: string
        /** Sets the color of the active node */
        color?: string
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Decreases the height of the items */
        dense?: boolean
        /** Prevents disabling children nodes */
        disablePerNode?: boolean
        /** Disables selection for all nodes */
        disabled?: boolean
        /** Icon used to indicate that a node can be expanded */
        expandIcon?: string
        /** Custom item filtering function. By default it will use case-insensitive search in item's label. */
        filter?: Function
        /** Applies a hover class when mousing over nodes */
        hoverable?: boolean
        /** Icon used when node is in an indeterminate state. Only visible when `selectable` is `true`. */
        indeterminateIcon?: string
        /** Property on supplied `items` that contains its children */
        itemChildren?: string
        /** Property on supplied `items` that contains the disabled state of the item */
        itemDisabled?: string
        /** Property on supplied `items` used to keep track of node state. The value of this property has to be unique among all items. */
        itemKey?: string
        /** Property on supplied `items` that contains its label text */
        itemText?: string
        /** An array of items used to build the treeview */
        items?: any[]
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** A function used when dynamically loading children. If this prop is set, then the supplied function will be run if expanding an item that has a `item-children` property that is an empty array. Supports returning a Promise. */
        loadChildren?: Function
        /** Icon used when node is in a loading state */
        loadingIcon?: string
        /** When `true`, allows user to have multiple active nodes at the same time */
        multipleActive?: boolean
        /** Icon used when node is not selected. Only visible when `selectable` is `true`. */
        offIcon?: string
        /** Icon used when leaf node is selected or when a branch node is fully selected. Only visible when `selectable` is `true`. */
        onIcon?: string
        /** Syncable prop that allows one to control which nodes are open. The array consists of the `item-key` of each open item. */
        open?: any[]
        /** When `true` will cause all branch nodes to be opened when component is mounted */
        openAll?: boolean
        /** When `true` will cause nodes to be opened by clicking anywhere on it, instead of only opening by clicking on expand icon. When using this prop with `activatable` you will be unable to mark nodes with children as active. */
        openOnClick?: boolean
        /** When `true` will make `v-model`, `active.sync` and `open.sync` return the complete object instead of just the key */
        returnObject?: boolean
        /** Provides an alternative active style for `v-treeview` node. Only visible when `activatable` is `true` and should not be used in conjunction with the `shaped` prop. */
        rounded?: boolean
        /** The search model for filtering results */
        search?: string
        /** Will render a checkbox next to each node allowing them to be selected */
        selectable?: boolean
        /** The color of the selection checkbox */
        selectedColor?: string
        /** Controls how the treeview selects nodes. There are two modes available: 'leaf' and 'independent' */
        selectionType?: string
        /** Provides an alternative active style for `v-treeview` node. Only visible when `activatable` is `true` and should not be used in conjunction with the `rounded` prop. */
        shaped?: boolean
        /** Applies a transition when nodes are opened and closed */
        transition?: boolean
        /** Allows one to control which nodes are selected. The array consists of the `item-key` of each selected item. Is used with `@input` event to allow for `v-model` binding. */
        value?: any[]
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
      }
    >
    VVirtualScroll: DefineComponent<
      {
        /** The number of items **outside** the user view that are rendered (even if they are **not** viewable); to help prevent empty white space when scrolling *fast*. */
        bench?: number | string
        /** Height of the component as a css value */
        height?: number | string
        /** Height in pixels of the items to display */
        itemHeight?: number | string
        /** The array of items to display */
        items?: any[]
        /** Sets the maximum height for the component. */
        maxHeight?: number | string
        /** Sets the maximum width for the component. */
        maxWidth?: number | string
        /** Sets the minimum height for the component. */
        minHeight?: number | string
        /** Sets the minimum width for the component. */
        minWidth?: number | string
        /** Sets the width for the component. */
        width?: number | string
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
        activeClass?: string
        /** If `true`, window will "wrap around" from the last item to the first, and from the first item to the last */
        continuous?: boolean
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean
        /** Applies the light theme variant to the component. */
        light?: boolean
        /** Icon used for the "next" button if `show-arrows` is `true` */
        nextIcon?: boolean | string
        /** Icon used for the "prev" button if `show-arrows` is `true` */
        prevIcon?: boolean | string
        /** Reverse the normal transition direction. */
        reverse?: boolean
        /** Display the "next" and "prev" buttons */
        showArrows?: boolean
        /** Display the "next" and "prev" buttons on hover. `show-arrows` MUST ALSO be set. */
        showArrowsOnHover?: boolean
        /** Specify a custom tag used on the root element. */
        tag?: string
        /** Provide a custom **left** and **right** function when swiped left or right. */
        touch?: object
        /** Disable touch support. */
        touchless?: boolean
        /** The designated model value for the component. */
        value?: any
        /** Apply a custom value comparator function */
        valueComparator?: Function
        /** Uses a vertical transition when changing windows. */
        vertical?: boolean
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
      }
    >
    VWindowItem: DefineComponent<
      {
        /** Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. */
        activeClass?: string
        /** Prevents the item from becoming active when using the "next" and "prev" buttons or the `toggle` method */
        disabled?: boolean
        /** Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. */
        eager?: boolean
        /** Sets the reverse transition */
        reverseTransition?: boolean | string
        /** The transition used when the component progressing through items. Can be one of the [built in transitions](/styles/transitions) or one your own. */
        transition?: boolean | string
        /** The value used when the component is selected in a group. If not provided, the index will be used. */
        value?: any
      },
      {
        $scopedSlots: Readonly<{
          /** The default Vue slot. */
          default: undefined
        }>
      }
    >
    VCarouselTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VCarouselReverseTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VTabTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VTabReverseTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VMenuTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VFabTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VDialogTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VDialogBottomTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VDialogTopTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VFadeTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VScaleTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VScrollXTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VScrollXReverseTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VScrollYTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VScrollYReverseTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VSlideXTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VSlideXReverseTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VSlideYTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VSlideYReverseTransition: DefineComponent<{
      /** Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) */
      group?: boolean
      /** Hides the leaving element (no exit animation) */
      hideOnLeave?: boolean
      /** Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) */
      leaveAbsolute?: boolean
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
      /** Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). */
      origin?: string
    }>
    VExpandTransition: DefineComponent<{
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
    }>
    VExpandXTransition: DefineComponent<{
      /** Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). */
      mode?: string
    }>
  }
}

export {}
