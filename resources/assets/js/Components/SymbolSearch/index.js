/* eslint-env browser */
import $ from 'jquery'
import {TerminalNodeImpl} from 'antlr4/tree/Tree'

$(() => {
  const $grammarView = $('.grammar-view')
  const $symbolSearch = $('.symbol-search')
  const $currentRuleIndex = $symbolSearch.find('.symbol-search__current-rule-index')
  const $totalFoundRules = $symbolSearch.find('.symbol-search__total-found-rules')

  let rules = []
  let currentRuleIndex = -1

  const updateCurrentRuleIndex = () => {
    $currentRuleIndex.text(currentRuleIndex + 1)
  }

  const highlightFoundSymbol = () => {
    let row = -1

    const child = rules[currentRuleIndex].children[0]
    if (child instanceof TerminalNodeImpl) {
      row = child.getSymbol().line
    } else {
      row = child.start.line
    }

    $grammarView
      .find('.symbol-search__found-symbol')
      .removeClass('symbol-search__found-symbol')
    const $foundSymbol = $grammarView
      .find(`tr[data-row=${row}] .grammar-view__ls-nonterminal`)
      .addClass('symbol-search__found-symbol')
    $('html, body').animate({
      scrollTop: $foundSymbol.offset().top,
    }, 500)
  }

  const initSearch = () => {
    currentRuleIndex = -1

    $currentRuleIndex.text(rules.length > 0 ? 1 : 0)
    $totalFoundRules.text(rules.length)

    $symbolSearch.css('visibility', 'visible')

    if (rules.length > 0) {
      currentRuleIndex = 0
      highlightFoundSymbol()
    }
  }

  $grammarView.on('click', '.grammar-view__search-symbol-icon', e => {
    const symbol = $(e.target).parent().prev().text()
    rules = finder.findRulesWhichContains(symbol)
    initSearch()
  })

  $grammarView.on('click', '.grammar-view__l-icon', e => {
    const symbol = $(e.target).parent().prev().text()
    rules = finder.findRulesWhereOnTheLeft(symbol)
    initSearch()
  })

  $grammarView.on('click', '.grammar-view__r-icon', e => {
    const $code = $(e.target).closest('.grammar-view__code')
    const symbol = $code.find('.grammar-view__ls-nonterminal').first().text()
    const row = $code.closest('.grammar-view__row').attr('data-row')

    rules = finder.findRulesWithTheSameRightSide(symbol, row)
    initSearch()
  })

  $('.symbol-search__next').click(e => {
    if (rules.length === 0) {
      return
    }

    currentRuleIndex = currentRuleIndex < rules.length - 1
      ? currentRuleIndex + 1
      : 0
    updateCurrentRuleIndex()
    highlightFoundSymbol()
  })

  $('.symbol-search__prev').click(e => {
    if (rules.length === 0) {
      return
    }

    currentRuleIndex = currentRuleIndex > 0
      ? currentRuleIndex - 1
      : rules.length - 1
    updateCurrentRuleIndex()
    highlightFoundSymbol()
  })

  $('.symbol-search__close').click(e => {
    $symbolSearch.css('visibility', 'hidden')
    $grammarView
      .find('.symbol-search__found-symbol')
      .removeClass('symbol-search__found-symbol')
  })
})
