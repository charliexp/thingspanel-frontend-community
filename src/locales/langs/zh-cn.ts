import page from './zh-cn/page';
import card from './zh-cn/card';
import generate from './zh-cn/generate';
import custom from './zh-cn/custom';
import device_template from './zh-cn/device_template';
import dashboard_panel from './zh-cn/dashboard_panel';
import form from './zh-cn/form';
import dropdown from './zh-cn/dropdown';
import icon from './zh-cn/icon';
import theme from './zh-cn/theme';
const local: App.I18n.Schema = {
  default: '',
  title: 'ThingsPanel',
  system: {
    title: 'System Name: {name}'
  },
  common: {
    serviceConfi: '服务配置',
    config: '配置',
    pluginConfig: '插件配置',
    deleteThePlan: '确定删除计划吗',
    cancelThePlan: '确定取消计划吗',
    planTheDevice: '确定将计划下发给设备吗',
    checkDevice: '请勾选设备',
    editSpace: '编辑空间',
    locationInfoAdded: '只能添加一个位置信息',
    section: '第',
    leastOneChart: '至少选择一个图表',
    accompaniedIndicators: '个图表没有配任何指标',
    copyingFailed: '复制文本失败',
    copiedClipboard: '文本已复制到剪贴板',
    dataSources: '个数据源',
    maxSelect: '最多选择',
    chart: '图表',
    selectCardFirst: '请先选一个卡片',
    componentsAddedYet: '暂未添加组件',
    templateDeleted: '已删除当前模板',
    normal: '正常',
    lowAlarm: '低级报警',
    intermediateAlarm: '中级报警',
    highAlarm: '高级报警',
    allStatus: '所有状态',
    enterAlarmDesc: '请输入告警描述',
    alarmRules: '告警规则',
    alarmHistory: '告警历史',
    sceneLinkageInfo: '请确认是否删除该数据？',
    chooseNotificationMethod: '请选择通知方式',
    notificationGroupDesc: '请输入通知组描述',
    editNotificationGroup: '修改通知组',
    createNotificationGroup: '创建通知组',
    editSuccess: '编辑成功',
    editFail: '编辑成功',
    times1: '1次',
    times2: '2次',
    times3: '3次',
    times4: '4次',
    times5: '5次',
    times6: '6次',
    times7: '7次',
    times8: '8次',
    times9: '9次',
    times10: '10次',
    minutes3: '3分钟',
    minutes4: '4分钟',
    minutes6: '6分钟',
    minutes7: '7分钟',
    minutes8: '8分钟',
    minutes9: '9分钟',
    enterTriggeringDuration: '请输入触发持续时间',
    enterNumberTriggering: '请输入触发重复次数',
    enterAlarmLevel: '请输入告警级别',
    enterAlarmName: '请输入告警名称',
    enterJson: '请输入正确的JSON格式',
    nodata: '暂无数据',
    halfYear: '最近半年',
    lastYears1: '最近1年',
    lastDays90: '最近90天',
    lastDays60: '最近60天',
    lastDays30: '最近30天',
    lastDays15: '最近15天',
    lastDays7: '最近7天',
    lastDays3: '最近3天',
    lastHours24: '最近24小时',
    lastHours12: '最近12小时',
    lastHours6: '最近6小时',
    lastHours3: '最近3小时',
    lastHours1: '最近1小时',
    last_30m: '最近30分钟',
    last_15m: '最近15分钟',
    last_5m: '最近5分钟',
    custom: '自定义',
    average: '平均数',
    sum: '求和',
    diffValue: '差值',
    months1: '1个月',
    days7: '7天',
    hours6: '6小时',
    hours3: '3小时',
    minute2: '2分钟',
    minute1: '1分钟',
    seconds30: '30秒',
    notAggre: '不聚合',
    rangeMustSelected: '当时间为自定义时， 必须选择时间范围',
    alreadyScatterPlot: '已经是散点图了',
    switchScatterPlots: '切换散点图',
    alreadyToChart: '已经是柱状图了',
    switchBarChart: '切换柱状图',
    alreadyCurveChart: '已经是曲线图了',
    switchLineChart: '切换折线图',
    deleteDeviceConfig: '请确认是否删除该设备模板？',
    addExtendedInfo: '添加扩展信息',
    editExtendedInfo: '编辑扩展信息',
    extensionInfoDeleted: '已删除当前扩展信息',
    enterName: '请输入名称',
    devicesSetting: '设备设置',
    protocolConfig: '协议配置',
    associatedDevices: '关联设备',
    propertiesAndFunctions: '属性与功能',
    dataProces: '数据处理',
    deleteProcessing: '请确认是否删除该数据处理？',
    timeConditions: '时间条件',
    deviceConditions: '设备条件',
    timeFrame: '时间范围',
    repeat: '重复',
    single: '单次',
    interfaceStatus: '接口状态',
    contentToCopied: '请输入要复制的内容',
    browserNotSupport: '您的浏览器不支持 ',
    formatFile: '图片格式文件!',
    pleaseUploadit: '文件格式不正确, 请上传',
    days1: '1天',
    hours1: '1小时',
    minutes30: '30分钟',
    minutes10: '10分钟',
    minutes5: '5分钟',
    includeList: '包含在列表内',
    between: '介于',
    lessOrEqual: '小于等于',
    greaterOrEqual: '大于等于',
    under: '小于',
    pass: '大于',
    unequal: '不等于',
    equal: '等于',
    sunset: '日落',
    sunrise: '日出',
    monthly: '每月',
    weekly: '每周',
    everyDay: '每天',
    everyHour: '每小时',
    weather: '天气',
    deviceConfigName: '请输入设备模板名称',
    deviceAccessType: '请选择设备接入类型',
    deviceConnectionMethod: '请选择设备连接方式',
    activateSceneInfo: '请确认是否激活该场景信息？',
    activationPrompt: '激活提示',
    deleteSceneInfo: '请确认是否删除该场景信息？',
    deletePrompt: '删除提示',
    addArea: '添加区域',
    addSpace: '添加空间',
    sending: '发送中...',
    base: '基础',
    saveSceneInfo: '请确认是否保存该场景信息？',
    addFail: '添加失败',
    belongingSpace: '请选择所属空间',
    as: '如',
    param: '参数',
    singleClassDevice: '单类设备',
    singleDevice: '单个设备',
    triggerService: '触发服务',
    triggerAlarm: '触发告警',
    activateScene: '激活场景',
    operateDevice: '操作设备',
    stopFail: '停用失败',
    stopSuccess: '停用成功',
    startSuccess: '启动成功',
    startFail: '启动失败',
    deleteFail: '删除失败',
    test: '测试',
    low: '低',
    middle: '中',
    high: '高',
    Ignored: '已忽略',
    toIgnore: '忽略',
    maintenance: '维护',
    untreated: '未处理',
    handled: '已处理',
    alarm_time: '告警时间',
    alarm_level: '级别',
    processor_name: '处理人',
    spaceName: '请输入空间名称',
    userStatus: '请选择用户状态',
    requestTime: '请求耗时',
    requestMethod: '请求方法',
    requestPath: '请求路径',
    manageDevices: '管理设备',
    screenNameNull: '大屏名称不能为空',
    addScreen: '新建大屏',
    editScreen: '编辑大屏',
    editNameAndDesc: '编辑名称和描述',
    visualEditing: '可视化编辑',
    withinOneYear: '日期范围不能超过一个年',
    withinOneMonth: '日期范围不能超过一个月',
    time: '时间',
    complete: '完成',
    actions: '操作',
    input: '请输入',
    select: '请选择',
    selectOrInput: '选择或输入',
    remark: '备注',
    add: '新增',
    save: '保存',
    addSuccess: '添加成功',
    backToHome: '返回首页',
    batchDelete: '批量删除',
    cancel: '取消',
    check: '勾选',
    columnSetting: '列设置',
    confirm: '确认',
    delete: '删除',
    remove: '移除',
    deleteSuccess: '删除成功',
    confirmDelete: '确认删除吗？',
    edit: '编辑',
    index: '序号',
    logout: '退出登录',
    logoutConfirm: '确认退出登录吗？',
    lookForward: '敬请期待',
    modify: '修改',
    modifySuccess: '修改成功',
    modifyFail: '修改失败',
    pleaseCheckValue: '请检查输入的值是否合法',
    refresh: '刷新',
    reset: '重置',
    search: '搜索',
    tip: '提示',
    update: '更新',
    refreshTable: '刷新表格',
    changeTableColumns: '表格列设置',
    updateSuccess: '更新成功',
    userCenter: '个人中心',
    export: '导出',
    description: '描述',
    yesOrNo: {
      yes: '是',
      no: '否'
    },
    debug: '调试',
    send: '发送',
    creationTime: '创建时间',
    service: '服务',
    protocol: '协议',
    createUser: '创建新用户',
    addRelatedUser: '添加关联用户',
    removeRelatedUser: '移除关联用户',
    loginName: '登录名',
    lastLoginTime: '最后访问时间',
    userName: '用户名称',
    addUserToDeviceInfo: '您可以将设备关联到多个用户, 也可让用户主动添加设备。',
    today: '今天',
    yesterday: '昨天',
    dayBeforeYesterday: '前天',
    thisWeek: '本周',
    lastWeek: '上周',
    thisMonth: '本月',
    lastMonth: '上个月',
    thisYear: '今年',
    lastYear: '去年',
    lastSixMonth: '最近6个月',
    lastOneYear: '最近1年',
    lastWeekToday: '上周今日',
    January: '1月',
    getCode: '获取验证码',
    countingLabel: '{second}秒后重新获取',
    phoneRequired: '手机号码不能为空！',
    phoneInvalid: '手机号码格式错误！',
    emailRequired: '邮箱不能为空！',
    emailInvalid: '邮箱格式错误！',
    networkError: '网络错误',
    fetchDataFailed: '获取数据失败',
    noMoreData: '没有更多数据了',
    operationFailed: '操作失败'
  },
  theme,
  route: {
    login: '登录',
    403: '无权限',
    404: '页面不存在',
    500: '服务器错误',
    visualization_kanban: '看板',
    home: '首页',
    'user-center': '个人中心',
    about: '关于',
    function: '系统功能',
    function_tab: '标签页',
    'function_multi-tab': '多标签页',
    'function_hide-child': '隐藏子菜单',
    'function_hide-child_one': '隐藏子菜单',
    'function_hide-child_two': '菜单二',
    'function_hide-child_three': '菜单三',
    manage: '系统管理新',
    manage_user: '用户管理新',
    'manage_user-detail': '用户详情新',
    manage_role: '角色管理新',
    manage_menu: '菜单管理新',
    'multi-menu': '多级菜单',
    'multi-menu_first': '菜单一',
    'multi-menu_first_child': '菜单一子菜单',
    'multi-menu_second': '菜单二',
    'multi-menu_second_child': '菜单二子菜单',
    'multi-menu_second_child_home': '菜单二子菜单首页',
    exception: '异常页',
    exception_403: '403',
    exception_404: '404',
    exception_500: '500',
    component: '组件示例',
    component_button: '按钮',
    component_card: '卡片',
    component_table: '表格',
    apply: '应用管理',
    apply_service: '协议插件管理',
    apply_in: '插件管理',
    test: '页面测试用',
    'rule-engine': '规则引擎',
    'data-service_rule-engine': '规则引擎',
    'data-service': '数据服务',
    product: '产品管理',
    product_list: '产品列表',
    'product_update-ota': 'OTA升级',
    'product_update-package': '升级包管理',
    plugin: '插件示例',
    plugin_charts: '图表',
    plugin_charts_antv: 'AntV',
    plugin_charts_echarts: 'ECharts',
    plugin_copy: '剪贴板',
    plugin_editor: '编辑器',
    plugin_editor_markdown: 'Markdown',
    plugin_editor_quill: '富文本',
    plugin_icon: '图标',
    plugin_map: '地图',
    plugin_print: '打印',
    plugin_swiper: 'Swiper',
    plugin_video: '视频',
    dashboard: '仪表盘',
    dashboard_analysis: '分析页',
    'dashboard_mobile-panel': '手机看板',
    dashboard_panel: '看板',
    dashboard_workbench: '工作台',
    management: '系统管理',
    management_auth: '菜单管理',
    management_role: '角色管理',
    management_user: '租户管理',
    management_api: 'API keys',
    'management_ordinary-user': '用户管理',
    management_route: '路由管理',
    management_setting: '系统设置',
    device: '设备接入',
    device_service_access: '服务接入',
    device_service_details: '服务接入详情',
    device_grouping: '分组管理',
    'device_grouping-details': '分组详情',
    device_manage: '设备管理',
    device_details: '设备详情',
    'device_details-child': '子设备详情',
    device_config: '设备模板',
    'device_config-detail': '设备模板详情',
    'device_config-edit': '编辑设备',
    'system-management-user': '系统管理(租户)',
    'system-management-user_system-log': '系统日志',
    visualization: '可视化',
    visualization_panel: '看板',
    'visualization_kanban-details': '看板详情',
    'visualization_panel-preview': '看板预览',
    'visualization_big-screen': '大屏',
    automation: '自动化',
    'automation_scene-manage': '场景管理',
    'automation_scene-linkage': '场景联动',
    'automation_linkage-edit': '联动编辑',
    alarm: '告警',
    'alarm_notification-group': '通知组',
    'alarm_notification-record': '通知记录',
    'alarm_warning-message': '告警信息',
    management_notification: '通知服务配置',
    irrigation: '灌溉计划',
    irrigation_time: '定时灌溉',
    irrigation_group: '群灌计划',
    irrigation_rotation: '轮灌计划',
    personal_center: '个人中心',
    'space-management': '空间管理',
    'system-management-user_equipment-map': '设备地图',
    'edit-area': '编辑空间/区域',
    'new-area': '添加空间/区域',
    'automation_scene-edit': `场景编辑`,
    'test_kan-ban-details-test': '看板详情测试',
    'test_kan-ban-test': '看板测试',
    'data-services': '数据服务',
    'data-services_data-forward': '数据转发',
    'data-services_forward-config': '转发配置',
    'device-details-app': 'device-details-app',
    device_template: '设备模型',
    'personal-center': '个人中心',
    apply_plugin: '应用插件',
    'device_service-access': '设备服务访问',
    'device_service-details': '设备服务详情'
  },
  form,
  dropdown,
  icon,
  kanban: {
    'add-cards': '添加卡片'
  },
  custom,
  page,
  generate,
  card,
  device_template,
  dashboard_panel
};

export default local;
