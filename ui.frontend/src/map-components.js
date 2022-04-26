import {
  AllowedComponentsContainer,
  MapTo, withComponentMappingContext
} from '@mavice/aem-vue-editable-components'
import Button from './components/Button/Button'
import ButtonLogin from './components/ButtonLogin/ButtonLogin'
import CheckBox from './components/Checkbox/Checkbox'
import CustomClasses from './components/CustomClasses/CustomClasses'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import Header from './components/Header/Header'
import HomeLogo from './components/HomeLogo/HomeLogo'
import Image from './components/Image/Image'
import Input from './components/Input/Input'
import LoginText from './components/LoginText/LoginText'
import MobileLogo from './components/MobileLogo/MobileLogo'
import AppPage from './components/Page/AppPage'
import RightLogin from './components/RightLogin/RightLogin'
import Text from './components/Text/Text'

MapTo('vue/components/page')(withComponentMappingContext(AppPage))

// Custom EditConfig for General New Vue Components
const EditConfig = {
  emptyLabel: 'Empty',

  isEmpty: function (props) {
    return !props
  }
}
/** *******************************************************************
              ↓  NEW COMPONENTS MAPPING COME HERE  ↓
**********************************************************************/

MapTo('vue/components/button')(Button, EditConfig)

MapTo('vue/components/buttonLogin')(ButtonLogin, EditConfig)

MapTo('vue/components/customClasses')(CustomClasses, EditConfig)

MapTo('vue/components/rightLogin')(RightLogin, EditConfig)

MapTo('vue/components/loginText')(LoginText, EditConfig)

MapTo('vue/components/input')(Input, EditConfig)

MapTo('vue/components/mobileLogo')(MobileLogo, EditConfig)

MapTo('vue/components/homeLogo')(HomeLogo, EditConfig)

MapTo('vue/components/errorMessage')(ErrorMessage, EditConfig)

// Checkbox Component Mapping
MapTo('vue/components/checkbox')(CheckBox, EditConfig)

// Header Component Mapping
MapTo('vue/components/header')(Header, EditConfig)

// Image Component Mapping
MapTo('vue/components/image')(Image, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/image'
})

// Text Component Mapping
MapTo('vue/components/text')(Text, {
  emptyLabel: 'Text',

  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1
  }
})

// Container Component Mapping
MapTo('vue/components/container')(
  withComponentMappingContext(AllowedComponentsContainer),
  {
    emptyLabel: 'Container',

    isEmpty: function (props) {
      return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0
    }
  }
)
