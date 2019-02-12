import Vue from 'vue'
import {
	Layout,
	Sider,
	Menu,
	MenuItem,
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
	Spin
} from 'iview'

let variable = {
	Layout,
	Sider,
	Menu,
	MenuItem,
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
	Spin
}
for (let item in variable) {
	if (variable.hasOwnProperty(item)) {
		Vue.component(item, variable[item])
	}
}

export default Vue
