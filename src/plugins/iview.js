import Vue from "vue";
import {
  Layout,
  Sider,
  Menu,
  MenuItem,
  Message,
  Icon,
  Header,
  Card,
  Content,
  Breadcrumb,
  BreadcrumbItem,
  Footer,
  Button,
  Tabs,
  Input,
  Select,
  Form,
  FormItem,
  Tree,
  Drawer,
  Spin,
  Submenu
} from "iview";

Message.config({
  top: 50,
  duration: 1.5
});

let variable = {
  Layout,
  Sider,
  Menu,
  MenuItem,
  Message,
  Icon,
  Header,
  Card,
  Content,
  Breadcrumb,
  BreadcrumbItem,
  Footer,
  Button,
  Tabs,
  Input,
  Select,
  Form,
  FormItem,
  Tree,
  Drawer,
  Spin,
  Submenu
};
for (let item in variable) {
  if (variable.hasOwnProperty(item)) {
    Vue.component(item, variable[item]);
  }
}

Vue.prototype.$Message = Message

export default Vue;
