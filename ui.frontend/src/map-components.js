import {
  AllowedComponentsContainer,
  MapTo, withComponentMappingContext
} from '@mavice/aem-vue-editable-components'
import Button from './components/Button/Button'
import ButtonLogin from './components/ButtonLogin/ButtonLogin'
import CheckBox from './components/Checkbox/Checkbox'
import CustomClasses from './components/CustomClasses/CustomClasses'
import CustomClassesHome from './components/CustomClassesHome/CustomClassesHome'
import DateTime from './components/DateTime/DateTime'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import FooterText from './components/FooterText/FooterText'
import HomeLogo from './components/HomeLogo/HomeLogo'
import HomeText from './components/HomeText/HomeText'
import Image from './components/Image/Image'
import Input from './components/Input/Input'
import LoginText from './components/LoginText/LoginText'
import LogoutSection from './components/LogoutSection/LogoutSection'
import MobileLogo from './components/MobileLogo/MobileLogo'
import AppPage from './components/Page/AppPage'
import RightLogin from './components/RightLogin/RightLogin'
import Text from './components/Text/Text'
import Weather from './components/Weather/Weather'

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

MapTo('vue/components/customClassesHome')(CustomClassesHome, EditConfig)

MapTo('vue/components/rightLogin')(RightLogin, EditConfig)

MapTo('vue/components/loginText')(LoginText, EditConfig)

MapTo('vue/components/homeText')(HomeText, EditConfig)

MapTo('vue/components/input')(Input, EditConfig)

MapTo('vue/components/mobileLogo')(MobileLogo, EditConfig)

MapTo('vue/components/homeLogo')(HomeLogo, EditConfig)

MapTo('vue/components/errorMessage')(ErrorMessage, EditConfig)

MapTo('vue/components/dateTime')(DateTime, EditConfig)

MapTo('vue/components/footerText')(FooterText, EditConfig)

MapTo('vue/components/weather')(Weather, EditConfig)

MapTo('vue/components/logoutSection')(LogoutSection, EditConfig)

// Checkbox Component Mapping
MapTo('vue/components/checkbox')(CheckBox, EditConfig)

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
