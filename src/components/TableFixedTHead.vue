<!--
  Компонент TableFixedTHead
  Заголовок таблицы дублируется при скролле и всегда находится
  наверху таблицы.

  Подключается к шаблону как обычно:

  import TableFixedTHead from '../components/TableFixedTHead'

  export default {
    components: {
      TableFixedTHead
    }
  }

  Таблице, в которой используется функционал,
  присваивается класс .gs-table-fixed-header и идентификатор
  #gs-table-fixed и добавляется элемент компонента <TableFixedTHead/>:

  <table class="gs-table-fixed-header" id="gs-table-fixed">
    ...
  </table>
  <TableFixedTHead/>

  Note: Для использования с несколькими таблицами на одной странице
  компонент будет необходимо немного изменить - передавать идентификатор
  таблицы прямо в компонент, чтобы можно было использовать методы
  компонента для нескольких элементов сразу

  github: https://github.com/VadimCpp/gsgusev.ru/issues/39
 -->

<template>
</template>

<script>
  export default {
    name: 'TableFixedTHead',
    methods: {
      handleScroll: function (event) {
        var table = document.getElementById('gs-table-fixed')

        if (table.length < 1) {
          console.error('[E] Table element #gs-table-fixed not found for fixed head feature')
          return
        }

        var tbody = table.getElementsByTagName('tbody')
        var tbodyHeight = 0
        var top = table.getBoundingClientRect()['top']
        var offsetX = table.getBoundingClientRect()['x']

        if (tbody.length > 0) {
          tbodyHeight = tbody[0].offsetHeight
        }

        if (top < 0 && -top + offsetX < tbodyHeight) {
          var thead = table.getElementsByClassName('gs-table-fixed-head')

          if (table.getElementsByClassName('gs-table-fixed-head').length < 1) {
            // Add fixed thead element
            var originalheader = table.getElementsByTagName('thead')[0]
            var newheader = document.createElement('thead')
            newheader.className = 'gs-table-fixed-head'
            newheader.innerHTML = originalheader.innerHTML
            table.appendChild(newheader)
          }

          thead = table.getElementsByClassName('gs-table-fixed-head')[0]

          var header = document.getElementsByTagName('header')
          var headerHeight = 0

          if (header.length > 0) {
            headerHeight = header[0].offsetHeight
          }

          thead.style.display = 'block'

          thead.style.top = -top + headerHeight + 'px'
        } else {
          if (table.getElementsByClassName('gs-table-fixed-head').length > 0) {
            table.getElementsByClassName('gs-table-fixed-head')[0].style.display = 'none'
          }
        }
      }
    },
    mounted: function () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>