files:

eslint:

csshint:
    # 必须同时给出水平和垂直方向的位置，但是<background-position: center;>会报错，期望不报错，暂时关闭该规则
    horizontal-vertical-position: false
    # 带私有前缀的属性由长到短排列，按冒号位置对齐，关闭该规则
    vendor-prefixes-sort: false
    require-number: false
    min-font-size: false

lesslint:
    # 关于下面对mixin函数的issue已经提交，并且官方已经修正升级到lesslint@1.0.2，待校验https://github.com/ecomfe/node-lesslint/issues/5
    # 当一个rule包含多个selector时，每个选择器声明必须独占一行，对于Mixin会报错，像.size(30px, 20px);
    require-newline:
      - "property"
      - "media-query-condition"
    # 选择器与 `{` 之间必须包含空格，但是对于<Mixin();>报错，期望对mixin函数做判断语法不报该错误，暂时关闭规则
    require-before-space: false
    # lesslint的规则中比csshint多一个“／”，暂时去掉less中的该规则
    require-around-space: false
    # 带私有前缀的属性由长到短排列，按冒号位置对齐，关闭该规则
    vendor-prefixes-sort: false

htmlcs:

jformatter:

esformatter:

csscomb:
    # 属性顺序调整，会分组产生多余空行，暂时关闭该格式化规则
    sort-order: false
    # 关闭属性前缀格式对齐规则（分属性组格式），该规则与缩进层级冲突，暂时关闭
    vendor-prefix-align: false
    # 当数值为0-1之间的小数时，省略整数部分的0，设置为false是去掉0
    leading-zero: false
