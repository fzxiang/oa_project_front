import { _ as _export_sfc, X as __vitePreload } from "./index.4dc0081b.js";
import { T as Transformable, m as makeInner, B as BoundingRect, i as isFunction, k as keys, g as getECData, p as parsePercent, a as updateLabelLinePoints, b as prepareLayoutList, f as filter, s as shiftLayoutOnX, c as shiftLayoutOnY, h as hideOverlap, e as each$2, d as setLabelLineStyle, j as getLabelLineStatesModels, l as isElementRemoved, n as labelInner, r as retrieve2, o as initProps, q as indexOf, t as updateProps, v as animateLabelValue, _ as __extends, w as createSeriesData, S as SeriesModel, P as Path, G as Group$1, I as IncrementalDisplayable, x as createSymbol$1, y as pointsLayout, z as SymbolDraw, C as ChartView, A as use, D as install$o, E as getLayoutRect, R as RoamController, F as fromPoints, V as View, H as onIrrelevantElement, J as updateViewOnPan, K as updateViewOnZoom, L as SymbolClz, M as HOVER_STATE_BLUR, N as setStatesFlag, O as BezierCurve, Q as defaults, U as setStatesStylesFromModel, W as setDefaultStateProxy, X as removeElement, Y as curry, Z as assert, $ as extend, a0 as map, a1 as isArray, a2 as convertOptionIdName, a3 as prepareSeriesDataSchema, a4 as SeriesData, a5 as isString, a6 as Model, a7 as createTooltipMarkup, a8 as updateCenterAndZoom, a9 as getDecalFromPalette, aa as createHashMap, ab as normalizeToArray, ac as positionElement, ad as getAvailableSize, ae as Polygon, af as ZRText, ag as Z2_EMPHASIS_LIFT, ah as makeStyleMapper, ai as DataDiffer, aj as bind, ak as translate, al as scale, am as windowOpen, an as isHighDownDispatcher, ao as setAsHighDownDispatcher, ap as enableHoverFocus, aq as setLabelStyle, ar as getLabelStatesModels, as as normalizeCssArray, at as Displayable, au as create$1, av as Rect$1, aw as modifyHSL, ax as modifyAlpha, ay as VisualMapping, az as retrieve, aA as MAX_SAFE_INTEGER, aB as retrieve3, aC as clone$1, aD as sub, aE as len, aF as normalize$2, aG as set, aH as copy, aI as scaleAndAdd$1, aJ as create$2, aK as linearMap, aL as Line$2, aM as SPECIAL_STATES, aN as round, aO as enableHoverEmphasis, aP as enterEmphasis, aQ as leaveEmphasis, aR as normalizeSymbolSize, aS as normalizeSymbolOffset, aT as quadraticSubdivide, aU as quadraticAt$1, aV as distSquare, aW as mixin, aX as CoordinateSystem, aY as LegendVisualProvider, aZ as defaultEmphasis, a_ as defaultSeriesFormatTooltip, a$ as createTextStyle, b0 as setCommonECData, b1 as ZRImage, b2 as setLabelValueAnimation, b3 as Sausage, b4 as Sector, b5 as createSeriesDataSimply, b6 as Polyline$2, b7 as saveOldStyle, b8 as Point, b9 as removeElementWithFadeOut, ba as makeSeriesEncodeForNameBased, bb as dataFilter$1, bc as numericToNumber, bd as eqNaN, be as install$p, bf as LinearGradient, bg as groupData, bh as getDimensionTypeByAxis, bi as makeSeriesEncodeForAxisCoordSys, bj as graphic, bk as asc, bl as quantile, bm as SOURCE_FORMAT_ARRAY_ROWS, bn as throwError, bo as createClipPath, bp as isObject, bq as createRenderPlanner, br as subPixelOptimize, bs as clone$2, bt as dist, bu as quadraticDerivativeAt, bv as containStroke, bw as containStroke$1, bx as concatArray, by as mergeAll, bz as createCanvas, bA as isCoordinateSystemType, bB as ECPolygon, bC as SINGLE_REFERRING, bD as createOrUpdatePatternFromDecal, bE as getSectorCornerRadius, bF as DISPLAY_STATES, bG as lift, bH as isArrayLike, bI as cloneValue, bJ as getDefaultLabel, bK as createTextConfig, bL as convertToEC4StyleForCustomSerise, bM as hasOwn, bN as getLayoutOnAxis, bO as getFont, bP as isEC4CompatibleStyle, bQ as convertFromEC4CompatibleStyle, bR as makePath, bS as getShapeClass, bT as AxisBuilder, bU as groupTransition, bV as rectCoordAxisHandleRemove, bW as AxisView, bX as mergePath, bY as rectCoordAxisBuildSplitArea, bZ as ComponentModel, b_ as AxisModelCommonMixin, b$ as Axis, c0 as createScaleByModel, c1 as niceScaleExtent, c2 as buildElStyle, c3 as buildCartesianSingleLabelElOption, c4 as getTransformedPosition, c5 as BaseAxisPointer, c6 as makeLineShape, c7 as makeRectShape, c8 as ComponentView, c9 as install$q, ca as axisModelCreator, cb as contain, cc as linePolygonIntersect, cd as clone$3, ce as createVisualMappings, cf as applyVisual, cg as BrushTargetManager, ch as createOrUpdate, ci as BrushController, cj as replaceVisualOption, ck as merge, cl as ToolboxFeature, cm as registerFeature, cn as env, co as DataFormatMixin, cp as parseDataValue, cq as isDimensionStacked, cr as getPrecision, cs as enterBlur, ct as getVisualFromData, cu as getStackedDimension, cv as getRawValueParser, cw as createFilterComparator, cx as isRegExp, cy as SortOrderComparator, cz as SOURCE_FORMAT_OBJECT_ROWS, cA as SourceManager, cB as disableTransformOptionMerge, cC as SERIES_LAYOUT_BY_COLUMN, cD as REDRAW_BIT, cE as Eventful, cF as devicePixelRatio, cG as isGradientObject, cH as getCanvasGradient, cI as isImagePatternObject, cJ as createCanvasPattern, cK as brush, cL as brushSingle, cM as requestAnimationFrame, cN as logError, cO as PathProxy, cP as cubicSubdivide, cQ as clonePath, cR as lerp, cS as getAnimationConfig, cT as SERIES_UNIVERSAL_TRANSITION_PROP, cU as getOldStyle, cV as install$r, cW as install$s, cX as install$t, cY as install$u, cZ as install$v, c_ as install$w, c$ as install$x, d0 as install$y, d1 as install$z, d2 as install$A, d3 as install$B, d4 as install$C, d5 as install$D, d6 as install$E, d7 as install$F, d8 as install$G, d9 as install$H, da as install$I, db as install$J, dc as install$K, dd as install$L, de as install$M, df as install$N, dg as install$O, u as useECharts, dh as registerMap } from "./useECharts.df02fa0f.js";
import { m as mapData } from "./data.29a5f341.js";
import { d as defineComponent, Q as ref, a6 as onMounted, o as openBlock, R as createElementBlock, a3 as normalizeStyle } from "./vendor.faf2de98.js";
import "./useRootSetting.f743f654.js";
function cloneArr(points) {
  if (points) {
    var newPoints = [];
    for (var i = 0; i < points.length; i++) {
      newPoints.push(points[i].slice());
    }
    return newPoints;
  }
}
function prepareLayoutCallbackParams(labelItem, hostEl) {
  var label = labelItem.label;
  var labelLine = hostEl && hostEl.getTextGuideLine();
  return {
    dataIndex: labelItem.dataIndex,
    dataType: labelItem.dataType,
    seriesIndex: labelItem.seriesModel.seriesIndex,
    text: labelItem.label.style.text,
    rect: labelItem.hostRect,
    labelRect: labelItem.rect,
    align: label.style.align,
    verticalAlign: label.style.verticalAlign,
    labelLinePoints: cloneArr(labelLine && labelLine.shape.points)
  };
}
var LABEL_OPTION_TO_STYLE_KEYS = ["align", "verticalAlign", "width", "height", "fontSize"];
var dummyTransformable = new Transformable();
var labelLayoutInnerStore = makeInner();
var labelLineAnimationStore = makeInner();
function extendWithKeys(target, source, keys2) {
  for (var i = 0; i < keys2.length; i++) {
    var key = keys2[i];
    if (source[key] != null) {
      target[key] = source[key];
    }
  }
}
var LABEL_LAYOUT_PROPS = ["x", "y", "rotation"];
var LabelManager = function() {
  function LabelManager2() {
    this._labelList = [];
    this._chartViewList = [];
  }
  LabelManager2.prototype.clearLabels = function() {
    this._labelList = [];
    this._chartViewList = [];
  };
  LabelManager2.prototype._addLabel = function(dataIndex, dataType, seriesModel, label, layoutOption) {
    var labelStyle = label.style;
    var hostEl = label.__hostTarget;
    var textConfig = hostEl.textConfig || {};
    var labelTransform = label.getComputedTransform();
    var labelRect = label.getBoundingRect().plain();
    BoundingRect.applyTransform(labelRect, labelRect, labelTransform);
    if (labelTransform) {
      dummyTransformable.setLocalTransform(labelTransform);
    } else {
      dummyTransformable.x = dummyTransformable.y = dummyTransformable.rotation = dummyTransformable.originX = dummyTransformable.originY = 0;
      dummyTransformable.scaleX = dummyTransformable.scaleY = 1;
    }
    var host = label.__hostTarget;
    var hostRect;
    if (host) {
      hostRect = host.getBoundingRect().plain();
      var transform2 = host.getComputedTransform();
      BoundingRect.applyTransform(hostRect, hostRect, transform2);
    }
    var labelGuide = hostRect && host.getTextGuideLine();
    this._labelList.push({
      label,
      labelLine: labelGuide,
      seriesModel,
      dataIndex,
      dataType,
      layoutOption,
      computedLayoutOption: null,
      rect: labelRect,
      hostRect,
      priority: hostRect ? hostRect.width * hostRect.height : 0,
      defaultAttr: {
        ignore: label.ignore,
        labelGuideIgnore: labelGuide && labelGuide.ignore,
        x: dummyTransformable.x,
        y: dummyTransformable.y,
        scaleX: dummyTransformable.scaleX,
        scaleY: dummyTransformable.scaleY,
        rotation: dummyTransformable.rotation,
        style: {
          x: labelStyle.x,
          y: labelStyle.y,
          align: labelStyle.align,
          verticalAlign: labelStyle.verticalAlign,
          width: labelStyle.width,
          height: labelStyle.height,
          fontSize: labelStyle.fontSize
        },
        cursor: label.cursor,
        attachedPos: textConfig.position,
        attachedRot: textConfig.rotation
      }
    });
  };
  LabelManager2.prototype.addLabelsOfSeries = function(chartView) {
    var _this = this;
    this._chartViewList.push(chartView);
    var seriesModel = chartView.__model;
    var layoutOption = seriesModel.get("labelLayout");
    if (!(isFunction(layoutOption) || keys(layoutOption).length)) {
      return;
    }
    chartView.group.traverse(function(child) {
      if (child.ignore) {
        return true;
      }
      var textEl = child.getTextContent();
      var ecData = getECData(child);
      if (textEl && !textEl.disableLabelLayout) {
        _this._addLabel(ecData.dataIndex, ecData.dataType, seriesModel, textEl, layoutOption);
      }
    });
  };
  LabelManager2.prototype.updateLayoutConfig = function(api) {
    var width = api.getWidth();
    var height = api.getHeight();
    function createDragHandler(el, labelLineModel) {
      return function() {
        updateLabelLinePoints(el, labelLineModel);
      };
    }
    for (var i = 0; i < this._labelList.length; i++) {
      var labelItem = this._labelList[i];
      var label = labelItem.label;
      var hostEl = label.__hostTarget;
      var defaultLabelAttr = labelItem.defaultAttr;
      var layoutOption = void 0;
      if (typeof labelItem.layoutOption === "function") {
        layoutOption = labelItem.layoutOption(prepareLayoutCallbackParams(labelItem, hostEl));
      } else {
        layoutOption = labelItem.layoutOption;
      }
      layoutOption = layoutOption || {};
      labelItem.computedLayoutOption = layoutOption;
      var degreeToRadian = Math.PI / 180;
      if (hostEl) {
        hostEl.setTextConfig({
          local: false,
          position: layoutOption.x != null || layoutOption.y != null ? null : defaultLabelAttr.attachedPos,
          rotation: layoutOption.rotate != null ? layoutOption.rotate * degreeToRadian : defaultLabelAttr.attachedRot,
          offset: [layoutOption.dx || 0, layoutOption.dy || 0]
        });
      }
      var needsUpdateLabelLine = false;
      if (layoutOption.x != null) {
        label.x = parsePercent(layoutOption.x, width);
        label.setStyle("x", 0);
        needsUpdateLabelLine = true;
      } else {
        label.x = defaultLabelAttr.x;
        label.setStyle("x", defaultLabelAttr.style.x);
      }
      if (layoutOption.y != null) {
        label.y = parsePercent(layoutOption.y, height);
        label.setStyle("y", 0);
        needsUpdateLabelLine = true;
      } else {
        label.y = defaultLabelAttr.y;
        label.setStyle("y", defaultLabelAttr.style.y);
      }
      if (layoutOption.labelLinePoints) {
        var guideLine = hostEl.getTextGuideLine();
        if (guideLine) {
          guideLine.setShape({
            points: layoutOption.labelLinePoints
          });
          needsUpdateLabelLine = false;
        }
      }
      var labelLayoutStore = labelLayoutInnerStore(label);
      labelLayoutStore.needsUpdateLabelLine = needsUpdateLabelLine;
      label.rotation = layoutOption.rotate != null ? layoutOption.rotate * degreeToRadian : defaultLabelAttr.rotation;
      label.scaleX = defaultLabelAttr.scaleX;
      label.scaleY = defaultLabelAttr.scaleY;
      for (var k = 0; k < LABEL_OPTION_TO_STYLE_KEYS.length; k++) {
        var key = LABEL_OPTION_TO_STYLE_KEYS[k];
        label.setStyle(key, layoutOption[key] != null ? layoutOption[key] : defaultLabelAttr.style[key]);
      }
      if (layoutOption.draggable) {
        label.draggable = true;
        label.cursor = "move";
        if (hostEl) {
          var hostModel = labelItem.seriesModel;
          if (labelItem.dataIndex != null) {
            var data = labelItem.seriesModel.getData(labelItem.dataType);
            hostModel = data.getItemModel(labelItem.dataIndex);
          }
          label.on("drag", createDragHandler(hostEl, hostModel.getModel("labelLine")));
        }
      } else {
        label.off("drag");
        label.cursor = defaultLabelAttr.cursor;
      }
    }
  };
  LabelManager2.prototype.layout = function(api) {
    var width = api.getWidth();
    var height = api.getHeight();
    var labelList = prepareLayoutList(this._labelList);
    var labelsNeedsAdjustOnX = filter(labelList, function(item) {
      return item.layoutOption.moveOverlap === "shiftX";
    });
    var labelsNeedsAdjustOnY = filter(labelList, function(item) {
      return item.layoutOption.moveOverlap === "shiftY";
    });
    shiftLayoutOnX(labelsNeedsAdjustOnX, 0, width);
    shiftLayoutOnY(labelsNeedsAdjustOnY, 0, height);
    var labelsNeedsHideOverlap = filter(labelList, function(item) {
      return item.layoutOption.hideOverlap;
    });
    hideOverlap(labelsNeedsHideOverlap);
  };
  LabelManager2.prototype.processLabelsOverall = function() {
    var _this = this;
    each$2(this._chartViewList, function(chartView) {
      var seriesModel = chartView.__model;
      var ignoreLabelLineUpdate = chartView.ignoreLabelLineUpdate;
      var animationEnabled = seriesModel.isAnimationEnabled();
      chartView.group.traverse(function(child) {
        if (child.ignore && !child.forceLabelAnimation) {
          return true;
        }
        var needsUpdateLabelLine = !ignoreLabelLineUpdate;
        var label = child.getTextContent();
        if (!needsUpdateLabelLine && label) {
          needsUpdateLabelLine = labelLayoutInnerStore(label).needsUpdateLabelLine;
        }
        if (needsUpdateLabelLine) {
          _this._updateLabelLine(child, seriesModel);
        }
        if (animationEnabled) {
          _this._animateLabels(child, seriesModel);
        }
      });
    });
  };
  LabelManager2.prototype._updateLabelLine = function(el, seriesModel) {
    var textEl = el.getTextContent();
    var ecData = getECData(el);
    var dataIndex = ecData.dataIndex;
    if (textEl && dataIndex != null) {
      var data = seriesModel.getData(ecData.dataType);
      var itemModel = data.getItemModel(dataIndex);
      var defaultStyle = {};
      var visualStyle = data.getItemVisual(dataIndex, "style");
      var visualType = data.getVisual("drawType");
      defaultStyle.stroke = visualStyle[visualType];
      var labelLineModel = itemModel.getModel("labelLine");
      setLabelLineStyle(el, getLabelLineStatesModels(itemModel), defaultStyle);
      updateLabelLinePoints(el, labelLineModel);
    }
  };
  LabelManager2.prototype._animateLabels = function(el, seriesModel) {
    var textEl = el.getTextContent();
    var guideLine = el.getTextGuideLine();
    if (textEl && (el.forceLabelAnimation || !textEl.ignore && !textEl.invisible && !el.disableLabelAnimation && !isElementRemoved(el))) {
      var layoutStore = labelLayoutInnerStore(textEl);
      var oldLayout = layoutStore.oldLayout;
      var ecData = getECData(el);
      var dataIndex = ecData.dataIndex;
      var newProps = {
        x: textEl.x,
        y: textEl.y,
        rotation: textEl.rotation
      };
      var data = seriesModel.getData(ecData.dataType);
      if (!oldLayout) {
        textEl.attr(newProps);
        if (!labelInner(textEl).valueAnimation) {
          var oldOpacity = retrieve2(textEl.style.opacity, 1);
          textEl.style.opacity = 0;
          initProps(textEl, {
            style: {
              opacity: oldOpacity
            }
          }, seriesModel, dataIndex);
        }
      } else {
        textEl.attr(oldLayout);
        var prevStates = el.prevStates;
        if (prevStates) {
          if (indexOf(prevStates, "select") >= 0) {
            textEl.attr(layoutStore.oldLayoutSelect);
          }
          if (indexOf(prevStates, "emphasis") >= 0) {
            textEl.attr(layoutStore.oldLayoutEmphasis);
          }
        }
        updateProps(textEl, newProps, seriesModel, dataIndex);
      }
      layoutStore.oldLayout = newProps;
      if (textEl.states.select) {
        var layoutSelect = layoutStore.oldLayoutSelect = {};
        extendWithKeys(layoutSelect, newProps, LABEL_LAYOUT_PROPS);
        extendWithKeys(layoutSelect, textEl.states.select, LABEL_LAYOUT_PROPS);
      }
      if (textEl.states.emphasis) {
        var layoutEmphasis = layoutStore.oldLayoutEmphasis = {};
        extendWithKeys(layoutEmphasis, newProps, LABEL_LAYOUT_PROPS);
        extendWithKeys(layoutEmphasis, textEl.states.emphasis, LABEL_LAYOUT_PROPS);
      }
      animateLabelValue(textEl, dataIndex, data, seriesModel, seriesModel);
    }
    if (guideLine && !guideLine.ignore && !guideLine.invisible) {
      var layoutStore = labelLineAnimationStore(guideLine);
      var oldLayout = layoutStore.oldLayout;
      var newLayout = {
        points: guideLine.shape.points
      };
      if (!oldLayout) {
        guideLine.setShape(newLayout);
        guideLine.style.strokePercent = 0;
        initProps(guideLine, {
          style: {
            strokePercent: 1
          }
        }, seriesModel);
      } else {
        guideLine.attr({
          shape: oldLayout
        });
        updateProps(guideLine, {
          shape: newLayout
        }, seriesModel);
      }
      layoutStore.oldLayout = newLayout;
    }
  };
  return LabelManager2;
}();
var LabelManager$1 = LabelManager;
var getLabelManager = makeInner();
function installLabelLayout(registers) {
  registers.registerUpdateLifecycle("series:beforeupdate", function(ecModel, api, params) {
    var labelManager = getLabelManager(api).labelManager;
    if (!labelManager) {
      labelManager = getLabelManager(api).labelManager = new LabelManager$1();
    }
    labelManager.clearLabels();
  });
  registers.registerUpdateLifecycle("series:layoutlabels", function(ecModel, api, params) {
    var labelManager = getLabelManager(api).labelManager;
    params.updatedSeries.forEach(function(series) {
      labelManager.addLabelsOfSeries(api.getViewOfSeriesModel(series));
    });
    labelManager.updateLayoutConfig(api);
    labelManager.layout(api);
    labelManager.processLabelsOverall();
  });
}
var ScatterSeriesModel = function(_super) {
  __extends(ScatterSeriesModel2, _super);
  function ScatterSeriesModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ScatterSeriesModel2.type;
    _this.hasSymbolVisual = true;
    return _this;
  }
  ScatterSeriesModel2.prototype.getInitialData = function(option, ecModel) {
    return createSeriesData(null, this, {
      useEncodeDefaulter: true
    });
  };
  ScatterSeriesModel2.prototype.getProgressive = function() {
    var progressive = this.option.progressive;
    if (progressive == null) {
      return this.option.large ? 5e3 : this.get("progressive");
    }
    return progressive;
  };
  ScatterSeriesModel2.prototype.getProgressiveThreshold = function() {
    var progressiveThreshold = this.option.progressiveThreshold;
    if (progressiveThreshold == null) {
      return this.option.large ? 1e4 : this.get("progressiveThreshold");
    }
    return progressiveThreshold;
  };
  ScatterSeriesModel2.prototype.brushSelector = function(dataIndex, data, selectors) {
    return selectors.point(data.getItemLayout(dataIndex));
  };
  ScatterSeriesModel2.type = "series.scatter";
  ScatterSeriesModel2.dependencies = ["grid", "polar", "geo", "singleAxis", "calendar"];
  ScatterSeriesModel2.defaultOption = {
    coordinateSystem: "cartesian2d",
    zlevel: 0,
    z: 2,
    legendHoverLink: true,
    symbolSize: 10,
    large: false,
    largeThreshold: 2e3,
    itemStyle: {
      opacity: 0.8
    },
    emphasis: {
      scale: true
    },
    clip: true,
    select: {
      itemStyle: {
        borderColor: "#212121"
      }
    },
    universalTransition: {
      divideShape: "clone"
    }
  };
  return ScatterSeriesModel2;
}(SeriesModel);
var ScatterSeriesModel$1 = ScatterSeriesModel;
var BOOST_SIZE_THRESHOLD = 4;
var LargeSymbolPathShape = function() {
  function LargeSymbolPathShape2() {
  }
  return LargeSymbolPathShape2;
}();
var LargeSymbolPath = function(_super) {
  __extends(LargeSymbolPath2, _super);
  function LargeSymbolPath2(opts) {
    return _super.call(this, opts) || this;
  }
  LargeSymbolPath2.prototype.getDefaultShape = function() {
    return new LargeSymbolPathShape();
  };
  LargeSymbolPath2.prototype.buildPath = function(path, shape) {
    var points = shape.points;
    var size = shape.size;
    var symbolProxy = this.symbolProxy;
    var symbolProxyShape = symbolProxy.shape;
    var ctx = path.getContext ? path.getContext() : path;
    var canBoost = ctx && size[0] < BOOST_SIZE_THRESHOLD;
    if (canBoost) {
      this._ctx = ctx;
      return;
    }
    this._ctx = null;
    for (var i = 0; i < points.length; ) {
      var x = points[i++];
      var y = points[i++];
      if (isNaN(x) || isNaN(y)) {
        continue;
      }
      if (this.softClipShape && !this.softClipShape.contain(x, y)) {
        continue;
      }
      symbolProxyShape.x = x - size[0] / 2;
      symbolProxyShape.y = y - size[1] / 2;
      symbolProxyShape.width = size[0];
      symbolProxyShape.height = size[1];
      symbolProxy.buildPath(path, symbolProxyShape, true);
    }
  };
  LargeSymbolPath2.prototype.afterBrush = function() {
    var shape = this.shape;
    var points = shape.points;
    var size = shape.size;
    var ctx = this._ctx;
    if (!ctx) {
      return;
    }
    for (var i = 0; i < points.length; ) {
      var x = points[i++];
      var y = points[i++];
      if (isNaN(x) || isNaN(y)) {
        continue;
      }
      if (this.softClipShape && !this.softClipShape.contain(x, y)) {
        continue;
      }
      ctx.fillRect(x - size[0] / 2, y - size[1] / 2, size[0], size[1]);
    }
  };
  LargeSymbolPath2.prototype.findDataIndex = function(x, y) {
    var shape = this.shape;
    var points = shape.points;
    var size = shape.size;
    var w = Math.max(size[0], 4);
    var h = Math.max(size[1], 4);
    for (var idx = points.length / 2 - 1; idx >= 0; idx--) {
      var i = idx * 2;
      var x0 = points[i] - w / 2;
      var y0 = points[i + 1] - h / 2;
      if (x >= x0 && y >= y0 && x <= x0 + w && y <= y0 + h) {
        return idx;
      }
    }
    return -1;
  };
  return LargeSymbolPath2;
}(Path);
var LargeSymbolDraw = function() {
  function LargeSymbolDraw2() {
    this.group = new Group$1();
  }
  LargeSymbolDraw2.prototype.isPersistent = function() {
    return !this._incremental;
  };
  LargeSymbolDraw2.prototype.updateData = function(data, opt) {
    this.group.removeAll();
    var symbolEl = new LargeSymbolPath({
      rectHover: true,
      cursor: "default"
    });
    symbolEl.setShape({
      points: data.getLayout("points")
    });
    this._setCommon(symbolEl, data, false, opt);
    this.group.add(symbolEl);
    this._incremental = null;
  };
  LargeSymbolDraw2.prototype.updateLayout = function(data) {
    if (this._incremental) {
      return;
    }
    var points = data.getLayout("points");
    this.group.eachChild(function(child) {
      if (child.startIndex != null) {
        var len2 = (child.endIndex - child.startIndex) * 2;
        var byteOffset = child.startIndex * 4 * 2;
        points = new Float32Array(points.buffer, byteOffset, len2);
      }
      child.setShape("points", points);
    });
  };
  LargeSymbolDraw2.prototype.incrementalPrepareUpdate = function(data) {
    this.group.removeAll();
    this._clearIncremental();
    if (data.count() > 2e6) {
      if (!this._incremental) {
        this._incremental = new IncrementalDisplayable({
          silent: true
        });
      }
      this.group.add(this._incremental);
    } else {
      this._incremental = null;
    }
  };
  LargeSymbolDraw2.prototype.incrementalUpdate = function(taskParams, data, opt) {
    var symbolEl;
    if (this._incremental) {
      symbolEl = new LargeSymbolPath();
      this._incremental.addDisplayable(symbolEl, true);
    } else {
      symbolEl = new LargeSymbolPath({
        rectHover: true,
        cursor: "default",
        startIndex: taskParams.start,
        endIndex: taskParams.end
      });
      symbolEl.incremental = true;
      this.group.add(symbolEl);
    }
    symbolEl.setShape({
      points: data.getLayout("points")
    });
    this._setCommon(symbolEl, data, !!this._incremental, opt);
  };
  LargeSymbolDraw2.prototype._setCommon = function(symbolEl, data, isIncremental, opt) {
    var hostModel = data.hostModel;
    opt = opt || {};
    var size = data.getVisual("symbolSize");
    symbolEl.setShape("size", size instanceof Array ? size : [size, size]);
    symbolEl.softClipShape = opt.clipShape || null;
    symbolEl.symbolProxy = createSymbol$1(data.getVisual("symbol"), 0, 0, 0, 0);
    symbolEl.setColor = symbolEl.symbolProxy.setColor;
    var extrudeShadow = symbolEl.shape.size[0] < BOOST_SIZE_THRESHOLD;
    symbolEl.useStyle(hostModel.getModel("itemStyle").getItemStyle(extrudeShadow ? ["color", "shadowBlur", "shadowColor"] : ["color"]));
    var globalStyle = data.getVisual("style");
    var visualColor = globalStyle && globalStyle.fill;
    if (visualColor) {
      symbolEl.setColor(visualColor);
    }
    if (!isIncremental) {
      var ecData_1 = getECData(symbolEl);
      ecData_1.seriesIndex = hostModel.seriesIndex;
      symbolEl.on("mousemove", function(e) {
        ecData_1.dataIndex = null;
        var dataIndex = symbolEl.findDataIndex(e.offsetX, e.offsetY);
        if (dataIndex >= 0) {
          ecData_1.dataIndex = dataIndex + (symbolEl.startIndex || 0);
        }
      });
    }
  };
  LargeSymbolDraw2.prototype.remove = function() {
    this._clearIncremental();
    this._incremental = null;
    this.group.removeAll();
  };
  LargeSymbolDraw2.prototype._clearIncremental = function() {
    var incremental = this._incremental;
    if (incremental) {
      incremental.clearDisplaybles();
    }
  };
  return LargeSymbolDraw2;
}();
var LargeSymbolDraw$1 = LargeSymbolDraw;
var ScatterView = function(_super) {
  __extends(ScatterView2, _super);
  function ScatterView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ScatterView2.type;
    return _this;
  }
  ScatterView2.prototype.render = function(seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var symbolDraw = this._updateSymbolDraw(data, seriesModel);
    symbolDraw.updateData(data, {
      clipShape: this._getClipShape(seriesModel)
    });
    this._finished = true;
  };
  ScatterView2.prototype.incrementalPrepareRender = function(seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var symbolDraw = this._updateSymbolDraw(data, seriesModel);
    symbolDraw.incrementalPrepareUpdate(data);
    this._finished = false;
  };
  ScatterView2.prototype.incrementalRender = function(taskParams, seriesModel, ecModel) {
    this._symbolDraw.incrementalUpdate(taskParams, seriesModel.getData(), {
      clipShape: this._getClipShape(seriesModel)
    });
    this._finished = taskParams.end === seriesModel.getData().count();
  };
  ScatterView2.prototype.updateTransform = function(seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    this.group.dirty();
    if (!this._finished || data.count() > 1e4 || !this._symbolDraw.isPersistent()) {
      return {
        update: true
      };
    } else {
      var res = pointsLayout("").reset(seriesModel, ecModel, api);
      if (res.progress) {
        res.progress({
          start: 0,
          end: data.count(),
          count: data.count()
        }, data);
      }
      this._symbolDraw.updateLayout(data);
    }
  };
  ScatterView2.prototype._getClipShape = function(seriesModel) {
    var coordSys = seriesModel.coordinateSystem;
    var clipArea = coordSys && coordSys.getArea && coordSys.getArea();
    return seriesModel.get("clip", true) ? clipArea : null;
  };
  ScatterView2.prototype._updateSymbolDraw = function(data, seriesModel) {
    var symbolDraw = this._symbolDraw;
    var pipelineContext = seriesModel.pipelineContext;
    var isLargeDraw = pipelineContext.large;
    if (!symbolDraw || isLargeDraw !== this._isLargeDraw) {
      symbolDraw && symbolDraw.remove();
      symbolDraw = this._symbolDraw = isLargeDraw ? new LargeSymbolDraw$1() : new SymbolDraw();
      this._isLargeDraw = isLargeDraw;
      this.group.removeAll();
    }
    this.group.add(symbolDraw.group);
    return symbolDraw;
  };
  ScatterView2.prototype.remove = function(ecModel, api) {
    this._symbolDraw && this._symbolDraw.remove(true);
    this._symbolDraw = null;
  };
  ScatterView2.prototype.dispose = function() {
  };
  ScatterView2.type = "scatter";
  return ScatterView2;
}(ChartView);
var ScatterView$1 = ScatterView;
function install$n(registers) {
  use(install$o);
  registers.registerSeriesModel(ScatterSeriesModel$1);
  registers.registerChartView(ScatterView$1);
  registers.registerLayout(pointsLayout("scatter"));
}
function init(inRoot) {
  var root = inRoot;
  root.hierNode = {
    defaultAncestor: null,
    ancestor: root,
    prelim: 0,
    modifier: 0,
    change: 0,
    shift: 0,
    i: 0,
    thread: null
  };
  var nodes = [root];
  var node;
  var children;
  while (node = nodes.pop()) {
    children = node.children;
    if (node.isExpand && children.length) {
      var n = children.length;
      for (var i = n - 1; i >= 0; i--) {
        var child = children[i];
        child.hierNode = {
          defaultAncestor: null,
          ancestor: child,
          prelim: 0,
          modifier: 0,
          change: 0,
          shift: 0,
          i,
          thread: null
        };
        nodes.push(child);
      }
    }
  }
}
function firstWalk(node, separation2) {
  var children = node.isExpand ? node.children : [];
  var siblings = node.parentNode.children;
  var subtreeW = node.hierNode.i ? siblings[node.hierNode.i - 1] : null;
  if (children.length) {
    executeShifts(node);
    var midPoint = (children[0].hierNode.prelim + children[children.length - 1].hierNode.prelim) / 2;
    if (subtreeW) {
      node.hierNode.prelim = subtreeW.hierNode.prelim + separation2(node, subtreeW);
      node.hierNode.modifier = node.hierNode.prelim - midPoint;
    } else {
      node.hierNode.prelim = midPoint;
    }
  } else if (subtreeW) {
    node.hierNode.prelim = subtreeW.hierNode.prelim + separation2(node, subtreeW);
  }
  node.parentNode.hierNode.defaultAncestor = apportion(node, subtreeW, node.parentNode.hierNode.defaultAncestor || siblings[0], separation2);
}
function secondWalk(node) {
  var nodeX = node.hierNode.prelim + node.parentNode.hierNode.modifier;
  node.setLayout({
    x: nodeX
  }, true);
  node.hierNode.modifier += node.parentNode.hierNode.modifier;
}
function separation(cb) {
  return arguments.length ? cb : defaultSeparation;
}
function radialCoordinate(rad, r) {
  rad -= Math.PI / 2;
  return {
    x: r * Math.cos(rad),
    y: r * Math.sin(rad)
  };
}
function getViewRect$3(seriesModel, api) {
  return getLayoutRect(seriesModel.getBoxLayoutParams(), {
    width: api.getWidth(),
    height: api.getHeight()
  });
}
function executeShifts(node) {
  var children = node.children;
  var n = children.length;
  var shift = 0;
  var change = 0;
  while (--n >= 0) {
    var child = children[n];
    child.hierNode.prelim += shift;
    child.hierNode.modifier += shift;
    change += child.hierNode.change;
    shift += child.hierNode.shift + change;
  }
}
function apportion(subtreeV, subtreeW, ancestor, separation2) {
  if (subtreeW) {
    var nodeOutRight = subtreeV;
    var nodeInRight = subtreeV;
    var nodeOutLeft = nodeInRight.parentNode.children[0];
    var nodeInLeft = subtreeW;
    var sumOutRight = nodeOutRight.hierNode.modifier;
    var sumInRight = nodeInRight.hierNode.modifier;
    var sumOutLeft = nodeOutLeft.hierNode.modifier;
    var sumInLeft = nodeInLeft.hierNode.modifier;
    while (nodeInLeft = nextRight(nodeInLeft), nodeInRight = nextLeft(nodeInRight), nodeInLeft && nodeInRight) {
      nodeOutRight = nextRight(nodeOutRight);
      nodeOutLeft = nextLeft(nodeOutLeft);
      nodeOutRight.hierNode.ancestor = subtreeV;
      var shift = nodeInLeft.hierNode.prelim + sumInLeft - nodeInRight.hierNode.prelim - sumInRight + separation2(nodeInLeft, nodeInRight);
      if (shift > 0) {
        moveSubtree(nextAncestor(nodeInLeft, subtreeV, ancestor), subtreeV, shift);
        sumInRight += shift;
        sumOutRight += shift;
      }
      sumInLeft += nodeInLeft.hierNode.modifier;
      sumInRight += nodeInRight.hierNode.modifier;
      sumOutRight += nodeOutRight.hierNode.modifier;
      sumOutLeft += nodeOutLeft.hierNode.modifier;
    }
    if (nodeInLeft && !nextRight(nodeOutRight)) {
      nodeOutRight.hierNode.thread = nodeInLeft;
      nodeOutRight.hierNode.modifier += sumInLeft - sumOutRight;
    }
    if (nodeInRight && !nextLeft(nodeOutLeft)) {
      nodeOutLeft.hierNode.thread = nodeInRight;
      nodeOutLeft.hierNode.modifier += sumInRight - sumOutLeft;
      ancestor = subtreeV;
    }
  }
  return ancestor;
}
function nextRight(node) {
  var children = node.children;
  return children.length && node.isExpand ? children[children.length - 1] : node.hierNode.thread;
}
function nextLeft(node) {
  var children = node.children;
  return children.length && node.isExpand ? children[0] : node.hierNode.thread;
}
function nextAncestor(nodeInLeft, node, ancestor) {
  return nodeInLeft.hierNode.ancestor.parentNode === node.parentNode ? nodeInLeft.hierNode.ancestor : ancestor;
}
function moveSubtree(wl, wr, shift) {
  var change = shift / (wr.hierNode.i - wl.hierNode.i);
  wr.hierNode.change -= change;
  wr.hierNode.shift += shift;
  wr.hierNode.modifier += shift;
  wr.hierNode.prelim += shift;
  wl.hierNode.change += change;
}
function defaultSeparation(node1, node2) {
  return node1.parentNode === node2.parentNode ? 1 : 2;
}
var TreeEdgeShape = function() {
  function TreeEdgeShape2() {
    this.parentPoint = [];
    this.childPoints = [];
  }
  return TreeEdgeShape2;
}();
var TreePath = function(_super) {
  __extends(TreePath2, _super);
  function TreePath2(opts) {
    return _super.call(this, opts) || this;
  }
  TreePath2.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  };
  TreePath2.prototype.getDefaultShape = function() {
    return new TreeEdgeShape();
  };
  TreePath2.prototype.buildPath = function(ctx, shape) {
    var childPoints = shape.childPoints;
    var childLen = childPoints.length;
    var parentPoint = shape.parentPoint;
    var firstChildPos = childPoints[0];
    var lastChildPos = childPoints[childLen - 1];
    if (childLen === 1) {
      ctx.moveTo(parentPoint[0], parentPoint[1]);
      ctx.lineTo(firstChildPos[0], firstChildPos[1]);
      return;
    }
    var orient = shape.orient;
    var forkDim = orient === "TB" || orient === "BT" ? 0 : 1;
    var otherDim = 1 - forkDim;
    var forkPosition = parsePercent(shape.forkPosition, 1);
    var tmpPoint = [];
    tmpPoint[forkDim] = parentPoint[forkDim];
    tmpPoint[otherDim] = parentPoint[otherDim] + (lastChildPos[otherDim] - parentPoint[otherDim]) * forkPosition;
    ctx.moveTo(parentPoint[0], parentPoint[1]);
    ctx.lineTo(tmpPoint[0], tmpPoint[1]);
    ctx.moveTo(firstChildPos[0], firstChildPos[1]);
    tmpPoint[forkDim] = firstChildPos[forkDim];
    ctx.lineTo(tmpPoint[0], tmpPoint[1]);
    tmpPoint[forkDim] = lastChildPos[forkDim];
    ctx.lineTo(tmpPoint[0], tmpPoint[1]);
    ctx.lineTo(lastChildPos[0], lastChildPos[1]);
    for (var i = 1; i < childLen - 1; i++) {
      var point = childPoints[i];
      ctx.moveTo(point[0], point[1]);
      tmpPoint[forkDim] = point[forkDim];
      ctx.lineTo(tmpPoint[0], tmpPoint[1]);
    }
  };
  return TreePath2;
}(Path);
var TreeView = function(_super) {
  __extends(TreeView2, _super);
  function TreeView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = TreeView2.type;
    _this._mainGroup = new Group$1();
    return _this;
  }
  TreeView2.prototype.init = function(ecModel, api) {
    this._controller = new RoamController(api.getZr());
    this._controllerHost = {
      target: this.group
    };
    this.group.add(this._mainGroup);
  };
  TreeView2.prototype.render = function(seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var layoutInfo = seriesModel.layoutInfo;
    var group = this._mainGroup;
    var layout2 = seriesModel.get("layout");
    if (layout2 === "radial") {
      group.x = layoutInfo.x + layoutInfo.width / 2;
      group.y = layoutInfo.y + layoutInfo.height / 2;
    } else {
      group.x = layoutInfo.x;
      group.y = layoutInfo.y;
    }
    this._updateViewCoordSys(seriesModel);
    this._updateController(seriesModel, ecModel, api);
    var oldData = this._data;
    data.diff(oldData).add(function(newIdx) {
      if (symbolNeedsDraw(data, newIdx)) {
        updateNode(data, newIdx, null, group, seriesModel);
      }
    }).update(function(newIdx, oldIdx) {
      var symbolEl = oldData.getItemGraphicEl(oldIdx);
      if (!symbolNeedsDraw(data, newIdx)) {
        symbolEl && removeNode(oldData, oldIdx, symbolEl, group, seriesModel);
        return;
      }
      updateNode(data, newIdx, symbolEl, group, seriesModel);
    }).remove(function(oldIdx) {
      var symbolEl = oldData.getItemGraphicEl(oldIdx);
      if (symbolEl) {
        removeNode(oldData, oldIdx, symbolEl, group, seriesModel);
      }
    }).execute();
    this._nodeScaleRatio = seriesModel.get("nodeScaleRatio");
    this._updateNodeAndLinkScale(seriesModel);
    if (seriesModel.get("expandAndCollapse") === true) {
      data.eachItemGraphicEl(function(el, dataIndex) {
        el.off("click").on("click", function() {
          api.dispatchAction({
            type: "treeExpandAndCollapse",
            seriesId: seriesModel.id,
            dataIndex
          });
        });
      });
    }
    this._data = data;
  };
  TreeView2.prototype._updateViewCoordSys = function(seriesModel) {
    var data = seriesModel.getData();
    var points = [];
    data.each(function(idx) {
      var layout2 = data.getItemLayout(idx);
      if (layout2 && !isNaN(layout2.x) && !isNaN(layout2.y)) {
        points.push([+layout2.x, +layout2.y]);
      }
    });
    var min = [];
    var max = [];
    fromPoints(points, min, max);
    var oldMin = this._min;
    var oldMax = this._max;
    if (max[0] - min[0] === 0) {
      min[0] = oldMin ? oldMin[0] : min[0] - 1;
      max[0] = oldMax ? oldMax[0] : max[0] + 1;
    }
    if (max[1] - min[1] === 0) {
      min[1] = oldMin ? oldMin[1] : min[1] - 1;
      max[1] = oldMax ? oldMax[1] : max[1] + 1;
    }
    var viewCoordSys = seriesModel.coordinateSystem = new View();
    viewCoordSys.zoomLimit = seriesModel.get("scaleLimit");
    viewCoordSys.setBoundingRect(min[0], min[1], max[0] - min[0], max[1] - min[1]);
    viewCoordSys.setCenter(seriesModel.get("center"));
    viewCoordSys.setZoom(seriesModel.get("zoom"));
    this.group.attr({
      x: viewCoordSys.x,
      y: viewCoordSys.y,
      scaleX: viewCoordSys.scaleX,
      scaleY: viewCoordSys.scaleY
    });
    this._min = min;
    this._max = max;
  };
  TreeView2.prototype._updateController = function(seriesModel, ecModel, api) {
    var _this = this;
    var controller = this._controller;
    var controllerHost = this._controllerHost;
    var group = this.group;
    controller.setPointerChecker(function(e, x, y) {
      var rect = group.getBoundingRect();
      rect.applyTransform(group.transform);
      return rect.contain(x, y) && !onIrrelevantElement(e, api, seriesModel);
    });
    controller.enable(seriesModel.get("roam"));
    controllerHost.zoomLimit = seriesModel.get("scaleLimit");
    controllerHost.zoom = seriesModel.coordinateSystem.getZoom();
    controller.off("pan").off("zoom").on("pan", function(e) {
      updateViewOnPan(controllerHost, e.dx, e.dy);
      api.dispatchAction({
        seriesId: seriesModel.id,
        type: "treeRoam",
        dx: e.dx,
        dy: e.dy
      });
    }).on("zoom", function(e) {
      updateViewOnZoom(controllerHost, e.scale, e.originX, e.originY);
      api.dispatchAction({
        seriesId: seriesModel.id,
        type: "treeRoam",
        zoom: e.scale,
        originX: e.originX,
        originY: e.originY
      });
      _this._updateNodeAndLinkScale(seriesModel);
      api.updateLabelLayout();
    });
  };
  TreeView2.prototype._updateNodeAndLinkScale = function(seriesModel) {
    var data = seriesModel.getData();
    var nodeScale = this._getNodeGlobalScale(seriesModel);
    data.eachItemGraphicEl(function(el, idx) {
      el.setSymbolScale(nodeScale);
    });
  };
  TreeView2.prototype._getNodeGlobalScale = function(seriesModel) {
    var coordSys = seriesModel.coordinateSystem;
    if (coordSys.type !== "view") {
      return 1;
    }
    var nodeScaleRatio = this._nodeScaleRatio;
    var groupZoom = coordSys.scaleX || 1;
    var roamZoom = coordSys.getZoom();
    var nodeScale = (roamZoom - 1) * nodeScaleRatio + 1;
    return nodeScale / groupZoom;
  };
  TreeView2.prototype.dispose = function() {
    this._controller && this._controller.dispose();
    this._controllerHost = null;
  };
  TreeView2.prototype.remove = function() {
    this._mainGroup.removeAll();
    this._data = null;
  };
  TreeView2.type = "tree";
  return TreeView2;
}(ChartView);
function symbolNeedsDraw(data, dataIndex) {
  var layout2 = data.getItemLayout(dataIndex);
  return layout2 && !isNaN(layout2.x) && !isNaN(layout2.y);
}
function updateNode(data, dataIndex, symbolEl, group, seriesModel) {
  var isInit = !symbolEl;
  var node = data.tree.getNodeByDataIndex(dataIndex);
  var itemModel = node.getModel();
  var visualColor = node.getVisual("style").fill;
  var symbolInnerColor = node.isExpand === false && node.children.length !== 0 ? visualColor : "#fff";
  var virtualRoot = data.tree.root;
  var source = node.parentNode === virtualRoot ? node : node.parentNode || node;
  var sourceSymbolEl = data.getItemGraphicEl(source.dataIndex);
  var sourceLayout = source.getLayout();
  var sourceOldLayout = sourceSymbolEl ? {
    x: sourceSymbolEl.__oldX,
    y: sourceSymbolEl.__oldY,
    rawX: sourceSymbolEl.__radialOldRawX,
    rawY: sourceSymbolEl.__radialOldRawY
  } : sourceLayout;
  var targetLayout = node.getLayout();
  if (isInit) {
    symbolEl = new SymbolClz(data, dataIndex, null, {
      symbolInnerColor,
      useNameLabel: true
    });
    symbolEl.x = sourceOldLayout.x;
    symbolEl.y = sourceOldLayout.y;
  } else {
    symbolEl.updateData(data, dataIndex, null, {
      symbolInnerColor,
      useNameLabel: true
    });
  }
  symbolEl.__radialOldRawX = symbolEl.__radialRawX;
  symbolEl.__radialOldRawY = symbolEl.__radialRawY;
  symbolEl.__radialRawX = targetLayout.rawX;
  symbolEl.__radialRawY = targetLayout.rawY;
  group.add(symbolEl);
  data.setItemGraphicEl(dataIndex, symbolEl);
  symbolEl.__oldX = symbolEl.x;
  symbolEl.__oldY = symbolEl.y;
  updateProps(symbolEl, {
    x: targetLayout.x,
    y: targetLayout.y
  }, seriesModel);
  var symbolPath = symbolEl.getSymbolPath();
  if (seriesModel.get("layout") === "radial") {
    var realRoot = virtualRoot.children[0];
    var rootLayout = realRoot.getLayout();
    var length_1 = realRoot.children.length;
    var rad = void 0;
    var isLeft = void 0;
    if (targetLayout.x === rootLayout.x && node.isExpand === true) {
      var center2 = {
        x: (realRoot.children[0].getLayout().x + realRoot.children[length_1 - 1].getLayout().x) / 2,
        y: (realRoot.children[0].getLayout().y + realRoot.children[length_1 - 1].getLayout().y) / 2
      };
      rad = Math.atan2(center2.y - rootLayout.y, center2.x - rootLayout.x);
      if (rad < 0) {
        rad = Math.PI * 2 + rad;
      }
      isLeft = center2.x < rootLayout.x;
      if (isLeft) {
        rad = rad - Math.PI;
      }
    } else {
      rad = Math.atan2(targetLayout.y - rootLayout.y, targetLayout.x - rootLayout.x);
      if (rad < 0) {
        rad = Math.PI * 2 + rad;
      }
      if (node.children.length === 0 || node.children.length !== 0 && node.isExpand === false) {
        isLeft = targetLayout.x < rootLayout.x;
        if (isLeft) {
          rad = rad - Math.PI;
        }
      } else {
        isLeft = targetLayout.x > rootLayout.x;
        if (!isLeft) {
          rad = rad - Math.PI;
        }
      }
    }
    var textPosition = isLeft ? "left" : "right";
    var normalLabelModel = itemModel.getModel("label");
    var rotate = normalLabelModel.get("rotate");
    var labelRotateRadian = rotate * (Math.PI / 180);
    var textContent = symbolPath.getTextContent();
    if (textContent) {
      symbolPath.setTextConfig({
        position: normalLabelModel.get("position") || textPosition,
        rotation: rotate == null ? -rad : labelRotateRadian,
        origin: "center"
      });
      textContent.setStyle("verticalAlign", "middle");
    }
  }
  var focus = itemModel.get(["emphasis", "focus"]);
  var focusDataIndices = focus === "ancestor" ? node.getAncestorsIndices() : focus === "descendant" ? node.getDescendantIndices() : null;
  if (focusDataIndices) {
    getECData(symbolEl).focus = focusDataIndices;
  }
  drawEdge(seriesModel, node, virtualRoot, symbolEl, sourceOldLayout, sourceLayout, targetLayout, group);
  if (symbolEl.__edge) {
    symbolEl.onHoverStateChange = function(toState) {
      if (toState !== "blur") {
        var parentEl = node.parentNode && data.getItemGraphicEl(node.parentNode.dataIndex);
        if (!(parentEl && parentEl.hoverState === HOVER_STATE_BLUR)) {
          setStatesFlag(symbolEl.__edge, toState);
        }
      }
    };
  }
}
function drawEdge(seriesModel, node, virtualRoot, symbolEl, sourceOldLayout, sourceLayout, targetLayout, group) {
  var itemModel = node.getModel();
  var edgeShape = seriesModel.get("edgeShape");
  var layout2 = seriesModel.get("layout");
  var orient = seriesModel.getOrient();
  var curvature = seriesModel.get(["lineStyle", "curveness"]);
  var edgeForkPosition = seriesModel.get("edgeForkPosition");
  var lineStyle = itemModel.getModel("lineStyle").getLineStyle();
  var edge = symbolEl.__edge;
  if (edgeShape === "curve") {
    if (node.parentNode && node.parentNode !== virtualRoot) {
      if (!edge) {
        edge = symbolEl.__edge = new BezierCurve({
          shape: getEdgeShape(layout2, orient, curvature, sourceOldLayout, sourceOldLayout)
        });
      }
      updateProps(edge, {
        shape: getEdgeShape(layout2, orient, curvature, sourceLayout, targetLayout)
      }, seriesModel);
    }
  } else if (edgeShape === "polyline") {
    if (layout2 === "orthogonal") {
      if (node !== virtualRoot && node.children && node.children.length !== 0 && node.isExpand === true) {
        var children = node.children;
        var childPoints = [];
        for (var i = 0; i < children.length; i++) {
          var childLayout = children[i].getLayout();
          childPoints.push([childLayout.x, childLayout.y]);
        }
        if (!edge) {
          edge = symbolEl.__edge = new TreePath({
            shape: {
              parentPoint: [targetLayout.x, targetLayout.y],
              childPoints: [[targetLayout.x, targetLayout.y]],
              orient,
              forkPosition: edgeForkPosition
            }
          });
        }
        updateProps(edge, {
          shape: {
            parentPoint: [targetLayout.x, targetLayout.y],
            childPoints
          }
        }, seriesModel);
      }
    }
  }
  if (edge) {
    edge.useStyle(defaults({
      strokeNoScale: true,
      fill: null
    }, lineStyle));
    setStatesStylesFromModel(edge, itemModel, "lineStyle");
    setDefaultStateProxy(edge);
    group.add(edge);
  }
}
function removeNodeEdge(node, data, group, seriesModel, removeAnimationOpt) {
  var virtualRoot = data.tree.root;
  var _a = getSourceNode(virtualRoot, node), source = _a.source, sourceLayout = _a.sourceLayout;
  var symbolEl = data.getItemGraphicEl(node.dataIndex);
  if (!symbolEl) {
    return;
  }
  var sourceSymbolEl = data.getItemGraphicEl(source.dataIndex);
  var sourceEdge = sourceSymbolEl.__edge;
  var edge = symbolEl.__edge || (source.isExpand === false || source.children.length === 1 ? sourceEdge : void 0);
  var edgeShape = seriesModel.get("edgeShape");
  var layoutOpt = seriesModel.get("layout");
  var orient = seriesModel.get("orient");
  var curvature = seriesModel.get(["lineStyle", "curveness"]);
  if (edge) {
    if (edgeShape === "curve") {
      removeElement(edge, {
        shape: getEdgeShape(layoutOpt, orient, curvature, sourceLayout, sourceLayout),
        style: {
          opacity: 0
        }
      }, seriesModel, {
        cb: function() {
          group.remove(edge);
        },
        removeOpt: removeAnimationOpt
      });
    } else if (edgeShape === "polyline" && seriesModel.get("layout") === "orthogonal") {
      removeElement(edge, {
        shape: {
          parentPoint: [sourceLayout.x, sourceLayout.y],
          childPoints: [[sourceLayout.x, sourceLayout.y]]
        },
        style: {
          opacity: 0
        }
      }, seriesModel, {
        cb: function() {
          group.remove(edge);
        },
        removeOpt: removeAnimationOpt
      });
    }
  }
}
function getSourceNode(virtualRoot, node) {
  var source = node.parentNode === virtualRoot ? node : node.parentNode || node;
  var sourceLayout;
  while (sourceLayout = source.getLayout(), sourceLayout == null) {
    source = source.parentNode === virtualRoot ? source : source.parentNode || source;
  }
  return {
    source,
    sourceLayout
  };
}
function removeNode(data, dataIndex, symbolEl, group, seriesModel) {
  var node = data.tree.getNodeByDataIndex(dataIndex);
  var virtualRoot = data.tree.root;
  var sourceLayout = getSourceNode(virtualRoot, node).sourceLayout;
  var removeAnimationOpt = {
    duration: seriesModel.get("animationDurationUpdate"),
    easing: seriesModel.get("animationEasingUpdate")
  };
  removeElement(symbolEl, {
    x: sourceLayout.x + 1,
    y: sourceLayout.y + 1
  }, seriesModel, {
    cb: function() {
      group.remove(symbolEl);
      data.setItemGraphicEl(dataIndex, null);
    },
    removeOpt: removeAnimationOpt
  });
  symbolEl.fadeOut(null, {
    fadeLabel: true,
    animation: removeAnimationOpt
  });
  node.children.forEach(function(childNode) {
    removeNodeEdge(childNode, data, group, seriesModel, removeAnimationOpt);
  });
  removeNodeEdge(node, data, group, seriesModel, removeAnimationOpt);
}
function getEdgeShape(layoutOpt, orient, curvature, sourceLayout, targetLayout) {
  var cpx1;
  var cpy1;
  var cpx2;
  var cpy2;
  var x1;
  var x2;
  var y1;
  var y2;
  if (layoutOpt === "radial") {
    x1 = sourceLayout.rawX;
    y1 = sourceLayout.rawY;
    x2 = targetLayout.rawX;
    y2 = targetLayout.rawY;
    var radialCoor1 = radialCoordinate(x1, y1);
    var radialCoor2 = radialCoordinate(x1, y1 + (y2 - y1) * curvature);
    var radialCoor3 = radialCoordinate(x2, y2 + (y1 - y2) * curvature);
    var radialCoor4 = radialCoordinate(x2, y2);
    return {
      x1: radialCoor1.x || 0,
      y1: radialCoor1.y || 0,
      x2: radialCoor4.x || 0,
      y2: radialCoor4.y || 0,
      cpx1: radialCoor2.x || 0,
      cpy1: radialCoor2.y || 0,
      cpx2: radialCoor3.x || 0,
      cpy2: radialCoor3.y || 0
    };
  } else {
    x1 = sourceLayout.x;
    y1 = sourceLayout.y;
    x2 = targetLayout.x;
    y2 = targetLayout.y;
    if (orient === "LR" || orient === "RL") {
      cpx1 = x1 + (x2 - x1) * curvature;
      cpy1 = y1;
      cpx2 = x2 + (x1 - x2) * curvature;
      cpy2 = y2;
    }
    if (orient === "TB" || orient === "BT") {
      cpx1 = x1;
      cpy1 = y1 + (y2 - y1) * curvature;
      cpx2 = x2;
      cpy2 = y2 + (y1 - y2) * curvature;
    }
  }
  return {
    x1,
    y1,
    x2,
    y2,
    cpx1,
    cpy1,
    cpx2,
    cpy2
  };
}
var TreeView$1 = TreeView;
var inner$6 = makeInner();
function linkSeriesData(opt) {
  var mainData = opt.mainData;
  var datas = opt.datas;
  if (!datas) {
    datas = {
      main: mainData
    };
    opt.datasAttr = {
      main: "data"
    };
  }
  opt.datas = opt.mainData = null;
  linkAll(mainData, datas, opt);
  each$2(datas, function(data) {
    each$2(mainData.TRANSFERABLE_METHODS, function(methodName) {
      data.wrapMethod(methodName, curry(transferInjection, opt));
    });
  });
  mainData.wrapMethod("cloneShallow", curry(cloneShallowInjection, opt));
  each$2(mainData.CHANGABLE_METHODS, function(methodName) {
    mainData.wrapMethod(methodName, curry(changeInjection, opt));
  });
  assert(datas[mainData.dataType] === mainData);
}
function transferInjection(opt, res) {
  if (isMainData(this)) {
    var datas = extend({}, inner$6(this).datas);
    datas[this.dataType] = res;
    linkAll(res, datas, opt);
  } else {
    linkSingle(res, this.dataType, inner$6(this).mainData, opt);
  }
  return res;
}
function changeInjection(opt, res) {
  opt.struct && opt.struct.update();
  return res;
}
function cloneShallowInjection(opt, res) {
  each$2(inner$6(res).datas, function(data, dataType) {
    data !== res && linkSingle(data.cloneShallow(), dataType, res, opt);
  });
  return res;
}
function getLinkedData(dataType) {
  var mainData = inner$6(this).mainData;
  return dataType == null || mainData == null ? mainData : inner$6(mainData).datas[dataType];
}
function getLinkedDataAll() {
  var mainData = inner$6(this).mainData;
  return mainData == null ? [{
    data: mainData
  }] : map(keys(inner$6(mainData).datas), function(type) {
    return {
      type,
      data: inner$6(mainData).datas[type]
    };
  });
}
function isMainData(data) {
  return inner$6(data).mainData === data;
}
function linkAll(mainData, datas, opt) {
  inner$6(mainData).datas = {};
  each$2(datas, function(data, dataType) {
    linkSingle(data, dataType, mainData, opt);
  });
}
function linkSingle(data, dataType, mainData, opt) {
  inner$6(mainData).datas[dataType] = data;
  inner$6(data).mainData = mainData;
  data.dataType = dataType;
  if (opt.struct) {
    data[opt.structAttr] = opt.struct;
    opt.struct[opt.datasAttr[dataType]] = data;
  }
  data.getLinkedData = getLinkedData;
  data.getLinkedDataAll = getLinkedDataAll;
}
var TreeNode = function() {
  function TreeNode2(name, hostTree) {
    this.depth = 0;
    this.height = 0;
    this.dataIndex = -1;
    this.children = [];
    this.viewChildren = [];
    this.isExpand = false;
    this.name = name || "";
    this.hostTree = hostTree;
  }
  TreeNode2.prototype.isRemoved = function() {
    return this.dataIndex < 0;
  };
  TreeNode2.prototype.eachNode = function(options, cb, context) {
    if (typeof options === "function") {
      context = cb;
      cb = options;
      options = null;
    }
    options = options || {};
    if (isString(options)) {
      options = {
        order: options
      };
    }
    var order = options.order || "preorder";
    var children = this[options.attr || "children"];
    var suppressVisitSub;
    order === "preorder" && (suppressVisitSub = cb.call(context, this));
    for (var i = 0; !suppressVisitSub && i < children.length; i++) {
      children[i].eachNode(options, cb, context);
    }
    order === "postorder" && cb.call(context, this);
  };
  TreeNode2.prototype.updateDepthAndHeight = function(depth) {
    var height = 0;
    this.depth = depth;
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];
      child.updateDepthAndHeight(depth + 1);
      if (child.height > height) {
        height = child.height;
      }
    }
    this.height = height + 1;
  };
  TreeNode2.prototype.getNodeById = function(id) {
    if (this.getId() === id) {
      return this;
    }
    for (var i = 0, children = this.children, len2 = children.length; i < len2; i++) {
      var res = children[i].getNodeById(id);
      if (res) {
        return res;
      }
    }
  };
  TreeNode2.prototype.contains = function(node) {
    if (node === this) {
      return true;
    }
    for (var i = 0, children = this.children, len2 = children.length; i < len2; i++) {
      var res = children[i].contains(node);
      if (res) {
        return res;
      }
    }
  };
  TreeNode2.prototype.getAncestors = function(includeSelf) {
    var ancestors = [];
    var node = includeSelf ? this : this.parentNode;
    while (node) {
      ancestors.push(node);
      node = node.parentNode;
    }
    ancestors.reverse();
    return ancestors;
  };
  TreeNode2.prototype.getAncestorsIndices = function() {
    var indices = [];
    var currNode = this;
    while (currNode) {
      indices.push(currNode.dataIndex);
      currNode = currNode.parentNode;
    }
    indices.reverse();
    return indices;
  };
  TreeNode2.prototype.getDescendantIndices = function() {
    var indices = [];
    this.eachNode(function(childNode) {
      indices.push(childNode.dataIndex);
    });
    return indices;
  };
  TreeNode2.prototype.getValue = function(dimension) {
    var data = this.hostTree.data;
    return data.getStore().get(data.getDimensionIndex(dimension || "value"), this.dataIndex);
  };
  TreeNode2.prototype.setLayout = function(layout2, merge2) {
    this.dataIndex >= 0 && this.hostTree.data.setItemLayout(this.dataIndex, layout2, merge2);
  };
  TreeNode2.prototype.getLayout = function() {
    return this.hostTree.data.getItemLayout(this.dataIndex);
  };
  TreeNode2.prototype.getModel = function(path) {
    if (this.dataIndex < 0) {
      return;
    }
    var hostTree = this.hostTree;
    var itemModel = hostTree.data.getItemModel(this.dataIndex);
    return itemModel.getModel(path);
  };
  TreeNode2.prototype.getLevelModel = function() {
    return (this.hostTree.levelModels || [])[this.depth];
  };
  TreeNode2.prototype.setVisual = function(key, value) {
    this.dataIndex >= 0 && this.hostTree.data.setItemVisual(this.dataIndex, key, value);
  };
  TreeNode2.prototype.getVisual = function(key) {
    return this.hostTree.data.getItemVisual(this.dataIndex, key);
  };
  TreeNode2.prototype.getRawIndex = function() {
    return this.hostTree.data.getRawIndex(this.dataIndex);
  };
  TreeNode2.prototype.getId = function() {
    return this.hostTree.data.getId(this.dataIndex);
  };
  TreeNode2.prototype.getChildIndex = function() {
    if (this.parentNode) {
      var children = this.parentNode.children;
      for (var i = 0; i < children.length; ++i) {
        if (children[i] === this) {
          return i;
        }
      }
      return -1;
    }
    return -1;
  };
  TreeNode2.prototype.isAncestorOf = function(node) {
    var parent = node.parentNode;
    while (parent) {
      if (parent === this) {
        return true;
      }
      parent = parent.parentNode;
    }
    return false;
  };
  TreeNode2.prototype.isDescendantOf = function(node) {
    return node !== this && node.isAncestorOf(this);
  };
  return TreeNode2;
}();
var Tree = function() {
  function Tree2(hostModel) {
    this.type = "tree";
    this._nodes = [];
    this.hostModel = hostModel;
  }
  Tree2.prototype.eachNode = function(options, cb, context) {
    this.root.eachNode(options, cb, context);
  };
  Tree2.prototype.getNodeByDataIndex = function(dataIndex) {
    var rawIndex = this.data.getRawIndex(dataIndex);
    return this._nodes[rawIndex];
  };
  Tree2.prototype.getNodeById = function(name) {
    return this.root.getNodeById(name);
  };
  Tree2.prototype.update = function() {
    var data = this.data;
    var nodes = this._nodes;
    for (var i = 0, len2 = nodes.length; i < len2; i++) {
      nodes[i].dataIndex = -1;
    }
    for (var i = 0, len2 = data.count(); i < len2; i++) {
      nodes[data.getRawIndex(i)].dataIndex = i;
    }
  };
  Tree2.prototype.clearLayouts = function() {
    this.data.clearItemLayouts();
  };
  Tree2.createTree = function(dataRoot, hostModel, beforeLink) {
    var tree = new Tree2(hostModel);
    var listData = [];
    var dimMax = 1;
    buildHierarchy(dataRoot);
    function buildHierarchy(dataNode, parentNode) {
      var value = dataNode.value;
      dimMax = Math.max(dimMax, isArray(value) ? value.length : 1);
      listData.push(dataNode);
      var node = new TreeNode(convertOptionIdName(dataNode.name, ""), tree);
      parentNode ? addChild(node, parentNode) : tree.root = node;
      tree._nodes.push(node);
      var children = dataNode.children;
      if (children) {
        for (var i = 0; i < children.length; i++) {
          buildHierarchy(children[i], node);
        }
      }
    }
    tree.root.updateDepthAndHeight(0);
    var dimensions = prepareSeriesDataSchema(listData, {
      coordDimensions: ["value"],
      dimensionsCount: dimMax
    }).dimensions;
    var list = new SeriesData(dimensions, hostModel);
    list.initData(listData);
    beforeLink && beforeLink(list);
    linkSeriesData({
      mainData: list,
      struct: tree,
      structAttr: "tree"
    });
    tree.update();
    return tree;
  };
  return Tree2;
}();
function addChild(child, node) {
  var children = node.children;
  if (child.parentNode === node) {
    return;
  }
  children.push(child);
  child.parentNode = node;
}
var Tree$1 = Tree;
function retrieveTargetInfo(payload, validPayloadTypes, seriesModel) {
  if (payload && indexOf(validPayloadTypes, payload.type) >= 0) {
    var root = seriesModel.getData().tree.root;
    var targetNode = payload.targetNode;
    if (typeof targetNode === "string") {
      targetNode = root.getNodeById(targetNode);
    }
    if (targetNode && root.contains(targetNode)) {
      return {
        node: targetNode
      };
    }
    var targetNodeId = payload.targetNodeId;
    if (targetNodeId != null && (targetNode = root.getNodeById(targetNodeId))) {
      return {
        node: targetNode
      };
    }
  }
}
function getPathToRoot(node) {
  var path = [];
  while (node) {
    node = node.parentNode;
    node && path.push(node);
  }
  return path.reverse();
}
function aboveViewRoot(viewRoot, node) {
  var viewPath = getPathToRoot(viewRoot);
  return indexOf(viewPath, node) >= 0;
}
function wrapTreePathInfo(node, seriesModel) {
  var treePathInfo = [];
  while (node) {
    var nodeDataIndex = node.dataIndex;
    treePathInfo.push({
      name: node.name,
      dataIndex: nodeDataIndex,
      value: seriesModel.getRawValue(nodeDataIndex)
    });
    node = node.parentNode;
  }
  treePathInfo.reverse();
  return treePathInfo;
}
var TreeSeriesModel = function(_super) {
  __extends(TreeSeriesModel2, _super);
  function TreeSeriesModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.hasSymbolVisual = true;
    _this.ignoreStyleOnData = true;
    return _this;
  }
  TreeSeriesModel2.prototype.getInitialData = function(option) {
    var root = {
      name: option.name,
      children: option.data
    };
    var leaves = option.leaves || {};
    var leavesModel = new Model(leaves, this, this.ecModel);
    var tree = Tree$1.createTree(root, this, beforeLink);
    function beforeLink(nodeData) {
      nodeData.wrapMethod("getItemModel", function(model, idx) {
        var node = tree.getNodeByDataIndex(idx);
        if (!(node && node.children.length && node.isExpand)) {
          model.parentModel = leavesModel;
        }
        return model;
      });
    }
    var treeDepth = 0;
    tree.eachNode("preorder", function(node) {
      if (node.depth > treeDepth) {
        treeDepth = node.depth;
      }
    });
    var expandAndCollapse = option.expandAndCollapse;
    var expandTreeDepth = expandAndCollapse && option.initialTreeDepth >= 0 ? option.initialTreeDepth : treeDepth;
    tree.root.eachNode("preorder", function(node) {
      var item = node.hostTree.data.getRawDataItem(node.dataIndex);
      node.isExpand = item && item.collapsed != null ? !item.collapsed : node.depth <= expandTreeDepth;
    });
    return tree.data;
  };
  TreeSeriesModel2.prototype.getOrient = function() {
    var orient = this.get("orient");
    if (orient === "horizontal") {
      orient = "LR";
    } else if (orient === "vertical") {
      orient = "TB";
    }
    return orient;
  };
  TreeSeriesModel2.prototype.setZoom = function(zoom) {
    this.option.zoom = zoom;
  };
  TreeSeriesModel2.prototype.setCenter = function(center2) {
    this.option.center = center2;
  };
  TreeSeriesModel2.prototype.formatTooltip = function(dataIndex, multipleSeries, dataType) {
    var tree = this.getData().tree;
    var realRoot = tree.root.children[0];
    var node = tree.getNodeByDataIndex(dataIndex);
    var value = node.getValue();
    var name = node.name;
    while (node && node !== realRoot) {
      name = node.parentNode.name + "." + name;
      node = node.parentNode;
    }
    return createTooltipMarkup("nameValue", {
      name,
      value,
      noValue: isNaN(value) || value == null
    });
  };
  TreeSeriesModel2.prototype.getDataParams = function(dataIndex) {
    var params = _super.prototype.getDataParams.apply(this, arguments);
    var node = this.getData().tree.getNodeByDataIndex(dataIndex);
    params.treeAncestors = wrapTreePathInfo(node, this);
    return params;
  };
  TreeSeriesModel2.type = "series.tree";
  TreeSeriesModel2.layoutMode = "box";
  TreeSeriesModel2.defaultOption = {
    zlevel: 0,
    z: 2,
    coordinateSystem: "view",
    left: "12%",
    top: "12%",
    right: "12%",
    bottom: "12%",
    layout: "orthogonal",
    edgeShape: "curve",
    edgeForkPosition: "50%",
    roam: false,
    nodeScaleRatio: 0.4,
    center: null,
    zoom: 1,
    orient: "LR",
    symbol: "emptyCircle",
    symbolSize: 7,
    expandAndCollapse: true,
    initialTreeDepth: 2,
    lineStyle: {
      color: "#ccc",
      width: 1.5,
      curveness: 0.5
    },
    itemStyle: {
      color: "lightsteelblue",
      borderWidth: 1.5
    },
    label: {
      show: true
    },
    animationEasing: "linear",
    animationDuration: 700,
    animationDurationUpdate: 500
  };
  return TreeSeriesModel2;
}(SeriesModel);
var TreeSeriesModel$1 = TreeSeriesModel;
function eachAfter(root, callback, separation2) {
  var nodes = [root];
  var next = [];
  var node;
  while (node = nodes.pop()) {
    next.push(node);
    if (node.isExpand) {
      var children = node.children;
      if (children.length) {
        for (var i = 0; i < children.length; i++) {
          nodes.push(children[i]);
        }
      }
    }
  }
  while (node = next.pop()) {
    callback(node, separation2);
  }
}
function eachBefore(root, callback) {
  var nodes = [root];
  var node;
  while (node = nodes.pop()) {
    callback(node);
    if (node.isExpand) {
      var children = node.children;
      if (children.length) {
        for (var i = children.length - 1; i >= 0; i--) {
          nodes.push(children[i]);
        }
      }
    }
  }
}
function treeLayout(ecModel, api) {
  ecModel.eachSeriesByType("tree", function(seriesModel) {
    commonLayout(seriesModel, api);
  });
}
function commonLayout(seriesModel, api) {
  var layoutInfo = getViewRect$3(seriesModel, api);
  seriesModel.layoutInfo = layoutInfo;
  var layout2 = seriesModel.get("layout");
  var width = 0;
  var height = 0;
  var separation$1 = null;
  if (layout2 === "radial") {
    width = 2 * Math.PI;
    height = Math.min(layoutInfo.height, layoutInfo.width) / 2;
    separation$1 = separation(function(node1, node2) {
      return (node1.parentNode === node2.parentNode ? 1 : 2) / node1.depth;
    });
  } else {
    width = layoutInfo.width;
    height = layoutInfo.height;
    separation$1 = separation();
  }
  var virtualRoot = seriesModel.getData().tree.root;
  var realRoot = virtualRoot.children[0];
  if (realRoot) {
    init(virtualRoot);
    eachAfter(realRoot, firstWalk, separation$1);
    virtualRoot.hierNode.modifier = -realRoot.hierNode.prelim;
    eachBefore(realRoot, secondWalk);
    var left_1 = realRoot;
    var right_1 = realRoot;
    var bottom_1 = realRoot;
    eachBefore(realRoot, function(node) {
      var x = node.getLayout().x;
      if (x < left_1.getLayout().x) {
        left_1 = node;
      }
      if (x > right_1.getLayout().x) {
        right_1 = node;
      }
      if (node.depth > bottom_1.depth) {
        bottom_1 = node;
      }
    });
    var delta = left_1 === right_1 ? 1 : separation$1(left_1, right_1) / 2;
    var tx_1 = delta - left_1.getLayout().x;
    var kx_1 = 0;
    var ky_1 = 0;
    var coorX_1 = 0;
    var coorY_1 = 0;
    if (layout2 === "radial") {
      kx_1 = width / (right_1.getLayout().x + delta + tx_1);
      ky_1 = height / (bottom_1.depth - 1 || 1);
      eachBefore(realRoot, function(node) {
        coorX_1 = (node.getLayout().x + tx_1) * kx_1;
        coorY_1 = (node.depth - 1) * ky_1;
        var finalCoor = radialCoordinate(coorX_1, coorY_1);
        node.setLayout({
          x: finalCoor.x,
          y: finalCoor.y,
          rawX: coorX_1,
          rawY: coorY_1
        }, true);
      });
    } else {
      var orient_1 = seriesModel.getOrient();
      if (orient_1 === "RL" || orient_1 === "LR") {
        ky_1 = height / (right_1.getLayout().x + delta + tx_1);
        kx_1 = width / (bottom_1.depth - 1 || 1);
        eachBefore(realRoot, function(node) {
          coorY_1 = (node.getLayout().x + tx_1) * ky_1;
          coorX_1 = orient_1 === "LR" ? (node.depth - 1) * kx_1 : width - (node.depth - 1) * kx_1;
          node.setLayout({
            x: coorX_1,
            y: coorY_1
          }, true);
        });
      } else if (orient_1 === "TB" || orient_1 === "BT") {
        kx_1 = width / (right_1.getLayout().x + delta + tx_1);
        ky_1 = height / (bottom_1.depth - 1 || 1);
        eachBefore(realRoot, function(node) {
          coorX_1 = (node.getLayout().x + tx_1) * kx_1;
          coorY_1 = orient_1 === "TB" ? (node.depth - 1) * ky_1 : height - (node.depth - 1) * ky_1;
          node.setLayout({
            x: coorX_1,
            y: coorY_1
          }, true);
        });
      }
    }
  }
}
function treeVisual(ecModel) {
  ecModel.eachSeriesByType("tree", function(seriesModel) {
    var data = seriesModel.getData();
    var tree = data.tree;
    tree.eachNode(function(node) {
      var model = node.getModel();
      var style = model.getModel("itemStyle").getItemStyle();
      var existsStyle = data.ensureUniqueItemVisual(node.dataIndex, "style");
      extend(existsStyle, style);
    });
  });
}
function installTreeAction(registers) {
  registers.registerAction({
    type: "treeExpandAndCollapse",
    event: "treeExpandAndCollapse",
    update: "update"
  }, function(payload, ecModel) {
    ecModel.eachComponent({
      mainType: "series",
      subType: "tree",
      query: payload
    }, function(seriesModel) {
      var dataIndex = payload.dataIndex;
      var tree = seriesModel.getData().tree;
      var node = tree.getNodeByDataIndex(dataIndex);
      node.isExpand = !node.isExpand;
    });
  });
  registers.registerAction({
    type: "treeRoam",
    event: "treeRoam",
    update: "none"
  }, function(payload, ecModel) {
    ecModel.eachComponent({
      mainType: "series",
      subType: "tree",
      query: payload
    }, function(seriesModel) {
      var coordSys = seriesModel.coordinateSystem;
      var res = updateCenterAndZoom(coordSys, payload);
      seriesModel.setCenter && seriesModel.setCenter(res.center);
      seriesModel.setZoom && seriesModel.setZoom(res.zoom);
    });
  });
}
function install$m(registers) {
  registers.registerChartView(TreeView$1);
  registers.registerSeriesModel(TreeSeriesModel$1);
  registers.registerLayout(treeLayout);
  registers.registerVisual(treeVisual);
  installTreeAction(registers);
}
var noop = function() {
};
var actionTypes = ["treemapZoomToNode", "treemapRender", "treemapMove"];
function installTreemapAction(registers) {
  for (var i = 0; i < actionTypes.length; i++) {
    registers.registerAction({
      type: actionTypes[i],
      update: "updateView"
    }, noop);
  }
  registers.registerAction({
    type: "treemapRootToNode",
    update: "updateView"
  }, function(payload, ecModel) {
    ecModel.eachComponent({
      mainType: "series",
      subType: "treemap",
      query: payload
    }, handleRootToNode);
    function handleRootToNode(model, index) {
      var types = ["treemapZoomToNode", "treemapRootToNode"];
      var targetInfo = retrieveTargetInfo(payload, types, model);
      if (targetInfo) {
        var originViewRoot = model.getViewRoot();
        if (originViewRoot) {
          payload.direction = aboveViewRoot(originViewRoot, targetInfo.node) ? "rollUp" : "drillDown";
        }
        model.resetViewRoot(targetInfo.node);
      }
    }
  });
}
function enableAriaDecalForTree(seriesModel) {
  var data = seriesModel.getData();
  var tree = data.tree;
  var decalPaletteScope = {};
  tree.eachNode(function(node) {
    var current = node;
    while (current && current.depth > 1) {
      current = current.parentNode;
    }
    var decal = getDecalFromPalette(seriesModel.ecModel, current.name || current.dataIndex + "", decalPaletteScope);
    node.setVisual("decal", decal);
  });
}
var TreemapSeriesModel = function(_super) {
  __extends(TreemapSeriesModel2, _super);
  function TreemapSeriesModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = TreemapSeriesModel2.type;
    _this.preventUsingHoverLayer = true;
    return _this;
  }
  TreemapSeriesModel2.prototype.getInitialData = function(option, ecModel) {
    var root = {
      name: option.name,
      children: option.data
    };
    completeTreeValue$1(root);
    var levels = option.levels || [];
    var designatedVisualItemStyle = this.designatedVisualItemStyle = {};
    var designatedVisualModel = new Model({
      itemStyle: designatedVisualItemStyle
    }, this, ecModel);
    levels = option.levels = setDefault(levels, ecModel);
    var levelModels = map(levels || [], function(levelDefine) {
      return new Model(levelDefine, designatedVisualModel, ecModel);
    }, this);
    var tree = Tree$1.createTree(root, this, beforeLink);
    function beforeLink(nodeData) {
      nodeData.wrapMethod("getItemModel", function(model, idx) {
        var node = tree.getNodeByDataIndex(idx);
        var levelModel = node ? levelModels[node.depth] : null;
        model.parentModel = levelModel || designatedVisualModel;
        return model;
      });
    }
    return tree.data;
  };
  TreemapSeriesModel2.prototype.optionUpdated = function() {
    this.resetViewRoot();
  };
  TreemapSeriesModel2.prototype.formatTooltip = function(dataIndex, multipleSeries, dataType) {
    var data = this.getData();
    var value = this.getRawValue(dataIndex);
    var name = data.getName(dataIndex);
    return createTooltipMarkup("nameValue", {
      name,
      value
    });
  };
  TreemapSeriesModel2.prototype.getDataParams = function(dataIndex) {
    var params = _super.prototype.getDataParams.apply(this, arguments);
    var node = this.getData().tree.getNodeByDataIndex(dataIndex);
    params.treeAncestors = wrapTreePathInfo(node, this);
    params.treePathInfo = params.treeAncestors;
    return params;
  };
  TreemapSeriesModel2.prototype.setLayoutInfo = function(layoutInfo) {
    this.layoutInfo = this.layoutInfo || {};
    extend(this.layoutInfo, layoutInfo);
  };
  TreemapSeriesModel2.prototype.mapIdToIndex = function(id) {
    var idIndexMap = this._idIndexMap;
    if (!idIndexMap) {
      idIndexMap = this._idIndexMap = createHashMap();
      this._idIndexMapCount = 0;
    }
    var index = idIndexMap.get(id);
    if (index == null) {
      idIndexMap.set(id, index = this._idIndexMapCount++);
    }
    return index;
  };
  TreemapSeriesModel2.prototype.getViewRoot = function() {
    return this._viewRoot;
  };
  TreemapSeriesModel2.prototype.resetViewRoot = function(viewRoot) {
    viewRoot ? this._viewRoot = viewRoot : viewRoot = this._viewRoot;
    var root = this.getRawData().tree.root;
    if (!viewRoot || viewRoot !== root && !root.contains(viewRoot)) {
      this._viewRoot = root;
    }
  };
  TreemapSeriesModel2.prototype.enableAriaDecal = function() {
    enableAriaDecalForTree(this);
  };
  TreemapSeriesModel2.type = "series.treemap";
  TreemapSeriesModel2.layoutMode = "box";
  TreemapSeriesModel2.defaultOption = {
    progressive: 0,
    left: "center",
    top: "middle",
    width: "80%",
    height: "80%",
    sort: true,
    clipWindow: "origin",
    squareRatio: 0.5 * (1 + Math.sqrt(5)),
    leafDepth: null,
    drillDownIcon: "\u25B6",
    zoomToNodeRatio: 0.32 * 0.32,
    roam: true,
    nodeClick: "zoomToNode",
    animation: true,
    animationDurationUpdate: 900,
    animationEasing: "quinticInOut",
    breadcrumb: {
      show: true,
      height: 22,
      left: "center",
      top: "bottom",
      emptyItemWidth: 25,
      itemStyle: {
        color: "rgba(0,0,0,0.7)",
        textStyle: {
          color: "#fff"
        }
      }
    },
    label: {
      show: true,
      distance: 0,
      padding: 5,
      position: "inside",
      color: "#fff",
      overflow: "truncate"
    },
    upperLabel: {
      show: false,
      position: [0, "50%"],
      height: 20,
      overflow: "truncate",
      verticalAlign: "middle"
    },
    itemStyle: {
      color: null,
      colorAlpha: null,
      colorSaturation: null,
      borderWidth: 0,
      gapWidth: 0,
      borderColor: "#fff",
      borderColorSaturation: null
    },
    emphasis: {
      upperLabel: {
        show: true,
        position: [0, "50%"],
        ellipsis: true,
        verticalAlign: "middle"
      }
    },
    visualDimension: 0,
    visualMin: null,
    visualMax: null,
    color: [],
    colorAlpha: null,
    colorSaturation: null,
    colorMappingBy: "index",
    visibleMin: 10,
    childrenVisibleMin: null,
    levels: []
  };
  return TreemapSeriesModel2;
}(SeriesModel);
function completeTreeValue$1(dataNode) {
  var sum2 = 0;
  each$2(dataNode.children, function(child) {
    completeTreeValue$1(child);
    var childValue = child.value;
    isArray(childValue) && (childValue = childValue[0]);
    sum2 += childValue;
  });
  var thisValue = dataNode.value;
  if (isArray(thisValue)) {
    thisValue = thisValue[0];
  }
  if (thisValue == null || isNaN(thisValue)) {
    thisValue = sum2;
  }
  if (thisValue < 0) {
    thisValue = 0;
  }
  isArray(dataNode.value) ? dataNode.value[0] = thisValue : dataNode.value = thisValue;
}
function setDefault(levels, ecModel) {
  var globalColorList = normalizeToArray(ecModel.get("color"));
  var globalDecalList = normalizeToArray(ecModel.get(["aria", "decal", "decals"]));
  if (!globalColorList) {
    return;
  }
  levels = levels || [];
  var hasColorDefine;
  var hasDecalDefine;
  each$2(levels, function(levelDefine) {
    var model = new Model(levelDefine);
    var modelColor = model.get("color");
    var modelDecal = model.get("decal");
    if (model.get(["itemStyle", "color"]) || modelColor && modelColor !== "none") {
      hasColorDefine = true;
    }
    if (model.get(["itemStyle", "decal"]) || modelDecal && modelDecal !== "none") {
      hasDecalDefine = true;
    }
  });
  var level0 = levels[0] || (levels[0] = {});
  if (!hasColorDefine) {
    level0.color = globalColorList.slice();
  }
  if (!hasDecalDefine && globalDecalList) {
    level0.decal = globalDecalList.slice();
  }
  return levels;
}
var TreemapSeriesModel$1 = TreemapSeriesModel;
var TEXT_PADDING = 8;
var ITEM_GAP = 8;
var ARRAY_LENGTH = 5;
var Breadcrumb = function() {
  function Breadcrumb2(containerGroup) {
    this.group = new Group$1();
    containerGroup.add(this.group);
  }
  Breadcrumb2.prototype.render = function(seriesModel, api, targetNode, onSelect) {
    var model = seriesModel.getModel("breadcrumb");
    var thisGroup = this.group;
    thisGroup.removeAll();
    if (!model.get("show") || !targetNode) {
      return;
    }
    var normalStyleModel = model.getModel("itemStyle");
    var textStyleModel = normalStyleModel.getModel("textStyle");
    var layoutParam = {
      pos: {
        left: model.get("left"),
        right: model.get("right"),
        top: model.get("top"),
        bottom: model.get("bottom")
      },
      box: {
        width: api.getWidth(),
        height: api.getHeight()
      },
      emptyItemWidth: model.get("emptyItemWidth"),
      totalWidth: 0,
      renderList: []
    };
    this._prepare(targetNode, layoutParam, textStyleModel);
    this._renderContent(seriesModel, layoutParam, normalStyleModel, textStyleModel, onSelect);
    positionElement(thisGroup, layoutParam.pos, layoutParam.box);
  };
  Breadcrumb2.prototype._prepare = function(targetNode, layoutParam, textStyleModel) {
    for (var node = targetNode; node; node = node.parentNode) {
      var text = convertOptionIdName(node.getModel().get("name"), "");
      var textRect = textStyleModel.getTextRect(text);
      var itemWidth = Math.max(textRect.width + TEXT_PADDING * 2, layoutParam.emptyItemWidth);
      layoutParam.totalWidth += itemWidth + ITEM_GAP;
      layoutParam.renderList.push({
        node,
        text,
        width: itemWidth
      });
    }
  };
  Breadcrumb2.prototype._renderContent = function(seriesModel, layoutParam, normalStyleModel, textStyleModel, onSelect) {
    var lastX = 0;
    var emptyItemWidth = layoutParam.emptyItemWidth;
    var height = seriesModel.get(["breadcrumb", "height"]);
    var availableSize = getAvailableSize(layoutParam.pos, layoutParam.box);
    var totalWidth = layoutParam.totalWidth;
    var renderList = layoutParam.renderList;
    for (var i = renderList.length - 1; i >= 0; i--) {
      var item = renderList[i];
      var itemNode = item.node;
      var itemWidth = item.width;
      var text = item.text;
      if (totalWidth > availableSize.width) {
        totalWidth -= itemWidth - emptyItemWidth;
        itemWidth = emptyItemWidth;
        text = null;
      }
      var el = new Polygon({
        shape: {
          points: makeItemPoints(lastX, 0, itemWidth, height, i === renderList.length - 1, i === 0)
        },
        style: defaults(normalStyleModel.getItemStyle(), {
          lineJoin: "bevel"
        }),
        textContent: new ZRText({
          style: {
            text,
            fill: textStyleModel.getTextColor(),
            font: textStyleModel.getFont()
          }
        }),
        textConfig: {
          position: "inside"
        },
        z2: Z2_EMPHASIS_LIFT * 1e4,
        onclick: curry(onSelect, itemNode)
      });
      el.disableLabelAnimation = true;
      this.group.add(el);
      packEventData(el, seriesModel, itemNode);
      lastX += itemWidth + ITEM_GAP;
    }
  };
  Breadcrumb2.prototype.remove = function() {
    this.group.removeAll();
  };
  return Breadcrumb2;
}();
function makeItemPoints(x, y, itemWidth, itemHeight, head, tail) {
  var points = [[head ? x : x - ARRAY_LENGTH, y], [x + itemWidth, y], [x + itemWidth, y + itemHeight], [head ? x : x - ARRAY_LENGTH, y + itemHeight]];
  !tail && points.splice(2, 0, [x + itemWidth + ARRAY_LENGTH, y + itemHeight / 2]);
  !head && points.push([x, y + itemHeight / 2]);
  return points;
}
function packEventData(el, seriesModel, itemNode) {
  getECData(el).eventData = {
    componentType: "series",
    componentSubType: "treemap",
    componentIndex: seriesModel.componentIndex,
    seriesIndex: seriesModel.seriesIndex,
    seriesName: seriesModel.name,
    seriesType: "treemap",
    selfType: "breadcrumb",
    nodeData: {
      dataIndex: itemNode && itemNode.dataIndex,
      name: itemNode && itemNode.name
    },
    treePathInfo: itemNode && wrapTreePathInfo(itemNode, seriesModel)
  };
}
var Breadcrumb$1 = Breadcrumb;
var AnimationWrap = function() {
  function AnimationWrap2() {
    this._storage = [];
    this._elExistsMap = {};
  }
  AnimationWrap2.prototype.add = function(el, target, duration, delay, easing) {
    if (this._elExistsMap[el.id]) {
      return false;
    }
    this._elExistsMap[el.id] = true;
    this._storage.push({
      el,
      target,
      duration,
      delay,
      easing
    });
    return true;
  };
  AnimationWrap2.prototype.finished = function(callback) {
    this._finishedCallback = callback;
    return this;
  };
  AnimationWrap2.prototype.start = function() {
    var _this = this;
    var count = this._storage.length;
    var checkTerminate = function() {
      count--;
      if (count <= 0) {
        _this._storage.length = 0;
        _this._elExistsMap = {};
        _this._finishedCallback && _this._finishedCallback();
      }
    };
    for (var i = 0, len2 = this._storage.length; i < len2; i++) {
      var item = this._storage[i];
      item.el.animateTo(item.target, {
        duration: item.duration,
        delay: item.delay,
        easing: item.easing,
        setToFinal: true,
        done: checkTerminate,
        aborted: checkTerminate
      });
    }
    return this;
  };
  return AnimationWrap2;
}();
function createWrap() {
  return new AnimationWrap();
}
var Group = Group$1;
var Rect = Rect$1;
var DRAG_THRESHOLD = 3;
var PATH_LABEL_NOAMAL = "label";
var PATH_UPPERLABEL_NORMAL = "upperLabel";
var Z2_BASE = Z2_EMPHASIS_LIFT * 10;
var Z2_BG = Z2_EMPHASIS_LIFT * 2;
var Z2_CONTENT = Z2_EMPHASIS_LIFT * 3;
var getStateItemStyle = makeStyleMapper([
  ["fill", "color"],
  ["stroke", "strokeColor"],
  ["lineWidth", "strokeWidth"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"]
]);
var getItemStyleNormal = function(model) {
  var itemStyle = getStateItemStyle(model);
  itemStyle.stroke = itemStyle.fill = itemStyle.lineWidth = null;
  return itemStyle;
};
var inner$5 = makeInner();
var TreemapView = function(_super) {
  __extends(TreemapView2, _super);
  function TreemapView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = TreemapView2.type;
    _this._state = "ready";
    _this._storage = createStorage();
    return _this;
  }
  TreemapView2.prototype.render = function(seriesModel, ecModel, api, payload) {
    var models = ecModel.findComponents({
      mainType: "series",
      subType: "treemap",
      query: payload
    });
    if (indexOf(models, seriesModel) < 0) {
      return;
    }
    this.seriesModel = seriesModel;
    this.api = api;
    this.ecModel = ecModel;
    var types = ["treemapZoomToNode", "treemapRootToNode"];
    var targetInfo = retrieveTargetInfo(payload, types, seriesModel);
    var payloadType = payload && payload.type;
    var layoutInfo = seriesModel.layoutInfo;
    var isInit = !this._oldTree;
    var thisStorage = this._storage;
    var reRoot = payloadType === "treemapRootToNode" && targetInfo && thisStorage ? {
      rootNodeGroup: thisStorage.nodeGroup[targetInfo.node.getRawIndex()],
      direction: payload.direction
    } : null;
    var containerGroup = this._giveContainerGroup(layoutInfo);
    var hasAnimation = seriesModel.get("animation");
    var renderResult = this._doRender(containerGroup, seriesModel, reRoot);
    hasAnimation && !isInit && (!payloadType || payloadType === "treemapZoomToNode" || payloadType === "treemapRootToNode") ? this._doAnimation(containerGroup, renderResult, seriesModel, reRoot) : renderResult.renderFinally();
    this._resetController(api);
    this._renderBreadcrumb(seriesModel, api, targetInfo);
  };
  TreemapView2.prototype._giveContainerGroup = function(layoutInfo) {
    var containerGroup = this._containerGroup;
    if (!containerGroup) {
      containerGroup = this._containerGroup = new Group();
      this._initEvents(containerGroup);
      this.group.add(containerGroup);
    }
    containerGroup.x = layoutInfo.x;
    containerGroup.y = layoutInfo.y;
    return containerGroup;
  };
  TreemapView2.prototype._doRender = function(containerGroup, seriesModel, reRoot) {
    var thisTree = seriesModel.getData().tree;
    var oldTree = this._oldTree;
    var lastsForAnimation = createStorage();
    var thisStorage = createStorage();
    var oldStorage = this._storage;
    var willInvisibleEls = [];
    function doRenderNode(thisNode, oldNode, parentGroup, depth) {
      return renderNode(seriesModel, thisStorage, oldStorage, reRoot, lastsForAnimation, willInvisibleEls, thisNode, oldNode, parentGroup, depth);
    }
    dualTravel(thisTree.root ? [thisTree.root] : [], oldTree && oldTree.root ? [oldTree.root] : [], containerGroup, thisTree === oldTree || !oldTree, 0);
    var willDeleteEls = clearStorage(oldStorage);
    this._oldTree = thisTree;
    this._storage = thisStorage;
    return {
      lastsForAnimation,
      willDeleteEls,
      renderFinally
    };
    function dualTravel(thisViewChildren, oldViewChildren, parentGroup, sameTree, depth) {
      if (sameTree) {
        oldViewChildren = thisViewChildren;
        each$2(thisViewChildren, function(child, index) {
          !child.isRemoved() && processNode(index, index);
        });
      } else {
        new DataDiffer(oldViewChildren, thisViewChildren, getKey2, getKey2).add(processNode).update(processNode).remove(curry(processNode, null)).execute();
      }
      function getKey2(node) {
        return node.getId();
      }
      function processNode(newIndex, oldIndex) {
        var thisNode = newIndex != null ? thisViewChildren[newIndex] : null;
        var oldNode = oldIndex != null ? oldViewChildren[oldIndex] : null;
        var group = doRenderNode(thisNode, oldNode, parentGroup, depth);
        group && dualTravel(thisNode && thisNode.viewChildren || [], oldNode && oldNode.viewChildren || [], group, sameTree, depth + 1);
      }
    }
    function clearStorage(storage) {
      var willDeleteEls2 = createStorage();
      storage && each$2(storage, function(store, storageName) {
        var delEls = willDeleteEls2[storageName];
        each$2(store, function(el) {
          el && (delEls.push(el), inner$5(el).willDelete = true);
        });
      });
      return willDeleteEls2;
    }
    function renderFinally() {
      each$2(willDeleteEls, function(els) {
        each$2(els, function(el) {
          el.parent && el.parent.remove(el);
        });
      });
      each$2(willInvisibleEls, function(el) {
        el.invisible = true;
        el.dirty();
      });
    }
  };
  TreemapView2.prototype._doAnimation = function(containerGroup, renderResult, seriesModel, reRoot) {
    var durationOption = seriesModel.get("animationDurationUpdate");
    var easingOption = seriesModel.get("animationEasing");
    var duration = (isFunction(durationOption) ? 0 : durationOption) || 0;
    var easing = (isFunction(easingOption) ? null : easingOption) || "cubicOut";
    var animationWrap = createWrap();
    each$2(renderResult.willDeleteEls, function(store, storageName) {
      each$2(store, function(el, rawIndex) {
        if (el.invisible) {
          return;
        }
        var parent = el.parent;
        var target;
        var innerStore = inner$5(parent);
        if (reRoot && reRoot.direction === "drillDown") {
          target = parent === reRoot.rootNodeGroup ? {
            shape: {
              x: 0,
              y: 0,
              width: innerStore.nodeWidth,
              height: innerStore.nodeHeight
            },
            style: {
              opacity: 0
            }
          } : {
            style: {
              opacity: 0
            }
          };
        } else {
          var targetX = 0;
          var targetY = 0;
          if (!innerStore.willDelete) {
            targetX = innerStore.nodeWidth / 2;
            targetY = innerStore.nodeHeight / 2;
          }
          target = storageName === "nodeGroup" ? {
            x: targetX,
            y: targetY,
            style: {
              opacity: 0
            }
          } : {
            shape: {
              x: targetX,
              y: targetY,
              width: 0,
              height: 0
            },
            style: {
              opacity: 0
            }
          };
        }
        target && animationWrap.add(el, target, duration, 0, easing);
      });
    });
    each$2(this._storage, function(store, storageName) {
      each$2(store, function(el, rawIndex) {
        var last = renderResult.lastsForAnimation[storageName][rawIndex];
        var target = {};
        if (!last) {
          return;
        }
        if (el instanceof Group$1) {
          if (last.oldX != null) {
            target.x = el.x;
            target.y = el.y;
            el.x = last.oldX;
            el.y = last.oldY;
          }
        } else {
          if (last.oldShape) {
            target.shape = extend({}, el.shape);
            el.setShape(last.oldShape);
          }
          if (last.fadein) {
            el.setStyle("opacity", 0);
            target.style = {
              opacity: 1
            };
          } else if (el.style.opacity !== 1) {
            target.style = {
              opacity: 1
            };
          }
        }
        animationWrap.add(el, target, duration, 0, easing);
      });
    }, this);
    this._state = "animating";
    animationWrap.finished(bind(function() {
      this._state = "ready";
      renderResult.renderFinally();
    }, this)).start();
  };
  TreemapView2.prototype._resetController = function(api) {
    var controller = this._controller;
    if (!controller) {
      controller = this._controller = new RoamController(api.getZr());
      controller.enable(this.seriesModel.get("roam"));
      controller.on("pan", bind(this._onPan, this));
      controller.on("zoom", bind(this._onZoom, this));
    }
    var rect = new BoundingRect(0, 0, api.getWidth(), api.getHeight());
    controller.setPointerChecker(function(e, x, y) {
      return rect.contain(x, y);
    });
  };
  TreemapView2.prototype._clearController = function() {
    var controller = this._controller;
    if (controller) {
      controller.dispose();
      controller = null;
    }
  };
  TreemapView2.prototype._onPan = function(e) {
    if (this._state !== "animating" && (Math.abs(e.dx) > DRAG_THRESHOLD || Math.abs(e.dy) > DRAG_THRESHOLD)) {
      var root = this.seriesModel.getData().tree.root;
      if (!root) {
        return;
      }
      var rootLayout = root.getLayout();
      if (!rootLayout) {
        return;
      }
      this.api.dispatchAction({
        type: "treemapMove",
        from: this.uid,
        seriesId: this.seriesModel.id,
        rootRect: {
          x: rootLayout.x + e.dx,
          y: rootLayout.y + e.dy,
          width: rootLayout.width,
          height: rootLayout.height
        }
      });
    }
  };
  TreemapView2.prototype._onZoom = function(e) {
    var mouseX = e.originX;
    var mouseY = e.originY;
    if (this._state !== "animating") {
      var root = this.seriesModel.getData().tree.root;
      if (!root) {
        return;
      }
      var rootLayout = root.getLayout();
      if (!rootLayout) {
        return;
      }
      var rect = new BoundingRect(rootLayout.x, rootLayout.y, rootLayout.width, rootLayout.height);
      var layoutInfo = this.seriesModel.layoutInfo;
      mouseX -= layoutInfo.x;
      mouseY -= layoutInfo.y;
      var m = create$1();
      translate(m, m, [-mouseX, -mouseY]);
      scale(m, m, [e.scale, e.scale]);
      translate(m, m, [mouseX, mouseY]);
      rect.applyTransform(m);
      this.api.dispatchAction({
        type: "treemapRender",
        from: this.uid,
        seriesId: this.seriesModel.id,
        rootRect: {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        }
      });
    }
  };
  TreemapView2.prototype._initEvents = function(containerGroup) {
    var _this = this;
    containerGroup.on("click", function(e) {
      if (_this._state !== "ready") {
        return;
      }
      var nodeClick = _this.seriesModel.get("nodeClick", true);
      if (!nodeClick) {
        return;
      }
      var targetInfo = _this.findTarget(e.offsetX, e.offsetY);
      if (!targetInfo) {
        return;
      }
      var node = targetInfo.node;
      if (node.getLayout().isLeafRoot) {
        _this._rootToNode(targetInfo);
      } else {
        if (nodeClick === "zoomToNode") {
          _this._zoomToNode(targetInfo);
        } else if (nodeClick === "link") {
          var itemModel = node.hostTree.data.getItemModel(node.dataIndex);
          var link = itemModel.get("link", true);
          var linkTarget = itemModel.get("target", true) || "blank";
          link && windowOpen(link, linkTarget);
        }
      }
    }, this);
  };
  TreemapView2.prototype._renderBreadcrumb = function(seriesModel, api, targetInfo) {
    var _this = this;
    if (!targetInfo) {
      targetInfo = seriesModel.get("leafDepth", true) != null ? {
        node: seriesModel.getViewRoot()
      } : this.findTarget(api.getWidth() / 2, api.getHeight() / 2);
      if (!targetInfo) {
        targetInfo = {
          node: seriesModel.getData().tree.root
        };
      }
    }
    (this._breadcrumb || (this._breadcrumb = new Breadcrumb$1(this.group))).render(seriesModel, api, targetInfo.node, function(node) {
      if (_this._state !== "animating") {
        aboveViewRoot(seriesModel.getViewRoot(), node) ? _this._rootToNode({
          node
        }) : _this._zoomToNode({
          node
        });
      }
    });
  };
  TreemapView2.prototype.remove = function() {
    this._clearController();
    this._containerGroup && this._containerGroup.removeAll();
    this._storage = createStorage();
    this._state = "ready";
    this._breadcrumb && this._breadcrumb.remove();
  };
  TreemapView2.prototype.dispose = function() {
    this._clearController();
  };
  TreemapView2.prototype._zoomToNode = function(targetInfo) {
    this.api.dispatchAction({
      type: "treemapZoomToNode",
      from: this.uid,
      seriesId: this.seriesModel.id,
      targetNode: targetInfo.node
    });
  };
  TreemapView2.prototype._rootToNode = function(targetInfo) {
    this.api.dispatchAction({
      type: "treemapRootToNode",
      from: this.uid,
      seriesId: this.seriesModel.id,
      targetNode: targetInfo.node
    });
  };
  TreemapView2.prototype.findTarget = function(x, y) {
    var targetInfo;
    var viewRoot = this.seriesModel.getViewRoot();
    viewRoot.eachNode({
      attr: "viewChildren",
      order: "preorder"
    }, function(node) {
      var bgEl = this._storage.background[node.getRawIndex()];
      if (bgEl) {
        var point = bgEl.transformCoordToLocal(x, y);
        var shape = bgEl.shape;
        if (shape.x <= point[0] && point[0] <= shape.x + shape.width && shape.y <= point[1] && point[1] <= shape.y + shape.height) {
          targetInfo = {
            node,
            offsetX: point[0],
            offsetY: point[1]
          };
        } else {
          return false;
        }
      }
    }, this);
    return targetInfo;
  };
  TreemapView2.type = "treemap";
  return TreemapView2;
}(ChartView);
function createStorage() {
  return {
    nodeGroup: [],
    background: [],
    content: []
  };
}
function renderNode(seriesModel, thisStorage, oldStorage, reRoot, lastsForAnimation, willInvisibleEls, thisNode, oldNode, parentGroup, depth) {
  if (!thisNode) {
    return;
  }
  var thisLayout = thisNode.getLayout();
  var data = seriesModel.getData();
  var nodeModel = thisNode.getModel();
  data.setItemGraphicEl(thisNode.dataIndex, null);
  if (!thisLayout || !thisLayout.isInView) {
    return;
  }
  var thisWidth = thisLayout.width;
  var thisHeight = thisLayout.height;
  var borderWidth = thisLayout.borderWidth;
  var thisInvisible = thisLayout.invisible;
  var thisRawIndex = thisNode.getRawIndex();
  var oldRawIndex = oldNode && oldNode.getRawIndex();
  var thisViewChildren = thisNode.viewChildren;
  var upperHeight = thisLayout.upperHeight;
  var isParent = thisViewChildren && thisViewChildren.length;
  var itemStyleNormalModel = nodeModel.getModel("itemStyle");
  var itemStyleEmphasisModel = nodeModel.getModel(["emphasis", "itemStyle"]);
  var itemStyleBlurModel = nodeModel.getModel(["blur", "itemStyle"]);
  var itemStyleSelectModel = nodeModel.getModel(["select", "itemStyle"]);
  var borderRadius = itemStyleNormalModel.get("borderRadius") || 0;
  var group = giveGraphic("nodeGroup", Group);
  if (!group) {
    return;
  }
  parentGroup.add(group);
  group.x = thisLayout.x || 0;
  group.y = thisLayout.y || 0;
  group.markRedraw();
  inner$5(group).nodeWidth = thisWidth;
  inner$5(group).nodeHeight = thisHeight;
  if (thisLayout.isAboveViewRoot) {
    return group;
  }
  var bg = giveGraphic("background", Rect, depth, Z2_BG);
  bg && renderBackground(group, bg, isParent && thisLayout.upperLabelHeight);
  var focus = nodeModel.get(["emphasis", "focus"]);
  var blurScope = nodeModel.get(["emphasis", "blurScope"]);
  var focusOrIndices = focus === "ancestor" ? thisNode.getAncestorsIndices() : focus === "descendant" ? thisNode.getDescendantIndices() : focus;
  if (isParent) {
    if (isHighDownDispatcher(group)) {
      setAsHighDownDispatcher(group, false);
    }
    if (bg) {
      setAsHighDownDispatcher(bg, true);
      data.setItemGraphicEl(thisNode.dataIndex, bg);
      enableHoverFocus(bg, focusOrIndices, blurScope);
    }
  } else {
    var content = giveGraphic("content", Rect, depth, Z2_CONTENT);
    content && renderContent(group, content);
    bg.disableMorphing = true;
    if (bg && isHighDownDispatcher(bg)) {
      setAsHighDownDispatcher(bg, false);
    }
    setAsHighDownDispatcher(group, true);
    data.setItemGraphicEl(thisNode.dataIndex, group);
    enableHoverFocus(group, focusOrIndices, blurScope);
  }
  return group;
  function renderBackground(group2, bg2, useUpperLabel) {
    var ecData = getECData(bg2);
    ecData.dataIndex = thisNode.dataIndex;
    ecData.seriesIndex = seriesModel.seriesIndex;
    bg2.setShape({
      x: 0,
      y: 0,
      width: thisWidth,
      height: thisHeight,
      r: borderRadius
    });
    if (thisInvisible) {
      processInvisible(bg2);
    } else {
      bg2.invisible = false;
      var style = thisNode.getVisual("style");
      var visualBorderColor = style.stroke;
      var normalStyle = getItemStyleNormal(itemStyleNormalModel);
      normalStyle.fill = visualBorderColor;
      var emphasisStyle = getStateItemStyle(itemStyleEmphasisModel);
      emphasisStyle.fill = itemStyleEmphasisModel.get("borderColor");
      var blurStyle = getStateItemStyle(itemStyleBlurModel);
      blurStyle.fill = itemStyleBlurModel.get("borderColor");
      var selectStyle = getStateItemStyle(itemStyleSelectModel);
      selectStyle.fill = itemStyleSelectModel.get("borderColor");
      if (useUpperLabel) {
        var upperLabelWidth = thisWidth - 2 * borderWidth;
        prepareText(bg2, visualBorderColor, style.opacity, {
          x: borderWidth,
          y: 0,
          width: upperLabelWidth,
          height: upperHeight
        });
      } else {
        bg2.removeTextContent();
      }
      bg2.setStyle(normalStyle);
      bg2.ensureState("emphasis").style = emphasisStyle;
      bg2.ensureState("blur").style = blurStyle;
      bg2.ensureState("select").style = selectStyle;
      setDefaultStateProxy(bg2);
    }
    group2.add(bg2);
  }
  function renderContent(group2, content2) {
    var ecData = getECData(content2);
    ecData.dataIndex = thisNode.dataIndex;
    ecData.seriesIndex = seriesModel.seriesIndex;
    var contentWidth = Math.max(thisWidth - 2 * borderWidth, 0);
    var contentHeight = Math.max(thisHeight - 2 * borderWidth, 0);
    content2.culling = true;
    content2.setShape({
      x: borderWidth,
      y: borderWidth,
      width: contentWidth,
      height: contentHeight,
      r: borderRadius
    });
    if (thisInvisible) {
      processInvisible(content2);
    } else {
      content2.invisible = false;
      var nodeStyle = thisNode.getVisual("style");
      var visualColor = nodeStyle.fill;
      var normalStyle = getItemStyleNormal(itemStyleNormalModel);
      normalStyle.fill = visualColor;
      normalStyle.decal = nodeStyle.decal;
      var emphasisStyle = getStateItemStyle(itemStyleEmphasisModel);
      var blurStyle = getStateItemStyle(itemStyleBlurModel);
      var selectStyle = getStateItemStyle(itemStyleSelectModel);
      prepareText(content2, visualColor, nodeStyle.opacity, null);
      content2.setStyle(normalStyle);
      content2.ensureState("emphasis").style = emphasisStyle;
      content2.ensureState("blur").style = blurStyle;
      content2.ensureState("select").style = selectStyle;
      setDefaultStateProxy(content2);
    }
    group2.add(content2);
  }
  function processInvisible(element) {
    !element.invisible && willInvisibleEls.push(element);
  }
  function prepareText(rectEl, visualColor, visualOpacity, upperLabelRect) {
    var normalLabelModel = nodeModel.getModel(upperLabelRect ? PATH_UPPERLABEL_NORMAL : PATH_LABEL_NOAMAL);
    var defaultText = convertOptionIdName(nodeModel.get("name"), null);
    var isShow = normalLabelModel.getShallow("show");
    setLabelStyle(rectEl, getLabelStatesModels(nodeModel, upperLabelRect ? PATH_UPPERLABEL_NORMAL : PATH_LABEL_NOAMAL), {
      defaultText: isShow ? defaultText : null,
      inheritColor: visualColor,
      defaultOpacity: visualOpacity,
      labelFetcher: seriesModel,
      labelDataIndex: thisNode.dataIndex
    });
    var textEl = rectEl.getTextContent();
    if (!textEl) {
      return;
    }
    var textStyle = textEl.style;
    var textPadding = normalizeCssArray(textStyle.padding || 0);
    if (upperLabelRect) {
      rectEl.setTextConfig({
        layoutRect: upperLabelRect
      });
      textEl.disableLabelLayout = true;
    }
    textEl.beforeUpdate = function() {
      var width = Math.max((upperLabelRect ? upperLabelRect.width : rectEl.shape.width) - textPadding[1] - textPadding[3], 0);
      var height = Math.max((upperLabelRect ? upperLabelRect.height : rectEl.shape.height) - textPadding[0] - textPadding[2], 0);
      if (textStyle.width !== width || textStyle.height !== height) {
        textEl.setStyle({
          width,
          height
        });
      }
    };
    textStyle.truncateMinChar = 2;
    textStyle.lineOverflow = "truncate";
    addDrillDownIcon(textStyle, upperLabelRect, thisLayout);
    var textEmphasisState = textEl.getState("emphasis");
    addDrillDownIcon(textEmphasisState ? textEmphasisState.style : null, upperLabelRect, thisLayout);
  }
  function addDrillDownIcon(style, upperLabelRect, thisLayout2) {
    var text = style ? style.text : null;
    if (!upperLabelRect && thisLayout2.isLeafRoot && text != null) {
      var iconChar = seriesModel.get("drillDownIcon", true);
      style.text = iconChar ? iconChar + " " + text : text;
    }
  }
  function giveGraphic(storageName, Ctor, depth2, z) {
    var element = oldRawIndex != null && oldStorage[storageName][oldRawIndex];
    var lasts = lastsForAnimation[storageName];
    if (element) {
      oldStorage[storageName][oldRawIndex] = null;
      prepareAnimationWhenHasOld(lasts, element);
    } else if (!thisInvisible) {
      element = new Ctor();
      if (element instanceof Displayable) {
        element.z2 = calculateZ2(depth2, z);
      }
      prepareAnimationWhenNoOld(lasts, element);
    }
    return thisStorage[storageName][thisRawIndex] = element;
  }
  function prepareAnimationWhenHasOld(lasts, element) {
    var lastCfg = lasts[thisRawIndex] = {};
    if (element instanceof Group) {
      lastCfg.oldX = element.x;
      lastCfg.oldY = element.y;
    } else {
      lastCfg.oldShape = extend({}, element.shape);
    }
  }
  function prepareAnimationWhenNoOld(lasts, element) {
    var lastCfg = lasts[thisRawIndex] = {};
    var parentNode = thisNode.parentNode;
    var isGroup = element instanceof Group$1;
    if (parentNode && (!reRoot || reRoot.direction === "drillDown")) {
      var parentOldX = 0;
      var parentOldY = 0;
      var parentOldBg = lastsForAnimation.background[parentNode.getRawIndex()];
      if (!reRoot && parentOldBg && parentOldBg.oldShape) {
        parentOldX = parentOldBg.oldShape.width;
        parentOldY = parentOldBg.oldShape.height;
      }
      if (isGroup) {
        lastCfg.oldX = 0;
        lastCfg.oldY = parentOldY;
      } else {
        lastCfg.oldShape = {
          x: parentOldX,
          y: parentOldY,
          width: 0,
          height: 0
        };
      }
    }
    lastCfg.fadein = !isGroup;
  }
}
function calculateZ2(depth, z2InLevel) {
  return depth * Z2_BASE + z2InLevel;
}
var TreemapView$1 = TreemapView;
var ITEM_STYLE_NORMAL = "itemStyle";
var inner$4 = makeInner();
var treemapVisual = {
  seriesType: "treemap",
  reset: function(seriesModel) {
    var tree = seriesModel.getData().tree;
    var root = tree.root;
    if (root.isRemoved()) {
      return;
    }
    travelTree(root, {}, seriesModel.getViewRoot().getAncestors(), seriesModel);
  }
};
function travelTree(node, designatedVisual, viewRootAncestors, seriesModel) {
  var nodeModel = node.getModel();
  var nodeLayout = node.getLayout();
  var data = node.hostTree.data;
  if (!nodeLayout || nodeLayout.invisible || !nodeLayout.isInView) {
    return;
  }
  var nodeItemStyleModel = nodeModel.getModel(ITEM_STYLE_NORMAL);
  var visuals = buildVisuals(nodeItemStyleModel, designatedVisual, seriesModel);
  var existsStyle = data.ensureUniqueItemVisual(node.dataIndex, "style");
  var borderColor = nodeItemStyleModel.get("borderColor");
  var borderColorSaturation = nodeItemStyleModel.get("borderColorSaturation");
  var thisNodeColor;
  if (borderColorSaturation != null) {
    thisNodeColor = calculateColor(visuals);
    borderColor = calculateBorderColor(borderColorSaturation, thisNodeColor);
  }
  existsStyle.stroke = borderColor;
  var viewChildren = node.viewChildren;
  if (!viewChildren || !viewChildren.length) {
    thisNodeColor = calculateColor(visuals);
    existsStyle.fill = thisNodeColor;
  } else {
    var mapping_1 = buildVisualMapping(node, nodeModel, nodeLayout, nodeItemStyleModel, visuals, viewChildren);
    each$2(viewChildren, function(child, index) {
      if (child.depth >= viewRootAncestors.length || child === viewRootAncestors[child.depth]) {
        var childVisual = mapVisual(nodeModel, visuals, child, index, mapping_1, seriesModel);
        travelTree(child, childVisual, viewRootAncestors, seriesModel);
      }
    });
  }
}
function buildVisuals(nodeItemStyleModel, designatedVisual, seriesModel) {
  var visuals = extend({}, designatedVisual);
  var designatedVisualItemStyle = seriesModel.designatedVisualItemStyle;
  each$2(["color", "colorAlpha", "colorSaturation"], function(visualName) {
    designatedVisualItemStyle[visualName] = designatedVisual[visualName];
    var val = nodeItemStyleModel.get(visualName);
    designatedVisualItemStyle[visualName] = null;
    val != null && (visuals[visualName] = val);
  });
  return visuals;
}
function calculateColor(visuals) {
  var color = getValueVisualDefine(visuals, "color");
  if (color) {
    var colorAlpha = getValueVisualDefine(visuals, "colorAlpha");
    var colorSaturation = getValueVisualDefine(visuals, "colorSaturation");
    if (colorSaturation) {
      color = modifyHSL(color, null, null, colorSaturation);
    }
    if (colorAlpha) {
      color = modifyAlpha(color, colorAlpha);
    }
    return color;
  }
}
function calculateBorderColor(borderColorSaturation, thisNodeColor) {
  return thisNodeColor != null ? modifyHSL(thisNodeColor, null, null, borderColorSaturation) : null;
}
function getValueVisualDefine(visuals, name) {
  var value = visuals[name];
  if (value != null && value !== "none") {
    return value;
  }
}
function buildVisualMapping(node, nodeModel, nodeLayout, nodeItemStyleModel, visuals, viewChildren) {
  if (!viewChildren || !viewChildren.length) {
    return;
  }
  var rangeVisual = getRangeVisual(nodeModel, "color") || visuals.color != null && visuals.color !== "none" && (getRangeVisual(nodeModel, "colorAlpha") || getRangeVisual(nodeModel, "colorSaturation"));
  if (!rangeVisual) {
    return;
  }
  var visualMin = nodeModel.get("visualMin");
  var visualMax = nodeModel.get("visualMax");
  var dataExtent = nodeLayout.dataExtent.slice();
  visualMin != null && visualMin < dataExtent[0] && (dataExtent[0] = visualMin);
  visualMax != null && visualMax > dataExtent[1] && (dataExtent[1] = visualMax);
  var colorMappingBy = nodeModel.get("colorMappingBy");
  var opt = {
    type: rangeVisual.name,
    dataExtent,
    visual: rangeVisual.range
  };
  if (opt.type === "color" && (colorMappingBy === "index" || colorMappingBy === "id")) {
    opt.mappingMethod = "category";
    opt.loop = true;
  } else {
    opt.mappingMethod = "linear";
  }
  var mapping = new VisualMapping(opt);
  inner$4(mapping).drColorMappingBy = colorMappingBy;
  return mapping;
}
function getRangeVisual(nodeModel, name) {
  var range = nodeModel.get(name);
  return isArray(range) && range.length ? {
    name,
    range
  } : null;
}
function mapVisual(nodeModel, visuals, child, index, mapping, seriesModel) {
  var childVisuals = extend({}, visuals);
  if (mapping) {
    var mappingType = mapping.type;
    var colorMappingBy = mappingType === "color" && inner$4(mapping).drColorMappingBy;
    var value = colorMappingBy === "index" ? index : colorMappingBy === "id" ? seriesModel.mapIdToIndex(child.getId()) : child.getValue(nodeModel.get("visualDimension"));
    childVisuals[mappingType] = mapping.mapValueToVisual(value);
  }
  return childVisuals;
}
var mathMax = Math.max;
var mathMin = Math.min;
var retrieveValue = retrieve;
var each$1 = each$2;
var PATH_BORDER_WIDTH = ["itemStyle", "borderWidth"];
var PATH_GAP_WIDTH = ["itemStyle", "gapWidth"];
var PATH_UPPER_LABEL_SHOW = ["upperLabel", "show"];
var PATH_UPPER_LABEL_HEIGHT = ["upperLabel", "height"];
var treemapLayout = {
  seriesType: "treemap",
  reset: function(seriesModel, ecModel, api, payload) {
    var ecWidth = api.getWidth();
    var ecHeight = api.getHeight();
    var seriesOption = seriesModel.option;
    var layoutInfo = getLayoutRect(seriesModel.getBoxLayoutParams(), {
      width: api.getWidth(),
      height: api.getHeight()
    });
    var size = seriesOption.size || [];
    var containerWidth = parsePercent(retrieveValue(layoutInfo.width, size[0]), ecWidth);
    var containerHeight = parsePercent(retrieveValue(layoutInfo.height, size[1]), ecHeight);
    var payloadType = payload && payload.type;
    var types = ["treemapZoomToNode", "treemapRootToNode"];
    var targetInfo = retrieveTargetInfo(payload, types, seriesModel);
    var rootRect = payloadType === "treemapRender" || payloadType === "treemapMove" ? payload.rootRect : null;
    var viewRoot = seriesModel.getViewRoot();
    var viewAbovePath = getPathToRoot(viewRoot);
    if (payloadType !== "treemapMove") {
      var rootSize = payloadType === "treemapZoomToNode" ? estimateRootSize(seriesModel, targetInfo, viewRoot, containerWidth, containerHeight) : rootRect ? [rootRect.width, rootRect.height] : [containerWidth, containerHeight];
      var sort_1 = seriesOption.sort;
      if (sort_1 && sort_1 !== "asc" && sort_1 !== "desc") {
        sort_1 = "desc";
      }
      var options = {
        squareRatio: seriesOption.squareRatio,
        sort: sort_1,
        leafDepth: seriesOption.leafDepth
      };
      viewRoot.hostTree.clearLayouts();
      var viewRootLayout_1 = {
        x: 0,
        y: 0,
        width: rootSize[0],
        height: rootSize[1],
        area: rootSize[0] * rootSize[1]
      };
      viewRoot.setLayout(viewRootLayout_1);
      squarify(viewRoot, options, false, 0);
      viewRootLayout_1 = viewRoot.getLayout();
      each$1(viewAbovePath, function(node, index) {
        var childValue = (viewAbovePath[index + 1] || viewRoot).getValue();
        node.setLayout(extend({
          dataExtent: [childValue, childValue],
          borderWidth: 0,
          upperHeight: 0
        }, viewRootLayout_1));
      });
    }
    var treeRoot = seriesModel.getData().tree.root;
    treeRoot.setLayout(calculateRootPosition(layoutInfo, rootRect, targetInfo), true);
    seriesModel.setLayoutInfo(layoutInfo);
    prunning(treeRoot, new BoundingRect(-layoutInfo.x, -layoutInfo.y, ecWidth, ecHeight), viewAbovePath, viewRoot, 0);
  }
};
function squarify(node, options, hideChildren, depth) {
  var width;
  var height;
  if (node.isRemoved()) {
    return;
  }
  var thisLayout = node.getLayout();
  width = thisLayout.width;
  height = thisLayout.height;
  var nodeModel = node.getModel();
  var borderWidth = nodeModel.get(PATH_BORDER_WIDTH);
  var halfGapWidth = nodeModel.get(PATH_GAP_WIDTH) / 2;
  var upperLabelHeight = getUpperLabelHeight(nodeModel);
  var upperHeight = Math.max(borderWidth, upperLabelHeight);
  var layoutOffset = borderWidth - halfGapWidth;
  var layoutOffsetUpper = upperHeight - halfGapWidth;
  node.setLayout({
    borderWidth,
    upperHeight,
    upperLabelHeight
  }, true);
  width = mathMax(width - 2 * layoutOffset, 0);
  height = mathMax(height - layoutOffset - layoutOffsetUpper, 0);
  var totalArea = width * height;
  var viewChildren = initChildren$1(node, nodeModel, totalArea, options, hideChildren, depth);
  if (!viewChildren.length) {
    return;
  }
  var rect = {
    x: layoutOffset,
    y: layoutOffsetUpper,
    width,
    height
  };
  var rowFixedLength = mathMin(width, height);
  var best = Infinity;
  var row = [];
  row.area = 0;
  for (var i = 0, len2 = viewChildren.length; i < len2; ) {
    var child = viewChildren[i];
    row.push(child);
    row.area += child.getLayout().area;
    var score = worst(row, rowFixedLength, options.squareRatio);
    if (score <= best) {
      i++;
      best = score;
    } else {
      row.area -= row.pop().getLayout().area;
      position(row, rowFixedLength, rect, halfGapWidth, false);
      rowFixedLength = mathMin(rect.width, rect.height);
      row.length = row.area = 0;
      best = Infinity;
    }
  }
  if (row.length) {
    position(row, rowFixedLength, rect, halfGapWidth, true);
  }
  if (!hideChildren) {
    var childrenVisibleMin = nodeModel.get("childrenVisibleMin");
    if (childrenVisibleMin != null && totalArea < childrenVisibleMin) {
      hideChildren = true;
    }
  }
  for (var i = 0, len2 = viewChildren.length; i < len2; i++) {
    squarify(viewChildren[i], options, hideChildren, depth + 1);
  }
}
function initChildren$1(node, nodeModel, totalArea, options, hideChildren, depth) {
  var viewChildren = node.children || [];
  var orderBy = options.sort;
  orderBy !== "asc" && orderBy !== "desc" && (orderBy = null);
  var overLeafDepth = options.leafDepth != null && options.leafDepth <= depth;
  if (hideChildren && !overLeafDepth) {
    return node.viewChildren = [];
  }
  viewChildren = filter(viewChildren, function(child) {
    return !child.isRemoved();
  });
  sort$1(viewChildren, orderBy);
  var info = statistic(nodeModel, viewChildren, orderBy);
  if (info.sum === 0) {
    return node.viewChildren = [];
  }
  info.sum = filterByThreshold(nodeModel, totalArea, info.sum, orderBy, viewChildren);
  if (info.sum === 0) {
    return node.viewChildren = [];
  }
  for (var i = 0, len2 = viewChildren.length; i < len2; i++) {
    var area = viewChildren[i].getValue() / info.sum * totalArea;
    viewChildren[i].setLayout({
      area
    });
  }
  if (overLeafDepth) {
    viewChildren.length && node.setLayout({
      isLeafRoot: true
    }, true);
    viewChildren.length = 0;
  }
  node.viewChildren = viewChildren;
  node.setLayout({
    dataExtent: info.dataExtent
  }, true);
  return viewChildren;
}
function filterByThreshold(nodeModel, totalArea, sum2, orderBy, orderedChildren) {
  if (!orderBy) {
    return sum2;
  }
  var visibleMin = nodeModel.get("visibleMin");
  var len2 = orderedChildren.length;
  var deletePoint = len2;
  for (var i = len2 - 1; i >= 0; i--) {
    var value = orderedChildren[orderBy === "asc" ? len2 - i - 1 : i].getValue();
    if (value / sum2 * totalArea < visibleMin) {
      deletePoint = i;
      sum2 -= value;
    }
  }
  orderBy === "asc" ? orderedChildren.splice(0, len2 - deletePoint) : orderedChildren.splice(deletePoint, len2 - deletePoint);
  return sum2;
}
function sort$1(viewChildren, orderBy) {
  if (orderBy) {
    viewChildren.sort(function(a, b) {
      var diff = orderBy === "asc" ? a.getValue() - b.getValue() : b.getValue() - a.getValue();
      return diff === 0 ? orderBy === "asc" ? a.dataIndex - b.dataIndex : b.dataIndex - a.dataIndex : diff;
    });
  }
  return viewChildren;
}
function statistic(nodeModel, children, orderBy) {
  var sum2 = 0;
  for (var i = 0, len2 = children.length; i < len2; i++) {
    sum2 += children[i].getValue();
  }
  var dimension = nodeModel.get("visualDimension");
  var dataExtent;
  if (!children || !children.length) {
    dataExtent = [NaN, NaN];
  } else if (dimension === "value" && orderBy) {
    dataExtent = [children[children.length - 1].getValue(), children[0].getValue()];
    orderBy === "asc" && dataExtent.reverse();
  } else {
    dataExtent = [Infinity, -Infinity];
    each$1(children, function(child) {
      var value = child.getValue(dimension);
      value < dataExtent[0] && (dataExtent[0] = value);
      value > dataExtent[1] && (dataExtent[1] = value);
    });
  }
  return {
    sum: sum2,
    dataExtent
  };
}
function worst(row, rowFixedLength, ratio) {
  var areaMax = 0;
  var areaMin = Infinity;
  for (var i = 0, area = void 0, len2 = row.length; i < len2; i++) {
    area = row[i].getLayout().area;
    if (area) {
      area < areaMin && (areaMin = area);
      area > areaMax && (areaMax = area);
    }
  }
  var squareArea = row.area * row.area;
  var f = rowFixedLength * rowFixedLength * ratio;
  return squareArea ? mathMax(f * areaMax / squareArea, squareArea / (f * areaMin)) : Infinity;
}
function position(row, rowFixedLength, rect, halfGapWidth, flush) {
  var idx0WhenH = rowFixedLength === rect.width ? 0 : 1;
  var idx1WhenH = 1 - idx0WhenH;
  var xy = ["x", "y"];
  var wh = ["width", "height"];
  var last = rect[xy[idx0WhenH]];
  var rowOtherLength = rowFixedLength ? row.area / rowFixedLength : 0;
  if (flush || rowOtherLength > rect[wh[idx1WhenH]]) {
    rowOtherLength = rect[wh[idx1WhenH]];
  }
  for (var i = 0, rowLen = row.length; i < rowLen; i++) {
    var node = row[i];
    var nodeLayout = {};
    var step = rowOtherLength ? node.getLayout().area / rowOtherLength : 0;
    var wh1 = nodeLayout[wh[idx1WhenH]] = mathMax(rowOtherLength - 2 * halfGapWidth, 0);
    var remain = rect[xy[idx0WhenH]] + rect[wh[idx0WhenH]] - last;
    var modWH = i === rowLen - 1 || remain < step ? remain : step;
    var wh0 = nodeLayout[wh[idx0WhenH]] = mathMax(modWH - 2 * halfGapWidth, 0);
    nodeLayout[xy[idx1WhenH]] = rect[xy[idx1WhenH]] + mathMin(halfGapWidth, wh1 / 2);
    nodeLayout[xy[idx0WhenH]] = last + mathMin(halfGapWidth, wh0 / 2);
    last += modWH;
    node.setLayout(nodeLayout, true);
  }
  rect[xy[idx1WhenH]] += rowOtherLength;
  rect[wh[idx1WhenH]] -= rowOtherLength;
}
function estimateRootSize(seriesModel, targetInfo, viewRoot, containerWidth, containerHeight) {
  var currNode = (targetInfo || {}).node;
  var defaultSize = [containerWidth, containerHeight];
  if (!currNode || currNode === viewRoot) {
    return defaultSize;
  }
  var parent;
  var viewArea = containerWidth * containerHeight;
  var area = viewArea * seriesModel.option.zoomToNodeRatio;
  while (parent = currNode.parentNode) {
    var sum2 = 0;
    var siblings = parent.children;
    for (var i = 0, len2 = siblings.length; i < len2; i++) {
      sum2 += siblings[i].getValue();
    }
    var currNodeValue = currNode.getValue();
    if (currNodeValue === 0) {
      return defaultSize;
    }
    area *= sum2 / currNodeValue;
    var parentModel = parent.getModel();
    var borderWidth = parentModel.get(PATH_BORDER_WIDTH);
    var upperHeight = Math.max(borderWidth, getUpperLabelHeight(parentModel));
    area += 4 * borderWidth * borderWidth + (3 * borderWidth + upperHeight) * Math.pow(area, 0.5);
    area > MAX_SAFE_INTEGER && (area = MAX_SAFE_INTEGER);
    currNode = parent;
  }
  area < viewArea && (area = viewArea);
  var scale2 = Math.pow(area / viewArea, 0.5);
  return [containerWidth * scale2, containerHeight * scale2];
}
function calculateRootPosition(layoutInfo, rootRect, targetInfo) {
  if (rootRect) {
    return {
      x: rootRect.x,
      y: rootRect.y
    };
  }
  var defaultPosition = {
    x: 0,
    y: 0
  };
  if (!targetInfo) {
    return defaultPosition;
  }
  var targetNode = targetInfo.node;
  var layout2 = targetNode.getLayout();
  if (!layout2) {
    return defaultPosition;
  }
  var targetCenter = [layout2.width / 2, layout2.height / 2];
  var node = targetNode;
  while (node) {
    var nodeLayout = node.getLayout();
    targetCenter[0] += nodeLayout.x;
    targetCenter[1] += nodeLayout.y;
    node = node.parentNode;
  }
  return {
    x: layoutInfo.width / 2 - targetCenter[0],
    y: layoutInfo.height / 2 - targetCenter[1]
  };
}
function prunning(node, clipRect, viewAbovePath, viewRoot, depth) {
  var nodeLayout = node.getLayout();
  var nodeInViewAbovePath = viewAbovePath[depth];
  var isAboveViewRoot = nodeInViewAbovePath && nodeInViewAbovePath === node;
  if (nodeInViewAbovePath && !isAboveViewRoot || depth === viewAbovePath.length && node !== viewRoot) {
    return;
  }
  node.setLayout({
    isInView: true,
    invisible: !isAboveViewRoot && !clipRect.intersect(nodeLayout),
    isAboveViewRoot
  }, true);
  var childClipRect = new BoundingRect(clipRect.x - nodeLayout.x, clipRect.y - nodeLayout.y, clipRect.width, clipRect.height);
  each$1(node.viewChildren || [], function(child) {
    prunning(child, childClipRect, viewAbovePath, viewRoot, depth + 1);
  });
}
function getUpperLabelHeight(model) {
  return model.get(PATH_UPPER_LABEL_SHOW) ? model.get(PATH_UPPER_LABEL_HEIGHT) : 0;
}
function install$l(registers) {
  registers.registerSeriesModel(TreemapSeriesModel$1);
  registers.registerChartView(TreemapView$1);
  registers.registerVisual(treemapVisual);
  registers.registerLayout(treemapLayout);
  installTreemapAction(registers);
}
function categoryFilter(ecModel) {
  var legendModels = ecModel.findComponents({
    mainType: "legend"
  });
  if (!legendModels || !legendModels.length) {
    return;
  }
  ecModel.eachSeriesByType("graph", function(graphSeries) {
    var categoriesData = graphSeries.getCategoriesData();
    var graph = graphSeries.getGraph();
    var data = graph.data;
    var categoryNames = categoriesData.mapArray(categoriesData.getName);
    data.filterSelf(function(idx) {
      var model = data.getItemModel(idx);
      var category = model.getShallow("category");
      if (category != null) {
        if (typeof category === "number") {
          category = categoryNames[category];
        }
        for (var i = 0; i < legendModels.length; i++) {
          if (!legendModels[i].isSelected(category)) {
            return false;
          }
        }
      }
      return true;
    });
  });
}
function categoryVisual(ecModel) {
  var paletteScope = {};
  ecModel.eachSeriesByType("graph", function(seriesModel) {
    var categoriesData = seriesModel.getCategoriesData();
    var data = seriesModel.getData();
    var categoryNameIdxMap = {};
    categoriesData.each(function(idx) {
      var name = categoriesData.getName(idx);
      categoryNameIdxMap["ec-" + name] = idx;
      var itemModel = categoriesData.getItemModel(idx);
      var style = itemModel.getModel("itemStyle").getItemStyle();
      if (!style.fill) {
        style.fill = seriesModel.getColorFromPalette(name, paletteScope);
      }
      categoriesData.setItemVisual(idx, "style", style);
      var symbolVisualList = ["symbol", "symbolSize", "symbolKeepAspect"];
      for (var i = 0; i < symbolVisualList.length; i++) {
        var symbolVisual = itemModel.getShallow(symbolVisualList[i], true);
        if (symbolVisual != null) {
          categoriesData.setItemVisual(idx, symbolVisualList[i], symbolVisual);
        }
      }
    });
    if (categoriesData.count()) {
      data.each(function(idx) {
        var model = data.getItemModel(idx);
        var categoryIdx = model.getShallow("category");
        if (categoryIdx != null) {
          if (typeof categoryIdx === "string") {
            categoryIdx = categoryNameIdxMap["ec-" + categoryIdx];
          }
          var categoryStyle = categoriesData.getItemVisual(categoryIdx, "style");
          var style = data.ensureUniqueItemVisual(idx, "style");
          extend(style, categoryStyle);
          var visualList = ["symbol", "symbolSize", "symbolKeepAspect"];
          for (var i = 0; i < visualList.length; i++) {
            data.setItemVisual(idx, visualList[i], categoriesData.getItemVisual(categoryIdx, visualList[i]));
          }
        }
      });
    }
  });
}
function normalize$1(a) {
  if (!(a instanceof Array)) {
    a = [a, a];
  }
  return a;
}
function graphEdgeVisual(ecModel) {
  ecModel.eachSeriesByType("graph", function(seriesModel) {
    var graph = seriesModel.getGraph();
    var edgeData = seriesModel.getEdgeData();
    var symbolType = normalize$1(seriesModel.get("edgeSymbol"));
    var symbolSize = normalize$1(seriesModel.get("edgeSymbolSize"));
    edgeData.setVisual("fromSymbol", symbolType && symbolType[0]);
    edgeData.setVisual("toSymbol", symbolType && symbolType[1]);
    edgeData.setVisual("fromSymbolSize", symbolSize && symbolSize[0]);
    edgeData.setVisual("toSymbolSize", symbolSize && symbolSize[1]);
    edgeData.setVisual("style", seriesModel.getModel("lineStyle").getLineStyle());
    edgeData.each(function(idx) {
      var itemModel = edgeData.getItemModel(idx);
      var edge = graph.getEdgeByIndex(idx);
      var symbolType2 = normalize$1(itemModel.getShallow("symbol", true));
      var symbolSize2 = normalize$1(itemModel.getShallow("symbolSize", true));
      var style = itemModel.getModel("lineStyle").getLineStyle();
      var existsStyle = edgeData.ensureUniqueItemVisual(idx, "style");
      extend(existsStyle, style);
      switch (existsStyle.stroke) {
        case "source": {
          var nodeStyle = edge.node1.getVisual("style");
          existsStyle.stroke = nodeStyle && nodeStyle.fill;
          break;
        }
        case "target": {
          var nodeStyle = edge.node2.getVisual("style");
          existsStyle.stroke = nodeStyle && nodeStyle.fill;
          break;
        }
      }
      symbolType2[0] && edge.setVisual("fromSymbol", symbolType2[0]);
      symbolType2[1] && edge.setVisual("toSymbol", symbolType2[1]);
      symbolSize2[0] && edge.setVisual("fromSymbolSize", symbolSize2[0]);
      symbolSize2[1] && edge.setVisual("toSymbolSize", symbolSize2[1]);
    });
  });
}
var KEY_DELIMITER = "-->";
var getAutoCurvenessParams = function(seriesModel) {
  return seriesModel.get("autoCurveness") || null;
};
var createCurveness = function(seriesModel, appendLength) {
  var autoCurvenessParmas = getAutoCurvenessParams(seriesModel);
  var length = 20;
  var curvenessList = [];
  if (typeof autoCurvenessParmas === "number") {
    length = autoCurvenessParmas;
  } else if (isArray(autoCurvenessParmas)) {
    seriesModel.__curvenessList = autoCurvenessParmas;
    return;
  }
  if (appendLength > length) {
    length = appendLength;
  }
  var len2 = length % 2 ? length + 2 : length + 3;
  curvenessList = [];
  for (var i = 0; i < len2; i++) {
    curvenessList.push((i % 2 ? i + 1 : i) / 10 * (i % 2 ? -1 : 1));
  }
  seriesModel.__curvenessList = curvenessList;
};
var getKeyOfEdges = function(n1, n2, seriesModel) {
  var source = [n1.id, n1.dataIndex].join(".");
  var target = [n2.id, n2.dataIndex].join(".");
  return [seriesModel.uid, source, target].join(KEY_DELIMITER);
};
var getOppositeKey = function(key) {
  var keys2 = key.split(KEY_DELIMITER);
  return [keys2[0], keys2[2], keys2[1]].join(KEY_DELIMITER);
};
var getEdgeFromMap = function(edge, seriesModel) {
  var key = getKeyOfEdges(edge.node1, edge.node2, seriesModel);
  return seriesModel.__edgeMap[key];
};
var getTotalLengthBetweenNodes = function(edge, seriesModel) {
  var len2 = getEdgeMapLengthWithKey(getKeyOfEdges(edge.node1, edge.node2, seriesModel), seriesModel);
  var lenV = getEdgeMapLengthWithKey(getKeyOfEdges(edge.node2, edge.node1, seriesModel), seriesModel);
  return len2 + lenV;
};
var getEdgeMapLengthWithKey = function(key, seriesModel) {
  var edgeMap = seriesModel.__edgeMap;
  return edgeMap[key] ? edgeMap[key].length : 0;
};
function initCurvenessList(seriesModel) {
  if (!getAutoCurvenessParams(seriesModel)) {
    return;
  }
  seriesModel.__curvenessList = [];
  seriesModel.__edgeMap = {};
  createCurveness(seriesModel);
}
function createEdgeMapForCurveness(n1, n2, seriesModel, index) {
  if (!getAutoCurvenessParams(seriesModel)) {
    return;
  }
  var key = getKeyOfEdges(n1, n2, seriesModel);
  var edgeMap = seriesModel.__edgeMap;
  var oppositeEdges = edgeMap[getOppositeKey(key)];
  if (edgeMap[key] && !oppositeEdges) {
    edgeMap[key].isForward = true;
  } else if (oppositeEdges && edgeMap[key]) {
    oppositeEdges.isForward = true;
    edgeMap[key].isForward = false;
  }
  edgeMap[key] = edgeMap[key] || [];
  edgeMap[key].push(index);
}
function getCurvenessForEdge(edge, seriesModel, index, needReverse) {
  var autoCurvenessParams = getAutoCurvenessParams(seriesModel);
  var isArrayParam = isArray(autoCurvenessParams);
  if (!autoCurvenessParams) {
    return null;
  }
  var edgeArray = getEdgeFromMap(edge, seriesModel);
  if (!edgeArray) {
    return null;
  }
  var edgeIndex = -1;
  for (var i = 0; i < edgeArray.length; i++) {
    if (edgeArray[i] === index) {
      edgeIndex = i;
      break;
    }
  }
  var totalLen = getTotalLengthBetweenNodes(edge, seriesModel);
  createCurveness(seriesModel, totalLen);
  edge.lineStyle = edge.lineStyle || {};
  var curKey = getKeyOfEdges(edge.node1, edge.node2, seriesModel);
  var curvenessList = seriesModel.__curvenessList;
  var parityCorrection = isArrayParam ? 0 : totalLen % 2 ? 0 : 1;
  if (!edgeArray.isForward) {
    var oppositeKey = getOppositeKey(curKey);
    var len2 = getEdgeMapLengthWithKey(oppositeKey, seriesModel);
    var resValue = curvenessList[edgeIndex + len2 + parityCorrection];
    if (needReverse) {
      if (isArrayParam) {
        if (autoCurvenessParams && autoCurvenessParams[0] === 0) {
          return (len2 + parityCorrection) % 2 ? resValue : -resValue;
        } else {
          return ((len2 % 2 ? 0 : 1) + parityCorrection) % 2 ? resValue : -resValue;
        }
      } else {
        return (len2 + parityCorrection) % 2 ? resValue : -resValue;
      }
    } else {
      return curvenessList[edgeIndex + len2 + parityCorrection];
    }
  } else {
    return curvenessList[parityCorrection + edgeIndex];
  }
}
function simpleLayout(seriesModel) {
  var coordSys = seriesModel.coordinateSystem;
  if (coordSys && coordSys.type !== "view") {
    return;
  }
  var graph = seriesModel.getGraph();
  graph.eachNode(function(node) {
    var model = node.getModel();
    node.setLayout([+model.get("x"), +model.get("y")]);
  });
  simpleLayoutEdge(graph, seriesModel);
}
function simpleLayoutEdge(graph, seriesModel) {
  graph.eachEdge(function(edge, index) {
    var curveness = retrieve3(edge.getModel().get(["lineStyle", "curveness"]), -getCurvenessForEdge(edge, seriesModel, index, true), 0);
    var p1 = clone$1(edge.node1.getLayout());
    var p2 = clone$1(edge.node2.getLayout());
    var points = [p1, p2];
    if (+curveness) {
      points.push([(p1[0] + p2[0]) / 2 - (p1[1] - p2[1]) * curveness, (p1[1] + p2[1]) / 2 - (p2[0] - p1[0]) * curveness]);
    }
    edge.setLayout(points);
  });
}
function graphSimpleLayout(ecModel, api) {
  ecModel.eachSeriesByType("graph", function(seriesModel) {
    var layout2 = seriesModel.get("layout");
    var coordSys = seriesModel.coordinateSystem;
    if (coordSys && coordSys.type !== "view") {
      var data_1 = seriesModel.getData();
      var dimensions_1 = [];
      each$2(coordSys.dimensions, function(coordDim) {
        dimensions_1 = dimensions_1.concat(data_1.mapDimensionsAll(coordDim));
      });
      for (var dataIndex = 0; dataIndex < data_1.count(); dataIndex++) {
        var value = [];
        var hasValue = false;
        for (var i = 0; i < dimensions_1.length; i++) {
          var val = data_1.get(dimensions_1[i], dataIndex);
          if (!isNaN(val)) {
            hasValue = true;
          }
          value.push(val);
        }
        if (hasValue) {
          data_1.setItemLayout(dataIndex, coordSys.dataToPoint(value));
        } else {
          data_1.setItemLayout(dataIndex, [NaN, NaN]);
        }
      }
      simpleLayoutEdge(data_1.graph, seriesModel);
    } else if (!layout2 || layout2 === "none") {
      simpleLayout(seriesModel);
    }
  });
}
function getNodeGlobalScale(seriesModel) {
  var coordSys = seriesModel.coordinateSystem;
  if (coordSys.type !== "view") {
    return 1;
  }
  var nodeScaleRatio = seriesModel.option.nodeScaleRatio;
  var groupZoom = coordSys.scaleX;
  var roamZoom = coordSys.getZoom();
  var nodeScale = (roamZoom - 1) * nodeScaleRatio + 1;
  return nodeScale / groupZoom;
}
function getSymbolSize(node) {
  var symbolSize = node.getVisual("symbolSize");
  if (symbolSize instanceof Array) {
    symbolSize = (symbolSize[0] + symbolSize[1]) / 2;
  }
  return +symbolSize;
}
var PI = Math.PI;
var _symbolRadiansHalf = [];
function circularLayout(seriesModel, basedOn) {
  var coordSys = seriesModel.coordinateSystem;
  if (coordSys && coordSys.type !== "view") {
    return;
  }
  var rect = coordSys.getBoundingRect();
  var nodeData = seriesModel.getData();
  var graph = nodeData.graph;
  var cx = rect.width / 2 + rect.x;
  var cy = rect.height / 2 + rect.y;
  var r = Math.min(rect.width, rect.height) / 2;
  var count = nodeData.count();
  nodeData.setLayout({
    cx,
    cy
  });
  if (!count) {
    return;
  }
  _layoutNodesBasedOn[basedOn](seriesModel, graph, nodeData, r, cx, cy, count);
  graph.eachEdge(function(edge, index) {
    var curveness = retrieve3(edge.getModel().get(["lineStyle", "curveness"]), getCurvenessForEdge(edge, seriesModel, index), 0);
    var p1 = clone$1(edge.node1.getLayout());
    var p2 = clone$1(edge.node2.getLayout());
    var cp1;
    var x12 = (p1[0] + p2[0]) / 2;
    var y12 = (p1[1] + p2[1]) / 2;
    if (+curveness) {
      curveness *= 3;
      cp1 = [cx * curveness + x12 * (1 - curveness), cy * curveness + y12 * (1 - curveness)];
    }
    edge.setLayout([p1, p2, cp1]);
  });
}
var _layoutNodesBasedOn = {
  value: function(seriesModel, graph, nodeData, r, cx, cy, count) {
    var angle = 0;
    var sum2 = nodeData.getSum("value");
    var unitAngle = Math.PI * 2 / (sum2 || count);
    graph.eachNode(function(node) {
      var value = node.getValue("value");
      var radianHalf = unitAngle * (sum2 ? value : 1) / 2;
      angle += radianHalf;
      node.setLayout([r * Math.cos(angle) + cx, r * Math.sin(angle) + cy]);
      angle += radianHalf;
    });
  },
  symbolSize: function(seriesModel, graph, nodeData, r, cx, cy, count) {
    var sumRadian = 0;
    _symbolRadiansHalf.length = count;
    var nodeScale = getNodeGlobalScale(seriesModel);
    graph.eachNode(function(node) {
      var symbolSize = getSymbolSize(node);
      isNaN(symbolSize) && (symbolSize = 2);
      symbolSize < 0 && (symbolSize = 0);
      symbolSize *= nodeScale;
      var symbolRadianHalf = Math.asin(symbolSize / 2 / r);
      isNaN(symbolRadianHalf) && (symbolRadianHalf = PI / 2);
      _symbolRadiansHalf[node.dataIndex] = symbolRadianHalf;
      sumRadian += symbolRadianHalf * 2;
    });
    var halfRemainRadian = (2 * PI - sumRadian) / count / 2;
    var angle = 0;
    graph.eachNode(function(node) {
      var radianHalf = halfRemainRadian + _symbolRadiansHalf[node.dataIndex];
      angle += radianHalf;
      node.setLayout([r * Math.cos(angle) + cx, r * Math.sin(angle) + cy]);
      angle += radianHalf;
    });
  }
};
function graphCircularLayout(ecModel) {
  ecModel.eachSeriesByType("graph", function(seriesModel) {
    if (seriesModel.get("layout") === "circular") {
      circularLayout(seriesModel, "symbolSize");
    }
  });
}
var scaleAndAdd = scaleAndAdd$1;
function forceLayout(inNodes, inEdges, opts) {
  var nodes = inNodes;
  var edges = inEdges;
  var rect = opts.rect;
  var width = rect.width;
  var height = rect.height;
  var center2 = [rect.x + width / 2, rect.y + height / 2];
  var gravity = opts.gravity == null ? 0.1 : opts.gravity;
  for (var i = 0; i < nodes.length; i++) {
    var n = nodes[i];
    if (!n.p) {
      n.p = create$2(width * (Math.random() - 0.5) + center2[0], height * (Math.random() - 0.5) + center2[1]);
    }
    n.pp = clone$1(n.p);
    n.edges = null;
  }
  var initialFriction = opts.friction == null ? 0.6 : opts.friction;
  var friction = initialFriction;
  var beforeStepCallback;
  var afterStepCallback;
  return {
    warmUp: function() {
      friction = initialFriction * 0.8;
    },
    setFixed: function(idx) {
      nodes[idx].fixed = true;
    },
    setUnfixed: function(idx) {
      nodes[idx].fixed = false;
    },
    beforeStep: function(cb) {
      beforeStepCallback = cb;
    },
    afterStep: function(cb) {
      afterStepCallback = cb;
    },
    step: function(cb) {
      beforeStepCallback && beforeStepCallback(nodes, edges);
      var v12 = [];
      var nLen = nodes.length;
      for (var i2 = 0; i2 < edges.length; i2++) {
        var e = edges[i2];
        if (e.ignoreForceLayout) {
          continue;
        }
        var n1 = e.n1;
        var n2 = e.n2;
        sub(v12, n2.p, n1.p);
        var d = len(v12) - e.d;
        var w = n2.w / (n1.w + n2.w);
        if (isNaN(w)) {
          w = 0;
        }
        normalize$2(v12, v12);
        !n1.fixed && scaleAndAdd(n1.p, n1.p, v12, w * d * friction);
        !n2.fixed && scaleAndAdd(n2.p, n2.p, v12, -(1 - w) * d * friction);
      }
      for (var i2 = 0; i2 < nLen; i2++) {
        var n3 = nodes[i2];
        if (!n3.fixed) {
          sub(v12, center2, n3.p);
          scaleAndAdd(n3.p, n3.p, v12, gravity * friction);
        }
      }
      for (var i2 = 0; i2 < nLen; i2++) {
        var n1 = nodes[i2];
        for (var j = i2 + 1; j < nLen; j++) {
          var n2 = nodes[j];
          sub(v12, n2.p, n1.p);
          var d = len(v12);
          if (d === 0) {
            set(v12, Math.random() - 0.5, Math.random() - 0.5);
            d = 1;
          }
          var repFact = (n1.rep + n2.rep) / d / d;
          !n1.fixed && scaleAndAdd(n1.pp, n1.pp, v12, repFact);
          !n2.fixed && scaleAndAdd(n2.pp, n2.pp, v12, -repFact);
        }
      }
      var v = [];
      for (var i2 = 0; i2 < nLen; i2++) {
        var n3 = nodes[i2];
        if (!n3.fixed) {
          sub(v, n3.p, n3.pp);
          scaleAndAdd(n3.p, n3.p, v, friction);
          copy(n3.pp, n3.p);
        }
      }
      friction = friction * 0.992;
      var finished = friction < 0.01;
      afterStepCallback && afterStepCallback(nodes, edges, finished);
      cb && cb(finished);
    }
  };
}
function graphForceLayout(ecModel) {
  ecModel.eachSeriesByType("graph", function(graphSeries) {
    var coordSys = graphSeries.coordinateSystem;
    if (coordSys && coordSys.type !== "view") {
      return;
    }
    if (graphSeries.get("layout") === "force") {
      var preservedPoints_1 = graphSeries.preservedPoints || {};
      var graph_1 = graphSeries.getGraph();
      var nodeData_1 = graph_1.data;
      var edgeData = graph_1.edgeData;
      var forceModel = graphSeries.getModel("force");
      var initLayout = forceModel.get("initLayout");
      if (graphSeries.preservedPoints) {
        nodeData_1.each(function(idx) {
          var id = nodeData_1.getId(idx);
          nodeData_1.setItemLayout(idx, preservedPoints_1[id] || [NaN, NaN]);
        });
      } else if (!initLayout || initLayout === "none") {
        simpleLayout(graphSeries);
      } else if (initLayout === "circular") {
        circularLayout(graphSeries, "value");
      }
      var nodeDataExtent_1 = nodeData_1.getDataExtent("value");
      var edgeDataExtent_1 = edgeData.getDataExtent("value");
      var repulsion = forceModel.get("repulsion");
      var edgeLength = forceModel.get("edgeLength");
      var repulsionArr_1 = isArray(repulsion) ? repulsion : [repulsion, repulsion];
      var edgeLengthArr_1 = isArray(edgeLength) ? edgeLength : [edgeLength, edgeLength];
      edgeLengthArr_1 = [edgeLengthArr_1[1], edgeLengthArr_1[0]];
      var nodes_1 = nodeData_1.mapArray("value", function(value, idx) {
        var point = nodeData_1.getItemLayout(idx);
        var rep = linearMap(value, nodeDataExtent_1, repulsionArr_1);
        if (isNaN(rep)) {
          rep = (repulsionArr_1[0] + repulsionArr_1[1]) / 2;
        }
        return {
          w: rep,
          rep,
          fixed: nodeData_1.getItemModel(idx).get("fixed"),
          p: !point || isNaN(point[0]) || isNaN(point[1]) ? null : point
        };
      });
      var edges = edgeData.mapArray("value", function(value, idx) {
        var edge = graph_1.getEdgeByIndex(idx);
        var d = linearMap(value, edgeDataExtent_1, edgeLengthArr_1);
        if (isNaN(d)) {
          d = (edgeLengthArr_1[0] + edgeLengthArr_1[1]) / 2;
        }
        var edgeModel = edge.getModel();
        var curveness = retrieve3(edge.getModel().get(["lineStyle", "curveness"]), -getCurvenessForEdge(edge, graphSeries, idx, true), 0);
        return {
          n1: nodes_1[edge.node1.dataIndex],
          n2: nodes_1[edge.node2.dataIndex],
          d,
          curveness,
          ignoreForceLayout: edgeModel.get("ignoreForceLayout")
        };
      });
      var rect = coordSys.getBoundingRect();
      var forceInstance = forceLayout(nodes_1, edges, {
        rect,
        gravity: forceModel.get("gravity"),
        friction: forceModel.get("friction")
      });
      forceInstance.beforeStep(function(nodes, edges2) {
        for (var i = 0, l = nodes.length; i < l; i++) {
          if (nodes[i].fixed) {
            copy(nodes[i].p, graph_1.getNodeByIndex(i).getLayout());
          }
        }
      });
      forceInstance.afterStep(function(nodes, edges2, stopped) {
        for (var i = 0, l = nodes.length; i < l; i++) {
          if (!nodes[i].fixed) {
            graph_1.getNodeByIndex(i).setLayout(nodes[i].p);
          }
          preservedPoints_1[nodeData_1.getId(i)] = nodes[i].p;
        }
        for (var i = 0, l = edges2.length; i < l; i++) {
          var e = edges2[i];
          var edge = graph_1.getEdgeByIndex(i);
          var p1 = e.n1.p;
          var p2 = e.n2.p;
          var points = edge.getLayout();
          points = points ? points.slice() : [];
          points[0] = points[0] || [];
          points[1] = points[1] || [];
          copy(points[0], p1);
          copy(points[1], p2);
          if (+e.curveness) {
            points[2] = [(p1[0] + p2[0]) / 2 - (p1[1] - p2[1]) * e.curveness, (p1[1] + p2[1]) / 2 - (p2[0] - p1[0]) * e.curveness];
          }
          edge.setLayout(points);
        }
      });
      graphSeries.forceLayout = forceInstance;
      graphSeries.preservedPoints = preservedPoints_1;
      forceInstance.step();
    } else {
      graphSeries.forceLayout = null;
    }
  });
}
function getViewRect$2(seriesModel, api, aspect) {
  var option = extend(seriesModel.getBoxLayoutParams(), {
    aspect
  });
  return getLayoutRect(option, {
    width: api.getWidth(),
    height: api.getHeight()
  });
}
function createViewCoordSys(ecModel, api) {
  var viewList = [];
  ecModel.eachSeriesByType("graph", function(seriesModel) {
    var coordSysType = seriesModel.get("coordinateSystem");
    if (!coordSysType || coordSysType === "view") {
      var data_1 = seriesModel.getData();
      var positions = data_1.mapArray(function(idx) {
        var itemModel = data_1.getItemModel(idx);
        return [+itemModel.get("x"), +itemModel.get("y")];
      });
      var min = [];
      var max = [];
      fromPoints(positions, min, max);
      if (max[0] - min[0] === 0) {
        max[0] += 1;
        min[0] -= 1;
      }
      if (max[1] - min[1] === 0) {
        max[1] += 1;
        min[1] -= 1;
      }
      var aspect = (max[0] - min[0]) / (max[1] - min[1]);
      var viewRect = getViewRect$2(seriesModel, api, aspect);
      if (isNaN(aspect)) {
        min = [viewRect.x, viewRect.y];
        max = [viewRect.x + viewRect.width, viewRect.y + viewRect.height];
      }
      var bbWidth = max[0] - min[0];
      var bbHeight = max[1] - min[1];
      var viewWidth = viewRect.width;
      var viewHeight = viewRect.height;
      var viewCoordSys = seriesModel.coordinateSystem = new View();
      viewCoordSys.zoomLimit = seriesModel.get("scaleLimit");
      viewCoordSys.setBoundingRect(min[0], min[1], bbWidth, bbHeight);
      viewCoordSys.setViewRect(viewRect.x, viewRect.y, viewWidth, viewHeight);
      viewCoordSys.setCenter(seriesModel.get("center"));
      viewCoordSys.setZoom(seriesModel.get("zoom"));
      viewList.push(viewCoordSys);
    }
  });
  return viewList;
}
var straightLineProto = Line$2.prototype;
var bezierCurveProto = BezierCurve.prototype;
var StraightLineShape = function() {
  function StraightLineShape2() {
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = 0;
    this.percent = 1;
  }
  return StraightLineShape2;
}();
(function(_super) {
  __extends(CurveShape, _super);
  function CurveShape() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return CurveShape;
})(StraightLineShape);
function isStraightLine(shape) {
  return isNaN(+shape.cpx1) || isNaN(+shape.cpy1);
}
var ECLinePath = function(_super) {
  __extends(ECLinePath2, _super);
  function ECLinePath2(opts) {
    var _this = _super.call(this, opts) || this;
    _this.type = "ec-line";
    return _this;
  }
  ECLinePath2.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  };
  ECLinePath2.prototype.getDefaultShape = function() {
    return new StraightLineShape();
  };
  ECLinePath2.prototype.buildPath = function(ctx, shape) {
    if (isStraightLine(shape)) {
      straightLineProto.buildPath.call(this, ctx, shape);
    } else {
      bezierCurveProto.buildPath.call(this, ctx, shape);
    }
  };
  ECLinePath2.prototype.pointAt = function(t) {
    if (isStraightLine(this.shape)) {
      return straightLineProto.pointAt.call(this, t);
    } else {
      return bezierCurveProto.pointAt.call(this, t);
    }
  };
  ECLinePath2.prototype.tangentAt = function(t) {
    var shape = this.shape;
    var p = isStraightLine(shape) ? [shape.x2 - shape.x1, shape.y2 - shape.y1] : bezierCurveProto.tangentAt.call(this, t);
    return normalize$2(p, p);
  };
  return ECLinePath2;
}(Path);
var ECLinePath$1 = ECLinePath;
var SYMBOL_CATEGORIES = ["fromSymbol", "toSymbol"];
function makeSymbolTypeKey(symbolCategory) {
  return "_" + symbolCategory + "Type";
}
function createSymbol(name, lineData, idx) {
  var symbolType = lineData.getItemVisual(idx, name);
  if (!symbolType || symbolType === "none") {
    return;
  }
  var symbolSize = lineData.getItemVisual(idx, name + "Size");
  var symbolRotate = lineData.getItemVisual(idx, name + "Rotate");
  var symbolOffset = lineData.getItemVisual(idx, name + "Offset");
  var symbolKeepAspect = lineData.getItemVisual(idx, name + "KeepAspect");
  var symbolSizeArr = normalizeSymbolSize(symbolSize);
  var symbolOffsetArr = normalizeSymbolOffset(symbolOffset || 0, symbolSizeArr);
  var symbolPath = createSymbol$1(symbolType, -symbolSizeArr[0] / 2 + symbolOffsetArr[0], -symbolSizeArr[1] / 2 + symbolOffsetArr[1], symbolSizeArr[0], symbolSizeArr[1], null, symbolKeepAspect);
  symbolPath.__specifiedRotation = symbolRotate == null || isNaN(symbolRotate) ? void 0 : +symbolRotate * Math.PI / 180 || 0;
  symbolPath.name = name;
  return symbolPath;
}
function createLine(points) {
  var line = new ECLinePath$1({
    name: "line",
    subPixelOptimize: true
  });
  setLinePoints(line.shape, points);
  return line;
}
function setLinePoints(targetShape, points) {
  targetShape.x1 = points[0][0];
  targetShape.y1 = points[0][1];
  targetShape.x2 = points[1][0];
  targetShape.y2 = points[1][1];
  targetShape.percent = 1;
  var cp1 = points[2];
  if (cp1) {
    targetShape.cpx1 = cp1[0];
    targetShape.cpy1 = cp1[1];
  } else {
    targetShape.cpx1 = NaN;
    targetShape.cpy1 = NaN;
  }
}
var Line = function(_super) {
  __extends(Line2, _super);
  function Line2(lineData, idx, seriesScope) {
    var _this = _super.call(this) || this;
    _this._createLine(lineData, idx, seriesScope);
    return _this;
  }
  Line2.prototype._createLine = function(lineData, idx, seriesScope) {
    var seriesModel = lineData.hostModel;
    var linePoints = lineData.getItemLayout(idx);
    var line = createLine(linePoints);
    line.shape.percent = 0;
    initProps(line, {
      shape: {
        percent: 1
      }
    }, seriesModel, idx);
    this.add(line);
    each$2(SYMBOL_CATEGORIES, function(symbolCategory) {
      var symbol = createSymbol(symbolCategory, lineData, idx);
      this.add(symbol);
      this[makeSymbolTypeKey(symbolCategory)] = lineData.getItemVisual(idx, symbolCategory);
    }, this);
    this._updateCommonStl(lineData, idx, seriesScope);
  };
  Line2.prototype.updateData = function(lineData, idx, seriesScope) {
    var seriesModel = lineData.hostModel;
    var line = this.childOfName("line");
    var linePoints = lineData.getItemLayout(idx);
    var target = {
      shape: {}
    };
    setLinePoints(target.shape, linePoints);
    updateProps(line, target, seriesModel, idx);
    each$2(SYMBOL_CATEGORIES, function(symbolCategory) {
      var symbolType = lineData.getItemVisual(idx, symbolCategory);
      var key = makeSymbolTypeKey(symbolCategory);
      if (this[key] !== symbolType) {
        this.remove(this.childOfName(symbolCategory));
        var symbol = createSymbol(symbolCategory, lineData, idx);
        this.add(symbol);
      }
      this[key] = symbolType;
    }, this);
    this._updateCommonStl(lineData, idx, seriesScope);
  };
  Line2.prototype.getLinePath = function() {
    return this.childAt(0);
  };
  Line2.prototype._updateCommonStl = function(lineData, idx, seriesScope) {
    var seriesModel = lineData.hostModel;
    var line = this.childOfName("line");
    var emphasisLineStyle = seriesScope && seriesScope.emphasisLineStyle;
    var blurLineStyle = seriesScope && seriesScope.blurLineStyle;
    var selectLineStyle = seriesScope && seriesScope.selectLineStyle;
    var labelStatesModels = seriesScope && seriesScope.labelStatesModels;
    if (!seriesScope || lineData.hasItemOption) {
      var itemModel = lineData.getItemModel(idx);
      emphasisLineStyle = itemModel.getModel(["emphasis", "lineStyle"]).getLineStyle();
      blurLineStyle = itemModel.getModel(["blur", "lineStyle"]).getLineStyle();
      selectLineStyle = itemModel.getModel(["select", "lineStyle"]).getLineStyle();
      labelStatesModels = getLabelStatesModels(itemModel);
    }
    var lineStyle = lineData.getItemVisual(idx, "style");
    var visualColor = lineStyle.stroke;
    line.useStyle(lineStyle);
    line.style.fill = null;
    line.style.strokeNoScale = true;
    line.ensureState("emphasis").style = emphasisLineStyle;
    line.ensureState("blur").style = blurLineStyle;
    line.ensureState("select").style = selectLineStyle;
    each$2(SYMBOL_CATEGORIES, function(symbolCategory) {
      var symbol = this.childOfName(symbolCategory);
      if (symbol) {
        symbol.setColor(visualColor);
        symbol.style.opacity = lineStyle.opacity;
        for (var i = 0; i < SPECIAL_STATES.length; i++) {
          var stateName = SPECIAL_STATES[i];
          var lineState = line.getState(stateName);
          if (lineState) {
            var lineStateStyle = lineState.style || {};
            var state = symbol.ensureState(stateName);
            var stateStyle = state.style || (state.style = {});
            if (lineStateStyle.stroke != null) {
              stateStyle[symbol.__isEmptyBrush ? "stroke" : "fill"] = lineStateStyle.stroke;
            }
            if (lineStateStyle.opacity != null) {
              stateStyle.opacity = lineStateStyle.opacity;
            }
          }
        }
        symbol.markRedraw();
      }
    }, this);
    var rawVal = seriesModel.getRawValue(idx);
    setLabelStyle(this, labelStatesModels, {
      labelDataIndex: idx,
      labelFetcher: {
        getFormattedLabel: function(dataIndex, stateName) {
          return seriesModel.getFormattedLabel(dataIndex, stateName, lineData.dataType);
        }
      },
      inheritColor: visualColor || "#000",
      defaultOpacity: lineStyle.opacity,
      defaultText: (rawVal == null ? lineData.getName(idx) : isFinite(rawVal) ? round(rawVal) : rawVal) + ""
    });
    var label = this.getTextContent();
    if (label) {
      var labelNormalModel = labelStatesModels.normal;
      label.__align = label.style.align;
      label.__verticalAlign = label.style.verticalAlign;
      label.__position = labelNormalModel.get("position") || "middle";
      var distance = labelNormalModel.get("distance");
      if (!isArray(distance)) {
        distance = [distance, distance];
      }
      label.__labelDistance = distance;
    }
    this.setTextConfig({
      position: null,
      local: true,
      inside: false
    });
    enableHoverEmphasis(this);
  };
  Line2.prototype.highlight = function() {
    enterEmphasis(this);
  };
  Line2.prototype.downplay = function() {
    leaveEmphasis(this);
  };
  Line2.prototype.updateLayout = function(lineData, idx) {
    this.setLinePoints(lineData.getItemLayout(idx));
  };
  Line2.prototype.setLinePoints = function(points) {
    var linePath = this.childOfName("line");
    setLinePoints(linePath.shape, points);
    linePath.dirty();
  };
  Line2.prototype.beforeUpdate = function() {
    var lineGroup = this;
    var symbolFrom = lineGroup.childOfName("fromSymbol");
    var symbolTo = lineGroup.childOfName("toSymbol");
    var label = lineGroup.getTextContent();
    if (!symbolFrom && !symbolTo && (!label || label.ignore)) {
      return;
    }
    var invScale = 1;
    var parentNode = this.parent;
    while (parentNode) {
      if (parentNode.scaleX) {
        invScale /= parentNode.scaleX;
      }
      parentNode = parentNode.parent;
    }
    var line = lineGroup.childOfName("line");
    if (!this.__dirty && !line.__dirty) {
      return;
    }
    var percent = line.shape.percent;
    var fromPos = line.pointAt(0);
    var toPos = line.pointAt(percent);
    var d = sub([], toPos, fromPos);
    normalize$2(d, d);
    function setSymbolRotation(symbol, percent2) {
      var specifiedRotation = symbol.__specifiedRotation;
      if (specifiedRotation == null) {
        var tangent2 = line.tangentAt(percent2);
        symbol.attr("rotation", (percent2 === 1 ? -1 : 1) * Math.PI / 2 - Math.atan2(tangent2[1], tangent2[0]));
      } else {
        symbol.attr("rotation", specifiedRotation);
      }
    }
    if (symbolFrom) {
      symbolFrom.setPosition(fromPos);
      setSymbolRotation(symbolFrom, 0);
      symbolFrom.scaleX = symbolFrom.scaleY = invScale * percent;
      symbolFrom.markRedraw();
    }
    if (symbolTo) {
      symbolTo.setPosition(toPos);
      setSymbolRotation(symbolTo, 1);
      symbolTo.scaleX = symbolTo.scaleY = invScale * percent;
      symbolTo.markRedraw();
    }
    if (label && !label.ignore) {
      label.x = label.y = 0;
      label.originX = label.originY = 0;
      var textAlign = void 0;
      var textVerticalAlign = void 0;
      var distance = label.__labelDistance;
      var distanceX = distance[0] * invScale;
      var distanceY = distance[1] * invScale;
      var halfPercent = percent / 2;
      var tangent = line.tangentAt(halfPercent);
      var n = [tangent[1], -tangent[0]];
      var cp = line.pointAt(halfPercent);
      if (n[1] > 0) {
        n[0] = -n[0];
        n[1] = -n[1];
      }
      var dir = tangent[0] < 0 ? -1 : 1;
      if (label.__position !== "start" && label.__position !== "end") {
        var rotation = -Math.atan2(tangent[1], tangent[0]);
        if (toPos[0] < fromPos[0]) {
          rotation = Math.PI + rotation;
        }
        label.rotation = rotation;
      }
      var dy = void 0;
      switch (label.__position) {
        case "insideStartTop":
        case "insideMiddleTop":
        case "insideEndTop":
        case "middle":
          dy = -distanceY;
          textVerticalAlign = "bottom";
          break;
        case "insideStartBottom":
        case "insideMiddleBottom":
        case "insideEndBottom":
          dy = distanceY;
          textVerticalAlign = "top";
          break;
        default:
          dy = 0;
          textVerticalAlign = "middle";
      }
      switch (label.__position) {
        case "end":
          label.x = d[0] * distanceX + toPos[0];
          label.y = d[1] * distanceY + toPos[1];
          textAlign = d[0] > 0.8 ? "left" : d[0] < -0.8 ? "right" : "center";
          textVerticalAlign = d[1] > 0.8 ? "top" : d[1] < -0.8 ? "bottom" : "middle";
          break;
        case "start":
          label.x = -d[0] * distanceX + fromPos[0];
          label.y = -d[1] * distanceY + fromPos[1];
          textAlign = d[0] > 0.8 ? "right" : d[0] < -0.8 ? "left" : "center";
          textVerticalAlign = d[1] > 0.8 ? "bottom" : d[1] < -0.8 ? "top" : "middle";
          break;
        case "insideStartTop":
        case "insideStart":
        case "insideStartBottom":
          label.x = distanceX * dir + fromPos[0];
          label.y = fromPos[1] + dy;
          textAlign = tangent[0] < 0 ? "right" : "left";
          label.originX = -distanceX * dir;
          label.originY = -dy;
          break;
        case "insideMiddleTop":
        case "insideMiddle":
        case "insideMiddleBottom":
        case "middle":
          label.x = cp[0];
          label.y = cp[1] + dy;
          textAlign = "center";
          label.originY = -dy;
          break;
        case "insideEndTop":
        case "insideEnd":
        case "insideEndBottom":
          label.x = -distanceX * dir + toPos[0];
          label.y = toPos[1] + dy;
          textAlign = tangent[0] >= 0 ? "right" : "left";
          label.originX = distanceX * dir;
          label.originY = -dy;
          break;
      }
      label.scaleX = label.scaleY = invScale;
      label.setStyle({
        verticalAlign: label.__verticalAlign || textVerticalAlign,
        align: label.__align || textAlign
      });
    }
  };
  return Line2;
}(Group$1);
var Line$1 = Line;
var LineDraw = function() {
  function LineDraw2(LineCtor) {
    this.group = new Group$1();
    this._LineCtor = LineCtor || Line$1;
  }
  LineDraw2.prototype.isPersistent = function() {
    return true;
  };
  LineDraw2.prototype.updateData = function(lineData) {
    var _this = this;
    var lineDraw = this;
    var group = lineDraw.group;
    var oldLineData = lineDraw._lineData;
    lineDraw._lineData = lineData;
    if (!oldLineData) {
      group.removeAll();
    }
    var seriesScope = makeSeriesScope$1(lineData);
    lineData.diff(oldLineData).add(function(idx) {
      _this._doAdd(lineData, idx, seriesScope);
    }).update(function(newIdx, oldIdx) {
      _this._doUpdate(oldLineData, lineData, oldIdx, newIdx, seriesScope);
    }).remove(function(idx) {
      group.remove(oldLineData.getItemGraphicEl(idx));
    }).execute();
  };
  LineDraw2.prototype.updateLayout = function() {
    var lineData = this._lineData;
    if (!lineData) {
      return;
    }
    lineData.eachItemGraphicEl(function(el, idx) {
      el.updateLayout(lineData, idx);
    }, this);
  };
  LineDraw2.prototype.incrementalPrepareUpdate = function(lineData) {
    this._seriesScope = makeSeriesScope$1(lineData);
    this._lineData = null;
    this.group.removeAll();
  };
  LineDraw2.prototype.incrementalUpdate = function(taskParams, lineData) {
    function updateIncrementalAndHover(el2) {
      if (!el2.isGroup && !isEffectObject(el2)) {
        el2.incremental = true;
        el2.ensureState("emphasis").hoverLayer = true;
      }
    }
    for (var idx = taskParams.start; idx < taskParams.end; idx++) {
      var itemLayout = lineData.getItemLayout(idx);
      if (lineNeedsDraw(itemLayout)) {
        var el = new this._LineCtor(lineData, idx, this._seriesScope);
        el.traverse(updateIncrementalAndHover);
        this.group.add(el);
        lineData.setItemGraphicEl(idx, el);
      }
    }
  };
  LineDraw2.prototype.remove = function() {
    this.group.removeAll();
  };
  LineDraw2.prototype._doAdd = function(lineData, idx, seriesScope) {
    var itemLayout = lineData.getItemLayout(idx);
    if (!lineNeedsDraw(itemLayout)) {
      return;
    }
    var el = new this._LineCtor(lineData, idx, seriesScope);
    lineData.setItemGraphicEl(idx, el);
    this.group.add(el);
  };
  LineDraw2.prototype._doUpdate = function(oldLineData, newLineData, oldIdx, newIdx, seriesScope) {
    var itemEl = oldLineData.getItemGraphicEl(oldIdx);
    if (!lineNeedsDraw(newLineData.getItemLayout(newIdx))) {
      this.group.remove(itemEl);
      return;
    }
    if (!itemEl) {
      itemEl = new this._LineCtor(newLineData, newIdx, seriesScope);
    } else {
      itemEl.updateData(newLineData, newIdx, seriesScope);
    }
    newLineData.setItemGraphicEl(newIdx, itemEl);
    this.group.add(itemEl);
  };
  return LineDraw2;
}();
function isEffectObject(el) {
  return el.animators && el.animators.length > 0;
}
function makeSeriesScope$1(lineData) {
  var hostModel = lineData.hostModel;
  return {
    lineStyle: hostModel.getModel("lineStyle").getLineStyle(),
    emphasisLineStyle: hostModel.getModel(["emphasis", "lineStyle"]).getLineStyle(),
    blurLineStyle: hostModel.getModel(["blur", "lineStyle"]).getLineStyle(),
    selectLineStyle: hostModel.getModel(["select", "lineStyle"]).getLineStyle(),
    labelStatesModels: getLabelStatesModels(hostModel)
  };
}
function isPointNaN(pt) {
  return isNaN(pt[0]) || isNaN(pt[1]);
}
function lineNeedsDraw(pts) {
  return !isPointNaN(pts[0]) && !isPointNaN(pts[1]);
}
var LineDraw$1 = LineDraw;
var v1 = [];
var v2 = [];
var v3 = [];
var quadraticAt = quadraticAt$1;
var v2DistSquare = distSquare;
var mathAbs = Math.abs;
function intersectCurveCircle(curvePoints, center2, radius) {
  var p0 = curvePoints[0];
  var p1 = curvePoints[1];
  var p2 = curvePoints[2];
  var d = Infinity;
  var t;
  var radiusSquare = radius * radius;
  var interval = 0.1;
  for (var _t = 0.1; _t <= 0.9; _t += 0.1) {
    v1[0] = quadraticAt(p0[0], p1[0], p2[0], _t);
    v1[1] = quadraticAt(p0[1], p1[1], p2[1], _t);
    var diff = mathAbs(v2DistSquare(v1, center2) - radiusSquare);
    if (diff < d) {
      d = diff;
      t = _t;
    }
  }
  for (var i = 0; i < 32; i++) {
    var next = t + interval;
    v2[0] = quadraticAt(p0[0], p1[0], p2[0], t);
    v2[1] = quadraticAt(p0[1], p1[1], p2[1], t);
    v3[0] = quadraticAt(p0[0], p1[0], p2[0], next);
    v3[1] = quadraticAt(p0[1], p1[1], p2[1], next);
    var diff = v2DistSquare(v2, center2) - radiusSquare;
    if (mathAbs(diff) < 0.01) {
      break;
    }
    var nextDiff = v2DistSquare(v3, center2) - radiusSquare;
    interval /= 2;
    if (diff < 0) {
      if (nextDiff >= 0) {
        t = t + interval;
      } else {
        t = t - interval;
      }
    } else {
      if (nextDiff >= 0) {
        t = t - interval;
      } else {
        t = t + interval;
      }
    }
  }
  return t;
}
function adjustEdge(graph, scale2) {
  var tmp0 = [];
  var quadraticSubdivide$1 = quadraticSubdivide;
  var pts = [[], [], []];
  var pts2 = [[], []];
  var v = [];
  scale2 /= 2;
  graph.eachEdge(function(edge, idx) {
    var linePoints = edge.getLayout();
    var fromSymbol = edge.getVisual("fromSymbol");
    var toSymbol = edge.getVisual("toSymbol");
    if (!linePoints.__original) {
      linePoints.__original = [clone$1(linePoints[0]), clone$1(linePoints[1])];
      if (linePoints[2]) {
        linePoints.__original.push(clone$1(linePoints[2]));
      }
    }
    var originalPoints = linePoints.__original;
    if (linePoints[2] != null) {
      copy(pts[0], originalPoints[0]);
      copy(pts[1], originalPoints[2]);
      copy(pts[2], originalPoints[1]);
      if (fromSymbol && fromSymbol !== "none") {
        var symbolSize = getSymbolSize(edge.node1);
        var t = intersectCurveCircle(pts, originalPoints[0], symbolSize * scale2);
        quadraticSubdivide$1(pts[0][0], pts[1][0], pts[2][0], t, tmp0);
        pts[0][0] = tmp0[3];
        pts[1][0] = tmp0[4];
        quadraticSubdivide$1(pts[0][1], pts[1][1], pts[2][1], t, tmp0);
        pts[0][1] = tmp0[3];
        pts[1][1] = tmp0[4];
      }
      if (toSymbol && toSymbol !== "none") {
        var symbolSize = getSymbolSize(edge.node2);
        var t = intersectCurveCircle(pts, originalPoints[1], symbolSize * scale2);
        quadraticSubdivide$1(pts[0][0], pts[1][0], pts[2][0], t, tmp0);
        pts[1][0] = tmp0[1];
        pts[2][0] = tmp0[2];
        quadraticSubdivide$1(pts[0][1], pts[1][1], pts[2][1], t, tmp0);
        pts[1][1] = tmp0[1];
        pts[2][1] = tmp0[2];
      }
      copy(linePoints[0], pts[0]);
      copy(linePoints[1], pts[2]);
      copy(linePoints[2], pts[1]);
    } else {
      copy(pts2[0], originalPoints[0]);
      copy(pts2[1], originalPoints[1]);
      sub(v, pts2[1], pts2[0]);
      normalize$2(v, v);
      if (fromSymbol && fromSymbol !== "none") {
        var symbolSize = getSymbolSize(edge.node1);
        scaleAndAdd$1(pts2[0], pts2[0], v, symbolSize * scale2);
      }
      if (toSymbol && toSymbol !== "none") {
        var symbolSize = getSymbolSize(edge.node2);
        scaleAndAdd$1(pts2[1], pts2[1], v, -symbolSize * scale2);
      }
      copy(linePoints[0], pts2[0]);
      copy(linePoints[1], pts2[1]);
    }
  });
}
function isViewCoordSys(coordSys) {
  return coordSys.type === "view";
}
var GraphView = function(_super) {
  __extends(GraphView2, _super);
  function GraphView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = GraphView2.type;
    return _this;
  }
  GraphView2.prototype.init = function(ecModel, api) {
    var symbolDraw = new SymbolDraw();
    var lineDraw = new LineDraw$1();
    var group = this.group;
    this._controller = new RoamController(api.getZr());
    this._controllerHost = {
      target: group
    };
    group.add(symbolDraw.group);
    group.add(lineDraw.group);
    this._symbolDraw = symbolDraw;
    this._lineDraw = lineDraw;
    this._firstRender = true;
  };
  GraphView2.prototype.render = function(seriesModel, ecModel, api) {
    var _this = this;
    var coordSys = seriesModel.coordinateSystem;
    this._model = seriesModel;
    var symbolDraw = this._symbolDraw;
    var lineDraw = this._lineDraw;
    var group = this.group;
    if (isViewCoordSys(coordSys)) {
      var groupNewProp = {
        x: coordSys.x,
        y: coordSys.y,
        scaleX: coordSys.scaleX,
        scaleY: coordSys.scaleY
      };
      if (this._firstRender) {
        group.attr(groupNewProp);
      } else {
        updateProps(group, groupNewProp, seriesModel);
      }
    }
    adjustEdge(seriesModel.getGraph(), getNodeGlobalScale(seriesModel));
    var data = seriesModel.getData();
    symbolDraw.updateData(data);
    var edgeData = seriesModel.getEdgeData();
    lineDraw.updateData(edgeData);
    this._updateNodeAndLinkScale();
    this._updateController(seriesModel, ecModel, api);
    clearTimeout(this._layoutTimeout);
    var forceLayout2 = seriesModel.forceLayout;
    var layoutAnimation = seriesModel.get(["force", "layoutAnimation"]);
    if (forceLayout2) {
      this._startForceLayoutIteration(forceLayout2, layoutAnimation);
    }
    data.graph.eachNode(function(node) {
      var idx = node.dataIndex;
      var el = node.getGraphicEl();
      var itemModel = node.getModel();
      el.off("drag").off("dragend");
      var draggable = itemModel.get("draggable");
      if (draggable) {
        el.on("drag", function() {
          if (forceLayout2) {
            forceLayout2.warmUp();
            !_this._layouting && _this._startForceLayoutIteration(forceLayout2, layoutAnimation);
            forceLayout2.setFixed(idx);
            data.setItemLayout(idx, [el.x, el.y]);
          }
        }).on("dragend", function() {
          if (forceLayout2) {
            forceLayout2.setUnfixed(idx);
          }
        });
      }
      el.setDraggable(draggable && !!forceLayout2);
      var focus = itemModel.get(["emphasis", "focus"]);
      if (focus === "adjacency") {
        getECData(el).focus = node.getAdjacentDataIndices();
      }
    });
    data.graph.eachEdge(function(edge) {
      var el = edge.getGraphicEl();
      var focus = edge.getModel().get(["emphasis", "focus"]);
      if (focus === "adjacency") {
        getECData(el).focus = {
          edge: [edge.dataIndex],
          node: [edge.node1.dataIndex, edge.node2.dataIndex]
        };
      }
    });
    var circularRotateLabel = seriesModel.get("layout") === "circular" && seriesModel.get(["circular", "rotateLabel"]);
    var cx = data.getLayout("cx");
    var cy = data.getLayout("cy");
    data.eachItemGraphicEl(function(el, idx) {
      var itemModel = data.getItemModel(idx);
      var labelRotate = itemModel.get(["label", "rotate"]) || 0;
      var symbolPath = el.getSymbolPath();
      if (circularRotateLabel) {
        var pos = data.getItemLayout(idx);
        var rad = Math.atan2(pos[1] - cy, pos[0] - cx);
        if (rad < 0) {
          rad = Math.PI * 2 + rad;
        }
        var isLeft = pos[0] < cx;
        if (isLeft) {
          rad = rad - Math.PI;
        }
        var textPosition = isLeft ? "left" : "right";
        symbolPath.setTextConfig({
          rotation: -rad,
          position: textPosition,
          origin: "center"
        });
        var emphasisState = symbolPath.ensureState("emphasis");
        extend(emphasisState.textConfig || (emphasisState.textConfig = {}), {
          position: textPosition
        });
      } else {
        symbolPath.setTextConfig({
          rotation: labelRotate *= Math.PI / 180
        });
      }
    });
    this._firstRender = false;
  };
  GraphView2.prototype.dispose = function() {
    this._controller && this._controller.dispose();
    this._controllerHost = null;
  };
  GraphView2.prototype._startForceLayoutIteration = function(forceLayout2, layoutAnimation) {
    var self = this;
    (function step() {
      forceLayout2.step(function(stopped) {
        self.updateLayout(self._model);
        (self._layouting = !stopped) && (layoutAnimation ? self._layoutTimeout = setTimeout(step, 16) : step());
      });
    })();
  };
  GraphView2.prototype._updateController = function(seriesModel, ecModel, api) {
    var _this = this;
    var controller = this._controller;
    var controllerHost = this._controllerHost;
    var group = this.group;
    controller.setPointerChecker(function(e, x, y) {
      var rect = group.getBoundingRect();
      rect.applyTransform(group.transform);
      return rect.contain(x, y) && !onIrrelevantElement(e, api, seriesModel);
    });
    if (!isViewCoordSys(seriesModel.coordinateSystem)) {
      controller.disable();
      return;
    }
    controller.enable(seriesModel.get("roam"));
    controllerHost.zoomLimit = seriesModel.get("scaleLimit");
    controllerHost.zoom = seriesModel.coordinateSystem.getZoom();
    controller.off("pan").off("zoom").on("pan", function(e) {
      updateViewOnPan(controllerHost, e.dx, e.dy);
      api.dispatchAction({
        seriesId: seriesModel.id,
        type: "graphRoam",
        dx: e.dx,
        dy: e.dy
      });
    }).on("zoom", function(e) {
      updateViewOnZoom(controllerHost, e.scale, e.originX, e.originY);
      api.dispatchAction({
        seriesId: seriesModel.id,
        type: "graphRoam",
        zoom: e.scale,
        originX: e.originX,
        originY: e.originY
      });
      _this._updateNodeAndLinkScale();
      adjustEdge(seriesModel.getGraph(), getNodeGlobalScale(seriesModel));
      _this._lineDraw.updateLayout();
      api.updateLabelLayout();
    });
  };
  GraphView2.prototype._updateNodeAndLinkScale = function() {
    var seriesModel = this._model;
    var data = seriesModel.getData();
    var nodeScale = getNodeGlobalScale(seriesModel);
    data.eachItemGraphicEl(function(el, idx) {
      el.setSymbolScale(nodeScale);
    });
  };
  GraphView2.prototype.updateLayout = function(seriesModel) {
    adjustEdge(seriesModel.getGraph(), getNodeGlobalScale(seriesModel));
    this._symbolDraw.updateLayout();
    this._lineDraw.updateLayout();
  };
  GraphView2.prototype.remove = function(ecModel, api) {
    this._symbolDraw && this._symbolDraw.remove();
    this._lineDraw && this._lineDraw.remove();
  };
  GraphView2.type = "graph";
  return GraphView2;
}(ChartView);
var GraphView$1 = GraphView;
function generateNodeKey(id) {
  return "_EC_" + id;
}
var Graph = function() {
  function Graph2(directed) {
    this.type = "graph";
    this.nodes = [];
    this.edges = [];
    this._nodesMap = {};
    this._edgesMap = {};
    this._directed = directed || false;
  }
  Graph2.prototype.isDirected = function() {
    return this._directed;
  };
  Graph2.prototype.addNode = function(id, dataIndex) {
    id = id == null ? "" + dataIndex : "" + id;
    var nodesMap = this._nodesMap;
    if (nodesMap[generateNodeKey(id)]) {
      return;
    }
    var node = new GraphNode(id, dataIndex);
    node.hostGraph = this;
    this.nodes.push(node);
    nodesMap[generateNodeKey(id)] = node;
    return node;
  };
  Graph2.prototype.getNodeByIndex = function(dataIndex) {
    var rawIdx = this.data.getRawIndex(dataIndex);
    return this.nodes[rawIdx];
  };
  Graph2.prototype.getNodeById = function(id) {
    return this._nodesMap[generateNodeKey(id)];
  };
  Graph2.prototype.addEdge = function(n1, n2, dataIndex) {
    var nodesMap = this._nodesMap;
    var edgesMap = this._edgesMap;
    if (typeof n1 === "number") {
      n1 = this.nodes[n1];
    }
    if (typeof n2 === "number") {
      n2 = this.nodes[n2];
    }
    if (!(n1 instanceof GraphNode)) {
      n1 = nodesMap[generateNodeKey(n1)];
    }
    if (!(n2 instanceof GraphNode)) {
      n2 = nodesMap[generateNodeKey(n2)];
    }
    if (!n1 || !n2) {
      return;
    }
    var key = n1.id + "-" + n2.id;
    var edge = new GraphEdge(n1, n2, dataIndex);
    edge.hostGraph = this;
    if (this._directed) {
      n1.outEdges.push(edge);
      n2.inEdges.push(edge);
    }
    n1.edges.push(edge);
    if (n1 !== n2) {
      n2.edges.push(edge);
    }
    this.edges.push(edge);
    edgesMap[key] = edge;
    return edge;
  };
  Graph2.prototype.getEdgeByIndex = function(dataIndex) {
    var rawIdx = this.edgeData.getRawIndex(dataIndex);
    return this.edges[rawIdx];
  };
  Graph2.prototype.getEdge = function(n1, n2) {
    if (n1 instanceof GraphNode) {
      n1 = n1.id;
    }
    if (n2 instanceof GraphNode) {
      n2 = n2.id;
    }
    var edgesMap = this._edgesMap;
    if (this._directed) {
      return edgesMap[n1 + "-" + n2];
    } else {
      return edgesMap[n1 + "-" + n2] || edgesMap[n2 + "-" + n1];
    }
  };
  Graph2.prototype.eachNode = function(cb, context) {
    var nodes = this.nodes;
    var len2 = nodes.length;
    for (var i = 0; i < len2; i++) {
      if (nodes[i].dataIndex >= 0) {
        cb.call(context, nodes[i], i);
      }
    }
  };
  Graph2.prototype.eachEdge = function(cb, context) {
    var edges = this.edges;
    var len2 = edges.length;
    for (var i = 0; i < len2; i++) {
      if (edges[i].dataIndex >= 0 && edges[i].node1.dataIndex >= 0 && edges[i].node2.dataIndex >= 0) {
        cb.call(context, edges[i], i);
      }
    }
  };
  Graph2.prototype.breadthFirstTraverse = function(cb, startNode, direction, context) {
    if (!(startNode instanceof GraphNode)) {
      startNode = this._nodesMap[generateNodeKey(startNode)];
    }
    if (!startNode) {
      return;
    }
    var edgeType = direction === "out" ? "outEdges" : direction === "in" ? "inEdges" : "edges";
    for (var i = 0; i < this.nodes.length; i++) {
      this.nodes[i].__visited = false;
    }
    if (cb.call(context, startNode, null)) {
      return;
    }
    var queue = [startNode];
    while (queue.length) {
      var currentNode = queue.shift();
      var edges = currentNode[edgeType];
      for (var i = 0; i < edges.length; i++) {
        var e = edges[i];
        var otherNode = e.node1 === currentNode ? e.node2 : e.node1;
        if (!otherNode.__visited) {
          if (cb.call(context, otherNode, currentNode)) {
            return;
          }
          queue.push(otherNode);
          otherNode.__visited = true;
        }
      }
    }
  };
  Graph2.prototype.update = function() {
    var data = this.data;
    var edgeData = this.edgeData;
    var nodes = this.nodes;
    var edges = this.edges;
    for (var i = 0, len2 = nodes.length; i < len2; i++) {
      nodes[i].dataIndex = -1;
    }
    for (var i = 0, len2 = data.count(); i < len2; i++) {
      nodes[data.getRawIndex(i)].dataIndex = i;
    }
    edgeData.filterSelf(function(idx) {
      var edge = edges[edgeData.getRawIndex(idx)];
      return edge.node1.dataIndex >= 0 && edge.node2.dataIndex >= 0;
    });
    for (var i = 0, len2 = edges.length; i < len2; i++) {
      edges[i].dataIndex = -1;
    }
    for (var i = 0, len2 = edgeData.count(); i < len2; i++) {
      edges[edgeData.getRawIndex(i)].dataIndex = i;
    }
  };
  Graph2.prototype.clone = function() {
    var graph = new Graph2(this._directed);
    var nodes = this.nodes;
    var edges = this.edges;
    for (var i = 0; i < nodes.length; i++) {
      graph.addNode(nodes[i].id, nodes[i].dataIndex);
    }
    for (var i = 0; i < edges.length; i++) {
      var e = edges[i];
      graph.addEdge(e.node1.id, e.node2.id, e.dataIndex);
    }
    return graph;
  };
  return Graph2;
}();
var GraphNode = function() {
  function GraphNode2(id, dataIndex) {
    this.inEdges = [];
    this.outEdges = [];
    this.edges = [];
    this.dataIndex = -1;
    this.id = id == null ? "" : id;
    this.dataIndex = dataIndex == null ? -1 : dataIndex;
  }
  GraphNode2.prototype.degree = function() {
    return this.edges.length;
  };
  GraphNode2.prototype.inDegree = function() {
    return this.inEdges.length;
  };
  GraphNode2.prototype.outDegree = function() {
    return this.outEdges.length;
  };
  GraphNode2.prototype.getModel = function(path) {
    if (this.dataIndex < 0) {
      return;
    }
    var graph = this.hostGraph;
    var itemModel = graph.data.getItemModel(this.dataIndex);
    return itemModel.getModel(path);
  };
  GraphNode2.prototype.getAdjacentDataIndices = function() {
    var dataIndices = {
      edge: [],
      node: []
    };
    for (var i = 0; i < this.edges.length; i++) {
      var adjacentEdge = this.edges[i];
      if (adjacentEdge.dataIndex < 0) {
        continue;
      }
      dataIndices.edge.push(adjacentEdge.dataIndex);
      dataIndices.node.push(adjacentEdge.node1.dataIndex, adjacentEdge.node2.dataIndex);
    }
    return dataIndices;
  };
  return GraphNode2;
}();
var GraphEdge = function() {
  function GraphEdge2(n1, n2, dataIndex) {
    this.dataIndex = -1;
    this.node1 = n1;
    this.node2 = n2;
    this.dataIndex = dataIndex == null ? -1 : dataIndex;
  }
  GraphEdge2.prototype.getModel = function(path) {
    if (this.dataIndex < 0) {
      return;
    }
    var graph = this.hostGraph;
    var itemModel = graph.edgeData.getItemModel(this.dataIndex);
    return itemModel.getModel(path);
  };
  GraphEdge2.prototype.getAdjacentDataIndices = function() {
    return {
      edge: [this.dataIndex],
      node: [this.node1.dataIndex, this.node2.dataIndex]
    };
  };
  return GraphEdge2;
}();
function createGraphDataProxyMixin(hostName, dataName) {
  return {
    getValue: function(dimension) {
      var data = this[hostName][dataName];
      return data.getStore().get(data.getDimensionIndex(dimension || "value"), this.dataIndex);
    },
    setVisual: function(key, value) {
      this.dataIndex >= 0 && this[hostName][dataName].setItemVisual(this.dataIndex, key, value);
    },
    getVisual: function(key) {
      return this[hostName][dataName].getItemVisual(this.dataIndex, key);
    },
    setLayout: function(layout2, merge2) {
      this.dataIndex >= 0 && this[hostName][dataName].setItemLayout(this.dataIndex, layout2, merge2);
    },
    getLayout: function() {
      return this[hostName][dataName].getItemLayout(this.dataIndex);
    },
    getGraphicEl: function() {
      return this[hostName][dataName].getItemGraphicEl(this.dataIndex);
    },
    getRawIndex: function() {
      return this[hostName][dataName].getRawIndex(this.dataIndex);
    }
  };
}
mixin(GraphNode, createGraphDataProxyMixin("hostGraph", "data"));
mixin(GraphEdge, createGraphDataProxyMixin("hostGraph", "edgeData"));
var Graph$1 = Graph;
function createGraphFromNodeEdge(nodes, edges, seriesModel, directed, beforeLink) {
  var graph = new Graph$1(directed);
  for (var i = 0; i < nodes.length; i++) {
    graph.addNode(retrieve(nodes[i].id, nodes[i].name, i), i);
  }
  var linkNameList = [];
  var validEdges = [];
  var linkCount = 0;
  for (var i = 0; i < edges.length; i++) {
    var link = edges[i];
    var source = link.source;
    var target = link.target;
    if (graph.addEdge(source, target, linkCount)) {
      validEdges.push(link);
      linkNameList.push(retrieve(convertOptionIdName(link.id, null), source + " > " + target));
      linkCount++;
    }
  }
  var coordSys = seriesModel.get("coordinateSystem");
  var nodeData;
  if (coordSys === "cartesian2d" || coordSys === "polar") {
    nodeData = createSeriesData(nodes, seriesModel);
  } else {
    var coordSysCtor = CoordinateSystem.get(coordSys);
    var coordDimensions = coordSysCtor ? coordSysCtor.dimensions || [] : [];
    if (indexOf(coordDimensions, "value") < 0) {
      coordDimensions.concat(["value"]);
    }
    var dimensions = prepareSeriesDataSchema(nodes, {
      coordDimensions,
      encodeDefine: seriesModel.getEncode()
    }).dimensions;
    nodeData = new SeriesData(dimensions, seriesModel);
    nodeData.initData(nodes);
  }
  var edgeData = new SeriesData(["value"], seriesModel);
  edgeData.initData(validEdges, linkNameList);
  beforeLink && beforeLink(nodeData, edgeData);
  linkSeriesData({
    mainData: nodeData,
    struct: graph,
    structAttr: "graph",
    datas: {
      node: nodeData,
      edge: edgeData
    },
    datasAttr: {
      node: "data",
      edge: "edgeData"
    }
  });
  graph.update();
  return graph;
}
var GraphSeriesModel = function(_super) {
  __extends(GraphSeriesModel2, _super);
  function GraphSeriesModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = GraphSeriesModel2.type;
    _this.hasSymbolVisual = true;
    return _this;
  }
  GraphSeriesModel2.prototype.init = function(option) {
    _super.prototype.init.apply(this, arguments);
    var self = this;
    function getCategoriesData() {
      return self._categoriesData;
    }
    this.legendVisualProvider = new LegendVisualProvider(getCategoriesData, getCategoriesData);
    this.fillDataTextStyle(option.edges || option.links);
    this._updateCategoriesData();
  };
  GraphSeriesModel2.prototype.mergeOption = function(option) {
    _super.prototype.mergeOption.apply(this, arguments);
    this.fillDataTextStyle(option.edges || option.links);
    this._updateCategoriesData();
  };
  GraphSeriesModel2.prototype.mergeDefaultAndTheme = function(option) {
    _super.prototype.mergeDefaultAndTheme.apply(this, arguments);
    defaultEmphasis(option, "edgeLabel", ["show"]);
  };
  GraphSeriesModel2.prototype.getInitialData = function(option, ecModel) {
    var edges = option.edges || option.links || [];
    var nodes = option.data || option.nodes || [];
    var self = this;
    if (nodes && edges) {
      initCurvenessList(this);
      var graph = createGraphFromNodeEdge(nodes, edges, this, true, beforeLink);
      each$2(graph.edges, function(edge) {
        createEdgeMapForCurveness(edge.node1, edge.node2, this, edge.dataIndex);
      }, this);
      return graph.data;
    }
    function beforeLink(nodeData, edgeData) {
      nodeData.wrapMethod("getItemModel", function(model) {
        var categoriesModels = self._categoriesModels;
        var categoryIdx = model.getShallow("category");
        var categoryModel = categoriesModels[categoryIdx];
        if (categoryModel) {
          categoryModel.parentModel = model.parentModel;
          model.parentModel = categoryModel;
        }
        return model;
      });
      var oldGetModel = Model.prototype.getModel;
      function newGetModel(path, parentModel) {
        var model = oldGetModel.call(this, path, parentModel);
        model.resolveParentPath = resolveParentPath;
        return model;
      }
      edgeData.wrapMethod("getItemModel", function(model) {
        model.resolveParentPath = resolveParentPath;
        model.getModel = newGetModel;
        return model;
      });
      function resolveParentPath(pathArr) {
        if (pathArr && (pathArr[0] === "label" || pathArr[1] === "label")) {
          var newPathArr = pathArr.slice();
          if (pathArr[0] === "label") {
            newPathArr[0] = "edgeLabel";
          } else if (pathArr[1] === "label") {
            newPathArr[1] = "edgeLabel";
          }
          return newPathArr;
        }
        return pathArr;
      }
    }
  };
  GraphSeriesModel2.prototype.getGraph = function() {
    return this.getData().graph;
  };
  GraphSeriesModel2.prototype.getEdgeData = function() {
    return this.getGraph().edgeData;
  };
  GraphSeriesModel2.prototype.getCategoriesData = function() {
    return this._categoriesData;
  };
  GraphSeriesModel2.prototype.formatTooltip = function(dataIndex, multipleSeries, dataType) {
    if (dataType === "edge") {
      var nodeData = this.getData();
      var params = this.getDataParams(dataIndex, dataType);
      var edge = nodeData.graph.getEdgeByIndex(dataIndex);
      var sourceName = nodeData.getName(edge.node1.dataIndex);
      var targetName = nodeData.getName(edge.node2.dataIndex);
      var nameArr = [];
      sourceName != null && nameArr.push(sourceName);
      targetName != null && nameArr.push(targetName);
      return createTooltipMarkup("nameValue", {
        name: nameArr.join(" > "),
        value: params.value,
        noValue: params.value == null
      });
    }
    var nodeMarkup = defaultSeriesFormatTooltip({
      series: this,
      dataIndex,
      multipleSeries
    });
    return nodeMarkup;
  };
  GraphSeriesModel2.prototype._updateCategoriesData = function() {
    var categories = map(this.option.categories || [], function(category) {
      return category.value != null ? category : extend({
        value: 0
      }, category);
    });
    var categoriesData = new SeriesData(["value"], this);
    categoriesData.initData(categories);
    this._categoriesData = categoriesData;
    this._categoriesModels = categoriesData.mapArray(function(idx) {
      return categoriesData.getItemModel(idx);
    });
  };
  GraphSeriesModel2.prototype.setZoom = function(zoom) {
    this.option.zoom = zoom;
  };
  GraphSeriesModel2.prototype.setCenter = function(center2) {
    this.option.center = center2;
  };
  GraphSeriesModel2.prototype.isAnimationEnabled = function() {
    return _super.prototype.isAnimationEnabled.call(this) && !(this.get("layout") === "force" && this.get(["force", "layoutAnimation"]));
  };
  GraphSeriesModel2.type = "series.graph";
  GraphSeriesModel2.dependencies = ["grid", "polar", "geo", "singleAxis", "calendar"];
  GraphSeriesModel2.defaultOption = {
    zlevel: 0,
    z: 2,
    coordinateSystem: "view",
    legendHoverLink: true,
    layout: null,
    circular: {
      rotateLabel: false
    },
    force: {
      initLayout: null,
      repulsion: [0, 50],
      gravity: 0.1,
      friction: 0.6,
      edgeLength: 30,
      layoutAnimation: true
    },
    left: "center",
    top: "center",
    symbol: "circle",
    symbolSize: 10,
    edgeSymbol: ["none", "none"],
    edgeSymbolSize: 10,
    edgeLabel: {
      position: "middle",
      distance: 5
    },
    draggable: false,
    roam: false,
    center: null,
    zoom: 1,
    nodeScaleRatio: 0.6,
    label: {
      show: false,
      formatter: "{b}"
    },
    itemStyle: {},
    lineStyle: {
      color: "#aaa",
      width: 1,
      opacity: 0.5
    },
    emphasis: {
      scale: true,
      label: {
        show: true
      }
    },
    select: {
      itemStyle: {
        borderColor: "#212121"
      }
    }
  };
  return GraphSeriesModel2;
}(SeriesModel);
var GraphSeriesModel$1 = GraphSeriesModel;
var actionInfo = {
  type: "graphRoam",
  event: "graphRoam",
  update: "none"
};
function install$k(registers) {
  registers.registerChartView(GraphView$1);
  registers.registerSeriesModel(GraphSeriesModel$1);
  registers.registerProcessor(categoryFilter);
  registers.registerVisual(categoryVisual);
  registers.registerVisual(graphEdgeVisual);
  registers.registerLayout(graphSimpleLayout);
  registers.registerLayout(registers.PRIORITY.VISUAL.POST_CHART_LAYOUT, graphCircularLayout);
  registers.registerLayout(graphForceLayout);
  registers.registerCoordinateSystem("graphView", {
    dimensions: View.dimensions,
    create: createViewCoordSys
  });
  registers.registerAction({
    type: "focusNodeAdjacency",
    event: "focusNodeAdjacency",
    update: "series:focusNodeAdjacency"
  }, function() {
  });
  registers.registerAction({
    type: "unfocusNodeAdjacency",
    event: "unfocusNodeAdjacency",
    update: "series:unfocusNodeAdjacency"
  }, function() {
  });
  registers.registerAction(actionInfo, function(payload, ecModel) {
    ecModel.eachComponent({
      mainType: "series",
      query: payload
    }, function(seriesModel) {
      var coordSys = seriesModel.coordinateSystem;
      var res = updateCenterAndZoom(coordSys, payload);
      seriesModel.setCenter && seriesModel.setCenter(res.center);
      seriesModel.setZoom && seriesModel.setZoom(res.zoom);
    });
  });
}
var PointerShape = function() {
  function PointerShape2() {
    this.angle = 0;
    this.width = 10;
    this.r = 10;
    this.x = 0;
    this.y = 0;
  }
  return PointerShape2;
}();
var PointerPath = function(_super) {
  __extends(PointerPath2, _super);
  function PointerPath2(opts) {
    var _this = _super.call(this, opts) || this;
    _this.type = "pointer";
    return _this;
  }
  PointerPath2.prototype.getDefaultShape = function() {
    return new PointerShape();
  };
  PointerPath2.prototype.buildPath = function(ctx, shape) {
    var mathCos = Math.cos;
    var mathSin = Math.sin;
    var r = shape.r;
    var width = shape.width;
    var angle = shape.angle;
    var x = shape.x - mathCos(angle) * width * (width >= r / 3 ? 1 : 2);
    var y = shape.y - mathSin(angle) * width * (width >= r / 3 ? 1 : 2);
    angle = shape.angle - Math.PI / 2;
    ctx.moveTo(x, y);
    ctx.lineTo(shape.x + mathCos(angle) * width, shape.y + mathSin(angle) * width);
    ctx.lineTo(shape.x + mathCos(shape.angle) * r, shape.y + mathSin(shape.angle) * r);
    ctx.lineTo(shape.x - mathCos(angle) * width, shape.y - mathSin(angle) * width);
    ctx.lineTo(x, y);
  };
  return PointerPath2;
}(Path);
var PointerPath$1 = PointerPath;
function parsePosition(seriesModel, api) {
  var center2 = seriesModel.get("center");
  var width = api.getWidth();
  var height = api.getHeight();
  var size = Math.min(width, height);
  var cx = parsePercent(center2[0], api.getWidth());
  var cy = parsePercent(center2[1], api.getHeight());
  var r = parsePercent(seriesModel.get("radius"), size / 2);
  return {
    cx,
    cy,
    r
  };
}
function formatLabel(value, labelFormatter) {
  var label = value == null ? "" : value + "";
  if (labelFormatter) {
    if (typeof labelFormatter === "string") {
      label = labelFormatter.replace("{value}", label);
    } else if (typeof labelFormatter === "function") {
      label = labelFormatter(value);
    }
  }
  return label;
}
var PI2 = Math.PI * 2;
var GaugeView = function(_super) {
  __extends(GaugeView2, _super);
  function GaugeView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = GaugeView2.type;
    return _this;
  }
  GaugeView2.prototype.render = function(seriesModel, ecModel, api) {
    this.group.removeAll();
    var colorList = seriesModel.get(["axisLine", "lineStyle", "color"]);
    var posInfo = parsePosition(seriesModel, api);
    this._renderMain(seriesModel, ecModel, api, colorList, posInfo);
    this._data = seriesModel.getData();
  };
  GaugeView2.prototype.dispose = function() {
  };
  GaugeView2.prototype._renderMain = function(seriesModel, ecModel, api, colorList, posInfo) {
    var group = this.group;
    var clockwise = seriesModel.get("clockwise");
    var startAngle = -seriesModel.get("startAngle") / 180 * Math.PI;
    var endAngle = -seriesModel.get("endAngle") / 180 * Math.PI;
    var axisLineModel = seriesModel.getModel("axisLine");
    var roundCap = axisLineModel.get("roundCap");
    var MainPath = roundCap ? Sausage : Sector;
    var showAxis = axisLineModel.get("show");
    var lineStyleModel = axisLineModel.getModel("lineStyle");
    var axisLineWidth = lineStyleModel.get("width");
    var angleRangeSpan = !((endAngle - startAngle) % PI2) && endAngle !== startAngle ? PI2 : (endAngle - startAngle) % PI2;
    var prevEndAngle = startAngle;
    for (var i = 0; showAxis && i < colorList.length; i++) {
      var percent = Math.min(Math.max(colorList[i][0], 0), 1);
      endAngle = startAngle + angleRangeSpan * percent;
      var sector = new MainPath({
        shape: {
          startAngle: prevEndAngle,
          endAngle,
          cx: posInfo.cx,
          cy: posInfo.cy,
          clockwise,
          r0: posInfo.r - axisLineWidth,
          r: posInfo.r
        },
        silent: true
      });
      sector.setStyle({
        fill: colorList[i][1]
      });
      sector.setStyle(lineStyleModel.getLineStyle(["color", "width"]));
      group.add(sector);
      prevEndAngle = endAngle;
    }
    var getColor = function(percent2) {
      if (percent2 <= 0) {
        return colorList[0][1];
      }
      var i2;
      for (i2 = 0; i2 < colorList.length; i2++) {
        if (colorList[i2][0] >= percent2 && (i2 === 0 ? 0 : colorList[i2 - 1][0]) < percent2) {
          return colorList[i2][1];
        }
      }
      return colorList[i2 - 1][1];
    };
    if (!clockwise) {
      var tmp = startAngle;
      startAngle = endAngle;
      endAngle = tmp;
    }
    this._renderTicks(seriesModel, ecModel, api, getColor, posInfo, startAngle, endAngle, clockwise, axisLineWidth);
    this._renderTitleAndDetail(seriesModel, ecModel, api, getColor, posInfo);
    this._renderAnchor(seriesModel, posInfo);
    this._renderPointer(seriesModel, ecModel, api, getColor, posInfo, startAngle, endAngle, clockwise, axisLineWidth);
  };
  GaugeView2.prototype._renderTicks = function(seriesModel, ecModel, api, getColor, posInfo, startAngle, endAngle, clockwise, axisLineWidth) {
    var group = this.group;
    var cx = posInfo.cx;
    var cy = posInfo.cy;
    var r = posInfo.r;
    var minVal = +seriesModel.get("min");
    var maxVal = +seriesModel.get("max");
    var splitLineModel = seriesModel.getModel("splitLine");
    var tickModel = seriesModel.getModel("axisTick");
    var labelModel = seriesModel.getModel("axisLabel");
    var splitNumber = seriesModel.get("splitNumber");
    var subSplitNumber = tickModel.get("splitNumber");
    var splitLineLen = parsePercent(splitLineModel.get("length"), r);
    var tickLen = parsePercent(tickModel.get("length"), r);
    var angle = startAngle;
    var step = (endAngle - startAngle) / splitNumber;
    var subStep = step / subSplitNumber;
    var splitLineStyle = splitLineModel.getModel("lineStyle").getLineStyle();
    var tickLineStyle = tickModel.getModel("lineStyle").getLineStyle();
    var splitLineDistance = splitLineModel.get("distance");
    var unitX;
    var unitY;
    for (var i = 0; i <= splitNumber; i++) {
      unitX = Math.cos(angle);
      unitY = Math.sin(angle);
      if (splitLineModel.get("show")) {
        var distance = splitLineDistance ? splitLineDistance + axisLineWidth : axisLineWidth;
        var splitLine = new Line$2({
          shape: {
            x1: unitX * (r - distance) + cx,
            y1: unitY * (r - distance) + cy,
            x2: unitX * (r - splitLineLen - distance) + cx,
            y2: unitY * (r - splitLineLen - distance) + cy
          },
          style: splitLineStyle,
          silent: true
        });
        if (splitLineStyle.stroke === "auto") {
          splitLine.setStyle({
            stroke: getColor(i / splitNumber)
          });
        }
        group.add(splitLine);
      }
      if (labelModel.get("show")) {
        var distance = labelModel.get("distance") + splitLineDistance;
        var label = formatLabel(round(i / splitNumber * (maxVal - minVal) + minVal), labelModel.get("formatter"));
        var autoColor = getColor(i / splitNumber);
        group.add(new ZRText({
          style: createTextStyle(labelModel, {
            text: label,
            x: unitX * (r - splitLineLen - distance) + cx,
            y: unitY * (r - splitLineLen - distance) + cy,
            verticalAlign: unitY < -0.8 ? "top" : unitY > 0.8 ? "bottom" : "middle",
            align: unitX < -0.4 ? "left" : unitX > 0.4 ? "right" : "center"
          }, {
            inheritColor: autoColor
          }),
          silent: true
        }));
      }
      if (tickModel.get("show") && i !== splitNumber) {
        var distance = tickModel.get("distance");
        distance = distance ? distance + axisLineWidth : axisLineWidth;
        for (var j = 0; j <= subSplitNumber; j++) {
          unitX = Math.cos(angle);
          unitY = Math.sin(angle);
          var tickLine = new Line$2({
            shape: {
              x1: unitX * (r - distance) + cx,
              y1: unitY * (r - distance) + cy,
              x2: unitX * (r - tickLen - distance) + cx,
              y2: unitY * (r - tickLen - distance) + cy
            },
            silent: true,
            style: tickLineStyle
          });
          if (tickLineStyle.stroke === "auto") {
            tickLine.setStyle({
              stroke: getColor((i + j / subSplitNumber) / splitNumber)
            });
          }
          group.add(tickLine);
          angle += subStep;
        }
        angle -= subStep;
      } else {
        angle += step;
      }
    }
  };
  GaugeView2.prototype._renderPointer = function(seriesModel, ecModel, api, getColor, posInfo, startAngle, endAngle, clockwise, axisLineWidth) {
    var group = this.group;
    var oldData = this._data;
    var oldProgressData = this._progressEls;
    var progressList = [];
    var showPointer = seriesModel.get(["pointer", "show"]);
    var progressModel = seriesModel.getModel("progress");
    var showProgress = progressModel.get("show");
    var data = seriesModel.getData();
    var valueDim = data.mapDimension("value");
    var minVal = +seriesModel.get("min");
    var maxVal = +seriesModel.get("max");
    var valueExtent = [minVal, maxVal];
    var angleExtent = [startAngle, endAngle];
    function createPointer(idx, angle) {
      var itemModel = data.getItemModel(idx);
      var pointerModel = itemModel.getModel("pointer");
      var pointerWidth = parsePercent(pointerModel.get("width"), posInfo.r);
      var pointerLength = parsePercent(pointerModel.get("length"), posInfo.r);
      var pointerStr = seriesModel.get(["pointer", "icon"]);
      var pointerOffset = pointerModel.get("offsetCenter");
      var pointerOffsetX = parsePercent(pointerOffset[0], posInfo.r);
      var pointerOffsetY = parsePercent(pointerOffset[1], posInfo.r);
      var pointerKeepAspect = pointerModel.get("keepAspect");
      var pointer;
      if (pointerStr) {
        pointer = createSymbol$1(pointerStr, pointerOffsetX - pointerWidth / 2, pointerOffsetY - pointerLength, pointerWidth, pointerLength, null, pointerKeepAspect);
      } else {
        pointer = new PointerPath$1({
          shape: {
            angle: -Math.PI / 2,
            width: pointerWidth,
            r: pointerLength,
            x: pointerOffsetX,
            y: pointerOffsetY
          }
        });
      }
      pointer.rotation = -(angle + Math.PI / 2);
      pointer.x = posInfo.cx;
      pointer.y = posInfo.cy;
      return pointer;
    }
    function createProgress(idx, endAngle2) {
      var roundCap = progressModel.get("roundCap");
      var ProgressPath = roundCap ? Sausage : Sector;
      var isOverlap = progressModel.get("overlap");
      var progressWidth = isOverlap ? progressModel.get("width") : axisLineWidth / data.count();
      var r0 = isOverlap ? posInfo.r - progressWidth : posInfo.r - (idx + 1) * progressWidth;
      var r = isOverlap ? posInfo.r : posInfo.r - idx * progressWidth;
      var progress = new ProgressPath({
        shape: {
          startAngle,
          endAngle: endAngle2,
          cx: posInfo.cx,
          cy: posInfo.cy,
          clockwise,
          r0,
          r
        }
      });
      isOverlap && (progress.z2 = maxVal - data.get(valueDim, idx) % maxVal);
      return progress;
    }
    if (showProgress || showPointer) {
      data.diff(oldData).add(function(idx) {
        if (showPointer) {
          var pointer = createPointer(idx, startAngle);
          initProps(pointer, {
            rotation: -(linearMap(data.get(valueDim, idx), valueExtent, angleExtent, true) + Math.PI / 2)
          }, seriesModel);
          group.add(pointer);
          data.setItemGraphicEl(idx, pointer);
        }
        if (showProgress) {
          var progress = createProgress(idx, startAngle);
          var isClip = progressModel.get("clip");
          initProps(progress, {
            shape: {
              endAngle: linearMap(data.get(valueDim, idx), valueExtent, angleExtent, isClip)
            }
          }, seriesModel);
          group.add(progress);
          setCommonECData(seriesModel.seriesIndex, data.dataType, idx, progress);
          progressList[idx] = progress;
        }
      }).update(function(newIdx, oldIdx) {
        if (showPointer) {
          var previousPointer = oldData.getItemGraphicEl(oldIdx);
          var previousRotate = previousPointer ? previousPointer.rotation : startAngle;
          var pointer = createPointer(newIdx, previousRotate);
          pointer.rotation = previousRotate;
          updateProps(pointer, {
            rotation: -(linearMap(data.get(valueDim, newIdx), valueExtent, angleExtent, true) + Math.PI / 2)
          }, seriesModel);
          group.add(pointer);
          data.setItemGraphicEl(newIdx, pointer);
        }
        if (showProgress) {
          var previousProgress = oldProgressData[oldIdx];
          var previousEndAngle = previousProgress ? previousProgress.shape.endAngle : startAngle;
          var progress = createProgress(newIdx, previousEndAngle);
          var isClip = progressModel.get("clip");
          updateProps(progress, {
            shape: {
              endAngle: linearMap(data.get(valueDim, newIdx), valueExtent, angleExtent, isClip)
            }
          }, seriesModel);
          group.add(progress);
          setCommonECData(seriesModel.seriesIndex, data.dataType, newIdx, progress);
          progressList[newIdx] = progress;
        }
      }).execute();
      data.each(function(idx) {
        var itemModel = data.getItemModel(idx);
        var emphasisModel = itemModel.getModel("emphasis");
        if (showPointer) {
          var pointer = data.getItemGraphicEl(idx);
          var symbolStyle = data.getItemVisual(idx, "style");
          var visualColor = symbolStyle.fill;
          if (pointer instanceof ZRImage) {
            var pathStyle = pointer.style;
            pointer.useStyle(extend({
              image: pathStyle.image,
              x: pathStyle.x,
              y: pathStyle.y,
              width: pathStyle.width,
              height: pathStyle.height
            }, symbolStyle));
          } else {
            pointer.useStyle(symbolStyle);
            pointer.type !== "pointer" && pointer.setColor(visualColor);
          }
          pointer.setStyle(itemModel.getModel(["pointer", "itemStyle"]).getItemStyle());
          if (pointer.style.fill === "auto") {
            pointer.setStyle("fill", getColor(linearMap(data.get(valueDim, idx), valueExtent, [0, 1], true)));
          }
          pointer.z2EmphasisLift = 0;
          setStatesStylesFromModel(pointer, itemModel);
          enableHoverEmphasis(pointer, emphasisModel.get("focus"), emphasisModel.get("blurScope"));
        }
        if (showProgress) {
          var progress = progressList[idx];
          progress.useStyle(data.getItemVisual(idx, "style"));
          progress.setStyle(itemModel.getModel(["progress", "itemStyle"]).getItemStyle());
          progress.z2EmphasisLift = 0;
          setStatesStylesFromModel(progress, itemModel);
          enableHoverEmphasis(progress, emphasisModel.get("focus"), emphasisModel.get("blurScope"));
        }
      });
      this._progressEls = progressList;
    }
  };
  GaugeView2.prototype._renderAnchor = function(seriesModel, posInfo) {
    var anchorModel = seriesModel.getModel("anchor");
    var showAnchor = anchorModel.get("show");
    if (showAnchor) {
      var anchorSize = anchorModel.get("size");
      var anchorType = anchorModel.get("icon");
      var offsetCenter = anchorModel.get("offsetCenter");
      var anchorKeepAspect = anchorModel.get("keepAspect");
      var anchor = createSymbol$1(anchorType, posInfo.cx - anchorSize / 2 + parsePercent(offsetCenter[0], posInfo.r), posInfo.cy - anchorSize / 2 + parsePercent(offsetCenter[1], posInfo.r), anchorSize, anchorSize, null, anchorKeepAspect);
      anchor.z2 = anchorModel.get("showAbove") ? 1 : 0;
      anchor.setStyle(anchorModel.getModel("itemStyle").getItemStyle());
      this.group.add(anchor);
    }
  };
  GaugeView2.prototype._renderTitleAndDetail = function(seriesModel, ecModel, api, getColor, posInfo) {
    var _this = this;
    var data = seriesModel.getData();
    var valueDim = data.mapDimension("value");
    var minVal = +seriesModel.get("min");
    var maxVal = +seriesModel.get("max");
    var contentGroup = new Group$1();
    var newTitleEls = [];
    var newDetailEls = [];
    var hasAnimation = seriesModel.isAnimationEnabled();
    var showPointerAbove = seriesModel.get(["pointer", "showAbove"]);
    data.diff(this._data).add(function(idx) {
      newTitleEls[idx] = new ZRText({
        silent: true
      });
      newDetailEls[idx] = new ZRText({
        silent: true
      });
    }).update(function(idx, oldIdx) {
      newTitleEls[idx] = _this._titleEls[oldIdx];
      newDetailEls[idx] = _this._detailEls[oldIdx];
    }).execute();
    data.each(function(idx) {
      var itemModel = data.getItemModel(idx);
      var value = data.get(valueDim, idx);
      var itemGroup = new Group$1();
      var autoColor = getColor(linearMap(value, [minVal, maxVal], [0, 1], true));
      var itemTitleModel = itemModel.getModel("title");
      if (itemTitleModel.get("show")) {
        var titleOffsetCenter = itemTitleModel.get("offsetCenter");
        var titleX = posInfo.cx + parsePercent(titleOffsetCenter[0], posInfo.r);
        var titleY = posInfo.cy + parsePercent(titleOffsetCenter[1], posInfo.r);
        var labelEl = newTitleEls[idx];
        labelEl.attr({
          z2: showPointerAbove ? 0 : 2,
          style: createTextStyle(itemTitleModel, {
            x: titleX,
            y: titleY,
            text: data.getName(idx),
            align: "center",
            verticalAlign: "middle"
          }, {
            inheritColor: autoColor
          })
        });
        itemGroup.add(labelEl);
      }
      var itemDetailModel = itemModel.getModel("detail");
      if (itemDetailModel.get("show")) {
        var detailOffsetCenter = itemDetailModel.get("offsetCenter");
        var detailX = posInfo.cx + parsePercent(detailOffsetCenter[0], posInfo.r);
        var detailY = posInfo.cy + parsePercent(detailOffsetCenter[1], posInfo.r);
        var width = parsePercent(itemDetailModel.get("width"), posInfo.r);
        var height = parsePercent(itemDetailModel.get("height"), posInfo.r);
        var detailColor = seriesModel.get(["progress", "show"]) ? data.getItemVisual(idx, "style").fill : autoColor;
        var labelEl = newDetailEls[idx];
        var formatter_1 = itemDetailModel.get("formatter");
        labelEl.attr({
          z2: showPointerAbove ? 0 : 2,
          style: createTextStyle(itemDetailModel, {
            x: detailX,
            y: detailY,
            text: formatLabel(value, formatter_1),
            width: isNaN(width) ? null : width,
            height: isNaN(height) ? null : height,
            align: "center",
            verticalAlign: "middle"
          }, {
            inheritColor: detailColor
          })
        });
        setLabelValueAnimation(labelEl, {
          normal: itemDetailModel
        }, value, function(value2) {
          return formatLabel(value2, formatter_1);
        });
        hasAnimation && animateLabelValue(labelEl, idx, data, seriesModel, {
          getFormattedLabel: function(labelDataIndex, status, dataType, labelDimIndex, fmt, extendParams) {
            return formatLabel(extendParams ? extendParams.interpolatedValue : value, formatter_1);
          }
        });
        itemGroup.add(labelEl);
      }
      contentGroup.add(itemGroup);
    });
    this.group.add(contentGroup);
    this._titleEls = newTitleEls;
    this._detailEls = newDetailEls;
  };
  GaugeView2.type = "gauge";
  return GaugeView2;
}(ChartView);
var GaugeView$1 = GaugeView;
var GaugeSeriesModel = function(_super) {
  __extends(GaugeSeriesModel2, _super);
  function GaugeSeriesModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = GaugeSeriesModel2.type;
    _this.visualStyleAccessPath = "itemStyle";
    return _this;
  }
  GaugeSeriesModel2.prototype.getInitialData = function(option, ecModel) {
    return createSeriesDataSimply(this, ["value"]);
  };
  GaugeSeriesModel2.type = "series.gauge";
  GaugeSeriesModel2.defaultOption = {
    zlevel: 0,
    z: 2,
    colorBy: "data",
    center: ["50%", "50%"],
    legendHoverLink: true,
    radius: "75%",
    startAngle: 225,
    endAngle: -45,
    clockwise: true,
    min: 0,
    max: 100,
    splitNumber: 10,
    axisLine: {
      show: true,
      roundCap: false,
      lineStyle: {
        color: [[1, "#E6EBF8"]],
        width: 10
      }
    },
    progress: {
      show: false,
      overlap: true,
      width: 10,
      roundCap: false,
      clip: true
    },
    splitLine: {
      show: true,
      length: 10,
      distance: 10,
      lineStyle: {
        color: "#63677A",
        width: 3,
        type: "solid"
      }
    },
    axisTick: {
      show: true,
      splitNumber: 5,
      length: 6,
      distance: 10,
      lineStyle: {
        color: "#63677A",
        width: 1,
        type: "solid"
      }
    },
    axisLabel: {
      show: true,
      distance: 15,
      color: "#464646",
      fontSize: 12
    },
    pointer: {
      icon: null,
      offsetCenter: [0, 0],
      show: true,
      showAbove: true,
      length: "60%",
      width: 6,
      keepAspect: false
    },
    anchor: {
      show: false,
      showAbove: false,
      size: 6,
      icon: "circle",
      offsetCenter: [0, 0],
      keepAspect: false,
      itemStyle: {
        color: "#fff",
        borderWidth: 0,
        borderColor: "#5470c6"
      }
    },
    title: {
      show: true,
      offsetCenter: [0, "20%"],
      color: "#464646",
      fontSize: 16,
      valueAnimation: false
    },
    detail: {
      show: true,
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      borderColor: "#ccc",
      width: 100,
      height: null,
      padding: [5, 10],
      offsetCenter: [0, "40%"],
      color: "#464646",
      fontSize: 30,
      fontWeight: "bold",
      lineHeight: 30,
      valueAnimation: false
    }
  };
  return GaugeSeriesModel2;
}(SeriesModel);
var GaugeSeriesModel$1 = GaugeSeriesModel;
function install$j(registers) {
  registers.registerChartView(GaugeView$1);
  registers.registerSeriesModel(GaugeSeriesModel$1);
}
var opacityAccessPath$1 = ["itemStyle", "opacity"];
var FunnelPiece = function(_super) {
  __extends(FunnelPiece2, _super);
  function FunnelPiece2(data, idx) {
    var _this = _super.call(this) || this;
    var polygon = _this;
    var labelLine = new Polyline$2();
    var text = new ZRText();
    polygon.setTextContent(text);
    _this.setTextGuideLine(labelLine);
    _this.updateData(data, idx, true);
    return _this;
  }
  FunnelPiece2.prototype.updateData = function(data, idx, firstCreate) {
    var polygon = this;
    var seriesModel = data.hostModel;
    var itemModel = data.getItemModel(idx);
    var layout2 = data.getItemLayout(idx);
    var emphasisModel = itemModel.getModel("emphasis");
    var opacity = itemModel.get(opacityAccessPath$1);
    opacity = opacity == null ? 1 : opacity;
    if (!firstCreate) {
      saveOldStyle(polygon);
    }
    polygon.useStyle(data.getItemVisual(idx, "style"));
    polygon.style.lineJoin = "round";
    if (firstCreate) {
      polygon.setShape({
        points: layout2.points
      });
      polygon.style.opacity = 0;
      initProps(polygon, {
        style: {
          opacity
        }
      }, seriesModel, idx);
    } else {
      updateProps(polygon, {
        style: {
          opacity
        },
        shape: {
          points: layout2.points
        }
      }, seriesModel, idx);
    }
    setStatesStylesFromModel(polygon, itemModel);
    this._updateLabel(data, idx);
    enableHoverEmphasis(this, emphasisModel.get("focus"), emphasisModel.get("blurScope"));
  };
  FunnelPiece2.prototype._updateLabel = function(data, idx) {
    var polygon = this;
    var labelLine = this.getTextGuideLine();
    var labelText = polygon.getTextContent();
    var seriesModel = data.hostModel;
    var itemModel = data.getItemModel(idx);
    var layout2 = data.getItemLayout(idx);
    var labelLayout2 = layout2.label;
    var style = data.getItemVisual(idx, "style");
    var visualColor = style.fill;
    setLabelStyle(labelText, getLabelStatesModels(itemModel), {
      labelFetcher: data.hostModel,
      labelDataIndex: idx,
      defaultOpacity: style.opacity,
      defaultText: data.getName(idx)
    }, {
      normal: {
        align: labelLayout2.textAlign,
        verticalAlign: labelLayout2.verticalAlign
      }
    });
    polygon.setTextConfig({
      local: true,
      inside: !!labelLayout2.inside,
      insideStroke: visualColor,
      outsideFill: visualColor
    });
    var linePoints = labelLayout2.linePoints;
    labelLine.setShape({
      points: linePoints
    });
    polygon.textGuideLineConfig = {
      anchor: linePoints ? new Point(linePoints[0][0], linePoints[0][1]) : null
    };
    updateProps(labelText, {
      style: {
        x: labelLayout2.x,
        y: labelLayout2.y
      }
    }, seriesModel, idx);
    labelText.attr({
      rotation: labelLayout2.rotation,
      originX: labelLayout2.x,
      originY: labelLayout2.y,
      z2: 10
    });
    setLabelLineStyle(polygon, getLabelLineStatesModels(itemModel), {
      stroke: visualColor
    });
  };
  return FunnelPiece2;
}(Polygon);
var FunnelView = function(_super) {
  __extends(FunnelView2, _super);
  function FunnelView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = FunnelView2.type;
    _this.ignoreLabelLineUpdate = true;
    return _this;
  }
  FunnelView2.prototype.render = function(seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var oldData = this._data;
    var group = this.group;
    data.diff(oldData).add(function(idx) {
      var funnelPiece = new FunnelPiece(data, idx);
      data.setItemGraphicEl(idx, funnelPiece);
      group.add(funnelPiece);
    }).update(function(newIdx, oldIdx) {
      var piece = oldData.getItemGraphicEl(oldIdx);
      piece.updateData(data, newIdx);
      group.add(piece);
      data.setItemGraphicEl(newIdx, piece);
    }).remove(function(idx) {
      var piece = oldData.getItemGraphicEl(idx);
      removeElementWithFadeOut(piece, seriesModel, idx);
    }).execute();
    this._data = data;
  };
  FunnelView2.prototype.remove = function() {
    this.group.removeAll();
    this._data = null;
  };
  FunnelView2.prototype.dispose = function() {
  };
  FunnelView2.type = "funnel";
  return FunnelView2;
}(ChartView);
var FunnelView$1 = FunnelView;
var FunnelSeriesModel = function(_super) {
  __extends(FunnelSeriesModel2, _super);
  function FunnelSeriesModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = FunnelSeriesModel2.type;
    return _this;
  }
  FunnelSeriesModel2.prototype.init = function(option) {
    _super.prototype.init.apply(this, arguments);
    this.legendVisualProvider = new LegendVisualProvider(bind(this.getData, this), bind(this.getRawData, this));
    this._defaultLabelLine(option);
  };
  FunnelSeriesModel2.prototype.getInitialData = function(option, ecModel) {
    return createSeriesDataSimply(this, {
      coordDimensions: ["value"],
      encodeDefaulter: curry(makeSeriesEncodeForNameBased, this)
    });
  };
  FunnelSeriesModel2.prototype._defaultLabelLine = function(option) {
    defaultEmphasis(option, "labelLine", ["show"]);
    var labelLineNormalOpt = option.labelLine;
    var labelLineEmphasisOpt = option.emphasis.labelLine;
    labelLineNormalOpt.show = labelLineNormalOpt.show && option.label.show;
    labelLineEmphasisOpt.show = labelLineEmphasisOpt.show && option.emphasis.label.show;
  };
  FunnelSeriesModel2.prototype.getDataParams = function(dataIndex) {
    var data = this.getData();
    var params = _super.prototype.getDataParams.call(this, dataIndex);
    var valueDim = data.mapDimension("value");
    var sum2 = data.getSum(valueDim);
    params.percent = !sum2 ? 0 : +(data.get(valueDim, dataIndex) / sum2 * 100).toFixed(2);
    params.$vars.push("percent");
    return params;
  };
  FunnelSeriesModel2.type = "series.funnel";
  FunnelSeriesModel2.defaultOption = {
    zlevel: 0,
    z: 2,
    legendHoverLink: true,
    colorBy: "data",
    left: 80,
    top: 60,
    right: 80,
    bottom: 60,
    minSize: "0%",
    maxSize: "100%",
    sort: "descending",
    orient: "vertical",
    gap: 0,
    funnelAlign: "center",
    label: {
      show: true,
      position: "outer"
    },
    labelLine: {
      show: true,
      length: 20,
      lineStyle: {
        width: 1
      }
    },
    itemStyle: {
      borderColor: "#fff",
      borderWidth: 1
    },
    emphasis: {
      label: {
        show: true
      }
    },
    select: {
      itemStyle: {
        borderColor: "#212121"
      }
    }
  };
  return FunnelSeriesModel2;
}(SeriesModel);
var FunnelSeriesModel$1 = FunnelSeriesModel;
function getViewRect$1(seriesModel, api) {
  return getLayoutRect(seriesModel.getBoxLayoutParams(), {
    width: api.getWidth(),
    height: api.getHeight()
  });
}
function getSortedIndices(data, sort2) {
  var valueDim = data.mapDimension("value");
  var valueArr = data.mapArray(valueDim, function(val) {
    return val;
  });
  var indices = [];
  var isAscending = sort2 === "ascending";
  for (var i = 0, len2 = data.count(); i < len2; i++) {
    indices[i] = i;
  }
  if (typeof sort2 === "function") {
    indices.sort(sort2);
  } else if (sort2 !== "none") {
    indices.sort(function(a, b) {
      return isAscending ? valueArr[a] - valueArr[b] : valueArr[b] - valueArr[a];
    });
  }
  return indices;
}
function labelLayout(data) {
  var seriesModel = data.hostModel;
  var orient = seriesModel.get("orient");
  data.each(function(idx) {
    var itemModel = data.getItemModel(idx);
    var labelModel = itemModel.getModel("label");
    var labelPosition = labelModel.get("position");
    var labelLineModel = itemModel.getModel("labelLine");
    var layout2 = data.getItemLayout(idx);
    var points = layout2.points;
    var isLabelInside = labelPosition === "inner" || labelPosition === "inside" || labelPosition === "center" || labelPosition === "insideLeft" || labelPosition === "insideRight";
    var textAlign;
    var textX;
    var textY;
    var linePoints;
    if (isLabelInside) {
      if (labelPosition === "insideLeft") {
        textX = (points[0][0] + points[3][0]) / 2 + 5;
        textY = (points[0][1] + points[3][1]) / 2;
        textAlign = "left";
      } else if (labelPosition === "insideRight") {
        textX = (points[1][0] + points[2][0]) / 2 - 5;
        textY = (points[1][1] + points[2][1]) / 2;
        textAlign = "right";
      } else {
        textX = (points[0][0] + points[1][0] + points[2][0] + points[3][0]) / 4;
        textY = (points[0][1] + points[1][1] + points[2][1] + points[3][1]) / 4;
        textAlign = "center";
      }
      linePoints = [[textX, textY], [textX, textY]];
    } else {
      var x1 = void 0;
      var y1 = void 0;
      var x2 = void 0;
      var y2 = void 0;
      var labelLineLen = labelLineModel.get("length");
      if (labelPosition === "left") {
        x1 = (points[3][0] + points[0][0]) / 2;
        y1 = (points[3][1] + points[0][1]) / 2;
        x2 = x1 - labelLineLen;
        textX = x2 - 5;
        textAlign = "right";
      } else if (labelPosition === "right") {
        x1 = (points[1][0] + points[2][0]) / 2;
        y1 = (points[1][1] + points[2][1]) / 2;
        x2 = x1 + labelLineLen;
        textX = x2 + 5;
        textAlign = "left";
      } else if (labelPosition === "top") {
        x1 = (points[3][0] + points[0][0]) / 2;
        y1 = (points[3][1] + points[0][1]) / 2;
        y2 = y1 - labelLineLen;
        textY = y2 - 5;
        textAlign = "center";
      } else if (labelPosition === "bottom") {
        x1 = (points[1][0] + points[2][0]) / 2;
        y1 = (points[1][1] + points[2][1]) / 2;
        y2 = y1 + labelLineLen;
        textY = y2 + 5;
        textAlign = "center";
      } else if (labelPosition === "rightTop") {
        x1 = orient === "horizontal" ? points[3][0] : points[1][0];
        y1 = orient === "horizontal" ? points[3][1] : points[1][1];
        if (orient === "horizontal") {
          y2 = y1 - labelLineLen;
          textY = y2 - 5;
          textAlign = "center";
        } else {
          x2 = x1 + labelLineLen;
          textX = x2 + 5;
          textAlign = "top";
        }
      } else if (labelPosition === "rightBottom") {
        x1 = points[2][0];
        y1 = points[2][1];
        if (orient === "horizontal") {
          y2 = y1 + labelLineLen;
          textY = y2 + 5;
          textAlign = "center";
        } else {
          x2 = x1 + labelLineLen;
          textX = x2 + 5;
          textAlign = "bottom";
        }
      } else if (labelPosition === "leftTop") {
        x1 = points[0][0];
        y1 = orient === "horizontal" ? points[0][1] : points[1][1];
        if (orient === "horizontal") {
          y2 = y1 - labelLineLen;
          textY = y2 - 5;
          textAlign = "center";
        } else {
          x2 = x1 - labelLineLen;
          textX = x2 - 5;
          textAlign = "right";
        }
      } else if (labelPosition === "leftBottom") {
        x1 = orient === "horizontal" ? points[1][0] : points[3][0];
        y1 = orient === "horizontal" ? points[1][1] : points[2][1];
        if (orient === "horizontal") {
          y2 = y1 + labelLineLen;
          textY = y2 + 5;
          textAlign = "center";
        } else {
          x2 = x1 - labelLineLen;
          textX = x2 - 5;
          textAlign = "right";
        }
      } else {
        x1 = (points[1][0] + points[2][0]) / 2;
        y1 = (points[1][1] + points[2][1]) / 2;
        if (orient === "horizontal") {
          y2 = y1 + labelLineLen;
          textY = y2 + 5;
          textAlign = "center";
        } else {
          x2 = x1 + labelLineLen;
          textX = x2 + 5;
          textAlign = "left";
        }
      }
      if (orient === "horizontal") {
        x2 = x1;
        textX = x2;
      } else {
        y2 = y1;
        textY = y2;
      }
      linePoints = [[x1, y1], [x2, y2]];
    }
    layout2.label = {
      linePoints,
      x: textX,
      y: textY,
      verticalAlign: "middle",
      textAlign,
      inside: isLabelInside
    };
  });
}
function funnelLayout(ecModel, api) {
  ecModel.eachSeriesByType("funnel", function(seriesModel) {
    var data = seriesModel.getData();
    var valueDim = data.mapDimension("value");
    var sort2 = seriesModel.get("sort");
    var viewRect = getViewRect$1(seriesModel, api);
    var orient = seriesModel.get("orient");
    var viewWidth = viewRect.width;
    var viewHeight = viewRect.height;
    var indices = getSortedIndices(data, sort2);
    var x = viewRect.x;
    var y = viewRect.y;
    var sizeExtent = orient === "horizontal" ? [parsePercent(seriesModel.get("minSize"), viewHeight), parsePercent(seriesModel.get("maxSize"), viewHeight)] : [parsePercent(seriesModel.get("minSize"), viewWidth), parsePercent(seriesModel.get("maxSize"), viewWidth)];
    var dataExtent = data.getDataExtent(valueDim);
    var min = seriesModel.get("min");
    var max = seriesModel.get("max");
    if (min == null) {
      min = Math.min(dataExtent[0], 0);
    }
    if (max == null) {
      max = dataExtent[1];
    }
    var funnelAlign = seriesModel.get("funnelAlign");
    var gap = seriesModel.get("gap");
    var viewSize = orient === "horizontal" ? viewWidth : viewHeight;
    var itemSize = (viewSize - gap * (data.count() - 1)) / data.count();
    var getLinePoints = function(idx2, offset) {
      if (orient === "horizontal") {
        var val_1 = data.get(valueDim, idx2) || 0;
        var itemHeight = linearMap(val_1, [min, max], sizeExtent, true);
        var y0 = void 0;
        switch (funnelAlign) {
          case "top":
            y0 = y;
            break;
          case "center":
            y0 = y + (viewHeight - itemHeight) / 2;
            break;
          case "bottom":
            y0 = y + (viewHeight - itemHeight);
            break;
        }
        return [[offset, y0], [offset, y0 + itemHeight]];
      }
      var val = data.get(valueDim, idx2) || 0;
      var itemWidth = linearMap(val, [min, max], sizeExtent, true);
      var x0;
      switch (funnelAlign) {
        case "left":
          x0 = x;
          break;
        case "center":
          x0 = x + (viewWidth - itemWidth) / 2;
          break;
        case "right":
          x0 = x + viewWidth - itemWidth;
          break;
      }
      return [[x0, offset], [x0 + itemWidth, offset]];
    };
    if (sort2 === "ascending") {
      itemSize = -itemSize;
      gap = -gap;
      if (orient === "horizontal") {
        x += viewWidth;
      } else {
        y += viewHeight;
      }
      indices = indices.reverse();
    }
    for (var i = 0; i < indices.length; i++) {
      var idx = indices[i];
      var nextIdx = indices[i + 1];
      var itemModel = data.getItemModel(idx);
      if (orient === "horizontal") {
        var width = itemModel.get(["itemStyle", "width"]);
        if (width == null) {
          width = itemSize;
        } else {
          width = parsePercent(width, viewWidth);
          if (sort2 === "ascending") {
            width = -width;
          }
        }
        var start = getLinePoints(idx, x);
        var end = getLinePoints(nextIdx, x + width);
        x += width + gap;
        data.setItemLayout(idx, {
          points: start.concat(end.slice().reverse())
        });
      } else {
        var height = itemModel.get(["itemStyle", "height"]);
        if (height == null) {
          height = itemSize;
        } else {
          height = parsePercent(height, viewHeight);
          if (sort2 === "ascending") {
            height = -height;
          }
        }
        var start = getLinePoints(idx, y);
        var end = getLinePoints(nextIdx, y + height);
        y += height + gap;
        data.setItemLayout(idx, {
          points: start.concat(end.slice().reverse())
        });
      }
    }
    labelLayout(data);
  });
}
function install$i(registers) {
  registers.registerChartView(FunnelView$1);
  registers.registerSeriesModel(FunnelSeriesModel$1);
  registers.registerLayout(funnelLayout);
  registers.registerProcessor(dataFilter$1("funnel"));
}
var DEFAULT_SMOOTH = 0.3;
var ParallelView = function(_super) {
  __extends(ParallelView2, _super);
  function ParallelView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ParallelView2.type;
    _this._dataGroup = new Group$1();
    _this._initialized = false;
    return _this;
  }
  ParallelView2.prototype.init = function() {
    this.group.add(this._dataGroup);
  };
  ParallelView2.prototype.render = function(seriesModel, ecModel, api, payload) {
    var dataGroup = this._dataGroup;
    var data = seriesModel.getData();
    var oldData = this._data;
    var coordSys = seriesModel.coordinateSystem;
    var dimensions = coordSys.dimensions;
    var seriesScope = makeSeriesScope(seriesModel);
    data.diff(oldData).add(add).update(update).remove(remove).execute();
    function add(newDataIndex) {
      var line = addEl(data, dataGroup, newDataIndex, dimensions, coordSys);
      updateElCommon(line, data, newDataIndex, seriesScope);
    }
    function update(newDataIndex, oldDataIndex) {
      var line = oldData.getItemGraphicEl(oldDataIndex);
      var points = createLinePoints(data, newDataIndex, dimensions, coordSys);
      data.setItemGraphicEl(newDataIndex, line);
      updateProps(line, {
        shape: {
          points
        }
      }, seriesModel, newDataIndex);
      saveOldStyle(line);
      updateElCommon(line, data, newDataIndex, seriesScope);
    }
    function remove(oldDataIndex) {
      var line = oldData.getItemGraphicEl(oldDataIndex);
      dataGroup.remove(line);
    }
    if (!this._initialized) {
      this._initialized = true;
      var clipPath = createGridClipShape$2(coordSys, seriesModel, function() {
        setTimeout(function() {
          dataGroup.removeClipPath();
        });
      });
      dataGroup.setClipPath(clipPath);
    }
    this._data = data;
  };
  ParallelView2.prototype.incrementalPrepareRender = function(seriesModel, ecModel, api) {
    this._initialized = true;
    this._data = null;
    this._dataGroup.removeAll();
  };
  ParallelView2.prototype.incrementalRender = function(taskParams, seriesModel, ecModel) {
    var data = seriesModel.getData();
    var coordSys = seriesModel.coordinateSystem;
    var dimensions = coordSys.dimensions;
    var seriesScope = makeSeriesScope(seriesModel);
    for (var dataIndex = taskParams.start; dataIndex < taskParams.end; dataIndex++) {
      var line = addEl(data, this._dataGroup, dataIndex, dimensions, coordSys);
      line.incremental = true;
      updateElCommon(line, data, dataIndex, seriesScope);
    }
  };
  ParallelView2.prototype.remove = function() {
    this._dataGroup && this._dataGroup.removeAll();
    this._data = null;
  };
  ParallelView2.type = "parallel";
  return ParallelView2;
}(ChartView);
function createGridClipShape$2(coordSys, seriesModel, cb) {
  var parallelModel = coordSys.model;
  var rect = coordSys.getRect();
  var rectEl = new Rect$1({
    shape: {
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height
    }
  });
  var dim = parallelModel.get("layout") === "horizontal" ? "width" : "height";
  rectEl.setShape(dim, 0);
  initProps(rectEl, {
    shape: {
      width: rect.width,
      height: rect.height
    }
  }, seriesModel, cb);
  return rectEl;
}
function createLinePoints(data, dataIndex, dimensions, coordSys) {
  var points = [];
  for (var i = 0; i < dimensions.length; i++) {
    var dimName = dimensions[i];
    var value = data.get(data.mapDimension(dimName), dataIndex);
    if (!isEmptyValue(value, coordSys.getAxis(dimName).type)) {
      points.push(coordSys.dataToPoint(value, dimName));
    }
  }
  return points;
}
function addEl(data, dataGroup, dataIndex, dimensions, coordSys) {
  var points = createLinePoints(data, dataIndex, dimensions, coordSys);
  var line = new Polyline$2({
    shape: {
      points
    },
    z2: 10
  });
  dataGroup.add(line);
  data.setItemGraphicEl(dataIndex, line);
  return line;
}
function makeSeriesScope(seriesModel) {
  var smooth = seriesModel.get("smooth", true);
  smooth === true && (smooth = DEFAULT_SMOOTH);
  smooth = numericToNumber(smooth);
  eqNaN(smooth) && (smooth = 0);
  return {
    smooth
  };
}
function updateElCommon(el, data, dataIndex, seriesScope) {
  el.useStyle(data.getItemVisual(dataIndex, "style"));
  el.style.fill = null;
  el.setShape("smooth", seriesScope.smooth);
  var itemModel = data.getItemModel(dataIndex);
  var emphasisModel = itemModel.getModel("emphasis");
  setStatesStylesFromModel(el, itemModel, "lineStyle");
  enableHoverEmphasis(el, emphasisModel.get("focus"), emphasisModel.get("blurScope"));
}
function isEmptyValue(val, axisType) {
  return axisType === "category" ? val == null : val == null || isNaN(val);
}
var ParallelView$1 = ParallelView;
var ParallelSeriesModel = function(_super) {
  __extends(ParallelSeriesModel2, _super);
  function ParallelSeriesModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ParallelSeriesModel2.type;
    _this.visualStyleAccessPath = "lineStyle";
    _this.visualDrawType = "stroke";
    return _this;
  }
  ParallelSeriesModel2.prototype.getInitialData = function(option, ecModel) {
    return createSeriesData(null, this, {
      useEncodeDefaulter: bind(makeDefaultEncode, null, this)
    });
  };
  ParallelSeriesModel2.prototype.getRawIndicesByActiveState = function(activeState) {
    var coordSys = this.coordinateSystem;
    var data = this.getData();
    var indices = [];
    coordSys.eachActiveState(data, function(theActiveState, dataIndex) {
      if (activeState === theActiveState) {
        indices.push(data.getRawIndex(dataIndex));
      }
    });
    return indices;
  };
  ParallelSeriesModel2.type = "series.parallel";
  ParallelSeriesModel2.dependencies = ["parallel"];
  ParallelSeriesModel2.defaultOption = {
    zlevel: 0,
    z: 2,
    coordinateSystem: "parallel",
    parallelIndex: 0,
    label: {
      show: false
    },
    inactiveOpacity: 0.05,
    activeOpacity: 1,
    lineStyle: {
      width: 1,
      opacity: 0.45,
      type: "solid"
    },
    emphasis: {
      label: {
        show: false
      }
    },
    progressive: 500,
    smooth: false,
    animationEasing: "linear"
  };
  return ParallelSeriesModel2;
}(SeriesModel);
function makeDefaultEncode(seriesModel) {
  var parallelModel = seriesModel.ecModel.getComponent("parallel", seriesModel.get("parallelIndex"));
  if (!parallelModel) {
    return;
  }
  var encodeDefine = {};
  each$2(parallelModel.dimensions, function(axisDim) {
    var dataDimIndex = convertDimNameToNumber(axisDim);
    encodeDefine[axisDim] = dataDimIndex;
  });
  return encodeDefine;
}
function convertDimNameToNumber(dimName) {
  return +dimName.replace("dim", "");
}
var ParallelSeriesModel$1 = ParallelSeriesModel;
var opacityAccessPath = ["lineStyle", "opacity"];
var parallelVisual = {
  seriesType: "parallel",
  reset: function(seriesModel, ecModel) {
    var coordSys = seriesModel.coordinateSystem;
    var opacityMap = {
      normal: seriesModel.get(["lineStyle", "opacity"]),
      active: seriesModel.get("activeOpacity"),
      inactive: seriesModel.get("inactiveOpacity")
    };
    return {
      progress: function(params, data) {
        coordSys.eachActiveState(data, function(activeState, dataIndex) {
          var opacity = opacityMap[activeState];
          if (activeState === "normal" && data.hasItemOption) {
            var itemOpacity = data.getItemModel(dataIndex).get(opacityAccessPath, true);
            itemOpacity != null && (opacity = itemOpacity);
          }
          var existsStyle = data.ensureUniqueItemVisual(dataIndex, "style");
          existsStyle.opacity = opacity;
        }, params.start, params.end);
      }
    };
  }
};
var parallelVisual$1 = parallelVisual;
function install$h(registers) {
  use(install$p);
  registers.registerChartView(ParallelView$1);
  registers.registerSeriesModel(ParallelSeriesModel$1);
  registers.registerVisual(registers.PRIORITY.VISUAL.BRUSH, parallelVisual$1);
}
var SankeyPathShape = function() {
  function SankeyPathShape2() {
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = 0;
    this.cpx1 = 0;
    this.cpy1 = 0;
    this.cpx2 = 0;
    this.cpy2 = 0;
    this.extent = 0;
  }
  return SankeyPathShape2;
}();
var SankeyPath = function(_super) {
  __extends(SankeyPath2, _super);
  function SankeyPath2(opts) {
    return _super.call(this, opts) || this;
  }
  SankeyPath2.prototype.getDefaultShape = function() {
    return new SankeyPathShape();
  };
  SankeyPath2.prototype.buildPath = function(ctx, shape) {
    var extent = shape.extent;
    ctx.moveTo(shape.x1, shape.y1);
    ctx.bezierCurveTo(shape.cpx1, shape.cpy1, shape.cpx2, shape.cpy2, shape.x2, shape.y2);
    if (shape.orient === "vertical") {
      ctx.lineTo(shape.x2 + extent, shape.y2);
      ctx.bezierCurveTo(shape.cpx2 + extent, shape.cpy2, shape.cpx1 + extent, shape.cpy1, shape.x1 + extent, shape.y1);
    } else {
      ctx.lineTo(shape.x2, shape.y2 + extent);
      ctx.bezierCurveTo(shape.cpx2, shape.cpy2 + extent, shape.cpx1, shape.cpy1 + extent, shape.x1, shape.y1 + extent);
    }
    ctx.closePath();
  };
  SankeyPath2.prototype.highlight = function() {
    enterEmphasis(this);
  };
  SankeyPath2.prototype.downplay = function() {
    leaveEmphasis(this);
  };
  return SankeyPath2;
}(Path);
var SankeyView = function(_super) {
  __extends(SankeyView2, _super);
  function SankeyView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SankeyView2.type;
    _this._focusAdjacencyDisabled = false;
    return _this;
  }
  SankeyView2.prototype.render = function(seriesModel, ecModel, api) {
    var sankeyView = this;
    var graph = seriesModel.getGraph();
    var group = this.group;
    var layoutInfo = seriesModel.layoutInfo;
    var width = layoutInfo.width;
    var height = layoutInfo.height;
    var nodeData = seriesModel.getData();
    var edgeData = seriesModel.getData("edge");
    var orient = seriesModel.get("orient");
    this._model = seriesModel;
    group.removeAll();
    group.x = layoutInfo.x;
    group.y = layoutInfo.y;
    graph.eachEdge(function(edge) {
      var curve = new SankeyPath();
      var ecData = getECData(curve);
      ecData.dataIndex = edge.dataIndex;
      ecData.seriesIndex = seriesModel.seriesIndex;
      ecData.dataType = "edge";
      var edgeModel = edge.getModel();
      var lineStyleModel = edgeModel.getModel("lineStyle");
      var curvature = lineStyleModel.get("curveness");
      var n1Layout = edge.node1.getLayout();
      var node1Model = edge.node1.getModel();
      var dragX1 = node1Model.get("localX");
      var dragY1 = node1Model.get("localY");
      var n2Layout = edge.node2.getLayout();
      var node2Model = edge.node2.getModel();
      var dragX2 = node2Model.get("localX");
      var dragY2 = node2Model.get("localY");
      var edgeLayout = edge.getLayout();
      var x1;
      var y1;
      var x2;
      var y2;
      var cpx1;
      var cpy1;
      var cpx2;
      var cpy2;
      curve.shape.extent = Math.max(1, edgeLayout.dy);
      curve.shape.orient = orient;
      if (orient === "vertical") {
        x1 = (dragX1 != null ? dragX1 * width : n1Layout.x) + edgeLayout.sy;
        y1 = (dragY1 != null ? dragY1 * height : n1Layout.y) + n1Layout.dy;
        x2 = (dragX2 != null ? dragX2 * width : n2Layout.x) + edgeLayout.ty;
        y2 = dragY2 != null ? dragY2 * height : n2Layout.y;
        cpx1 = x1;
        cpy1 = y1 * (1 - curvature) + y2 * curvature;
        cpx2 = x2;
        cpy2 = y1 * curvature + y2 * (1 - curvature);
      } else {
        x1 = (dragX1 != null ? dragX1 * width : n1Layout.x) + n1Layout.dx;
        y1 = (dragY1 != null ? dragY1 * height : n1Layout.y) + edgeLayout.sy;
        x2 = dragX2 != null ? dragX2 * width : n2Layout.x;
        y2 = (dragY2 != null ? dragY2 * height : n2Layout.y) + edgeLayout.ty;
        cpx1 = x1 * (1 - curvature) + x2 * curvature;
        cpy1 = y1;
        cpx2 = x1 * curvature + x2 * (1 - curvature);
        cpy2 = y2;
      }
      curve.setShape({
        x1,
        y1,
        x2,
        y2,
        cpx1,
        cpy1,
        cpx2,
        cpy2
      });
      curve.useStyle(lineStyleModel.getItemStyle());
      switch (curve.style.fill) {
        case "source":
          curve.style.fill = edge.node1.getVisual("color");
          curve.style.decal = edge.node1.getVisual("style").decal;
          break;
        case "target":
          curve.style.fill = edge.node2.getVisual("color");
          curve.style.decal = edge.node2.getVisual("style").decal;
          break;
        case "gradient":
          var sourceColor = edge.node1.getVisual("color");
          var targetColor = edge.node2.getVisual("color");
          if (typeof sourceColor === "string" && typeof targetColor === "string") {
            curve.style.fill = new LinearGradient(0, 0, +(orient === "horizontal"), +(orient === "vertical"), [{
              color: sourceColor,
              offset: 0
            }, {
              color: targetColor,
              offset: 1
            }]);
          }
      }
      var emphasisModel = edgeModel.getModel("emphasis");
      setStatesStylesFromModel(curve, edgeModel, "lineStyle", function(model) {
        return model.getItemStyle();
      });
      group.add(curve);
      edgeData.setItemGraphicEl(edge.dataIndex, curve);
      var focus = emphasisModel.get("focus");
      enableHoverEmphasis(curve, focus === "adjacency" ? edge.getAdjacentDataIndices() : focus, emphasisModel.get("blurScope"));
      getECData(curve).dataType = "edge";
    });
    graph.eachNode(function(node) {
      var layout2 = node.getLayout();
      var itemModel = node.getModel();
      var dragX = itemModel.get("localX");
      var dragY = itemModel.get("localY");
      var emphasisModel = itemModel.getModel("emphasis");
      var rect = new Rect$1({
        shape: {
          x: dragX != null ? dragX * width : layout2.x,
          y: dragY != null ? dragY * height : layout2.y,
          width: layout2.dx,
          height: layout2.dy
        },
        style: itemModel.getModel("itemStyle").getItemStyle(),
        z2: 10
      });
      setLabelStyle(rect, getLabelStatesModels(itemModel), {
        labelFetcher: seriesModel,
        labelDataIndex: node.dataIndex,
        defaultText: node.id
      });
      rect.disableLabelAnimation = true;
      rect.setStyle("fill", node.getVisual("color"));
      rect.setStyle("decal", node.getVisual("style").decal);
      setStatesStylesFromModel(rect, itemModel);
      group.add(rect);
      nodeData.setItemGraphicEl(node.dataIndex, rect);
      getECData(rect).dataType = "node";
      var focus = emphasisModel.get("focus");
      enableHoverEmphasis(rect, focus === "adjacency" ? node.getAdjacentDataIndices() : focus, emphasisModel.get("blurScope"));
    });
    nodeData.eachItemGraphicEl(function(el, dataIndex) {
      var itemModel = nodeData.getItemModel(dataIndex);
      if (itemModel.get("draggable")) {
        el.drift = function(dx, dy) {
          sankeyView._focusAdjacencyDisabled = true;
          this.shape.x += dx;
          this.shape.y += dy;
          this.dirty();
          api.dispatchAction({
            type: "dragNode",
            seriesId: seriesModel.id,
            dataIndex: nodeData.getRawIndex(dataIndex),
            localX: this.shape.x / width,
            localY: this.shape.y / height
          });
        };
        el.ondragend = function() {
          sankeyView._focusAdjacencyDisabled = false;
        };
        el.draggable = true;
        el.cursor = "move";
      }
    });
    if (!this._data && seriesModel.isAnimationEnabled()) {
      group.setClipPath(createGridClipShape$1(group.getBoundingRect(), seriesModel, function() {
        group.removeClipPath();
      }));
    }
    this._data = seriesModel.getData();
  };
  SankeyView2.prototype.dispose = function() {
  };
  SankeyView2.type = "sankey";
  return SankeyView2;
}(ChartView);
function createGridClipShape$1(rect, seriesModel, cb) {
  var rectEl = new Rect$1({
    shape: {
      x: rect.x - 10,
      y: rect.y - 10,
      width: 0,
      height: rect.height + 20
    }
  });
  initProps(rectEl, {
    shape: {
      width: rect.width + 20
    }
  }, seriesModel, cb);
  return rectEl;
}
var SankeyView$1 = SankeyView;
var SankeySeriesModel = function(_super) {
  __extends(SankeySeriesModel2, _super);
  function SankeySeriesModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SankeySeriesModel2.type;
    return _this;
  }
  SankeySeriesModel2.prototype.getInitialData = function(option, ecModel) {
    var links = option.edges || option.links;
    var nodes = option.data || option.nodes;
    var levels = option.levels;
    this.levelModels = [];
    var levelModels = this.levelModels;
    for (var i = 0; i < levels.length; i++) {
      if (levels[i].depth != null && levels[i].depth >= 0) {
        levelModels[levels[i].depth] = new Model(levels[i], this, ecModel);
      }
    }
    if (nodes && links) {
      var graph = createGraphFromNodeEdge(nodes, links, this, true, beforeLink);
      return graph.data;
    }
    function beforeLink(nodeData, edgeData) {
      nodeData.wrapMethod("getItemModel", function(model, idx) {
        var seriesModel = model.parentModel;
        var layout2 = seriesModel.getData().getItemLayout(idx);
        if (layout2) {
          var nodeDepth = layout2.depth;
          var levelModel = seriesModel.levelModels[nodeDepth];
          if (levelModel) {
            model.parentModel = levelModel;
          }
        }
        return model;
      });
      edgeData.wrapMethod("getItemModel", function(model, idx) {
        var seriesModel = model.parentModel;
        var edge = seriesModel.getGraph().getEdgeByIndex(idx);
        var layout2 = edge.node1.getLayout();
        if (layout2) {
          var depth = layout2.depth;
          var levelModel = seriesModel.levelModels[depth];
          if (levelModel) {
            model.parentModel = levelModel;
          }
        }
        return model;
      });
    }
  };
  SankeySeriesModel2.prototype.setNodePosition = function(dataIndex, localPosition) {
    var nodes = this.option.data || this.option.nodes;
    var dataItem = nodes[dataIndex];
    dataItem.localX = localPosition[0];
    dataItem.localY = localPosition[1];
  };
  SankeySeriesModel2.prototype.getGraph = function() {
    return this.getData().graph;
  };
  SankeySeriesModel2.prototype.getEdgeData = function() {
    return this.getGraph().edgeData;
  };
  SankeySeriesModel2.prototype.formatTooltip = function(dataIndex, multipleSeries, dataType) {
    function noValue(val) {
      return isNaN(val) || val == null;
    }
    if (dataType === "edge") {
      var params = this.getDataParams(dataIndex, dataType);
      var rawDataOpt = params.data;
      var edgeValue = params.value;
      var edgeName = rawDataOpt.source + " -- " + rawDataOpt.target;
      return createTooltipMarkup("nameValue", {
        name: edgeName,
        value: edgeValue,
        noValue: noValue(edgeValue)
      });
    } else {
      var node = this.getGraph().getNodeByIndex(dataIndex);
      var value = node.getLayout().value;
      var name_1 = this.getDataParams(dataIndex, dataType).data.name;
      return createTooltipMarkup("nameValue", {
        name: name_1 != null ? name_1 + "" : null,
        value,
        noValue: noValue(value)
      });
    }
  };
  SankeySeriesModel2.prototype.optionUpdated = function() {
  };
  SankeySeriesModel2.prototype.getDataParams = function(dataIndex, dataType) {
    var params = _super.prototype.getDataParams.call(this, dataIndex, dataType);
    if (params.value == null && dataType === "node") {
      var node = this.getGraph().getNodeByIndex(dataIndex);
      var nodeValue = node.getLayout().value;
      params.value = nodeValue;
    }
    return params;
  };
  SankeySeriesModel2.type = "series.sankey";
  SankeySeriesModel2.defaultOption = {
    zlevel: 0,
    z: 2,
    coordinateSystem: "view",
    left: "5%",
    top: "5%",
    right: "20%",
    bottom: "5%",
    orient: "horizontal",
    nodeWidth: 20,
    nodeGap: 8,
    draggable: true,
    layoutIterations: 32,
    label: {
      show: true,
      position: "right",
      fontSize: 12
    },
    levels: [],
    nodeAlign: "justify",
    lineStyle: {
      color: "#314656",
      opacity: 0.2,
      curveness: 0.5
    },
    emphasis: {
      label: {
        show: true
      },
      lineStyle: {
        opacity: 0.5
      }
    },
    select: {
      itemStyle: {
        borderColor: "#212121"
      }
    },
    animationEasing: "linear",
    animationDuration: 1e3
  };
  return SankeySeriesModel2;
}(SeriesModel);
var SankeySeriesModel$1 = SankeySeriesModel;
function sankeyLayout(ecModel, api) {
  ecModel.eachSeriesByType("sankey", function(seriesModel) {
    var nodeWidth = seriesModel.get("nodeWidth");
    var nodeGap = seriesModel.get("nodeGap");
    var layoutInfo = getViewRect(seriesModel, api);
    seriesModel.layoutInfo = layoutInfo;
    var width = layoutInfo.width;
    var height = layoutInfo.height;
    var graph = seriesModel.getGraph();
    var nodes = graph.nodes;
    var edges = graph.edges;
    computeNodeValues(nodes);
    var filteredNodes = filter(nodes, function(node) {
      return node.getLayout().value === 0;
    });
    var iterations = filteredNodes.length !== 0 ? 0 : seriesModel.get("layoutIterations");
    var orient = seriesModel.get("orient");
    var nodeAlign = seriesModel.get("nodeAlign");
    layoutSankey(nodes, edges, nodeWidth, nodeGap, width, height, iterations, orient, nodeAlign);
  });
}
function getViewRect(seriesModel, api) {
  return getLayoutRect(seriesModel.getBoxLayoutParams(), {
    width: api.getWidth(),
    height: api.getHeight()
  });
}
function layoutSankey(nodes, edges, nodeWidth, nodeGap, width, height, iterations, orient, nodeAlign) {
  computeNodeBreadths(nodes, edges, nodeWidth, width, height, orient, nodeAlign);
  computeNodeDepths(nodes, edges, height, width, nodeGap, iterations, orient);
  computeEdgeDepths(nodes, orient);
}
function computeNodeValues(nodes) {
  each$2(nodes, function(node) {
    var value1 = sum(node.outEdges, getEdgeValue);
    var value2 = sum(node.inEdges, getEdgeValue);
    var nodeRawValue = node.getValue() || 0;
    var value = Math.max(value1, value2, nodeRawValue);
    node.setLayout({
      value
    }, true);
  });
}
function computeNodeBreadths(nodes, edges, nodeWidth, width, height, orient, nodeAlign) {
  var remainEdges = [];
  var indegreeArr = [];
  var zeroIndegrees = [];
  var nextTargetNode = [];
  var x = 0;
  for (var i = 0; i < edges.length; i++) {
    remainEdges[i] = 1;
  }
  for (var i = 0; i < nodes.length; i++) {
    indegreeArr[i] = nodes[i].inEdges.length;
    if (indegreeArr[i] === 0) {
      zeroIndegrees.push(nodes[i]);
    }
  }
  var maxNodeDepth = -1;
  while (zeroIndegrees.length) {
    for (var idx = 0; idx < zeroIndegrees.length; idx++) {
      var node = zeroIndegrees[idx];
      var item = node.hostGraph.data.getRawDataItem(node.dataIndex);
      var isItemDepth = item.depth != null && item.depth >= 0;
      if (isItemDepth && item.depth > maxNodeDepth) {
        maxNodeDepth = item.depth;
      }
      node.setLayout({
        depth: isItemDepth ? item.depth : x
      }, true);
      orient === "vertical" ? node.setLayout({
        dy: nodeWidth
      }, true) : node.setLayout({
        dx: nodeWidth
      }, true);
      for (var edgeIdx = 0; edgeIdx < node.outEdges.length; edgeIdx++) {
        var edge = node.outEdges[edgeIdx];
        var indexEdge = edges.indexOf(edge);
        remainEdges[indexEdge] = 0;
        var targetNode = edge.node2;
        var nodeIndex = nodes.indexOf(targetNode);
        if (--indegreeArr[nodeIndex] === 0 && nextTargetNode.indexOf(targetNode) < 0) {
          nextTargetNode.push(targetNode);
        }
      }
    }
    ++x;
    zeroIndegrees = nextTargetNode;
    nextTargetNode = [];
  }
  for (var i = 0; i < remainEdges.length; i++) {
    if (remainEdges[i] === 1) {
      throw new Error("Sankey is a DAG, the original data has cycle!");
    }
  }
  var maxDepth = maxNodeDepth > x - 1 ? maxNodeDepth : x - 1;
  if (nodeAlign && nodeAlign !== "left") {
    adjustNodeWithNodeAlign(nodes, nodeAlign, orient, maxDepth);
  }
  var kx = orient === "vertical" ? (height - nodeWidth) / maxDepth : (width - nodeWidth) / maxDepth;
  scaleNodeBreadths(nodes, kx, orient);
}
function isNodeDepth(node) {
  var item = node.hostGraph.data.getRawDataItem(node.dataIndex);
  return item.depth != null && item.depth >= 0;
}
function adjustNodeWithNodeAlign(nodes, nodeAlign, orient, maxDepth) {
  if (nodeAlign === "right") {
    var nextSourceNode = [];
    var remainNodes = nodes;
    var nodeHeight = 0;
    while (remainNodes.length) {
      for (var i = 0; i < remainNodes.length; i++) {
        var node = remainNodes[i];
        node.setLayout({
          skNodeHeight: nodeHeight
        }, true);
        for (var j = 0; j < node.inEdges.length; j++) {
          var edge = node.inEdges[j];
          if (nextSourceNode.indexOf(edge.node1) < 0) {
            nextSourceNode.push(edge.node1);
          }
        }
      }
      remainNodes = nextSourceNode;
      nextSourceNode = [];
      ++nodeHeight;
    }
    each$2(nodes, function(node2) {
      if (!isNodeDepth(node2)) {
        node2.setLayout({
          depth: Math.max(0, maxDepth - node2.getLayout().skNodeHeight)
        }, true);
      }
    });
  } else if (nodeAlign === "justify") {
    moveSinksRight(nodes, maxDepth);
  }
}
function moveSinksRight(nodes, maxDepth) {
  each$2(nodes, function(node) {
    if (!isNodeDepth(node) && !node.outEdges.length) {
      node.setLayout({
        depth: maxDepth
      }, true);
    }
  });
}
function scaleNodeBreadths(nodes, kx, orient) {
  each$2(nodes, function(node) {
    var nodeDepth = node.getLayout().depth * kx;
    orient === "vertical" ? node.setLayout({
      y: nodeDepth
    }, true) : node.setLayout({
      x: nodeDepth
    }, true);
  });
}
function computeNodeDepths(nodes, edges, height, width, nodeGap, iterations, orient) {
  var nodesByBreadth = prepareNodesByBreadth(nodes, orient);
  initializeNodeDepth(nodesByBreadth, edges, height, width, nodeGap, orient);
  resolveCollisions(nodesByBreadth, nodeGap, height, width, orient);
  for (var alpha = 1; iterations > 0; iterations--) {
    alpha *= 0.99;
    relaxRightToLeft(nodesByBreadth, alpha, orient);
    resolveCollisions(nodesByBreadth, nodeGap, height, width, orient);
    relaxLeftToRight(nodesByBreadth, alpha, orient);
    resolveCollisions(nodesByBreadth, nodeGap, height, width, orient);
  }
}
function prepareNodesByBreadth(nodes, orient) {
  var nodesByBreadth = [];
  var keyAttr = orient === "vertical" ? "y" : "x";
  var groupResult = groupData(nodes, function(node) {
    return node.getLayout()[keyAttr];
  });
  groupResult.keys.sort(function(a, b) {
    return a - b;
  });
  each$2(groupResult.keys, function(key) {
    nodesByBreadth.push(groupResult.buckets.get(key));
  });
  return nodesByBreadth;
}
function initializeNodeDepth(nodesByBreadth, edges, height, width, nodeGap, orient) {
  var minKy = Infinity;
  each$2(nodesByBreadth, function(nodes) {
    var n = nodes.length;
    var sum2 = 0;
    each$2(nodes, function(node) {
      sum2 += node.getLayout().value;
    });
    var ky = orient === "vertical" ? (width - (n - 1) * nodeGap) / sum2 : (height - (n - 1) * nodeGap) / sum2;
    if (ky < minKy) {
      minKy = ky;
    }
  });
  each$2(nodesByBreadth, function(nodes) {
    each$2(nodes, function(node, i) {
      var nodeDy = node.getLayout().value * minKy;
      if (orient === "vertical") {
        node.setLayout({
          x: i
        }, true);
        node.setLayout({
          dx: nodeDy
        }, true);
      } else {
        node.setLayout({
          y: i
        }, true);
        node.setLayout({
          dy: nodeDy
        }, true);
      }
    });
  });
  each$2(edges, function(edge) {
    var edgeDy = +edge.getValue() * minKy;
    edge.setLayout({
      dy: edgeDy
    }, true);
  });
}
function resolveCollisions(nodesByBreadth, nodeGap, height, width, orient) {
  var keyAttr = orient === "vertical" ? "x" : "y";
  each$2(nodesByBreadth, function(nodes) {
    nodes.sort(function(a, b) {
      return a.getLayout()[keyAttr] - b.getLayout()[keyAttr];
    });
    var nodeX;
    var node;
    var dy;
    var y0 = 0;
    var n = nodes.length;
    var nodeDyAttr = orient === "vertical" ? "dx" : "dy";
    for (var i = 0; i < n; i++) {
      node = nodes[i];
      dy = y0 - node.getLayout()[keyAttr];
      if (dy > 0) {
        nodeX = node.getLayout()[keyAttr] + dy;
        orient === "vertical" ? node.setLayout({
          x: nodeX
        }, true) : node.setLayout({
          y: nodeX
        }, true);
      }
      y0 = node.getLayout()[keyAttr] + node.getLayout()[nodeDyAttr] + nodeGap;
    }
    var viewWidth = orient === "vertical" ? width : height;
    dy = y0 - nodeGap - viewWidth;
    if (dy > 0) {
      nodeX = node.getLayout()[keyAttr] - dy;
      orient === "vertical" ? node.setLayout({
        x: nodeX
      }, true) : node.setLayout({
        y: nodeX
      }, true);
      y0 = nodeX;
      for (var i = n - 2; i >= 0; --i) {
        node = nodes[i];
        dy = node.getLayout()[keyAttr] + node.getLayout()[nodeDyAttr] + nodeGap - y0;
        if (dy > 0) {
          nodeX = node.getLayout()[keyAttr] - dy;
          orient === "vertical" ? node.setLayout({
            x: nodeX
          }, true) : node.setLayout({
            y: nodeX
          }, true);
        }
        y0 = node.getLayout()[keyAttr];
      }
    }
  });
}
function relaxRightToLeft(nodesByBreadth, alpha, orient) {
  each$2(nodesByBreadth.slice().reverse(), function(nodes) {
    each$2(nodes, function(node) {
      if (node.outEdges.length) {
        var y = sum(node.outEdges, weightedTarget, orient) / sum(node.outEdges, getEdgeValue);
        if (isNaN(y)) {
          var len2 = node.outEdges.length;
          y = len2 ? sum(node.outEdges, centerTarget, orient) / len2 : 0;
        }
        if (orient === "vertical") {
          var nodeX = node.getLayout().x + (y - center(node, orient)) * alpha;
          node.setLayout({
            x: nodeX
          }, true);
        } else {
          var nodeY = node.getLayout().y + (y - center(node, orient)) * alpha;
          node.setLayout({
            y: nodeY
          }, true);
        }
      }
    });
  });
}
function weightedTarget(edge, orient) {
  return center(edge.node2, orient) * edge.getValue();
}
function centerTarget(edge, orient) {
  return center(edge.node2, orient);
}
function weightedSource(edge, orient) {
  return center(edge.node1, orient) * edge.getValue();
}
function centerSource(edge, orient) {
  return center(edge.node1, orient);
}
function center(node, orient) {
  return orient === "vertical" ? node.getLayout().x + node.getLayout().dx / 2 : node.getLayout().y + node.getLayout().dy / 2;
}
function getEdgeValue(edge) {
  return edge.getValue();
}
function sum(array, cb, orient) {
  var sum2 = 0;
  var len2 = array.length;
  var i = -1;
  while (++i < len2) {
    var value = +cb(array[i], orient);
    if (!isNaN(value)) {
      sum2 += value;
    }
  }
  return sum2;
}
function relaxLeftToRight(nodesByBreadth, alpha, orient) {
  each$2(nodesByBreadth, function(nodes) {
    each$2(nodes, function(node) {
      if (node.inEdges.length) {
        var y = sum(node.inEdges, weightedSource, orient) / sum(node.inEdges, getEdgeValue);
        if (isNaN(y)) {
          var len2 = node.inEdges.length;
          y = len2 ? sum(node.inEdges, centerSource, orient) / len2 : 0;
        }
        if (orient === "vertical") {
          var nodeX = node.getLayout().x + (y - center(node, orient)) * alpha;
          node.setLayout({
            x: nodeX
          }, true);
        } else {
          var nodeY = node.getLayout().y + (y - center(node, orient)) * alpha;
          node.setLayout({
            y: nodeY
          }, true);
        }
      }
    });
  });
}
function computeEdgeDepths(nodes, orient) {
  var keyAttr = orient === "vertical" ? "x" : "y";
  each$2(nodes, function(node) {
    node.outEdges.sort(function(a, b) {
      return a.node2.getLayout()[keyAttr] - b.node2.getLayout()[keyAttr];
    });
    node.inEdges.sort(function(a, b) {
      return a.node1.getLayout()[keyAttr] - b.node1.getLayout()[keyAttr];
    });
  });
  each$2(nodes, function(node) {
    var sy = 0;
    var ty = 0;
    each$2(node.outEdges, function(edge) {
      edge.setLayout({
        sy
      }, true);
      sy += edge.getLayout().dy;
    });
    each$2(node.inEdges, function(edge) {
      edge.setLayout({
        ty
      }, true);
      ty += edge.getLayout().dy;
    });
  });
}
function sankeyVisual(ecModel) {
  ecModel.eachSeriesByType("sankey", function(seriesModel) {
    var graph = seriesModel.getGraph();
    var nodes = graph.nodes;
    if (nodes.length) {
      var minValue_1 = Infinity;
      var maxValue_1 = -Infinity;
      each$2(nodes, function(node) {
        var nodeValue = node.getLayout().value;
        if (nodeValue < minValue_1) {
          minValue_1 = nodeValue;
        }
        if (nodeValue > maxValue_1) {
          maxValue_1 = nodeValue;
        }
      });
      each$2(nodes, function(node) {
        var mapping = new VisualMapping({
          type: "color",
          mappingMethod: "linear",
          dataExtent: [minValue_1, maxValue_1],
          visual: seriesModel.get("color")
        });
        var mapValueToColor = mapping.mapValueToVisual(node.getLayout().value);
        var customColor = node.getModel().get(["itemStyle", "color"]);
        if (customColor != null) {
          node.setVisual("color", customColor);
          node.setVisual("style", {
            fill: customColor
          });
        } else {
          node.setVisual("color", mapValueToColor);
          node.setVisual("style", {
            fill: mapValueToColor
          });
        }
      });
    }
  });
}
function install$g(registers) {
  registers.registerChartView(SankeyView$1);
  registers.registerSeriesModel(SankeySeriesModel$1);
  registers.registerLayout(sankeyLayout);
  registers.registerVisual(sankeyVisual);
  registers.registerAction({
    type: "dragNode",
    event: "dragnode",
    update: "update"
  }, function(payload, ecModel) {
    ecModel.eachComponent({
      mainType: "series",
      subType: "sankey",
      query: payload
    }, function(seriesModel) {
      seriesModel.setNodePosition(payload.dataIndex, [payload.localX, payload.localY]);
    });
  });
}
var WhiskerBoxCommonMixin = function() {
  function WhiskerBoxCommonMixin2() {
  }
  WhiskerBoxCommonMixin2.prototype.getInitialData = function(option, ecModel) {
    var ordinalMeta;
    var xAxisModel = ecModel.getComponent("xAxis", this.get("xAxisIndex"));
    var yAxisModel = ecModel.getComponent("yAxis", this.get("yAxisIndex"));
    var xAxisType = xAxisModel.get("type");
    var yAxisType = yAxisModel.get("type");
    var addOrdinal;
    if (xAxisType === "category") {
      option.layout = "horizontal";
      ordinalMeta = xAxisModel.getOrdinalMeta();
      addOrdinal = true;
    } else if (yAxisType === "category") {
      option.layout = "vertical";
      ordinalMeta = yAxisModel.getOrdinalMeta();
      addOrdinal = true;
    } else {
      option.layout = option.layout || "horizontal";
    }
    var coordDims = ["x", "y"];
    var baseAxisDimIndex = option.layout === "horizontal" ? 0 : 1;
    var baseAxisDim = this._baseAxisDim = coordDims[baseAxisDimIndex];
    var otherAxisDim = coordDims[1 - baseAxisDimIndex];
    var axisModels = [xAxisModel, yAxisModel];
    var baseAxisType = axisModels[baseAxisDimIndex].get("type");
    var otherAxisType = axisModels[1 - baseAxisDimIndex].get("type");
    var data = option.data;
    if (data && addOrdinal) {
      var newOptionData_1 = [];
      each$2(data, function(item, index) {
        var newItem;
        if (isArray(item)) {
          newItem = item.slice();
          item.unshift(index);
        } else if (isArray(item.value)) {
          newItem = extend({}, item);
          newItem.value = newItem.value.slice();
          item.value.unshift(index);
        } else {
          newItem = item;
        }
        newOptionData_1.push(newItem);
      });
      option.data = newOptionData_1;
    }
    var defaultValueDimensions = this.defaultValueDimensions;
    var coordDimensions = [{
      name: baseAxisDim,
      type: getDimensionTypeByAxis(baseAxisType),
      ordinalMeta,
      otherDims: {
        tooltip: false,
        itemName: 0
      },
      dimsDef: ["base"]
    }, {
      name: otherAxisDim,
      type: getDimensionTypeByAxis(otherAxisType),
      dimsDef: defaultValueDimensions.slice()
    }];
    return createSeriesDataSimply(this, {
      coordDimensions,
      dimensionsCount: defaultValueDimensions.length + 1,
      encodeDefaulter: curry(makeSeriesEncodeForAxisCoordSys, coordDimensions, this)
    });
  };
  WhiskerBoxCommonMixin2.prototype.getBaseAxis = function() {
    var dim = this._baseAxisDim;
    return this.ecModel.getComponent(dim + "Axis", this.get(dim + "AxisIndex")).axis;
  };
  return WhiskerBoxCommonMixin2;
}();
var BoxplotSeriesModel = function(_super) {
  __extends(BoxplotSeriesModel2, _super);
  function BoxplotSeriesModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = BoxplotSeriesModel2.type;
    _this.defaultValueDimensions = [{
      name: "min",
      defaultTooltip: true
    }, {
      name: "Q1",
      defaultTooltip: true
    }, {
      name: "median",
      defaultTooltip: true
    }, {
      name: "Q3",
      defaultTooltip: true
    }, {
      name: "max",
      defaultTooltip: true
    }];
    _this.visualDrawType = "stroke";
    return _this;
  }
  BoxplotSeriesModel2.type = "series.boxplot";
  BoxplotSeriesModel2.dependencies = ["xAxis", "yAxis", "grid"];
  BoxplotSeriesModel2.defaultOption = {
    zlevel: 0,
    z: 2,
    coordinateSystem: "cartesian2d",
    legendHoverLink: true,
    layout: null,
    boxWidth: [7, 50],
    itemStyle: {
      color: "#fff",
      borderWidth: 1
    },
    emphasis: {
      scale: true,
      itemStyle: {
        borderWidth: 2,
        shadowBlur: 5,
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowColor: "rgba(0,0,0,0.2)"
      }
    },
    animationDuration: 800
  };
  return BoxplotSeriesModel2;
}(SeriesModel);
mixin(BoxplotSeriesModel, WhiskerBoxCommonMixin, true);
var BoxplotSeriesModel$1 = BoxplotSeriesModel;
var BoxplotView = function(_super) {
  __extends(BoxplotView2, _super);
  function BoxplotView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = BoxplotView2.type;
    return _this;
  }
  BoxplotView2.prototype.render = function(seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var group = this.group;
    var oldData = this._data;
    if (!this._data) {
      group.removeAll();
    }
    var constDim = seriesModel.get("layout") === "horizontal" ? 1 : 0;
    data.diff(oldData).add(function(newIdx) {
      if (data.hasValue(newIdx)) {
        var itemLayout = data.getItemLayout(newIdx);
        var symbolEl = createNormalBox$1(itemLayout, data, newIdx, constDim, true);
        data.setItemGraphicEl(newIdx, symbolEl);
        group.add(symbolEl);
      }
    }).update(function(newIdx, oldIdx) {
      var symbolEl = oldData.getItemGraphicEl(oldIdx);
      if (!data.hasValue(newIdx)) {
        group.remove(symbolEl);
        return;
      }
      var itemLayout = data.getItemLayout(newIdx);
      if (!symbolEl) {
        symbolEl = createNormalBox$1(itemLayout, data, newIdx, constDim);
      } else {
        saveOldStyle(symbolEl);
        updateNormalBoxData(itemLayout, symbolEl, data, newIdx);
      }
      group.add(symbolEl);
      data.setItemGraphicEl(newIdx, symbolEl);
    }).remove(function(oldIdx) {
      var el = oldData.getItemGraphicEl(oldIdx);
      el && group.remove(el);
    }).execute();
    this._data = data;
  };
  BoxplotView2.prototype.remove = function(ecModel) {
    var group = this.group;
    var data = this._data;
    this._data = null;
    data && data.eachItemGraphicEl(function(el) {
      el && group.remove(el);
    });
  };
  BoxplotView2.type = "boxplot";
  return BoxplotView2;
}(ChartView);
var BoxPathShape = function() {
  function BoxPathShape2() {
  }
  return BoxPathShape2;
}();
var BoxPath = function(_super) {
  __extends(BoxPath2, _super);
  function BoxPath2(opts) {
    var _this = _super.call(this, opts) || this;
    _this.type = "boxplotBoxPath";
    return _this;
  }
  BoxPath2.prototype.getDefaultShape = function() {
    return new BoxPathShape();
  };
  BoxPath2.prototype.buildPath = function(ctx, shape) {
    var ends = shape.points;
    var i = 0;
    ctx.moveTo(ends[i][0], ends[i][1]);
    i++;
    for (; i < 4; i++) {
      ctx.lineTo(ends[i][0], ends[i][1]);
    }
    ctx.closePath();
    for (; i < ends.length; i++) {
      ctx.moveTo(ends[i][0], ends[i][1]);
      i++;
      ctx.lineTo(ends[i][0], ends[i][1]);
    }
  };
  return BoxPath2;
}(Path);
function createNormalBox$1(itemLayout, data, dataIndex, constDim, isInit) {
  var ends = itemLayout.ends;
  var el = new BoxPath({
    shape: {
      points: isInit ? transInit$1(ends, constDim, itemLayout) : ends
    }
  });
  updateNormalBoxData(itemLayout, el, data, dataIndex, isInit);
  return el;
}
function updateNormalBoxData(itemLayout, el, data, dataIndex, isInit) {
  var seriesModel = data.hostModel;
  var updateMethod = graphic[isInit ? "initProps" : "updateProps"];
  updateMethod(el, {
    shape: {
      points: itemLayout.ends
    }
  }, seriesModel, dataIndex);
  el.useStyle(data.getItemVisual(dataIndex, "style"));
  el.style.strokeNoScale = true;
  el.z2 = 100;
  var itemModel = data.getItemModel(dataIndex);
  setStatesStylesFromModel(el, itemModel);
  enableHoverEmphasis(el, itemModel.get(["emphasis", "focus"]), itemModel.get(["emphasis", "blurScope"]));
}
function transInit$1(points, dim, itemLayout) {
  return map(points, function(point) {
    point = point.slice();
    point[dim] = itemLayout.initBaseline;
    return point;
  });
}
var BoxplotView$1 = BoxplotView;
function boxplotVisual(ecModel, api) {
}
var each = each$2;
function boxplotLayout(ecModel) {
  var groupResult = groupSeriesByAxis(ecModel);
  each(groupResult, function(groupItem) {
    var seriesModels = groupItem.seriesModels;
    if (!seriesModels.length) {
      return;
    }
    calculateBase(groupItem);
    each(seriesModels, function(seriesModel, idx) {
      layoutSingleSeries(seriesModel, groupItem.boxOffsetList[idx], groupItem.boxWidthList[idx]);
    });
  });
}
function groupSeriesByAxis(ecModel) {
  var result = [];
  var axisList = [];
  ecModel.eachSeriesByType("boxplot", function(seriesModel) {
    var baseAxis = seriesModel.getBaseAxis();
    var idx = indexOf(axisList, baseAxis);
    if (idx < 0) {
      idx = axisList.length;
      axisList[idx] = baseAxis;
      result[idx] = {
        axis: baseAxis,
        seriesModels: []
      };
    }
    result[idx].seriesModels.push(seriesModel);
  });
  return result;
}
function calculateBase(groupItem) {
  var extent;
  var baseAxis = groupItem.axis;
  var seriesModels = groupItem.seriesModels;
  var seriesCount = seriesModels.length;
  var boxWidthList = groupItem.boxWidthList = [];
  var boxOffsetList = groupItem.boxOffsetList = [];
  var boundList = [];
  var bandWidth;
  if (baseAxis.type === "category") {
    bandWidth = baseAxis.getBandWidth();
  } else {
    var maxDataCount_1 = 0;
    each(seriesModels, function(seriesModel) {
      maxDataCount_1 = Math.max(maxDataCount_1, seriesModel.getData().count());
    });
    extent = baseAxis.getExtent(), Math.abs(extent[1] - extent[0]) / maxDataCount_1;
  }
  each(seriesModels, function(seriesModel) {
    var boxWidthBound = seriesModel.get("boxWidth");
    if (!isArray(boxWidthBound)) {
      boxWidthBound = [boxWidthBound, boxWidthBound];
    }
    boundList.push([parsePercent(boxWidthBound[0], bandWidth) || 0, parsePercent(boxWidthBound[1], bandWidth) || 0]);
  });
  var availableWidth = bandWidth * 0.8 - 2;
  var boxGap = availableWidth / seriesCount * 0.3;
  var boxWidth = (availableWidth - boxGap * (seriesCount - 1)) / seriesCount;
  var base = boxWidth / 2 - availableWidth / 2;
  each(seriesModels, function(seriesModel, idx) {
    boxOffsetList.push(base);
    base += boxGap + boxWidth;
    boxWidthList.push(Math.min(Math.max(boxWidth, boundList[idx][0]), boundList[idx][1]));
  });
}
function layoutSingleSeries(seriesModel, offset, boxWidth) {
  var coordSys = seriesModel.coordinateSystem;
  var data = seriesModel.getData();
  var halfWidth = boxWidth / 2;
  var cDimIdx = seriesModel.get("layout") === "horizontal" ? 0 : 1;
  var vDimIdx = 1 - cDimIdx;
  var coordDims = ["x", "y"];
  var cDim = data.mapDimension(coordDims[cDimIdx]);
  var vDims = data.mapDimensionsAll(coordDims[vDimIdx]);
  if (cDim == null || vDims.length < 5) {
    return;
  }
  for (var dataIndex = 0; dataIndex < data.count(); dataIndex++) {
    var axisDimVal = data.get(cDim, dataIndex);
    var median = getPoint(axisDimVal, vDims[2], dataIndex);
    var end1 = getPoint(axisDimVal, vDims[0], dataIndex);
    var end2 = getPoint(axisDimVal, vDims[1], dataIndex);
    var end4 = getPoint(axisDimVal, vDims[3], dataIndex);
    var end5 = getPoint(axisDimVal, vDims[4], dataIndex);
    var ends = [];
    addBodyEnd(ends, end2, false);
    addBodyEnd(ends, end4, true);
    ends.push(end1, end2, end5, end4);
    layEndLine(ends, end1);
    layEndLine(ends, end5);
    layEndLine(ends, median);
    data.setItemLayout(dataIndex, {
      initBaseline: median[vDimIdx],
      ends
    });
  }
  function getPoint(axisDimVal2, dim, dataIndex2) {
    var val = data.get(dim, dataIndex2);
    var p = [];
    p[cDimIdx] = axisDimVal2;
    p[vDimIdx] = val;
    var point;
    if (isNaN(axisDimVal2) || isNaN(val)) {
      point = [NaN, NaN];
    } else {
      point = coordSys.dataToPoint(p);
      point[cDimIdx] += offset;
    }
    return point;
  }
  function addBodyEnd(ends2, point, start) {
    var point1 = point.slice();
    var point2 = point.slice();
    point1[cDimIdx] += halfWidth;
    point2[cDimIdx] -= halfWidth;
    start ? ends2.push(point1, point2) : ends2.push(point2, point1);
  }
  function layEndLine(ends2, endCenter) {
    var from = endCenter.slice();
    var to = endCenter.slice();
    from[cDimIdx] -= halfWidth;
    to[cDimIdx] += halfWidth;
    ends2.push(from, to);
  }
}
function prepareBoxplotData(rawData, opt) {
  opt = opt || {};
  var boxData = [];
  var outliers = [];
  var boundIQR = opt.boundIQR;
  var useExtreme = boundIQR === "none" || boundIQR === 0;
  for (var i = 0; i < rawData.length; i++) {
    var ascList = asc(rawData[i].slice());
    var Q1 = quantile(ascList, 0.25);
    var Q2 = quantile(ascList, 0.5);
    var Q3 = quantile(ascList, 0.75);
    var min = ascList[0];
    var max = ascList[ascList.length - 1];
    var bound = (boundIQR == null ? 1.5 : boundIQR) * (Q3 - Q1);
    var low = useExtreme ? min : Math.max(min, Q1 - bound);
    var high = useExtreme ? max : Math.min(max, Q3 + bound);
    var itemNameFormatter = opt.itemNameFormatter;
    var itemName = isFunction(itemNameFormatter) ? itemNameFormatter({
      value: i
    }) : isString(itemNameFormatter) ? itemNameFormatter.replace("{value}", i + "") : i + "";
    boxData.push([itemName, low, Q1, Q2, Q3, high]);
    for (var j = 0; j < ascList.length; j++) {
      var dataItem = ascList[j];
      if (dataItem < low || dataItem > high) {
        var outlier = [itemName, dataItem];
        outliers.push(outlier);
      }
    }
  }
  return {
    boxData,
    outliers
  };
}
var boxplotTransform = {
  type: "echarts:boxplot",
  transform: function transform(params) {
    var upstream = params.upstream;
    if (upstream.sourceFormat !== SOURCE_FORMAT_ARRAY_ROWS) {
      var errMsg = "";
      throwError(errMsg);
    }
    var result = prepareBoxplotData(upstream.getRawData(), params.config);
    return [{
      dimensions: ["ItemName", "Low", "Q1", "Q2", "Q3", "High"],
      data: result.boxData
    }, {
      data: result.outliers
    }];
  }
};
function install$f(registers) {
  registers.registerSeriesModel(BoxplotSeriesModel$1);
  registers.registerChartView(BoxplotView$1);
  registers.registerVisual(boxplotVisual);
  registers.registerLayout(boxplotLayout);
  registers.registerTransform(boxplotTransform);
}
var SKIP_PROPS = ["color", "borderColor"];
var CandlestickView = function(_super) {
  __extends(CandlestickView2, _super);
  function CandlestickView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = CandlestickView2.type;
    return _this;
  }
  CandlestickView2.prototype.render = function(seriesModel, ecModel, api) {
    this.group.removeClipPath();
    this._updateDrawMode(seriesModel);
    this._isLargeDraw ? this._renderLarge(seriesModel) : this._renderNormal(seriesModel);
  };
  CandlestickView2.prototype.incrementalPrepareRender = function(seriesModel, ecModel, api) {
    this._clear();
    this._updateDrawMode(seriesModel);
  };
  CandlestickView2.prototype.incrementalRender = function(params, seriesModel, ecModel, api) {
    this._isLargeDraw ? this._incrementalRenderLarge(params, seriesModel) : this._incrementalRenderNormal(params, seriesModel);
  };
  CandlestickView2.prototype._updateDrawMode = function(seriesModel) {
    var isLargeDraw = seriesModel.pipelineContext.large;
    if (this._isLargeDraw == null || isLargeDraw !== this._isLargeDraw) {
      this._isLargeDraw = isLargeDraw;
      this._clear();
    }
  };
  CandlestickView2.prototype._renderNormal = function(seriesModel) {
    var data = seriesModel.getData();
    var oldData = this._data;
    var group = this.group;
    var isSimpleBox = data.getLayout("isSimpleBox");
    var needsClip = seriesModel.get("clip", true);
    var coord = seriesModel.coordinateSystem;
    var clipArea = coord.getArea && coord.getArea();
    if (!this._data) {
      group.removeAll();
    }
    data.diff(oldData).add(function(newIdx) {
      if (data.hasValue(newIdx)) {
        var itemLayout = data.getItemLayout(newIdx);
        if (needsClip && isNormalBoxClipped(clipArea, itemLayout)) {
          return;
        }
        var el = createNormalBox(itemLayout, newIdx, true);
        initProps(el, {
          shape: {
            points: itemLayout.ends
          }
        }, seriesModel, newIdx);
        setBoxCommon(el, data, newIdx, isSimpleBox);
        group.add(el);
        data.setItemGraphicEl(newIdx, el);
      }
    }).update(function(newIdx, oldIdx) {
      var el = oldData.getItemGraphicEl(oldIdx);
      if (!data.hasValue(newIdx)) {
        group.remove(el);
        return;
      }
      var itemLayout = data.getItemLayout(newIdx);
      if (needsClip && isNormalBoxClipped(clipArea, itemLayout)) {
        group.remove(el);
        return;
      }
      if (!el) {
        el = createNormalBox(itemLayout);
      } else {
        updateProps(el, {
          shape: {
            points: itemLayout.ends
          }
        }, seriesModel, newIdx);
        saveOldStyle(el);
      }
      setBoxCommon(el, data, newIdx, isSimpleBox);
      group.add(el);
      data.setItemGraphicEl(newIdx, el);
    }).remove(function(oldIdx) {
      var el = oldData.getItemGraphicEl(oldIdx);
      el && group.remove(el);
    }).execute();
    this._data = data;
  };
  CandlestickView2.prototype._renderLarge = function(seriesModel) {
    this._clear();
    createLarge(seriesModel, this.group);
    var clipPath = seriesModel.get("clip", true) ? createClipPath(seriesModel.coordinateSystem, false, seriesModel) : null;
    if (clipPath) {
      this.group.setClipPath(clipPath);
    } else {
      this.group.removeClipPath();
    }
  };
  CandlestickView2.prototype._incrementalRenderNormal = function(params, seriesModel) {
    var data = seriesModel.getData();
    var isSimpleBox = data.getLayout("isSimpleBox");
    var dataIndex;
    while ((dataIndex = params.next()) != null) {
      var itemLayout = data.getItemLayout(dataIndex);
      var el = createNormalBox(itemLayout);
      setBoxCommon(el, data, dataIndex, isSimpleBox);
      el.incremental = true;
      this.group.add(el);
    }
  };
  CandlestickView2.prototype._incrementalRenderLarge = function(params, seriesModel) {
    createLarge(seriesModel, this.group, true);
  };
  CandlestickView2.prototype.remove = function(ecModel) {
    this._clear();
  };
  CandlestickView2.prototype._clear = function() {
    this.group.removeAll();
    this._data = null;
  };
  CandlestickView2.type = "candlestick";
  return CandlestickView2;
}(ChartView);
var NormalBoxPathShape = function() {
  function NormalBoxPathShape2() {
  }
  return NormalBoxPathShape2;
}();
var NormalBoxPath = function(_super) {
  __extends(NormalBoxPath2, _super);
  function NormalBoxPath2(opts) {
    var _this = _super.call(this, opts) || this;
    _this.type = "normalCandlestickBox";
    return _this;
  }
  NormalBoxPath2.prototype.getDefaultShape = function() {
    return new NormalBoxPathShape();
  };
  NormalBoxPath2.prototype.buildPath = function(ctx, shape) {
    var ends = shape.points;
    if (this.__simpleBox) {
      ctx.moveTo(ends[4][0], ends[4][1]);
      ctx.lineTo(ends[6][0], ends[6][1]);
    } else {
      ctx.moveTo(ends[0][0], ends[0][1]);
      ctx.lineTo(ends[1][0], ends[1][1]);
      ctx.lineTo(ends[2][0], ends[2][1]);
      ctx.lineTo(ends[3][0], ends[3][1]);
      ctx.closePath();
      ctx.moveTo(ends[4][0], ends[4][1]);
      ctx.lineTo(ends[5][0], ends[5][1]);
      ctx.moveTo(ends[6][0], ends[6][1]);
      ctx.lineTo(ends[7][0], ends[7][1]);
    }
  };
  return NormalBoxPath2;
}(Path);
function createNormalBox(itemLayout, dataIndex, isInit) {
  var ends = itemLayout.ends;
  return new NormalBoxPath({
    shape: {
      points: isInit ? transInit(ends, itemLayout) : ends
    },
    z2: 100
  });
}
function isNormalBoxClipped(clipArea, itemLayout) {
  var clipped = true;
  for (var i = 0; i < itemLayout.ends.length; i++) {
    if (clipArea.contain(itemLayout.ends[i][0], itemLayout.ends[i][1])) {
      clipped = false;
      break;
    }
  }
  return clipped;
}
function setBoxCommon(el, data, dataIndex, isSimpleBox) {
  var itemModel = data.getItemModel(dataIndex);
  el.useStyle(data.getItemVisual(dataIndex, "style"));
  el.style.strokeNoScale = true;
  el.__simpleBox = isSimpleBox;
  setStatesStylesFromModel(el, itemModel);
}
function transInit(points, itemLayout) {
  return map(points, function(point) {
    point = point.slice();
    point[1] = itemLayout.initBaseline;
    return point;
  });
}
var LargeBoxPathShape = function() {
  function LargeBoxPathShape2() {
  }
  return LargeBoxPathShape2;
}();
var LargeBoxPath = function(_super) {
  __extends(LargeBoxPath2, _super);
  function LargeBoxPath2(opts) {
    var _this = _super.call(this, opts) || this;
    _this.type = "largeCandlestickBox";
    return _this;
  }
  LargeBoxPath2.prototype.getDefaultShape = function() {
    return new LargeBoxPathShape();
  };
  LargeBoxPath2.prototype.buildPath = function(ctx, shape) {
    var points = shape.points;
    for (var i = 0; i < points.length; ) {
      if (this.__sign === points[i++]) {
        var x = points[i++];
        ctx.moveTo(x, points[i++]);
        ctx.lineTo(x, points[i++]);
      } else {
        i += 3;
      }
    }
  };
  return LargeBoxPath2;
}(Path);
function createLarge(seriesModel, group, incremental) {
  var data = seriesModel.getData();
  var largePoints = data.getLayout("largePoints");
  var elP = new LargeBoxPath({
    shape: {
      points: largePoints
    },
    __sign: 1
  });
  group.add(elP);
  var elN = new LargeBoxPath({
    shape: {
      points: largePoints
    },
    __sign: -1
  });
  group.add(elN);
  setLargeStyle(1, elP, seriesModel);
  setLargeStyle(-1, elN, seriesModel);
  if (incremental) {
    elP.incremental = true;
    elN.incremental = true;
  }
}
function setLargeStyle(sign, el, seriesModel, data) {
  var borderColor = seriesModel.get(["itemStyle", sign > 0 ? "borderColor" : "borderColor0"]) || seriesModel.get(["itemStyle", sign > 0 ? "color" : "color0"]);
  var itemStyle = seriesModel.getModel("itemStyle").getItemStyle(SKIP_PROPS);
  el.useStyle(itemStyle);
  el.style.fill = null;
  el.style.stroke = borderColor;
}
var CandlestickView$1 = CandlestickView;
var CandlestickSeriesModel = function(_super) {
  __extends(CandlestickSeriesModel2, _super);
  function CandlestickSeriesModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = CandlestickSeriesModel2.type;
    _this.defaultValueDimensions = [{
      name: "open",
      defaultTooltip: true
    }, {
      name: "close",
      defaultTooltip: true
    }, {
      name: "lowest",
      defaultTooltip: true
    }, {
      name: "highest",
      defaultTooltip: true
    }];
    return _this;
  }
  CandlestickSeriesModel2.prototype.getShadowDim = function() {
    return "open";
  };
  CandlestickSeriesModel2.prototype.brushSelector = function(dataIndex, data, selectors) {
    var itemLayout = data.getItemLayout(dataIndex);
    return itemLayout && selectors.rect(itemLayout.brushRect);
  };
  CandlestickSeriesModel2.type = "series.candlestick";
  CandlestickSeriesModel2.dependencies = ["xAxis", "yAxis", "grid"];
  CandlestickSeriesModel2.defaultOption = {
    zlevel: 0,
    z: 2,
    coordinateSystem: "cartesian2d",
    legendHoverLink: true,
    layout: null,
    clip: true,
    itemStyle: {
      color: "#eb5454",
      color0: "#47b262",
      borderColor: "#eb5454",
      borderColor0: "#47b262",
      borderWidth: 1
    },
    emphasis: {
      scale: true,
      itemStyle: {
        borderWidth: 2
      }
    },
    barMaxWidth: null,
    barMinWidth: null,
    barWidth: null,
    large: true,
    largeThreshold: 600,
    progressive: 3e3,
    progressiveThreshold: 1e4,
    progressiveChunkMode: "mod",
    animationEasing: "linear",
    animationDuration: 300
  };
  return CandlestickSeriesModel2;
}(SeriesModel);
mixin(CandlestickSeriesModel, WhiskerBoxCommonMixin, true);
var CandlestickSeriesModel$1 = CandlestickSeriesModel;
function candlestickPreprocessor(option) {
  if (!option || !isArray(option.series)) {
    return;
  }
  each$2(option.series, function(seriesItem) {
    if (isObject(seriesItem) && seriesItem.type === "k") {
      seriesItem.type = "candlestick";
    }
  });
}
var positiveBorderColorQuery = ["itemStyle", "borderColor"];
var negativeBorderColorQuery = ["itemStyle", "borderColor0"];
var positiveColorQuery = ["itemStyle", "color"];
var negativeColorQuery = ["itemStyle", "color0"];
var candlestickVisual = {
  seriesType: "candlestick",
  plan: createRenderPlanner(),
  performRawSeries: true,
  reset: function(seriesModel, ecModel) {
    function getColor(sign, model) {
      return model.get(sign > 0 ? positiveColorQuery : negativeColorQuery);
    }
    function getBorderColor(sign, model) {
      return model.get(sign > 0 ? positiveBorderColorQuery : negativeBorderColorQuery);
    }
    if (ecModel.isSeriesFiltered(seriesModel)) {
      return;
    }
    var isLargeRender = seriesModel.pipelineContext.large;
    return !isLargeRender && {
      progress: function(params, data) {
        var dataIndex;
        while ((dataIndex = params.next()) != null) {
          var itemModel = data.getItemModel(dataIndex);
          var sign = data.getItemLayout(dataIndex).sign;
          var style = itemModel.getItemStyle();
          style.fill = getColor(sign, itemModel);
          style.stroke = getBorderColor(sign, itemModel) || style.fill;
          var existsStyle = data.ensureUniqueItemVisual(dataIndex, "style");
          extend(existsStyle, style);
        }
      }
    };
  }
};
var candlestickVisual$1 = candlestickVisual;
var LargeArr = typeof Float32Array !== "undefined" ? Float32Array : Array;
var candlestickLayout = {
  seriesType: "candlestick",
  plan: createRenderPlanner(),
  reset: function(seriesModel) {
    var coordSys = seriesModel.coordinateSystem;
    var data = seriesModel.getData();
    var candleWidth = calculateCandleWidth(seriesModel, data);
    var cDimIdx = 0;
    var vDimIdx = 1;
    var coordDims = ["x", "y"];
    var cDimI = data.getDimensionIndex(data.mapDimension(coordDims[cDimIdx]));
    var vDimsI = map(data.mapDimensionsAll(coordDims[vDimIdx]), data.getDimensionIndex, data);
    var openDimI = vDimsI[0];
    var closeDimI = vDimsI[1];
    var lowestDimI = vDimsI[2];
    var highestDimI = vDimsI[3];
    data.setLayout({
      candleWidth,
      isSimpleBox: candleWidth <= 1.3
    });
    if (cDimI < 0 || vDimsI.length < 4) {
      return;
    }
    return {
      progress: seriesModel.pipelineContext.large ? largeProgress : normalProgress
    };
    function normalProgress(params, data2) {
      var dataIndex;
      var store = data2.getStore();
      while ((dataIndex = params.next()) != null) {
        var axisDimVal = store.get(cDimI, dataIndex);
        var openVal = store.get(openDimI, dataIndex);
        var closeVal = store.get(closeDimI, dataIndex);
        var lowestVal = store.get(lowestDimI, dataIndex);
        var highestVal = store.get(highestDimI, dataIndex);
        var ocLow = Math.min(openVal, closeVal);
        var ocHigh = Math.max(openVal, closeVal);
        var ocLowPoint = getPoint(ocLow, axisDimVal);
        var ocHighPoint = getPoint(ocHigh, axisDimVal);
        var lowestPoint = getPoint(lowestVal, axisDimVal);
        var highestPoint = getPoint(highestVal, axisDimVal);
        var ends = [];
        addBodyEnd(ends, ocHighPoint, 0);
        addBodyEnd(ends, ocLowPoint, 1);
        ends.push(subPixelOptimizePoint(highestPoint), subPixelOptimizePoint(ocHighPoint), subPixelOptimizePoint(lowestPoint), subPixelOptimizePoint(ocLowPoint));
        data2.setItemLayout(dataIndex, {
          sign: getSign(store, dataIndex, openVal, closeVal, closeDimI),
          initBaseline: openVal > closeVal ? ocHighPoint[vDimIdx] : ocLowPoint[vDimIdx],
          ends,
          brushRect: makeBrushRect(lowestVal, highestVal, axisDimVal)
        });
      }
      function getPoint(val, axisDimVal2) {
        var p = [];
        p[cDimIdx] = axisDimVal2;
        p[vDimIdx] = val;
        return isNaN(axisDimVal2) || isNaN(val) ? [NaN, NaN] : coordSys.dataToPoint(p);
      }
      function addBodyEnd(ends2, point, start) {
        var point1 = point.slice();
        var point2 = point.slice();
        point1[cDimIdx] = subPixelOptimize(point1[cDimIdx] + candleWidth / 2, 1, false);
        point2[cDimIdx] = subPixelOptimize(point2[cDimIdx] - candleWidth / 2, 1, true);
        start ? ends2.push(point1, point2) : ends2.push(point2, point1);
      }
      function makeBrushRect(lowestVal2, highestVal2, axisDimVal2) {
        var pmin = getPoint(lowestVal2, axisDimVal2);
        var pmax = getPoint(highestVal2, axisDimVal2);
        pmin[cDimIdx] -= candleWidth / 2;
        pmax[cDimIdx] -= candleWidth / 2;
        return {
          x: pmin[0],
          y: pmin[1],
          width: candleWidth,
          height: pmax[1] - pmin[1]
        };
      }
      function subPixelOptimizePoint(point) {
        point[cDimIdx] = subPixelOptimize(point[cDimIdx], 1);
        return point;
      }
    }
    function largeProgress(params, data2) {
      var points = new LargeArr(params.count * 4);
      var offset = 0;
      var point;
      var tmpIn = [];
      var tmpOut = [];
      var dataIndex;
      var store = data2.getStore();
      while ((dataIndex = params.next()) != null) {
        var axisDimVal = store.get(cDimI, dataIndex);
        var openVal = store.get(openDimI, dataIndex);
        var closeVal = store.get(closeDimI, dataIndex);
        var lowestVal = store.get(lowestDimI, dataIndex);
        var highestVal = store.get(highestDimI, dataIndex);
        if (isNaN(axisDimVal) || isNaN(lowestVal) || isNaN(highestVal)) {
          points[offset++] = NaN;
          offset += 3;
          continue;
        }
        points[offset++] = getSign(store, dataIndex, openVal, closeVal, closeDimI);
        tmpIn[cDimIdx] = axisDimVal;
        tmpIn[vDimIdx] = lowestVal;
        point = coordSys.dataToPoint(tmpIn, null, tmpOut);
        points[offset++] = point ? point[0] : NaN;
        points[offset++] = point ? point[1] : NaN;
        tmpIn[vDimIdx] = highestVal;
        point = coordSys.dataToPoint(tmpIn, null, tmpOut);
        points[offset++] = point ? point[1] : NaN;
      }
      data2.setLayout("largePoints", points);
    }
  }
};
function getSign(store, dataIndex, openVal, closeVal, closeDimI) {
  var sign;
  if (openVal > closeVal) {
    sign = -1;
  } else if (openVal < closeVal) {
    sign = 1;
  } else {
    sign = dataIndex > 0 ? store.get(closeDimI, dataIndex - 1) <= closeVal ? 1 : -1 : 1;
  }
  return sign;
}
function calculateCandleWidth(seriesModel, data) {
  var baseAxis = seriesModel.getBaseAxis();
  var extent;
  var bandWidth = baseAxis.type === "category" ? baseAxis.getBandWidth() : (extent = baseAxis.getExtent(), Math.abs(extent[1] - extent[0]) / data.count());
  var barMaxWidth = parsePercent(retrieve2(seriesModel.get("barMaxWidth"), bandWidth), bandWidth);
  var barMinWidth = parsePercent(retrieve2(seriesModel.get("barMinWidth"), 1), bandWidth);
  var barWidth = seriesModel.get("barWidth");
  return barWidth != null ? parsePercent(barWidth, bandWidth) : Math.max(Math.min(bandWidth / 2, barMaxWidth), barMinWidth);
}
var candlestickLayout$1 = candlestickLayout;
function install$e(registers) {
  registers.registerChartView(CandlestickView$1);
  registers.registerSeriesModel(CandlestickSeriesModel$1);
  registers.registerPreprocessor(candlestickPreprocessor);
  registers.registerVisual(candlestickVisual$1);
  registers.registerLayout(candlestickLayout$1);
}
function updateRipplePath(rippleGroup, effectCfg) {
  var color = effectCfg.rippleEffectColor || effectCfg.color;
  rippleGroup.eachChild(function(ripplePath) {
    ripplePath.attr({
      z: effectCfg.z,
      zlevel: effectCfg.zlevel,
      style: {
        stroke: effectCfg.brushType === "stroke" ? color : null,
        fill: effectCfg.brushType === "fill" ? color : null
      }
    });
  });
}
var EffectSymbol = function(_super) {
  __extends(EffectSymbol2, _super);
  function EffectSymbol2(data, idx) {
    var _this = _super.call(this) || this;
    var symbol = new SymbolClz(data, idx);
    var rippleGroup = new Group$1();
    _this.add(symbol);
    _this.add(rippleGroup);
    _this.updateData(data, idx);
    return _this;
  }
  EffectSymbol2.prototype.stopEffectAnimation = function() {
    this.childAt(1).removeAll();
  };
  EffectSymbol2.prototype.startEffectAnimation = function(effectCfg) {
    var symbolType = effectCfg.symbolType;
    var color = effectCfg.color;
    var rippleNumber = effectCfg.rippleNumber;
    var rippleGroup = this.childAt(1);
    for (var i = 0; i < rippleNumber; i++) {
      var ripplePath = createSymbol$1(symbolType, -1, -1, 2, 2, color);
      ripplePath.attr({
        style: {
          strokeNoScale: true
        },
        z2: 99,
        silent: true,
        scaleX: 0.5,
        scaleY: 0.5
      });
      var delay = -i / rippleNumber * effectCfg.period + effectCfg.effectOffset;
      ripplePath.animate("", true).when(effectCfg.period, {
        scaleX: effectCfg.rippleScale / 2,
        scaleY: effectCfg.rippleScale / 2
      }).delay(delay).start();
      ripplePath.animateStyle(true).when(effectCfg.period, {
        opacity: 0
      }).delay(delay).start();
      rippleGroup.add(ripplePath);
    }
    updateRipplePath(rippleGroup, effectCfg);
  };
  EffectSymbol2.prototype.updateEffectAnimation = function(effectCfg) {
    var oldEffectCfg = this._effectCfg;
    var rippleGroup = this.childAt(1);
    var DIFFICULT_PROPS = ["symbolType", "period", "rippleScale", "rippleNumber"];
    for (var i = 0; i < DIFFICULT_PROPS.length; i++) {
      var propName = DIFFICULT_PROPS[i];
      if (oldEffectCfg[propName] !== effectCfg[propName]) {
        this.stopEffectAnimation();
        this.startEffectAnimation(effectCfg);
        return;
      }
    }
    updateRipplePath(rippleGroup, effectCfg);
  };
  EffectSymbol2.prototype.highlight = function() {
    enterEmphasis(this);
  };
  EffectSymbol2.prototype.downplay = function() {
    leaveEmphasis(this);
  };
  EffectSymbol2.prototype.getSymbolType = function() {
    var symbol = this.childAt(0);
    return symbol && symbol.getSymbolType();
  };
  EffectSymbol2.prototype.updateData = function(data, idx) {
    var _this = this;
    var seriesModel = data.hostModel;
    this.childAt(0).updateData(data, idx);
    var rippleGroup = this.childAt(1);
    var itemModel = data.getItemModel(idx);
    var symbolType = data.getItemVisual(idx, "symbol");
    var symbolSize = normalizeSymbolSize(data.getItemVisual(idx, "symbolSize"));
    var symbolStyle = data.getItemVisual(idx, "style");
    var color = symbolStyle && symbolStyle.fill;
    rippleGroup.setScale(symbolSize);
    rippleGroup.traverse(function(ripplePath) {
      ripplePath.setStyle("fill", color);
    });
    var symbolOffset = normalizeSymbolOffset(data.getItemVisual(idx, "symbolOffset"), symbolSize);
    if (symbolOffset) {
      rippleGroup.x = symbolOffset[0];
      rippleGroup.y = symbolOffset[1];
    }
    var symbolRotate = data.getItemVisual(idx, "symbolRotate");
    rippleGroup.rotation = (symbolRotate || 0) * Math.PI / 180 || 0;
    var effectCfg = {};
    effectCfg.showEffectOn = seriesModel.get("showEffectOn");
    effectCfg.rippleScale = itemModel.get(["rippleEffect", "scale"]);
    effectCfg.brushType = itemModel.get(["rippleEffect", "brushType"]);
    effectCfg.period = itemModel.get(["rippleEffect", "period"]) * 1e3;
    effectCfg.effectOffset = idx / data.count();
    effectCfg.z = seriesModel.getShallow("z") || 0;
    effectCfg.zlevel = seriesModel.getShallow("zlevel") || 0;
    effectCfg.symbolType = symbolType;
    effectCfg.color = color;
    effectCfg.rippleEffectColor = itemModel.get(["rippleEffect", "color"]);
    effectCfg.rippleNumber = itemModel.get(["rippleEffect", "number"]);
    this.off("mouseover").off("mouseout").off("emphasis").off("normal");
    if (effectCfg.showEffectOn === "render") {
      this._effectCfg ? this.updateEffectAnimation(effectCfg) : this.startEffectAnimation(effectCfg);
      this._effectCfg = effectCfg;
    } else {
      this._effectCfg = null;
      this.stopEffectAnimation();
      this.onHoverStateChange = function(toState) {
        if (toState === "emphasis") {
          if (effectCfg.showEffectOn !== "render") {
            _this.startEffectAnimation(effectCfg);
          }
        } else if (toState === "normal") {
          if (effectCfg.showEffectOn !== "render") {
            _this.stopEffectAnimation();
          }
        }
      };
    }
    this._effectCfg = effectCfg;
    enableHoverEmphasis(this);
  };
  EffectSymbol2.prototype.fadeOut = function(cb) {
    this.off("mouseover").off("mouseout");
    cb && cb();
  };
  return EffectSymbol2;
}(Group$1);
var EffectSymbol$1 = EffectSymbol;
var EffectScatterView = function(_super) {
  __extends(EffectScatterView2, _super);
  function EffectScatterView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = EffectScatterView2.type;
    return _this;
  }
  EffectScatterView2.prototype.init = function() {
    this._symbolDraw = new SymbolDraw(EffectSymbol$1);
  };
  EffectScatterView2.prototype.render = function(seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var effectSymbolDraw = this._symbolDraw;
    effectSymbolDraw.updateData(data, {
      clipShape: this._getClipShape(seriesModel)
    });
    this.group.add(effectSymbolDraw.group);
  };
  EffectScatterView2.prototype._getClipShape = function(seriesModel) {
    var coordSys = seriesModel.coordinateSystem;
    var clipArea = coordSys && coordSys.getArea && coordSys.getArea();
    return seriesModel.get("clip", true) ? clipArea : null;
  };
  EffectScatterView2.prototype.updateTransform = function(seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    this.group.dirty();
    var res = pointsLayout("").reset(seriesModel, ecModel, api);
    if (res.progress) {
      res.progress({
        start: 0,
        end: data.count(),
        count: data.count()
      }, data);
    }
    this._symbolDraw.updateLayout();
  };
  EffectScatterView2.prototype._updateGroupTransform = function(seriesModel) {
    var coordSys = seriesModel.coordinateSystem;
    if (coordSys && coordSys.getRoamTransform) {
      this.group.transform = clone$2(coordSys.getRoamTransform());
      this.group.decomposeTransform();
    }
  };
  EffectScatterView2.prototype.remove = function(ecModel, api) {
    this._symbolDraw && this._symbolDraw.remove(true);
  };
  EffectScatterView2.type = "effectScatter";
  return EffectScatterView2;
}(ChartView);
var EffectScatterView$1 = EffectScatterView;
var EffectScatterSeriesModel = function(_super) {
  __extends(EffectScatterSeriesModel2, _super);
  function EffectScatterSeriesModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = EffectScatterSeriesModel2.type;
    _this.hasSymbolVisual = true;
    return _this;
  }
  EffectScatterSeriesModel2.prototype.getInitialData = function(option, ecModel) {
    return createSeriesData(null, this, {
      useEncodeDefaulter: true
    });
  };
  EffectScatterSeriesModel2.prototype.brushSelector = function(dataIndex, data, selectors) {
    return selectors.point(data.getItemLayout(dataIndex));
  };
  EffectScatterSeriesModel2.type = "series.effectScatter";
  EffectScatterSeriesModel2.dependencies = ["grid", "polar"];
  EffectScatterSeriesModel2.defaultOption = {
    coordinateSystem: "cartesian2d",
    zlevel: 0,
    z: 2,
    legendHoverLink: true,
    effectType: "ripple",
    progressive: 0,
    showEffectOn: "render",
    clip: true,
    rippleEffect: {
      period: 4,
      scale: 2.5,
      brushType: "fill",
      number: 3
    },
    universalTransition: {
      divideShape: "clone"
    },
    symbolSize: 10
  };
  return EffectScatterSeriesModel2;
}(SeriesModel);
var EffectScatterSeriesModel$1 = EffectScatterSeriesModel;
function install$d(registers) {
  registers.registerChartView(EffectScatterView$1);
  registers.registerSeriesModel(EffectScatterSeriesModel$1);
  registers.registerLayout(pointsLayout("effectScatter"));
}
var EffectLine = function(_super) {
  __extends(EffectLine2, _super);
  function EffectLine2(lineData, idx, seriesScope) {
    var _this = _super.call(this) || this;
    _this.add(_this.createLine(lineData, idx, seriesScope));
    _this._updateEffectSymbol(lineData, idx);
    return _this;
  }
  EffectLine2.prototype.createLine = function(lineData, idx, seriesScope) {
    return new Line$1(lineData, idx, seriesScope);
  };
  EffectLine2.prototype._updateEffectSymbol = function(lineData, idx) {
    var itemModel = lineData.getItemModel(idx);
    var effectModel = itemModel.getModel("effect");
    var size = effectModel.get("symbolSize");
    var symbolType = effectModel.get("symbol");
    if (!isArray(size)) {
      size = [size, size];
    }
    var lineStyle = lineData.getItemVisual(idx, "style");
    var color = effectModel.get("color") || lineStyle && lineStyle.stroke;
    var symbol = this.childAt(1);
    if (this._symbolType !== symbolType) {
      this.remove(symbol);
      symbol = createSymbol$1(symbolType, -0.5, -0.5, 1, 1, color);
      symbol.z2 = 100;
      symbol.culling = true;
      this.add(symbol);
    }
    if (!symbol) {
      return;
    }
    symbol.setStyle("shadowColor", color);
    symbol.setStyle(effectModel.getItemStyle(["color"]));
    symbol.scaleX = size[0];
    symbol.scaleY = size[1];
    symbol.setColor(color);
    this._symbolType = symbolType;
    this._symbolScale = size;
    this._updateEffectAnimation(lineData, effectModel, idx);
  };
  EffectLine2.prototype._updateEffectAnimation = function(lineData, effectModel, idx) {
    var symbol = this.childAt(1);
    if (!symbol) {
      return;
    }
    var self = this;
    var points = lineData.getItemLayout(idx);
    var period = effectModel.get("period") * 1e3;
    var loop = effectModel.get("loop");
    var constantSpeed = effectModel.get("constantSpeed");
    var delayExpr = retrieve(effectModel.get("delay"), function(idx2) {
      return idx2 / lineData.count() * period / 3;
    });
    symbol.ignore = true;
    this._updateAnimationPoints(symbol, points);
    if (constantSpeed > 0) {
      period = this._getLineLength(symbol) / constantSpeed * 1e3;
    }
    if (period !== this._period || loop !== this._loop) {
      symbol.stopAnimation();
      if (period > 0) {
        var delayNum = void 0;
        if (typeof delayExpr === "function") {
          delayNum = delayExpr(idx);
        } else {
          delayNum = delayExpr;
        }
        if (symbol.__t > 0) {
          delayNum = -period * symbol.__t;
        }
        symbol.__t = 0;
        var animator = symbol.animate("", loop).when(period, {
          __t: 1
        }).delay(delayNum).during(function() {
          self._updateSymbolPosition(symbol);
        });
        if (!loop) {
          animator.done(function() {
            self.remove(symbol);
          });
        }
        animator.start();
      }
    }
    this._period = period;
    this._loop = loop;
  };
  EffectLine2.prototype._getLineLength = function(symbol) {
    return dist(symbol.__p1, symbol.__cp1) + dist(symbol.__cp1, symbol.__p2);
  };
  EffectLine2.prototype._updateAnimationPoints = function(symbol, points) {
    symbol.__p1 = points[0];
    symbol.__p2 = points[1];
    symbol.__cp1 = points[2] || [(points[0][0] + points[1][0]) / 2, (points[0][1] + points[1][1]) / 2];
  };
  EffectLine2.prototype.updateData = function(lineData, idx, seriesScope) {
    this.childAt(0).updateData(lineData, idx, seriesScope);
    this._updateEffectSymbol(lineData, idx);
  };
  EffectLine2.prototype._updateSymbolPosition = function(symbol) {
    var p1 = symbol.__p1;
    var p2 = symbol.__p2;
    var cp1 = symbol.__cp1;
    var t = symbol.__t;
    var pos = [symbol.x, symbol.y];
    var lastPos = pos.slice();
    var quadraticAt2 = quadraticAt$1;
    var quadraticDerivativeAt$1 = quadraticDerivativeAt;
    pos[0] = quadraticAt2(p1[0], cp1[0], p2[0], t);
    pos[1] = quadraticAt2(p1[1], cp1[1], p2[1], t);
    var tx = quadraticDerivativeAt$1(p1[0], cp1[0], p2[0], t);
    var ty = quadraticDerivativeAt$1(p1[1], cp1[1], p2[1], t);
    symbol.rotation = -Math.atan2(ty, tx) - Math.PI / 2;
    if (this._symbolType === "line" || this._symbolType === "rect" || this._symbolType === "roundRect") {
      if (symbol.__lastT !== void 0 && symbol.__lastT < symbol.__t) {
        symbol.scaleY = dist(lastPos, pos) * 1.05;
        if (t === 1) {
          pos[0] = lastPos[0] + (pos[0] - lastPos[0]) / 2;
          pos[1] = lastPos[1] + (pos[1] - lastPos[1]) / 2;
        }
      } else if (symbol.__lastT === 1) {
        symbol.scaleY = 2 * dist(p1, pos);
      } else {
        symbol.scaleY = this._symbolScale[1];
      }
    }
    symbol.__lastT = symbol.__t;
    symbol.ignore = false;
    symbol.x = pos[0];
    symbol.y = pos[1];
  };
  EffectLine2.prototype.updateLayout = function(lineData, idx) {
    this.childAt(0).updateLayout(lineData, idx);
    var effectModel = lineData.getItemModel(idx).getModel("effect");
    this._updateEffectAnimation(lineData, effectModel, idx);
  };
  return EffectLine2;
}(Group$1);
var EffectLine$1 = EffectLine;
var Polyline = function(_super) {
  __extends(Polyline2, _super);
  function Polyline2(lineData, idx, seriesScope) {
    var _this = _super.call(this) || this;
    _this._createPolyline(lineData, idx, seriesScope);
    return _this;
  }
  Polyline2.prototype._createPolyline = function(lineData, idx, seriesScope) {
    var points = lineData.getItemLayout(idx);
    var line = new Polyline$2({
      shape: {
        points
      }
    });
    this.add(line);
    this._updateCommonStl(lineData, idx, seriesScope);
  };
  Polyline2.prototype.updateData = function(lineData, idx, seriesScope) {
    var seriesModel = lineData.hostModel;
    var line = this.childAt(0);
    var target = {
      shape: {
        points: lineData.getItemLayout(idx)
      }
    };
    updateProps(line, target, seriesModel, idx);
    this._updateCommonStl(lineData, idx, seriesScope);
  };
  Polyline2.prototype._updateCommonStl = function(lineData, idx, seriesScope) {
    var line = this.childAt(0);
    var itemModel = lineData.getItemModel(idx);
    var hoverLineStyle = seriesScope && seriesScope.emphasisLineStyle;
    if (!seriesScope || lineData.hasItemOption) {
      hoverLineStyle = itemModel.getModel(["emphasis", "lineStyle"]).getLineStyle();
    }
    line.useStyle(lineData.getItemVisual(idx, "style"));
    line.style.fill = null;
    line.style.strokeNoScale = true;
    var lineEmphasisState = line.ensureState("emphasis");
    lineEmphasisState.style = hoverLineStyle;
    enableHoverEmphasis(this);
  };
  Polyline2.prototype.updateLayout = function(lineData, idx) {
    var polyline = this.childAt(0);
    polyline.setShape("points", lineData.getItemLayout(idx));
  };
  return Polyline2;
}(Group$1);
var Polyline$1 = Polyline;
var EffectPolyline = function(_super) {
  __extends(EffectPolyline2, _super);
  function EffectPolyline2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this._lastFrame = 0;
    _this._lastFramePercent = 0;
    return _this;
  }
  EffectPolyline2.prototype.createLine = function(lineData, idx, seriesScope) {
    return new Polyline$1(lineData, idx, seriesScope);
  };
  EffectPolyline2.prototype._updateAnimationPoints = function(symbol, points) {
    this._points = points;
    var accLenArr = [0];
    var len2 = 0;
    for (var i = 1; i < points.length; i++) {
      var p1 = points[i - 1];
      var p2 = points[i];
      len2 += dist(p1, p2);
      accLenArr.push(len2);
    }
    if (len2 === 0) {
      this._length = 0;
      return;
    }
    for (var i = 0; i < accLenArr.length; i++) {
      accLenArr[i] /= len2;
    }
    this._offsets = accLenArr;
    this._length = len2;
  };
  EffectPolyline2.prototype._getLineLength = function() {
    return this._length;
  };
  EffectPolyline2.prototype._updateSymbolPosition = function(symbol) {
    var t = symbol.__t;
    var points = this._points;
    var offsets = this._offsets;
    var len2 = points.length;
    if (!offsets) {
      return;
    }
    var lastFrame = this._lastFrame;
    var frame;
    if (t < this._lastFramePercent) {
      var start = Math.min(lastFrame + 1, len2 - 1);
      for (frame = start; frame >= 0; frame--) {
        if (offsets[frame] <= t) {
          break;
        }
      }
      frame = Math.min(frame, len2 - 2);
    } else {
      for (frame = lastFrame; frame < len2; frame++) {
        if (offsets[frame] > t) {
          break;
        }
      }
      frame = Math.min(frame - 1, len2 - 2);
    }
    var p = (t - offsets[frame]) / (offsets[frame + 1] - offsets[frame]);
    var p0 = points[frame];
    var p1 = points[frame + 1];
    symbol.x = p0[0] * (1 - p) + p * p1[0];
    symbol.y = p0[1] * (1 - p) + p * p1[1];
    var tx = p1[0] - p0[0];
    var ty = p1[1] - p0[1];
    symbol.rotation = -Math.atan2(ty, tx) - Math.PI / 2;
    this._lastFrame = frame;
    this._lastFramePercent = t;
    symbol.ignore = false;
  };
  return EffectPolyline2;
}(EffectLine$1);
var EffectPolyline$1 = EffectPolyline;
var LargeLinesPathShape = function() {
  function LargeLinesPathShape2() {
    this.polyline = false;
    this.curveness = 0;
    this.segs = [];
  }
  return LargeLinesPathShape2;
}();
var LargeLinesPath = function(_super) {
  __extends(LargeLinesPath2, _super);
  function LargeLinesPath2(opts) {
    return _super.call(this, opts) || this;
  }
  LargeLinesPath2.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  };
  LargeLinesPath2.prototype.getDefaultShape = function() {
    return new LargeLinesPathShape();
  };
  LargeLinesPath2.prototype.buildPath = function(ctx, shape) {
    var segs = shape.segs;
    var curveness = shape.curveness;
    if (shape.polyline) {
      for (var i = 0; i < segs.length; ) {
        var count = segs[i++];
        if (count > 0) {
          ctx.moveTo(segs[i++], segs[i++]);
          for (var k = 1; k < count; k++) {
            ctx.lineTo(segs[i++], segs[i++]);
          }
        }
      }
    } else {
      for (var i = 0; i < segs.length; ) {
        var x0 = segs[i++];
        var y0 = segs[i++];
        var x1 = segs[i++];
        var y1 = segs[i++];
        ctx.moveTo(x0, y0);
        if (curveness > 0) {
          var x2 = (x0 + x1) / 2 - (y0 - y1) * curveness;
          var y2 = (y0 + y1) / 2 - (x1 - x0) * curveness;
          ctx.quadraticCurveTo(x2, y2, x1, y1);
        } else {
          ctx.lineTo(x1, y1);
        }
      }
    }
  };
  LargeLinesPath2.prototype.findDataIndex = function(x, y) {
    var shape = this.shape;
    var segs = shape.segs;
    var curveness = shape.curveness;
    var lineWidth = this.style.lineWidth;
    if (shape.polyline) {
      var dataIndex = 0;
      for (var i = 0; i < segs.length; ) {
        var count = segs[i++];
        if (count > 0) {
          var x0 = segs[i++];
          var y0 = segs[i++];
          for (var k = 1; k < count; k++) {
            var x1 = segs[i++];
            var y1 = segs[i++];
            if (containStroke(x0, y0, x1, y1, lineWidth, x, y)) {
              return dataIndex;
            }
          }
        }
        dataIndex++;
      }
    } else {
      var dataIndex = 0;
      for (var i = 0; i < segs.length; ) {
        var x0 = segs[i++];
        var y0 = segs[i++];
        var x1 = segs[i++];
        var y1 = segs[i++];
        if (curveness > 0) {
          var x2 = (x0 + x1) / 2 - (y0 - y1) * curveness;
          var y2 = (y0 + y1) / 2 - (x1 - x0) * curveness;
          if (containStroke$1(x0, y0, x2, y2, x1, y1, lineWidth, x, y)) {
            return dataIndex;
          }
        } else {
          if (containStroke(x0, y0, x1, y1, lineWidth, x, y)) {
            return dataIndex;
          }
        }
        dataIndex++;
      }
    }
    return -1;
  };
  return LargeLinesPath2;
}(Path);
var LargeLineDraw = function() {
  function LargeLineDraw2() {
    this.group = new Group$1();
  }
  LargeLineDraw2.prototype.isPersistent = function() {
    return !this._incremental;
  };
  LargeLineDraw2.prototype.updateData = function(data) {
    this.group.removeAll();
    var lineEl = new LargeLinesPath({
      rectHover: true,
      cursor: "default"
    });
    lineEl.setShape({
      segs: data.getLayout("linesPoints")
    });
    this._setCommon(lineEl, data);
    this.group.add(lineEl);
    this._incremental = null;
  };
  LargeLineDraw2.prototype.incrementalPrepareUpdate = function(data) {
    this.group.removeAll();
    this._clearIncremental();
    if (data.count() > 5e5) {
      if (!this._incremental) {
        this._incremental = new IncrementalDisplayable({
          silent: true
        });
      }
      this.group.add(this._incremental);
    } else {
      this._incremental = null;
    }
  };
  LargeLineDraw2.prototype.incrementalUpdate = function(taskParams, data) {
    var lineEl = new LargeLinesPath();
    lineEl.setShape({
      segs: data.getLayout("linesPoints")
    });
    this._setCommon(lineEl, data, !!this._incremental);
    if (!this._incremental) {
      lineEl.rectHover = true;
      lineEl.cursor = "default";
      lineEl.__startIndex = taskParams.start;
      this.group.add(lineEl);
    } else {
      this._incremental.addDisplayable(lineEl, true);
    }
  };
  LargeLineDraw2.prototype.remove = function() {
    this._clearIncremental();
    this._incremental = null;
    this.group.removeAll();
  };
  LargeLineDraw2.prototype._setCommon = function(lineEl, data, isIncremental) {
    var hostModel = data.hostModel;
    lineEl.setShape({
      polyline: hostModel.get("polyline"),
      curveness: hostModel.get(["lineStyle", "curveness"])
    });
    lineEl.useStyle(hostModel.getModel("lineStyle").getLineStyle());
    lineEl.style.strokeNoScale = true;
    var style = data.getVisual("style");
    if (style && style.stroke) {
      lineEl.setStyle("stroke", style.stroke);
    }
    lineEl.setStyle("fill", null);
    if (!isIncremental) {
      var ecData_1 = getECData(lineEl);
      ecData_1.seriesIndex = hostModel.seriesIndex;
      lineEl.on("mousemove", function(e) {
        ecData_1.dataIndex = null;
        var dataIndex = lineEl.findDataIndex(e.offsetX, e.offsetY);
        if (dataIndex > 0) {
          ecData_1.dataIndex = dataIndex + lineEl.__startIndex;
        }
      });
    }
  };
  LargeLineDraw2.prototype._clearIncremental = function() {
    var incremental = this._incremental;
    if (incremental) {
      incremental.clearDisplaybles();
    }
  };
  return LargeLineDraw2;
}();
var LargeLineDraw$1 = LargeLineDraw;
var linesLayout = {
  seriesType: "lines",
  plan: createRenderPlanner(),
  reset: function(seriesModel) {
    var coordSys = seriesModel.coordinateSystem;
    var isPolyline = seriesModel.get("polyline");
    var isLarge = seriesModel.pipelineContext.large;
    return {
      progress: function(params, lineData) {
        var lineCoords = [];
        if (isLarge) {
          var points = void 0;
          var segCount = params.end - params.start;
          if (isPolyline) {
            var totalCoordsCount = 0;
            for (var i = params.start; i < params.end; i++) {
              totalCoordsCount += seriesModel.getLineCoordsCount(i);
            }
            points = new Float32Array(segCount + totalCoordsCount * 2);
          } else {
            points = new Float32Array(segCount * 4);
          }
          var offset = 0;
          var pt = [];
          for (var i = params.start; i < params.end; i++) {
            var len2 = seriesModel.getLineCoords(i, lineCoords);
            if (isPolyline) {
              points[offset++] = len2;
            }
            for (var k = 0; k < len2; k++) {
              pt = coordSys.dataToPoint(lineCoords[k], false, pt);
              points[offset++] = pt[0];
              points[offset++] = pt[1];
            }
          }
          lineData.setLayout("linesPoints", points);
        } else {
          for (var i = params.start; i < params.end; i++) {
            var itemModel = lineData.getItemModel(i);
            var len2 = seriesModel.getLineCoords(i, lineCoords);
            var pts = [];
            if (isPolyline) {
              for (var j = 0; j < len2; j++) {
                pts.push(coordSys.dataToPoint(lineCoords[j]));
              }
            } else {
              pts[0] = coordSys.dataToPoint(lineCoords[0]);
              pts[1] = coordSys.dataToPoint(lineCoords[1]);
              var curveness = itemModel.get(["lineStyle", "curveness"]);
              if (+curveness) {
                pts[2] = [(pts[0][0] + pts[1][0]) / 2 - (pts[0][1] - pts[1][1]) * curveness, (pts[0][1] + pts[1][1]) / 2 - (pts[1][0] - pts[0][0]) * curveness];
              }
            }
            lineData.setItemLayout(i, pts);
          }
        }
      }
    };
  }
};
var linesLayout$1 = linesLayout;
var LinesView = function(_super) {
  __extends(LinesView2, _super);
  function LinesView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = LinesView2.type;
    return _this;
  }
  LinesView2.prototype.render = function(seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var lineDraw = this._updateLineDraw(data, seriesModel);
    var zlevel = seriesModel.get("zlevel");
    var trailLength = seriesModel.get(["effect", "trailLength"]);
    var zr = api.getZr();
    var isSvg = zr.painter.getType() === "svg";
    if (!isSvg) {
      zr.painter.getLayer(zlevel).clear(true);
    }
    if (this._lastZlevel != null && !isSvg) {
      zr.configLayer(this._lastZlevel, {
        motionBlur: false
      });
    }
    if (this._showEffect(seriesModel) && trailLength) {
      if (!isSvg) {
        zr.configLayer(zlevel, {
          motionBlur: true,
          lastFrameAlpha: Math.max(Math.min(trailLength / 10 + 0.9, 1), 0)
        });
      }
    }
    lineDraw.updateData(data);
    var clipPath = seriesModel.get("clip", true) && createClipPath(seriesModel.coordinateSystem, false, seriesModel);
    if (clipPath) {
      this.group.setClipPath(clipPath);
    } else {
      this.group.removeClipPath();
    }
    this._lastZlevel = zlevel;
    this._finished = true;
  };
  LinesView2.prototype.incrementalPrepareRender = function(seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var lineDraw = this._updateLineDraw(data, seriesModel);
    lineDraw.incrementalPrepareUpdate(data);
    this._clearLayer(api);
    this._finished = false;
  };
  LinesView2.prototype.incrementalRender = function(taskParams, seriesModel, ecModel) {
    this._lineDraw.incrementalUpdate(taskParams, seriesModel.getData());
    this._finished = taskParams.end === seriesModel.getData().count();
  };
  LinesView2.prototype.updateTransform = function(seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var pipelineContext = seriesModel.pipelineContext;
    if (!this._finished || pipelineContext.large || pipelineContext.progressiveRender) {
      return {
        update: true
      };
    } else {
      var res = linesLayout$1.reset(seriesModel, ecModel, api);
      if (res.progress) {
        res.progress({
          start: 0,
          end: data.count(),
          count: data.count()
        }, data);
      }
      this._lineDraw.updateLayout();
      this._clearLayer(api);
    }
  };
  LinesView2.prototype._updateLineDraw = function(data, seriesModel) {
    var lineDraw = this._lineDraw;
    var hasEffect = this._showEffect(seriesModel);
    var isPolyline = !!seriesModel.get("polyline");
    var pipelineContext = seriesModel.pipelineContext;
    var isLargeDraw = pipelineContext.large;
    if (!lineDraw || hasEffect !== this._hasEffet || isPolyline !== this._isPolyline || isLargeDraw !== this._isLargeDraw) {
      if (lineDraw) {
        lineDraw.remove();
      }
      lineDraw = this._lineDraw = isLargeDraw ? new LargeLineDraw$1() : new LineDraw$1(isPolyline ? hasEffect ? EffectPolyline$1 : Polyline$1 : hasEffect ? EffectLine$1 : Line$1);
      this._hasEffet = hasEffect;
      this._isPolyline = isPolyline;
      this._isLargeDraw = isLargeDraw;
    }
    this.group.add(lineDraw.group);
    return lineDraw;
  };
  LinesView2.prototype._showEffect = function(seriesModel) {
    return !!seriesModel.get(["effect", "show"]);
  };
  LinesView2.prototype._clearLayer = function(api) {
    var zr = api.getZr();
    var isSvg = zr.painter.getType() === "svg";
    if (!isSvg && this._lastZlevel != null) {
      zr.painter.getLayer(this._lastZlevel).clear(true);
    }
  };
  LinesView2.prototype.remove = function(ecModel, api) {
    this._lineDraw && this._lineDraw.remove();
    this._lineDraw = null;
    this._clearLayer(api);
  };
  LinesView2.prototype.dispose = function(ecModel, api) {
    this.remove(ecModel, api);
  };
  LinesView2.type = "lines";
  return LinesView2;
}(ChartView);
var LinesView$1 = LinesView;
var Uint32Arr = typeof Uint32Array === "undefined" ? Array : Uint32Array;
var Float64Arr = typeof Float64Array === "undefined" ? Array : Float64Array;
function compatEc2(seriesOpt) {
  var data = seriesOpt.data;
  if (data && data[0] && data[0][0] && data[0][0].coord) {
    seriesOpt.data = map(data, function(itemOpt) {
      var coords = [itemOpt[0].coord, itemOpt[1].coord];
      var target = {
        coords
      };
      if (itemOpt[0].name) {
        target.fromName = itemOpt[0].name;
      }
      if (itemOpt[1].name) {
        target.toName = itemOpt[1].name;
      }
      return mergeAll([target, itemOpt[0], itemOpt[1]]);
    });
  }
}
var LinesSeriesModel = function(_super) {
  __extends(LinesSeriesModel2, _super);
  function LinesSeriesModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = LinesSeriesModel2.type;
    _this.visualStyleAccessPath = "lineStyle";
    _this.visualDrawType = "stroke";
    return _this;
  }
  LinesSeriesModel2.prototype.init = function(option) {
    option.data = option.data || [];
    compatEc2(option);
    var result = this._processFlatCoordsArray(option.data);
    this._flatCoords = result.flatCoords;
    this._flatCoordsOffset = result.flatCoordsOffset;
    if (result.flatCoords) {
      option.data = new Float32Array(result.count);
    }
    _super.prototype.init.apply(this, arguments);
  };
  LinesSeriesModel2.prototype.mergeOption = function(option) {
    compatEc2(option);
    if (option.data) {
      var result = this._processFlatCoordsArray(option.data);
      this._flatCoords = result.flatCoords;
      this._flatCoordsOffset = result.flatCoordsOffset;
      if (result.flatCoords) {
        option.data = new Float32Array(result.count);
      }
    }
    _super.prototype.mergeOption.apply(this, arguments);
  };
  LinesSeriesModel2.prototype.appendData = function(params) {
    var result = this._processFlatCoordsArray(params.data);
    if (result.flatCoords) {
      if (!this._flatCoords) {
        this._flatCoords = result.flatCoords;
        this._flatCoordsOffset = result.flatCoordsOffset;
      } else {
        this._flatCoords = concatArray(this._flatCoords, result.flatCoords);
        this._flatCoordsOffset = concatArray(this._flatCoordsOffset, result.flatCoordsOffset);
      }
      params.data = new Float32Array(result.count);
    }
    this.getRawData().appendData(params.data);
  };
  LinesSeriesModel2.prototype._getCoordsFromItemModel = function(idx) {
    var itemModel = this.getData().getItemModel(idx);
    var coords = itemModel.option instanceof Array ? itemModel.option : itemModel.getShallow("coords");
    return coords;
  };
  LinesSeriesModel2.prototype.getLineCoordsCount = function(idx) {
    if (this._flatCoordsOffset) {
      return this._flatCoordsOffset[idx * 2 + 1];
    } else {
      return this._getCoordsFromItemModel(idx).length;
    }
  };
  LinesSeriesModel2.prototype.getLineCoords = function(idx, out) {
    if (this._flatCoordsOffset) {
      var offset = this._flatCoordsOffset[idx * 2];
      var len2 = this._flatCoordsOffset[idx * 2 + 1];
      for (var i = 0; i < len2; i++) {
        out[i] = out[i] || [];
        out[i][0] = this._flatCoords[offset + i * 2];
        out[i][1] = this._flatCoords[offset + i * 2 + 1];
      }
      return len2;
    } else {
      var coords = this._getCoordsFromItemModel(idx);
      for (var i = 0; i < coords.length; i++) {
        out[i] = out[i] || [];
        out[i][0] = coords[i][0];
        out[i][1] = coords[i][1];
      }
      return coords.length;
    }
  };
  LinesSeriesModel2.prototype._processFlatCoordsArray = function(data) {
    var startOffset = 0;
    if (this._flatCoords) {
      startOffset = this._flatCoords.length;
    }
    if (typeof data[0] === "number") {
      var len2 = data.length;
      var coordsOffsetAndLenStorage = new Uint32Arr(len2);
      var coordsStorage = new Float64Arr(len2);
      var coordsCursor = 0;
      var offsetCursor = 0;
      var dataCount = 0;
      for (var i = 0; i < len2; ) {
        dataCount++;
        var count = data[i++];
        coordsOffsetAndLenStorage[offsetCursor++] = coordsCursor + startOffset;
        coordsOffsetAndLenStorage[offsetCursor++] = count;
        for (var k = 0; k < count; k++) {
          var x = data[i++];
          var y = data[i++];
          coordsStorage[coordsCursor++] = x;
          coordsStorage[coordsCursor++] = y;
        }
      }
      return {
        flatCoordsOffset: new Uint32Array(coordsOffsetAndLenStorage.buffer, 0, offsetCursor),
        flatCoords: coordsStorage,
        count: dataCount
      };
    }
    return {
      flatCoordsOffset: null,
      flatCoords: null,
      count: data.length
    };
  };
  LinesSeriesModel2.prototype.getInitialData = function(option, ecModel) {
    var lineData = new SeriesData(["value"], this);
    lineData.hasItemOption = false;
    lineData.initData(option.data, [], function(dataItem, dimName, dataIndex, dimIndex) {
      if (dataItem instanceof Array) {
        return NaN;
      } else {
        lineData.hasItemOption = true;
        var value = dataItem.value;
        if (value != null) {
          return value instanceof Array ? value[dimIndex] : value;
        }
      }
    });
    return lineData;
  };
  LinesSeriesModel2.prototype.formatTooltip = function(dataIndex, multipleSeries, dataType) {
    var data = this.getData();
    var itemModel = data.getItemModel(dataIndex);
    var name = itemModel.get("name");
    if (name) {
      return name;
    }
    var fromName = itemModel.get("fromName");
    var toName = itemModel.get("toName");
    var nameArr = [];
    fromName != null && nameArr.push(fromName);
    toName != null && nameArr.push(toName);
    return createTooltipMarkup("nameValue", {
      name: nameArr.join(" > ")
    });
  };
  LinesSeriesModel2.prototype.preventIncremental = function() {
    return !!this.get(["effect", "show"]);
  };
  LinesSeriesModel2.prototype.getProgressive = function() {
    var progressive = this.option.progressive;
    if (progressive == null) {
      return this.option.large ? 1e4 : this.get("progressive");
    }
    return progressive;
  };
  LinesSeriesModel2.prototype.getProgressiveThreshold = function() {
    var progressiveThreshold = this.option.progressiveThreshold;
    if (progressiveThreshold == null) {
      return this.option.large ? 2e4 : this.get("progressiveThreshold");
    }
    return progressiveThreshold;
  };
  LinesSeriesModel2.type = "series.lines";
  LinesSeriesModel2.dependencies = ["grid", "polar", "geo", "calendar"];
  LinesSeriesModel2.defaultOption = {
    coordinateSystem: "geo",
    zlevel: 0,
    z: 2,
    legendHoverLink: true,
    xAxisIndex: 0,
    yAxisIndex: 0,
    symbol: ["none", "none"],
    symbolSize: [10, 10],
    geoIndex: 0,
    effect: {
      show: false,
      period: 4,
      constantSpeed: 0,
      symbol: "circle",
      symbolSize: 3,
      loop: true,
      trailLength: 0.2
    },
    large: false,
    largeThreshold: 2e3,
    polyline: false,
    clip: true,
    label: {
      show: false,
      position: "end"
    },
    lineStyle: {
      opacity: 0.5
    }
  };
  return LinesSeriesModel2;
}(SeriesModel);
var LinesSeriesModel$1 = LinesSeriesModel;
function normalize(a) {
  if (!(a instanceof Array)) {
    a = [a, a];
  }
  return a;
}
var linesVisual = {
  seriesType: "lines",
  reset: function(seriesModel) {
    var symbolType = normalize(seriesModel.get("symbol"));
    var symbolSize = normalize(seriesModel.get("symbolSize"));
    var data = seriesModel.getData();
    data.setVisual("fromSymbol", symbolType && symbolType[0]);
    data.setVisual("toSymbol", symbolType && symbolType[1]);
    data.setVisual("fromSymbolSize", symbolSize && symbolSize[0]);
    data.setVisual("toSymbolSize", symbolSize && symbolSize[1]);
    function dataEach(data2, idx) {
      var itemModel = data2.getItemModel(idx);
      var symbolType2 = normalize(itemModel.getShallow("symbol", true));
      var symbolSize2 = normalize(itemModel.getShallow("symbolSize", true));
      symbolType2[0] && data2.setItemVisual(idx, "fromSymbol", symbolType2[0]);
      symbolType2[1] && data2.setItemVisual(idx, "toSymbol", symbolType2[1]);
      symbolSize2[0] && data2.setItemVisual(idx, "fromSymbolSize", symbolSize2[0]);
      symbolSize2[1] && data2.setItemVisual(idx, "toSymbolSize", symbolSize2[1]);
    }
    return {
      dataEach: data.hasItemOption ? dataEach : null
    };
  }
};
var linesVisual$1 = linesVisual;
function install$c(registers) {
  registers.registerChartView(LinesView$1);
  registers.registerSeriesModel(LinesSeriesModel$1);
  registers.registerLayout(linesLayout$1);
  registers.registerVisual(linesVisual$1);
}
var GRADIENT_LEVELS = 256;
var HeatmapLayer = function() {
  function HeatmapLayer2() {
    this.blurSize = 30;
    this.pointSize = 20;
    this.maxOpacity = 1;
    this.minOpacity = 0;
    this._gradientPixels = {
      inRange: null,
      outOfRange: null
    };
    var canvas = createCanvas();
    this.canvas = canvas;
  }
  HeatmapLayer2.prototype.update = function(data, width, height, normalize2, colorFunc, isInRange) {
    var brush2 = this._getBrush();
    var gradientInRange = this._getGradient(colorFunc, "inRange");
    var gradientOutOfRange = this._getGradient(colorFunc, "outOfRange");
    var r = this.pointSize + this.blurSize;
    var canvas = this.canvas;
    var ctx = canvas.getContext("2d");
    var len2 = data.length;
    canvas.width = width;
    canvas.height = height;
    for (var i = 0; i < len2; ++i) {
      var p = data[i];
      var x = p[0];
      var y = p[1];
      var value = p[2];
      var alpha = normalize2(value);
      ctx.globalAlpha = alpha;
      ctx.drawImage(brush2, x - r, y - r);
    }
    if (!canvas.width || !canvas.height) {
      return canvas;
    }
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var pixels = imageData.data;
    var offset = 0;
    var pixelLen = pixels.length;
    var minOpacity = this.minOpacity;
    var maxOpacity = this.maxOpacity;
    var diffOpacity = maxOpacity - minOpacity;
    while (offset < pixelLen) {
      var alpha = pixels[offset + 3] / 256;
      var gradientOffset = Math.floor(alpha * (GRADIENT_LEVELS - 1)) * 4;
      if (alpha > 0) {
        var gradient = isInRange(alpha) ? gradientInRange : gradientOutOfRange;
        alpha > 0 && (alpha = alpha * diffOpacity + minOpacity);
        pixels[offset++] = gradient[gradientOffset];
        pixels[offset++] = gradient[gradientOffset + 1];
        pixels[offset++] = gradient[gradientOffset + 2];
        pixels[offset++] = gradient[gradientOffset + 3] * alpha * 256;
      } else {
        offset += 4;
      }
    }
    ctx.putImageData(imageData, 0, 0);
    return canvas;
  };
  HeatmapLayer2.prototype._getBrush = function() {
    var brushCanvas = this._brushCanvas || (this._brushCanvas = createCanvas());
    var r = this.pointSize + this.blurSize;
    var d = r * 2;
    brushCanvas.width = d;
    brushCanvas.height = d;
    var ctx = brushCanvas.getContext("2d");
    ctx.clearRect(0, 0, d, d);
    ctx.shadowOffsetX = d;
    ctx.shadowBlur = this.blurSize;
    ctx.shadowColor = "#000";
    ctx.beginPath();
    ctx.arc(-r, r, this.pointSize, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    return brushCanvas;
  };
  HeatmapLayer2.prototype._getGradient = function(colorFunc, state) {
    var gradientPixels = this._gradientPixels;
    var pixelsSingleState = gradientPixels[state] || (gradientPixels[state] = new Uint8ClampedArray(256 * 4));
    var color = [0, 0, 0, 0];
    var off = 0;
    for (var i = 0; i < 256; i++) {
      colorFunc[state](i / 255, true, color);
      pixelsSingleState[off++] = color[0];
      pixelsSingleState[off++] = color[1];
      pixelsSingleState[off++] = color[2];
      pixelsSingleState[off++] = color[3];
    }
    return pixelsSingleState;
  };
  return HeatmapLayer2;
}();
var HeatmapLayer$1 = HeatmapLayer;
function getIsInPiecewiseRange(dataExtent, pieceList, selected) {
  var dataSpan = dataExtent[1] - dataExtent[0];
  pieceList = map(pieceList, function(piece) {
    return {
      interval: [(piece.interval[0] - dataExtent[0]) / dataSpan, (piece.interval[1] - dataExtent[0]) / dataSpan]
    };
  });
  var len2 = pieceList.length;
  var lastIndex = 0;
  return function(val) {
    var i;
    for (i = lastIndex; i < len2; i++) {
      var interval = pieceList[i].interval;
      if (interval[0] <= val && val <= interval[1]) {
        lastIndex = i;
        break;
      }
    }
    if (i === len2) {
      for (i = lastIndex - 1; i >= 0; i--) {
        var interval = pieceList[i].interval;
        if (interval[0] <= val && val <= interval[1]) {
          lastIndex = i;
          break;
        }
      }
    }
    return i >= 0 && i < len2 && selected[i];
  };
}
function getIsInContinuousRange(dataExtent, range) {
  var dataSpan = dataExtent[1] - dataExtent[0];
  range = [(range[0] - dataExtent[0]) / dataSpan, (range[1] - dataExtent[0]) / dataSpan];
  return function(val) {
    return val >= range[0] && val <= range[1];
  };
}
function isGeoCoordSys(coordSys) {
  var dimensions = coordSys.dimensions;
  return dimensions[0] === "lng" && dimensions[1] === "lat";
}
var HeatmapView = function(_super) {
  __extends(HeatmapView2, _super);
  function HeatmapView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = HeatmapView2.type;
    return _this;
  }
  HeatmapView2.prototype.render = function(seriesModel, ecModel, api) {
    var visualMapOfThisSeries;
    ecModel.eachComponent("visualMap", function(visualMap) {
      visualMap.eachTargetSeries(function(targetSeries) {
        if (targetSeries === seriesModel) {
          visualMapOfThisSeries = visualMap;
        }
      });
    });
    this.group.removeAll();
    this._incrementalDisplayable = null;
    var coordSys = seriesModel.coordinateSystem;
    if (coordSys.type === "cartesian2d" || coordSys.type === "calendar") {
      this._renderOnCartesianAndCalendar(seriesModel, api, 0, seriesModel.getData().count());
    } else if (isGeoCoordSys(coordSys)) {
      this._renderOnGeo(coordSys, seriesModel, visualMapOfThisSeries, api);
    }
  };
  HeatmapView2.prototype.incrementalPrepareRender = function(seriesModel, ecModel, api) {
    this.group.removeAll();
  };
  HeatmapView2.prototype.incrementalRender = function(params, seriesModel, ecModel, api) {
    var coordSys = seriesModel.coordinateSystem;
    if (coordSys) {
      if (isGeoCoordSys(coordSys)) {
        this.render(seriesModel, ecModel, api);
      } else {
        this._renderOnCartesianAndCalendar(seriesModel, api, params.start, params.end, true);
      }
    }
  };
  HeatmapView2.prototype._renderOnCartesianAndCalendar = function(seriesModel, api, start, end, incremental) {
    var coordSys = seriesModel.coordinateSystem;
    var width;
    var height;
    var xAxisExtent;
    var yAxisExtent;
    if (isCoordinateSystemType(coordSys, "cartesian2d")) {
      var xAxis = coordSys.getAxis("x");
      var yAxis = coordSys.getAxis("y");
      width = xAxis.getBandWidth();
      height = yAxis.getBandWidth();
      xAxisExtent = xAxis.scale.getExtent();
      yAxisExtent = yAxis.scale.getExtent();
    }
    var group = this.group;
    var data = seriesModel.getData();
    var emphasisStyle = seriesModel.getModel(["emphasis", "itemStyle"]).getItemStyle();
    var blurStyle = seriesModel.getModel(["blur", "itemStyle"]).getItemStyle();
    var selectStyle = seriesModel.getModel(["select", "itemStyle"]).getItemStyle();
    var labelStatesModels = getLabelStatesModels(seriesModel);
    var focus = seriesModel.get(["emphasis", "focus"]);
    var blurScope = seriesModel.get(["emphasis", "blurScope"]);
    var dataDims = isCoordinateSystemType(coordSys, "cartesian2d") ? [data.mapDimension("x"), data.mapDimension("y"), data.mapDimension("value")] : [data.mapDimension("time"), data.mapDimension("value")];
    for (var idx = start; idx < end; idx++) {
      var rect = void 0;
      var style = data.getItemVisual(idx, "style");
      if (isCoordinateSystemType(coordSys, "cartesian2d")) {
        var dataDimX = data.get(dataDims[0], idx);
        var dataDimY = data.get(dataDims[1], idx);
        if (isNaN(data.get(dataDims[2], idx)) || dataDimX < xAxisExtent[0] || dataDimX > xAxisExtent[1] || dataDimY < yAxisExtent[0] || dataDimY > yAxisExtent[1]) {
          continue;
        }
        var point = coordSys.dataToPoint([dataDimX, dataDimY]);
        rect = new Rect$1({
          shape: {
            x: Math.floor(Math.round(point[0]) - width / 2),
            y: Math.floor(Math.round(point[1]) - height / 2),
            width: Math.ceil(width),
            height: Math.ceil(height)
          },
          style
        });
      } else {
        if (isNaN(data.get(dataDims[1], idx))) {
          continue;
        }
        rect = new Rect$1({
          z2: 1,
          shape: coordSys.dataToRect([data.get(dataDims[0], idx)]).contentShape,
          style
        });
      }
      var itemModel = data.getItemModel(idx);
      if (data.hasItemOption) {
        var emphasisModel = itemModel.getModel("emphasis");
        emphasisStyle = emphasisModel.getModel("itemStyle").getItemStyle();
        blurStyle = itemModel.getModel(["blur", "itemStyle"]).getItemStyle();
        selectStyle = itemModel.getModel(["select", "itemStyle"]).getItemStyle();
        focus = emphasisModel.get("focus");
        blurScope = emphasisModel.get("blurScope");
        labelStatesModels = getLabelStatesModels(itemModel);
      }
      var rawValue = seriesModel.getRawValue(idx);
      var defaultText = "-";
      if (rawValue && rawValue[2] != null) {
        defaultText = rawValue[2] + "";
      }
      setLabelStyle(rect, labelStatesModels, {
        labelFetcher: seriesModel,
        labelDataIndex: idx,
        defaultOpacity: style.opacity,
        defaultText
      });
      rect.ensureState("emphasis").style = emphasisStyle;
      rect.ensureState("blur").style = blurStyle;
      rect.ensureState("select").style = selectStyle;
      enableHoverEmphasis(rect, focus, blurScope);
      rect.incremental = incremental;
      if (incremental) {
        rect.states.emphasis.hoverLayer = true;
      }
      group.add(rect);
      data.setItemGraphicEl(idx, rect);
    }
  };
  HeatmapView2.prototype._renderOnGeo = function(geo, seriesModel, visualMapModel, api) {
    var inRangeVisuals = visualMapModel.targetVisuals.inRange;
    var outOfRangeVisuals = visualMapModel.targetVisuals.outOfRange;
    var data = seriesModel.getData();
    var hmLayer = this._hmLayer || this._hmLayer || new HeatmapLayer$1();
    hmLayer.blurSize = seriesModel.get("blurSize");
    hmLayer.pointSize = seriesModel.get("pointSize");
    hmLayer.minOpacity = seriesModel.get("minOpacity");
    hmLayer.maxOpacity = seriesModel.get("maxOpacity");
    var rect = geo.getViewRect().clone();
    var roamTransform = geo.getRoamTransform();
    rect.applyTransform(roamTransform);
    var x = Math.max(rect.x, 0);
    var y = Math.max(rect.y, 0);
    var x2 = Math.min(rect.width + rect.x, api.getWidth());
    var y2 = Math.min(rect.height + rect.y, api.getHeight());
    var width = x2 - x;
    var height = y2 - y;
    var dims = [data.mapDimension("lng"), data.mapDimension("lat"), data.mapDimension("value")];
    var points = data.mapArray(dims, function(lng, lat, value) {
      var pt = geo.dataToPoint([lng, lat]);
      pt[0] -= x;
      pt[1] -= y;
      pt.push(value);
      return pt;
    });
    var dataExtent = visualMapModel.getExtent();
    var isInRange = visualMapModel.type === "visualMap.continuous" ? getIsInContinuousRange(dataExtent, visualMapModel.option.range) : getIsInPiecewiseRange(dataExtent, visualMapModel.getPieceList(), visualMapModel.option.selected);
    hmLayer.update(points, width, height, inRangeVisuals.color.getNormalizer(), {
      inRange: inRangeVisuals.color.getColorMapper(),
      outOfRange: outOfRangeVisuals.color.getColorMapper()
    }, isInRange);
    var img = new ZRImage({
      style: {
        width,
        height,
        x,
        y,
        image: hmLayer.canvas
      },
      silent: true
    });
    this.group.add(img);
  };
  HeatmapView2.type = "heatmap";
  return HeatmapView2;
}(ChartView);
var HeatmapView$1 = HeatmapView;
var HeatmapSeriesModel = function(_super) {
  __extends(HeatmapSeriesModel2, _super);
  function HeatmapSeriesModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = HeatmapSeriesModel2.type;
    return _this;
  }
  HeatmapSeriesModel2.prototype.getInitialData = function(option, ecModel) {
    return createSeriesData(null, this, {
      generateCoord: "value"
    });
  };
  HeatmapSeriesModel2.prototype.preventIncremental = function() {
    var coordSysCreator = CoordinateSystem.get(this.get("coordinateSystem"));
    if (coordSysCreator && coordSysCreator.dimensions) {
      return coordSysCreator.dimensions[0] === "lng" && coordSysCreator.dimensions[1] === "lat";
    }
  };
  HeatmapSeriesModel2.type = "series.heatmap";
  HeatmapSeriesModel2.dependencies = ["grid", "geo", "calendar"];
  HeatmapSeriesModel2.defaultOption = {
    coordinateSystem: "cartesian2d",
    zlevel: 0,
    z: 2,
    geoIndex: 0,
    blurSize: 30,
    pointSize: 20,
    maxOpacity: 1,
    minOpacity: 0,
    select: {
      itemStyle: {
        borderColor: "#212121"
      }
    }
  };
  return HeatmapSeriesModel2;
}(SeriesModel);
var HeatmapSeriesModel$1 = HeatmapSeriesModel;
function install$b(registers) {
  registers.registerChartView(HeatmapView$1);
  registers.registerSeriesModel(HeatmapSeriesModel$1);
}
var ThemeRiverView = function(_super) {
  __extends(ThemeRiverView2, _super);
  function ThemeRiverView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ThemeRiverView2.type;
    _this._layers = [];
    return _this;
  }
  ThemeRiverView2.prototype.render = function(seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var self = this;
    var group = this.group;
    var layersSeries = seriesModel.getLayerSeries();
    var layoutInfo = data.getLayout("layoutInfo");
    var rect = layoutInfo.rect;
    var boundaryGap = layoutInfo.boundaryGap;
    group.x = 0;
    group.y = rect.y + boundaryGap[0];
    function keyGetter(item) {
      return item.name;
    }
    var dataDiffer = new DataDiffer(this._layersSeries || [], layersSeries, keyGetter, keyGetter);
    var newLayersGroups = [];
    dataDiffer.add(bind(process, this, "add")).update(bind(process, this, "update")).remove(bind(process, this, "remove")).execute();
    function process(status, idx, oldIdx) {
      var oldLayersGroups = self._layers;
      if (status === "remove") {
        group.remove(oldLayersGroups[idx]);
        return;
      }
      var points0 = [];
      var points1 = [];
      var style;
      var indices = layersSeries[idx].indices;
      var j = 0;
      for (; j < indices.length; j++) {
        var layout2 = data.getItemLayout(indices[j]);
        var x = layout2.x;
        var y0 = layout2.y0;
        var y = layout2.y;
        points0.push(x, y0);
        points1.push(x, y0 + y);
        style = data.getItemVisual(indices[j], "style");
      }
      var polygon;
      var textLayout = data.getItemLayout(indices[0]);
      var labelModel = seriesModel.getModel("label");
      var margin = labelModel.get("margin");
      var emphasisModel = seriesModel.getModel("emphasis");
      if (status === "add") {
        var layerGroup = newLayersGroups[idx] = new Group$1();
        polygon = new ECPolygon({
          shape: {
            points: points0,
            stackedOnPoints: points1,
            smooth: 0.4,
            stackedOnSmooth: 0.4,
            smoothConstraint: false
          },
          z2: 0
        });
        layerGroup.add(polygon);
        group.add(layerGroup);
        if (seriesModel.isAnimationEnabled()) {
          polygon.setClipPath(createGridClipShape(polygon.getBoundingRect(), seriesModel, function() {
            polygon.removeClipPath();
          }));
        }
      } else {
        var layerGroup = oldLayersGroups[oldIdx];
        polygon = layerGroup.childAt(0);
        group.add(layerGroup);
        newLayersGroups[idx] = layerGroup;
        updateProps(polygon, {
          shape: {
            points: points0,
            stackedOnPoints: points1
          }
        }, seriesModel);
        saveOldStyle(polygon);
      }
      setLabelStyle(polygon, getLabelStatesModels(seriesModel), {
        labelDataIndex: indices[j - 1],
        defaultText: data.getName(indices[j - 1]),
        inheritColor: style.fill
      }, {
        normal: {
          verticalAlign: "middle"
        }
      });
      polygon.setTextConfig({
        position: null,
        local: true
      });
      var labelEl = polygon.getTextContent();
      if (labelEl) {
        labelEl.x = textLayout.x - margin;
        labelEl.y = textLayout.y0 + textLayout.y / 2;
      }
      polygon.useStyle(style);
      data.setItemGraphicEl(idx, polygon);
      setStatesStylesFromModel(polygon, seriesModel);
      enableHoverEmphasis(polygon, emphasisModel.get("focus"), emphasisModel.get("blurScope"));
    }
    this._layersSeries = layersSeries;
    this._layers = newLayersGroups;
  };
  ThemeRiverView2.type = "themeRiver";
  return ThemeRiverView2;
}(ChartView);
function createGridClipShape(rect, seriesModel, cb) {
  var rectEl = new Rect$1({
    shape: {
      x: rect.x - 10,
      y: rect.y - 10,
      width: 0,
      height: rect.height + 20
    }
  });
  initProps(rectEl, {
    shape: {
      x: rect.x - 50,
      width: rect.width + 100,
      height: rect.height + 20
    }
  }, seriesModel, cb);
  return rectEl;
}
var ThemeRiverView$1 = ThemeRiverView;
var DATA_NAME_INDEX = 2;
var ThemeRiverSeriesModel = function(_super) {
  __extends(ThemeRiverSeriesModel2, _super);
  function ThemeRiverSeriesModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ThemeRiverSeriesModel2.type;
    return _this;
  }
  ThemeRiverSeriesModel2.prototype.init = function(option) {
    _super.prototype.init.apply(this, arguments);
    this.legendVisualProvider = new LegendVisualProvider(bind(this.getData, this), bind(this.getRawData, this));
  };
  ThemeRiverSeriesModel2.prototype.fixData = function(data) {
    var rawDataLength = data.length;
    var timeValueKeys = {};
    var groupResult = groupData(data, function(item) {
      if (!timeValueKeys.hasOwnProperty(item[0] + "")) {
        timeValueKeys[item[0] + ""] = -1;
      }
      return item[2];
    });
    var layerData = [];
    groupResult.buckets.each(function(items, key) {
      layerData.push({
        name: key,
        dataList: items
      });
    });
    var layerNum = layerData.length;
    for (var k = 0; k < layerNum; ++k) {
      var name_1 = layerData[k].name;
      for (var j = 0; j < layerData[k].dataList.length; ++j) {
        var timeValue = layerData[k].dataList[j][0] + "";
        timeValueKeys[timeValue] = k;
      }
      for (var timeValue in timeValueKeys) {
        if (timeValueKeys.hasOwnProperty(timeValue) && timeValueKeys[timeValue] !== k) {
          timeValueKeys[timeValue] = k;
          data[rawDataLength] = [timeValue, 0, name_1];
          rawDataLength++;
        }
      }
    }
    return data;
  };
  ThemeRiverSeriesModel2.prototype.getInitialData = function(option, ecModel) {
    var singleAxisModel = this.getReferringComponents("singleAxis", SINGLE_REFERRING).models[0];
    var axisType = singleAxisModel.get("type");
    var filterData = filter(option.data, function(dataItem) {
      return dataItem[2] !== void 0;
    });
    var data = this.fixData(filterData || []);
    var nameList = [];
    var nameMap = this.nameMap = createHashMap();
    var count = 0;
    for (var i = 0; i < data.length; ++i) {
      nameList.push(data[i][DATA_NAME_INDEX]);
      if (!nameMap.get(data[i][DATA_NAME_INDEX])) {
        nameMap.set(data[i][DATA_NAME_INDEX], count);
        count++;
      }
    }
    var dimensions = prepareSeriesDataSchema(data, {
      coordDimensions: ["single"],
      dimensionsDefine: [{
        name: "time",
        type: getDimensionTypeByAxis(axisType)
      }, {
        name: "value",
        type: "float"
      }, {
        name: "name",
        type: "ordinal"
      }],
      encodeDefine: {
        single: 0,
        value: 1,
        itemName: 2
      }
    }).dimensions;
    var list = new SeriesData(dimensions, this);
    list.initData(data);
    return list;
  };
  ThemeRiverSeriesModel2.prototype.getLayerSeries = function() {
    var data = this.getData();
    var lenCount = data.count();
    var indexArr = [];
    for (var i = 0; i < lenCount; ++i) {
      indexArr[i] = i;
    }
    var timeDim = data.mapDimension("single");
    var groupResult = groupData(indexArr, function(index) {
      return data.get("name", index);
    });
    var layerSeries = [];
    groupResult.buckets.each(function(items, key) {
      items.sort(function(index1, index2) {
        return data.get(timeDim, index1) - data.get(timeDim, index2);
      });
      layerSeries.push({
        name: key,
        indices: items
      });
    });
    return layerSeries;
  };
  ThemeRiverSeriesModel2.prototype.getAxisTooltipData = function(dim, value, baseAxis) {
    if (!isArray(dim)) {
      dim = dim ? [dim] : [];
    }
    var data = this.getData();
    var layerSeries = this.getLayerSeries();
    var indices = [];
    var layerNum = layerSeries.length;
    var nestestValue;
    for (var i = 0; i < layerNum; ++i) {
      var minDist = Number.MAX_VALUE;
      var nearestIdx = -1;
      var pointNum = layerSeries[i].indices.length;
      for (var j = 0; j < pointNum; ++j) {
        var theValue = data.get(dim[0], layerSeries[i].indices[j]);
        var dist2 = Math.abs(theValue - value);
        if (dist2 <= minDist) {
          nestestValue = theValue;
          minDist = dist2;
          nearestIdx = layerSeries[i].indices[j];
        }
      }
      indices.push(nearestIdx);
    }
    return {
      dataIndices: indices,
      nestestValue
    };
  };
  ThemeRiverSeriesModel2.prototype.formatTooltip = function(dataIndex, multipleSeries, dataType) {
    var data = this.getData();
    var name = data.getName(dataIndex);
    var value = data.get(data.mapDimension("value"), dataIndex);
    return createTooltipMarkup("nameValue", {
      name,
      value
    });
  };
  ThemeRiverSeriesModel2.type = "series.themeRiver";
  ThemeRiverSeriesModel2.dependencies = ["singleAxis"];
  ThemeRiverSeriesModel2.defaultOption = {
    zlevel: 0,
    z: 2,
    colorBy: "data",
    coordinateSystem: "singleAxis",
    boundaryGap: ["10%", "10%"],
    singleAxisIndex: 0,
    animationEasing: "linear",
    label: {
      margin: 4,
      show: true,
      position: "left",
      fontSize: 11
    },
    emphasis: {
      label: {
        show: true
      }
    }
  };
  return ThemeRiverSeriesModel2;
}(SeriesModel);
var ThemeRiverSeriesModel$1 = ThemeRiverSeriesModel;
function themeRiverLayout(ecModel, api) {
  ecModel.eachSeriesByType("themeRiver", function(seriesModel) {
    var data = seriesModel.getData();
    var single = seriesModel.coordinateSystem;
    var layoutInfo = {};
    var rect = single.getRect();
    layoutInfo.rect = rect;
    var boundaryGap = seriesModel.get("boundaryGap");
    var axis = single.getAxis();
    layoutInfo.boundaryGap = boundaryGap;
    if (axis.orient === "horizontal") {
      boundaryGap[0] = parsePercent(boundaryGap[0], rect.height);
      boundaryGap[1] = parsePercent(boundaryGap[1], rect.height);
      var height = rect.height - boundaryGap[0] - boundaryGap[1];
      doThemeRiverLayout(data, seriesModel, height);
    } else {
      boundaryGap[0] = parsePercent(boundaryGap[0], rect.width);
      boundaryGap[1] = parsePercent(boundaryGap[1], rect.width);
      var width = rect.width - boundaryGap[0] - boundaryGap[1];
      doThemeRiverLayout(data, seriesModel, width);
    }
    data.setLayout("layoutInfo", layoutInfo);
  });
}
function doThemeRiverLayout(data, seriesModel, height) {
  if (!data.count()) {
    return;
  }
  var coordSys = seriesModel.coordinateSystem;
  var layerSeries = seriesModel.getLayerSeries();
  var timeDim = data.mapDimension("single");
  var valueDim = data.mapDimension("value");
  var layerPoints = map(layerSeries, function(singleLayer) {
    return map(singleLayer.indices, function(idx) {
      var pt = coordSys.dataToPoint(data.get(timeDim, idx));
      pt[1] = data.get(valueDim, idx);
      return pt;
    });
  });
  var base = computeBaseline(layerPoints);
  var baseLine = base.y0;
  var ky = height / base.max;
  var n = layerSeries.length;
  var m = layerSeries[0].indices.length;
  var baseY0;
  for (var j = 0; j < m; ++j) {
    baseY0 = baseLine[j] * ky;
    data.setItemLayout(layerSeries[0].indices[j], {
      layerIndex: 0,
      x: layerPoints[0][j][0],
      y0: baseY0,
      y: layerPoints[0][j][1] * ky
    });
    for (var i = 1; i < n; ++i) {
      baseY0 += layerPoints[i - 1][j][1] * ky;
      data.setItemLayout(layerSeries[i].indices[j], {
        layerIndex: i,
        x: layerPoints[i][j][0],
        y0: baseY0,
        y: layerPoints[i][j][1] * ky
      });
    }
  }
}
function computeBaseline(data) {
  var layerNum = data.length;
  var pointNum = data[0].length;
  var sums = [];
  var y0 = [];
  var max = 0;
  for (var i = 0; i < pointNum; ++i) {
    var temp = 0;
    for (var j = 0; j < layerNum; ++j) {
      temp += data[j][i][1];
    }
    if (temp > max) {
      max = temp;
    }
    sums.push(temp);
  }
  for (var k = 0; k < pointNum; ++k) {
    y0[k] = (max - sums[k]) / 2;
  }
  max = 0;
  for (var l = 0; l < pointNum; ++l) {
    var sum2 = sums[l] + y0[l];
    if (sum2 > max) {
      max = sum2;
    }
  }
  return {
    y0,
    max
  };
}
function install$a(registers) {
  registers.registerChartView(ThemeRiverView$1);
  registers.registerSeriesModel(ThemeRiverSeriesModel$1);
  registers.registerLayout(themeRiverLayout);
  registers.registerProcessor(dataFilter$1("themeRiver"));
}
var DEFAULT_SECTOR_Z = 2;
var DEFAULT_TEXT_Z = 4;
var SunburstPiece = function(_super) {
  __extends(SunburstPiece2, _super);
  function SunburstPiece2(node, seriesModel, ecModel, api) {
    var _this = _super.call(this) || this;
    _this.z2 = DEFAULT_SECTOR_Z;
    _this.textConfig = {
      inside: true
    };
    getECData(_this).seriesIndex = seriesModel.seriesIndex;
    var text = new ZRText({
      z2: DEFAULT_TEXT_Z,
      silent: node.getModel().get(["label", "silent"])
    });
    _this.setTextContent(text);
    _this.updateData(true, node, seriesModel, ecModel, api);
    return _this;
  }
  SunburstPiece2.prototype.updateData = function(firstCreate, node, seriesModel, ecModel, api) {
    this.node = node;
    node.piece = this;
    seriesModel = seriesModel || this._seriesModel;
    ecModel = ecModel || this._ecModel;
    var sector = this;
    getECData(sector).dataIndex = node.dataIndex;
    var itemModel = node.getModel();
    var emphasisModel = itemModel.getModel("emphasis");
    var layout2 = node.getLayout();
    var sectorShape = extend({}, layout2);
    sectorShape.label = null;
    var normalStyle = node.getVisual("style");
    normalStyle.lineJoin = "bevel";
    var decal = node.getVisual("decal");
    if (decal) {
      normalStyle.decal = createOrUpdatePatternFromDecal(decal, api);
    }
    var cornerRadius = getSectorCornerRadius(itemModel.getModel("itemStyle"), sectorShape, true);
    extend(sectorShape, cornerRadius);
    each$2(SPECIAL_STATES, function(stateName) {
      var state = sector.ensureState(stateName);
      var itemStyleModel = itemModel.getModel([stateName, "itemStyle"]);
      state.style = itemStyleModel.getItemStyle();
      var cornerRadius2 = getSectorCornerRadius(itemStyleModel, sectorShape);
      if (cornerRadius2) {
        state.shape = cornerRadius2;
      }
    });
    if (firstCreate) {
      sector.setShape(sectorShape);
      sector.shape.r = layout2.r0;
      updateProps(sector, {
        shape: {
          r: layout2.r
        }
      }, seriesModel, node.dataIndex);
    } else {
      updateProps(sector, {
        shape: sectorShape
      }, seriesModel);
      saveOldStyle(sector);
    }
    sector.useStyle(normalStyle);
    this._updateLabel(seriesModel);
    var cursorStyle = itemModel.getShallow("cursor");
    cursorStyle && sector.attr("cursor", cursorStyle);
    this._seriesModel = seriesModel || this._seriesModel;
    this._ecModel = ecModel || this._ecModel;
    var focus = emphasisModel.get("focus");
    var focusOrIndices = focus === "ancestor" ? node.getAncestorsIndices() : focus === "descendant" ? node.getDescendantIndices() : focus;
    enableHoverEmphasis(this, focusOrIndices, emphasisModel.get("blurScope"));
  };
  SunburstPiece2.prototype._updateLabel = function(seriesModel) {
    var _this = this;
    var itemModel = this.node.getModel();
    var normalLabelModel = itemModel.getModel("label");
    var layout2 = this.node.getLayout();
    var angle = layout2.endAngle - layout2.startAngle;
    var midAngle = (layout2.startAngle + layout2.endAngle) / 2;
    var dx = Math.cos(midAngle);
    var dy = Math.sin(midAngle);
    var sector = this;
    var label = sector.getTextContent();
    var dataIndex = this.node.dataIndex;
    var labelMinAngle = normalLabelModel.get("minAngle") / 180 * Math.PI;
    var isNormalShown = normalLabelModel.get("show") && !(labelMinAngle != null && Math.abs(angle) < labelMinAngle);
    label.ignore = !isNormalShown;
    each$2(DISPLAY_STATES, function(stateName) {
      var labelStateModel = stateName === "normal" ? itemModel.getModel("label") : itemModel.getModel([stateName, "label"]);
      var isNormal = stateName === "normal";
      var state = isNormal ? label : label.ensureState(stateName);
      var text = seriesModel.getFormattedLabel(dataIndex, stateName);
      if (isNormal) {
        text = text || _this.node.name;
      }
      state.style = createTextStyle(labelStateModel, {}, null, stateName !== "normal", true);
      if (text) {
        state.style.text = text;
      }
      var isShown = labelStateModel.get("show");
      if (isShown != null && !isNormal) {
        state.ignore = !isShown;
      }
      var labelPosition = getLabelAttr(labelStateModel, "position");
      var sectorState = isNormal ? sector : sector.states[stateName];
      var labelColor = sectorState.style.fill;
      sectorState.textConfig = {
        outsideFill: labelStateModel.get("color") === "inherit" ? labelColor : null,
        inside: labelPosition !== "outside"
      };
      var r;
      var labelPadding = getLabelAttr(labelStateModel, "distance") || 0;
      var textAlign = getLabelAttr(labelStateModel, "align");
      if (labelPosition === "outside") {
        r = layout2.r + labelPadding;
        textAlign = midAngle > Math.PI / 2 ? "right" : "left";
      } else {
        if (!textAlign || textAlign === "center") {
          r = (layout2.r + layout2.r0) / 2;
          textAlign = "center";
        } else if (textAlign === "left") {
          r = layout2.r0 + labelPadding;
          if (midAngle > Math.PI / 2) {
            textAlign = "right";
          }
        } else if (textAlign === "right") {
          r = layout2.r - labelPadding;
          if (midAngle > Math.PI / 2) {
            textAlign = "left";
          }
        }
      }
      state.style.align = textAlign;
      state.style.verticalAlign = getLabelAttr(labelStateModel, "verticalAlign") || "middle";
      state.x = r * dx + layout2.cx;
      state.y = r * dy + layout2.cy;
      var rotateType = getLabelAttr(labelStateModel, "rotate");
      var rotate = 0;
      if (rotateType === "radial") {
        rotate = -midAngle;
        if (rotate < -Math.PI / 2) {
          rotate += Math.PI;
        }
      } else if (rotateType === "tangential") {
        rotate = Math.PI / 2 - midAngle;
        if (rotate > Math.PI / 2) {
          rotate -= Math.PI;
        } else if (rotate < -Math.PI / 2) {
          rotate += Math.PI;
        }
      } else if (typeof rotateType === "number") {
        rotate = rotateType * Math.PI / 180;
      }
      state.rotation = rotate;
    });
    function getLabelAttr(model, name) {
      var stateAttr = model.get(name);
      if (stateAttr == null) {
        return normalLabelModel.get(name);
      }
      return stateAttr;
    }
    label.dirtyStyle();
  };
  return SunburstPiece2;
}(Sector);
var SunburstPiece$1 = SunburstPiece;
var ROOT_TO_NODE_ACTION = "sunburstRootToNode";
var HIGHLIGHT_ACTION = "sunburstHighlight";
var UNHIGHLIGHT_ACTION = "sunburstUnhighlight";
function installSunburstAction(registers) {
  registers.registerAction({
    type: ROOT_TO_NODE_ACTION,
    update: "updateView"
  }, function(payload, ecModel) {
    ecModel.eachComponent({
      mainType: "series",
      subType: "sunburst",
      query: payload
    }, handleRootToNode);
    function handleRootToNode(model, index) {
      var targetInfo = retrieveTargetInfo(payload, [ROOT_TO_NODE_ACTION], model);
      if (targetInfo) {
        var originViewRoot = model.getViewRoot();
        if (originViewRoot) {
          payload.direction = aboveViewRoot(originViewRoot, targetInfo.node) ? "rollUp" : "drillDown";
        }
        model.resetViewRoot(targetInfo.node);
      }
    }
  });
  registers.registerAction({
    type: HIGHLIGHT_ACTION,
    update: "none"
  }, function(payload, ecModel, api) {
    payload = extend({}, payload);
    ecModel.eachComponent({
      mainType: "series",
      subType: "sunburst",
      query: payload
    }, handleHighlight);
    function handleHighlight(model) {
      var targetInfo = retrieveTargetInfo(payload, [HIGHLIGHT_ACTION], model);
      if (targetInfo) {
        payload.dataIndex = targetInfo.node.dataIndex;
      }
    }
    api.dispatchAction(extend(payload, {
      type: "highlight"
    }));
  });
  registers.registerAction({
    type: UNHIGHLIGHT_ACTION,
    update: "updateView"
  }, function(payload, ecModel, api) {
    payload = extend({}, payload);
    api.dispatchAction(extend(payload, {
      type: "downplay"
    }));
  });
}
var SunburstView = function(_super) {
  __extends(SunburstView2, _super);
  function SunburstView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SunburstView2.type;
    return _this;
  }
  SunburstView2.prototype.render = function(seriesModel, ecModel, api, payload) {
    var self = this;
    this.seriesModel = seriesModel;
    this.api = api;
    this.ecModel = ecModel;
    var data = seriesModel.getData();
    var virtualRoot = data.tree.root;
    var newRoot = seriesModel.getViewRoot();
    var group = this.group;
    var renderLabelForZeroData = seriesModel.get("renderLabelForZeroData");
    var newChildren = [];
    newRoot.eachNode(function(node) {
      newChildren.push(node);
    });
    var oldChildren = this._oldChildren || [];
    dualTravel(newChildren, oldChildren);
    renderRollUp(virtualRoot, newRoot);
    this._initEvents();
    this._oldChildren = newChildren;
    function dualTravel(newChildren2, oldChildren2) {
      if (newChildren2.length === 0 && oldChildren2.length === 0) {
        return;
      }
      new DataDiffer(oldChildren2, newChildren2, getKey2, getKey2).add(processNode).update(processNode).remove(curry(processNode, null)).execute();
      function getKey2(node) {
        return node.getId();
      }
      function processNode(newIdx, oldIdx) {
        var newNode = newIdx == null ? null : newChildren2[newIdx];
        var oldNode = oldIdx == null ? null : oldChildren2[oldIdx];
        doRenderNode(newNode, oldNode);
      }
    }
    function doRenderNode(newNode, oldNode) {
      if (!renderLabelForZeroData && newNode && !newNode.getValue()) {
        newNode = null;
      }
      if (newNode !== virtualRoot && oldNode !== virtualRoot) {
        if (oldNode && oldNode.piece) {
          if (newNode) {
            oldNode.piece.updateData(false, newNode, seriesModel, ecModel, api);
            data.setItemGraphicEl(newNode.dataIndex, oldNode.piece);
          } else {
            removeNode2(oldNode);
          }
        } else if (newNode) {
          var piece = new SunburstPiece$1(newNode, seriesModel, ecModel, api);
          group.add(piece);
          data.setItemGraphicEl(newNode.dataIndex, piece);
        }
      }
    }
    function removeNode2(node) {
      if (!node) {
        return;
      }
      if (node.piece) {
        group.remove(node.piece);
        node.piece = null;
      }
    }
    function renderRollUp(virtualRoot2, viewRoot) {
      if (viewRoot.depth > 0) {
        if (self.virtualPiece) {
          self.virtualPiece.updateData(false, virtualRoot2, seriesModel, ecModel, api);
        } else {
          self.virtualPiece = new SunburstPiece$1(virtualRoot2, seriesModel, ecModel, api);
          group.add(self.virtualPiece);
        }
        viewRoot.piece.off("click");
        self.virtualPiece.on("click", function(e) {
          self._rootToNode(viewRoot.parentNode);
        });
      } else if (self.virtualPiece) {
        group.remove(self.virtualPiece);
        self.virtualPiece = null;
      }
    }
  };
  SunburstView2.prototype._initEvents = function() {
    var _this = this;
    this.group.off("click");
    this.group.on("click", function(e) {
      var targetFound = false;
      var viewRoot = _this.seriesModel.getViewRoot();
      viewRoot.eachNode(function(node) {
        if (!targetFound && node.piece && node.piece === e.target) {
          var nodeClick = node.getModel().get("nodeClick");
          if (nodeClick === "rootToNode") {
            _this._rootToNode(node);
          } else if (nodeClick === "link") {
            var itemModel = node.getModel();
            var link = itemModel.get("link");
            if (link) {
              var linkTarget = itemModel.get("target", true) || "_blank";
              windowOpen(link, linkTarget);
            }
          }
          targetFound = true;
        }
      });
    });
  };
  SunburstView2.prototype._rootToNode = function(node) {
    if (node !== this.seriesModel.getViewRoot()) {
      this.api.dispatchAction({
        type: ROOT_TO_NODE_ACTION,
        from: this.uid,
        seriesId: this.seriesModel.id,
        targetNode: node
      });
    }
  };
  SunburstView2.prototype.containPoint = function(point, seriesModel) {
    var treeRoot = seriesModel.getData();
    var itemLayout = treeRoot.getItemLayout(0);
    if (itemLayout) {
      var dx = point[0] - itemLayout.cx;
      var dy = point[1] - itemLayout.cy;
      var radius = Math.sqrt(dx * dx + dy * dy);
      return radius <= itemLayout.r && radius >= itemLayout.r0;
    }
  };
  SunburstView2.type = "sunburst";
  return SunburstView2;
}(ChartView);
var SunburstView$1 = SunburstView;
var SunburstSeriesModel = function(_super) {
  __extends(SunburstSeriesModel2, _super);
  function SunburstSeriesModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SunburstSeriesModel2.type;
    _this.ignoreStyleOnData = true;
    return _this;
  }
  SunburstSeriesModel2.prototype.getInitialData = function(option, ecModel) {
    var root = {
      name: option.name,
      children: option.data
    };
    completeTreeValue(root);
    var levelModels = this._levelModels = map(option.levels || [], function(levelDefine) {
      return new Model(levelDefine, this, ecModel);
    }, this);
    var tree = Tree$1.createTree(root, this, beforeLink);
    function beforeLink(nodeData) {
      nodeData.wrapMethod("getItemModel", function(model, idx) {
        var node = tree.getNodeByDataIndex(idx);
        var levelModel = levelModels[node.depth];
        levelModel && (model.parentModel = levelModel);
        return model;
      });
    }
    return tree.data;
  };
  SunburstSeriesModel2.prototype.optionUpdated = function() {
    this.resetViewRoot();
  };
  SunburstSeriesModel2.prototype.getDataParams = function(dataIndex) {
    var params = _super.prototype.getDataParams.apply(this, arguments);
    var node = this.getData().tree.getNodeByDataIndex(dataIndex);
    params.treePathInfo = wrapTreePathInfo(node, this);
    return params;
  };
  SunburstSeriesModel2.prototype.getLevelModel = function(node) {
    return this._levelModels && this._levelModels[node.depth];
  };
  SunburstSeriesModel2.prototype.getViewRoot = function() {
    return this._viewRoot;
  };
  SunburstSeriesModel2.prototype.resetViewRoot = function(viewRoot) {
    viewRoot ? this._viewRoot = viewRoot : viewRoot = this._viewRoot;
    var root = this.getRawData().tree.root;
    if (!viewRoot || viewRoot !== root && !root.contains(viewRoot)) {
      this._viewRoot = root;
    }
  };
  SunburstSeriesModel2.prototype.enableAriaDecal = function() {
    enableAriaDecalForTree(this);
  };
  SunburstSeriesModel2.type = "series.sunburst";
  SunburstSeriesModel2.defaultOption = {
    zlevel: 0,
    z: 2,
    center: ["50%", "50%"],
    radius: [0, "75%"],
    clockwise: true,
    startAngle: 90,
    minAngle: 0,
    stillShowZeroSum: true,
    nodeClick: "rootToNode",
    renderLabelForZeroData: false,
    label: {
      rotate: "radial",
      show: true,
      opacity: 1,
      align: "center",
      position: "inside",
      distance: 5,
      silent: true
    },
    itemStyle: {
      borderWidth: 1,
      borderColor: "white",
      borderType: "solid",
      shadowBlur: 0,
      shadowColor: "rgba(0, 0, 0, 0.2)",
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1
    },
    emphasis: {
      focus: "descendant"
    },
    blur: {
      itemStyle: {
        opacity: 0.2
      },
      label: {
        opacity: 0.1
      }
    },
    animationType: "expansion",
    animationDuration: 1e3,
    animationDurationUpdate: 500,
    data: [],
    sort: "desc"
  };
  return SunburstSeriesModel2;
}(SeriesModel);
function completeTreeValue(dataNode) {
  var sum2 = 0;
  each$2(dataNode.children, function(child) {
    completeTreeValue(child);
    var childValue = child.value;
    isArray(childValue) && (childValue = childValue[0]);
    sum2 += childValue;
  });
  var thisValue = dataNode.value;
  if (isArray(thisValue)) {
    thisValue = thisValue[0];
  }
  if (thisValue == null || isNaN(thisValue)) {
    thisValue = sum2;
  }
  if (thisValue < 0) {
    thisValue = 0;
  }
  isArray(dataNode.value) ? dataNode.value[0] = thisValue : dataNode.value = thisValue;
}
var SunburstSeriesModel$1 = SunburstSeriesModel;
var RADIAN = Math.PI / 180;
function sunburstLayout(seriesType, ecModel, api) {
  ecModel.eachSeriesByType(seriesType, function(seriesModel) {
    var center2 = seriesModel.get("center");
    var radius = seriesModel.get("radius");
    if (!isArray(radius)) {
      radius = [0, radius];
    }
    if (!isArray(center2)) {
      center2 = [center2, center2];
    }
    var width = api.getWidth();
    var height = api.getHeight();
    var size = Math.min(width, height);
    var cx = parsePercent(center2[0], width);
    var cy = parsePercent(center2[1], height);
    var r0 = parsePercent(radius[0], size / 2);
    var r = parsePercent(radius[1], size / 2);
    var startAngle = -seriesModel.get("startAngle") * RADIAN;
    var minAngle = seriesModel.get("minAngle") * RADIAN;
    var virtualRoot = seriesModel.getData().tree.root;
    var treeRoot = seriesModel.getViewRoot();
    var rootDepth = treeRoot.depth;
    var sort2 = seriesModel.get("sort");
    if (sort2 != null) {
      initChildren(treeRoot, sort2);
    }
    var validDataCount = 0;
    each$2(treeRoot.children, function(child) {
      !isNaN(child.getValue()) && validDataCount++;
    });
    var sum2 = treeRoot.getValue();
    var unitRadian = Math.PI / (sum2 || validDataCount) * 2;
    var renderRollupNode = treeRoot.depth > 0;
    var levels = treeRoot.height - (renderRollupNode ? -1 : 1);
    var rPerLevel = (r - r0) / (levels || 1);
    var clockwise = seriesModel.get("clockwise");
    var stillShowZeroSum = seriesModel.get("stillShowZeroSum");
    var dir = clockwise ? 1 : -1;
    var renderNode2 = function(node, startAngle2) {
      if (!node) {
        return;
      }
      var endAngle = startAngle2;
      if (node !== virtualRoot) {
        var value = node.getValue();
        var angle2 = sum2 === 0 && stillShowZeroSum ? unitRadian : value * unitRadian;
        if (angle2 < minAngle) {
          angle2 = minAngle;
        }
        endAngle = startAngle2 + dir * angle2;
        var depth = node.depth - rootDepth - (renderRollupNode ? -1 : 1);
        var rStart2 = r0 + rPerLevel * depth;
        var rEnd2 = r0 + rPerLevel * (depth + 1);
        var levelModel = seriesModel.getLevelModel(node);
        if (levelModel) {
          var r0_1 = levelModel.get("r0", true);
          var r_1 = levelModel.get("r", true);
          var radius_1 = levelModel.get("radius", true);
          if (radius_1 != null) {
            r0_1 = radius_1[0];
            r_1 = radius_1[1];
          }
          r0_1 != null && (rStart2 = parsePercent(r0_1, size / 2));
          r_1 != null && (rEnd2 = parsePercent(r_1, size / 2));
        }
        node.setLayout({
          angle: angle2,
          startAngle: startAngle2,
          endAngle,
          clockwise,
          cx,
          cy,
          r0: rStart2,
          r: rEnd2
        });
      }
      if (node.children && node.children.length) {
        var siblingAngle_1 = 0;
        each$2(node.children, function(node2) {
          siblingAngle_1 += renderNode2(node2, startAngle2 + siblingAngle_1);
        });
      }
      return endAngle - startAngle2;
    };
    if (renderRollupNode) {
      var rStart = r0;
      var rEnd = r0 + rPerLevel;
      var angle = Math.PI * 2;
      virtualRoot.setLayout({
        angle,
        startAngle,
        endAngle: startAngle + angle,
        clockwise,
        cx,
        cy,
        r0: rStart,
        r: rEnd
      });
    }
    renderNode2(treeRoot, startAngle);
  });
}
function initChildren(node, sortOrder) {
  var children = node.children || [];
  node.children = sort(children, sortOrder);
  if (children.length) {
    each$2(node.children, function(child) {
      initChildren(child, sortOrder);
    });
  }
}
function sort(children, sortOrder) {
  if (typeof sortOrder === "function") {
    var sortTargets = map(children, function(child, idx) {
      var value = child.getValue();
      return {
        params: {
          depth: child.depth,
          height: child.height,
          dataIndex: child.dataIndex,
          getValue: function() {
            return value;
          }
        },
        index: idx
      };
    });
    sortTargets.sort(function(a, b) {
      return sortOrder(a.params, b.params);
    });
    return map(sortTargets, function(target) {
      return children[target.index];
    });
  } else {
    var isAsc_1 = sortOrder === "asc";
    return children.sort(function(a, b) {
      var diff = (a.getValue() - b.getValue()) * (isAsc_1 ? 1 : -1);
      return diff === 0 ? (a.dataIndex - b.dataIndex) * (isAsc_1 ? -1 : 1) : diff;
    });
  }
}
function sunburstVisual(ecModel) {
  var paletteScope = {};
  function pickColor(node, seriesModel, treeHeight) {
    var current = node;
    while (current && current.depth > 1) {
      current = current.parentNode;
    }
    var color = seriesModel.getColorFromPalette(current.name || current.dataIndex + "", paletteScope);
    if (node.depth > 1 && typeof color === "string") {
      color = lift(color, (node.depth - 1) / (treeHeight - 1) * 0.5);
    }
    return color;
  }
  ecModel.eachSeriesByType("sunburst", function(seriesModel) {
    var data = seriesModel.getData();
    var tree = data.tree;
    tree.eachNode(function(node) {
      var model = node.getModel();
      var style = model.getModel("itemStyle").getItemStyle();
      if (!style.fill) {
        style.fill = pickColor(node, seriesModel, tree.root.height);
      }
      var existsStyle = data.ensureUniqueItemVisual(node.dataIndex, "style");
      extend(existsStyle, style);
    });
  });
}
function install$9(registers) {
  registers.registerChartView(SunburstView$1);
  registers.registerSeriesModel(SunburstSeriesModel$1);
  registers.registerLayout(curry(sunburstLayout, "sunburst"));
  registers.registerProcessor(curry(dataFilter$1, "sunburst"));
  registers.registerVisual(sunburstVisual);
  installSunburstAction(registers);
}
var TRANSFORM_PROPS = {
  x: 1,
  y: 1,
  scaleX: 1,
  scaleY: 1,
  originX: 1,
  originY: 1,
  rotation: 1
};
var STYLE_VISUAL_TYPE = {
  color: "fill",
  borderColor: "stroke"
};
var NON_STYLE_VISUAL_PROPS = {
  symbol: 1,
  symbolSize: 1,
  symbolKeepAspect: 1,
  legendIcon: 1,
  visualMeta: 1,
  liftZ: 1,
  decal: 1
};
var customInnerStore = makeInner();
var CustomSeriesModel = function(_super) {
  __extends(CustomSeriesModel2, _super);
  function CustomSeriesModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = CustomSeriesModel2.type;
    return _this;
  }
  CustomSeriesModel2.prototype.optionUpdated = function() {
    this.currentZLevel = this.get("zlevel", true);
    this.currentZ = this.get("z", true);
  };
  CustomSeriesModel2.prototype.getInitialData = function(option, ecModel) {
    return createSeriesData(null, this);
  };
  CustomSeriesModel2.prototype.getDataParams = function(dataIndex, dataType, el) {
    var params = _super.prototype.getDataParams.call(this, dataIndex, dataType);
    el && (params.info = customInnerStore(el).info);
    return params;
  };
  CustomSeriesModel2.type = "series.custom";
  CustomSeriesModel2.dependencies = ["grid", "polar", "geo", "singleAxis", "calendar"];
  CustomSeriesModel2.defaultOption = {
    coordinateSystem: "cartesian2d",
    zlevel: 0,
    z: 2,
    legendHoverLink: true,
    clip: false
  };
  return CustomSeriesModel2;
}(SeriesModel);
var CustomSeriesModel$1 = CustomSeriesModel;
function dataToCoordSize$3(dataSize, dataItem) {
  dataItem = dataItem || [0, 0];
  return map(["x", "y"], function(dim, dimIdx) {
    var axis = this.getAxis(dim);
    var val = dataItem[dimIdx];
    var halfSize = dataSize[dimIdx] / 2;
    return axis.type === "category" ? axis.getBandWidth() : Math.abs(axis.dataToCoord(val - halfSize) - axis.dataToCoord(val + halfSize));
  }, this);
}
function cartesianPrepareCustom(coordSys) {
  var rect = coordSys.master.getRect();
  return {
    coordSys: {
      type: "cartesian2d",
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height
    },
    api: {
      coord: function(data) {
        return coordSys.dataToPoint(data);
      },
      size: bind(dataToCoordSize$3, coordSys)
    }
  };
}
function dataToCoordSize$2(dataSize, dataItem) {
  dataItem = dataItem || [0, 0];
  return map([0, 1], function(dimIdx) {
    var val = dataItem[dimIdx];
    var halfSize = dataSize[dimIdx] / 2;
    var p1 = [];
    var p2 = [];
    p1[dimIdx] = val - halfSize;
    p2[dimIdx] = val + halfSize;
    p1[1 - dimIdx] = p2[1 - dimIdx] = dataItem[1 - dimIdx];
    return Math.abs(this.dataToPoint(p1)[dimIdx] - this.dataToPoint(p2)[dimIdx]);
  }, this);
}
function geoPrepareCustom(coordSys) {
  var rect = coordSys.getBoundingRect();
  return {
    coordSys: {
      type: "geo",
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
      zoom: coordSys.getZoom()
    },
    api: {
      coord: function(data) {
        return coordSys.dataToPoint(data);
      },
      size: bind(dataToCoordSize$2, coordSys)
    }
  };
}
function dataToCoordSize$1(dataSize, dataItem) {
  var axis = this.getAxis();
  var val = dataItem instanceof Array ? dataItem[0] : dataItem;
  var halfSize = (dataSize instanceof Array ? dataSize[0] : dataSize) / 2;
  return axis.type === "category" ? axis.getBandWidth() : Math.abs(axis.dataToCoord(val - halfSize) - axis.dataToCoord(val + halfSize));
}
function singlePrepareCustom(coordSys) {
  var rect = coordSys.getRect();
  return {
    coordSys: {
      type: "singleAxis",
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height
    },
    api: {
      coord: function(val) {
        return coordSys.dataToPoint(val);
      },
      size: bind(dataToCoordSize$1, coordSys)
    }
  };
}
function dataToCoordSize(dataSize, dataItem) {
  dataItem = dataItem || [0, 0];
  return map(["Radius", "Angle"], function(dim, dimIdx) {
    var getterName = "get" + dim + "Axis";
    var axis = this[getterName]();
    var val = dataItem[dimIdx];
    var halfSize = dataSize[dimIdx] / 2;
    var result = axis.type === "category" ? axis.getBandWidth() : Math.abs(axis.dataToCoord(val - halfSize) - axis.dataToCoord(val + halfSize));
    if (dim === "Angle") {
      result = result * Math.PI / 180;
    }
    return result;
  }, this);
}
function polarPrepareCustom(coordSys) {
  var radiusAxis = coordSys.getRadiusAxis();
  var angleAxis = coordSys.getAngleAxis();
  var radius = radiusAxis.getExtent();
  radius[0] > radius[1] && radius.reverse();
  return {
    coordSys: {
      type: "polar",
      cx: coordSys.cx,
      cy: coordSys.cy,
      r: radius[1],
      r0: radius[0]
    },
    api: {
      coord: function(data) {
        var radius2 = radiusAxis.dataToRadius(data[0]);
        var angle = angleAxis.dataToAngle(data[1]);
        var coord = coordSys.coordToPoint([radius2, angle]);
        coord.push(radius2, angle * Math.PI / 180);
        return coord;
      },
      size: bind(dataToCoordSize, coordSys)
    }
  };
}
function calendarPrepareCustom(coordSys) {
  var rect = coordSys.getRect();
  var rangeInfo = coordSys.getRangeInfo();
  return {
    coordSys: {
      type: "calendar",
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
      cellWidth: coordSys.getCellWidth(),
      cellHeight: coordSys.getCellHeight(),
      rangeInfo: {
        start: rangeInfo.start,
        end: rangeInfo.end,
        weeks: rangeInfo.weeks,
        dayCount: rangeInfo.allDay
      }
    },
    api: {
      coord: function(data, clamp) {
        return coordSys.dataToPoint(data, clamp);
      }
    }
  };
}
var LEGACY_TRANSFORM_PROPS = {
  position: ["x", "y"],
  scale: ["scaleX", "scaleY"],
  origin: ["originX", "originY"]
};
function setLegacyTransformProp(elOption, targetProps, legacyName) {
  var legacyArr = elOption[legacyName];
  var xyName = LEGACY_TRANSFORM_PROPS[legacyName];
  if (legacyArr) {
    targetProps[xyName[0]] = legacyArr[0];
    targetProps[xyName[1]] = legacyArr[1];
  }
}
function setTransformProp(elOption, allProps, name) {
  if (elOption[name] != null) {
    allProps[name] = elOption[name];
  }
}
function setTransformPropToTransitionFrom(transitionFrom, name, fromTransformable) {
  if (fromTransformable) {
    transitionFrom[name] = fromTransformable[name];
  }
}
function prepareShapeOrExtraTransitionFrom(mainAttr, fromEl, elOption, transFromProps, isInit) {
  var attrOpt = elOption[mainAttr];
  if (!attrOpt) {
    return;
  }
  var elPropsInAttr = fromEl[mainAttr];
  var transFromPropsInAttr;
  var enterFrom = attrOpt.enterFrom;
  if (isInit && enterFrom) {
    !transFromPropsInAttr && (transFromPropsInAttr = transFromProps[mainAttr] = {});
    var enterFromKeys = keys(enterFrom);
    for (var i = 0; i < enterFromKeys.length; i++) {
      var key = enterFromKeys[i];
      transFromPropsInAttr[key] = enterFrom[key];
    }
  }
  if (!isInit && elPropsInAttr) {
    if (attrOpt.transition) {
      !transFromPropsInAttr && (transFromPropsInAttr = transFromProps[mainAttr] = {});
      var transitionKeys = normalizeToArray(attrOpt.transition);
      for (var i = 0; i < transitionKeys.length; i++) {
        var key = transitionKeys[i];
        var elVal = elPropsInAttr[key];
        transFromPropsInAttr[key] = elVal;
      }
    } else if (indexOf(elOption.transition, mainAttr) >= 0) {
      !transFromPropsInAttr && (transFromPropsInAttr = transFromProps[mainAttr] = {});
      var elPropsInAttrKeys = keys(elPropsInAttr);
      for (var i = 0; i < elPropsInAttrKeys.length; i++) {
        var key = elPropsInAttrKeys[i];
        var elVal = elPropsInAttr[key];
        if (isNonStyleTransitionEnabled(attrOpt[key], elVal)) {
          transFromPropsInAttr[key] = elVal;
        }
      }
    }
  }
  var leaveTo = attrOpt.leaveTo;
  if (leaveTo) {
    var leaveToProps = getOrCreateLeaveToPropsFromEl(fromEl);
    var leaveToPropsInAttr = leaveToProps[mainAttr] || (leaveToProps[mainAttr] = {});
    var leaveToKeys = keys(leaveTo);
    for (var i = 0; i < leaveToKeys.length; i++) {
      var key = leaveToKeys[i];
      leaveToPropsInAttr[key] = leaveTo[key];
    }
  }
}
function prepareShapeOrExtraAllPropsFinal(mainAttr, elOption, allProps) {
  var attrOpt = elOption[mainAttr];
  if (!attrOpt) {
    return;
  }
  var allPropsInAttr = allProps[mainAttr] = {};
  var keysInAttr = keys(attrOpt);
  for (var i = 0; i < keysInAttr.length; i++) {
    var key = keysInAttr[i];
    allPropsInAttr[key] = cloneValue(attrOpt[key]);
  }
}
function prepareTransformTransitionFrom(el, elOption, transFromProps, isInit) {
  var enterFrom = elOption.enterFrom;
  if (isInit && enterFrom) {
    var enterFromKeys = keys(enterFrom);
    for (var i = 0; i < enterFromKeys.length; i++) {
      var key = enterFromKeys[i];
      transFromProps[key] = enterFrom[key];
    }
  }
  if (!isInit) {
    if (elOption.transition) {
      var transitionKeys = normalizeToArray(elOption.transition);
      for (var i = 0; i < transitionKeys.length; i++) {
        var key = transitionKeys[i];
        if (key === "style" || key === "shape" || key === "extra") {
          continue;
        }
        var elVal = el[key];
        transFromProps[key] = elVal;
      }
    } else {
      setTransformPropToTransitionFrom(transFromProps, "x", el);
      setTransformPropToTransitionFrom(transFromProps, "y", el);
    }
  }
  var leaveTo = elOption.leaveTo;
  if (leaveTo) {
    var leaveToProps = getOrCreateLeaveToPropsFromEl(el);
    var leaveToKeys = keys(leaveTo);
    for (var i = 0; i < leaveToKeys.length; i++) {
      var key = leaveToKeys[i];
      leaveToProps[key] = leaveTo[key];
    }
  }
}
function prepareTransformAllPropsFinal(el, elOption, allProps) {
  setLegacyTransformProp(elOption, allProps, "position");
  setLegacyTransformProp(elOption, allProps, "scale");
  setLegacyTransformProp(elOption, allProps, "origin");
  setTransformProp(elOption, allProps, "x");
  setTransformProp(elOption, allProps, "y");
  setTransformProp(elOption, allProps, "scaleX");
  setTransformProp(elOption, allProps, "scaleY");
  setTransformProp(elOption, allProps, "originX");
  setTransformProp(elOption, allProps, "originY");
  setTransformProp(elOption, allProps, "rotation");
}
function prepareStyleTransitionFrom(fromEl, elOption, styleOpt, transFromProps, isInit) {
  if (!styleOpt) {
    return;
  }
  var fromElStyle = fromEl.style;
  var transFromStyleProps;
  var enterFrom = styleOpt.enterFrom;
  if (isInit && enterFrom) {
    var enterFromKeys = keys(enterFrom);
    !transFromStyleProps && (transFromStyleProps = transFromProps.style = {});
    for (var i = 0; i < enterFromKeys.length; i++) {
      var key = enterFromKeys[i];
      transFromStyleProps[key] = enterFrom[key];
    }
  }
  if (!isInit && fromElStyle) {
    if (styleOpt.transition) {
      var transitionKeys = normalizeToArray(styleOpt.transition);
      !transFromStyleProps && (transFromStyleProps = transFromProps.style = {});
      for (var i = 0; i < transitionKeys.length; i++) {
        var key = transitionKeys[i];
        var elVal = fromElStyle[key];
        transFromStyleProps[key] = elVal;
      }
    } else if (fromEl.getAnimationStyleProps && indexOf(elOption.transition, "style") >= 0) {
      var animationProps = fromEl.getAnimationStyleProps();
      var animationStyleProps = animationProps ? animationProps.style : null;
      if (animationStyleProps) {
        !transFromStyleProps && (transFromStyleProps = transFromProps.style = {});
        var styleKeys = keys(styleOpt);
        for (var i = 0; i < styleKeys.length; i++) {
          var key = styleKeys[i];
          if (animationStyleProps[key]) {
            var elVal = fromElStyle[key];
            transFromStyleProps[key] = elVal;
          }
        }
      }
    }
  }
  var leaveTo = styleOpt.leaveTo;
  if (leaveTo) {
    var leaveToKeys = keys(leaveTo);
    var leaveToProps = getOrCreateLeaveToPropsFromEl(fromEl);
    var leaveToStyleProps = leaveToProps.style || (leaveToProps.style = {});
    for (var i = 0; i < leaveToKeys.length; i++) {
      var key = leaveToKeys[i];
      leaveToStyleProps[key] = leaveTo[key];
    }
  }
}
function isNonStyleTransitionEnabled(optVal, elVal) {
  return !isArrayLike(optVal) ? optVal != null && isFinite(optVal) : optVal !== elVal;
}
function getOrCreateLeaveToPropsFromEl(el) {
  var innerEl = customInnerStore(el);
  return innerEl.leaveToProps || (innerEl.leaveToProps = {});
}
keys(TRANSFORM_PROPS).join(", ");
var EMPHASIS = "emphasis";
var NORMAL = "normal";
var BLUR = "blur";
var SELECT = "select";
var STATES = [NORMAL, EMPHASIS, BLUR, SELECT];
var PATH_ITEM_STYLE = {
  normal: ["itemStyle"],
  emphasis: [EMPHASIS, "itemStyle"],
  blur: [BLUR, "itemStyle"],
  select: [SELECT, "itemStyle"]
};
var PATH_LABEL = {
  normal: ["label"],
  emphasis: [EMPHASIS, "label"],
  blur: [BLUR, "label"],
  select: [SELECT, "label"]
};
var GROUP_DIFF_PREFIX = "e\0\0";
var attachedTxInfoTmp = {
  normal: {},
  emphasis: {},
  blur: {},
  select: {}
};
var prepareCustoms = {
  cartesian2d: cartesianPrepareCustom,
  geo: geoPrepareCustom,
  singleAxis: singlePrepareCustom,
  polar: polarPrepareCustom,
  calendar: calendarPrepareCustom
};
function isPath(el) {
  return el instanceof Path;
}
function isDisplayable(el) {
  return el instanceof Displayable;
}
function copyElement(sourceEl, targetEl) {
  targetEl.copyTransform(sourceEl);
  if (isDisplayable(targetEl) && isDisplayable(sourceEl)) {
    targetEl.setStyle(sourceEl.style);
    targetEl.z = sourceEl.z;
    targetEl.z2 = sourceEl.z2;
    targetEl.zlevel = sourceEl.zlevel;
    targetEl.invisible = sourceEl.invisible;
    targetEl.ignore = sourceEl.ignore;
    if (isPath(targetEl) && isPath(sourceEl)) {
      targetEl.setShape(sourceEl.shape);
    }
  }
}
var CustomChartView = function(_super) {
  __extends(CustomChartView2, _super);
  function CustomChartView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = CustomChartView2.type;
    return _this;
  }
  CustomChartView2.prototype.render = function(customSeries, ecModel, api, payload) {
    var oldData = this._data;
    var data = customSeries.getData();
    var group = this.group;
    var renderItem = makeRenderItem(customSeries, data, ecModel, api);
    if (!oldData) {
      group.removeAll();
    }
    data.diff(oldData).add(function(newIdx) {
      createOrUpdateItem(api, null, newIdx, renderItem(newIdx, payload), customSeries, group, data);
    }).remove(function(oldIdx) {
      doRemoveEl(oldData.getItemGraphicEl(oldIdx), customSeries, group);
    }).update(function(newIdx, oldIdx) {
      var oldEl = oldData.getItemGraphicEl(oldIdx);
      createOrUpdateItem(api, oldEl, newIdx, renderItem(newIdx, payload), customSeries, group, data);
    }).execute();
    var clipPath = customSeries.get("clip", true) ? createClipPath(customSeries.coordinateSystem, false, customSeries) : null;
    if (clipPath) {
      group.setClipPath(clipPath);
    } else {
      group.removeClipPath();
    }
    this._data = data;
  };
  CustomChartView2.prototype.incrementalPrepareRender = function(customSeries, ecModel, api) {
    this.group.removeAll();
    this._data = null;
  };
  CustomChartView2.prototype.incrementalRender = function(params, customSeries, ecModel, api, payload) {
    var data = customSeries.getData();
    var renderItem = makeRenderItem(customSeries, data, ecModel, api);
    function setIncrementalAndHoverLayer(el2) {
      if (!el2.isGroup) {
        el2.incremental = true;
        el2.ensureState("emphasis").hoverLayer = true;
      }
    }
    for (var idx = params.start; idx < params.end; idx++) {
      var el = createOrUpdateItem(null, null, idx, renderItem(idx, payload), customSeries, this.group, data);
      el && el.traverse(setIncrementalAndHoverLayer);
    }
  };
  CustomChartView2.prototype.filterForExposedEvent = function(eventType, query, targetEl, packedEvent) {
    var elementName = query.element;
    if (elementName == null || targetEl.name === elementName) {
      return true;
    }
    while ((targetEl = targetEl.__hostTarget || targetEl.parent) && targetEl !== this.group) {
      if (targetEl.name === elementName) {
        return true;
      }
    }
    return false;
  };
  CustomChartView2.type = "custom";
  return CustomChartView2;
}(ChartView);
var CustomChartView$1 = CustomChartView;
function createEl(elOption) {
  var graphicType = elOption.type;
  var el;
  if (graphicType === "path") {
    var shape = elOption.shape;
    var pathRect = shape.width != null && shape.height != null ? {
      x: shape.x || 0,
      y: shape.y || 0,
      width: shape.width,
      height: shape.height
    } : null;
    var pathData = getPathData(shape);
    el = makePath(pathData, null, pathRect, shape.layout || "center");
    customInnerStore(el).customPathData = pathData;
  } else if (graphicType === "image") {
    el = new ZRImage({});
    customInnerStore(el).customImagePath = elOption.style.image;
  } else if (graphicType === "text") {
    el = new ZRText({});
  } else if (graphicType === "group") {
    el = new Group$1();
  } else if (graphicType === "compoundPath") {
    throw new Error('"compoundPath" is not supported yet.');
  } else {
    var Clz = getShapeClass(graphicType);
    if (!Clz) {
      var errMsg = "";
      throwError(errMsg);
    }
    el = new Clz();
  }
  customInnerStore(el).customGraphicType = graphicType;
  el.name = elOption.name;
  el.z2EmphasisLift = 1;
  el.z2SelectLift = 1;
  return el;
}
function updateElNormal(api, el, dataIndex, elOption, attachedTxInfo, seriesModel, isInit, isTextContent) {
  var txCfgOpt = attachedTxInfo && attachedTxInfo.normal.cfg;
  if (txCfgOpt) {
    el.setTextConfig(txCfgOpt);
  }
  var styleOpt = elOption && elOption.style;
  if (styleOpt) {
    if (el.type === "text") {
      var textOptionStyle = styleOpt;
      hasOwn(textOptionStyle, "textFill") && (textOptionStyle.fill = textOptionStyle.textFill);
      hasOwn(textOptionStyle, "textStroke") && (textOptionStyle.stroke = textOptionStyle.textStroke);
    }
    var decalPattern = void 0;
    var decalObj = isPath(el) ? styleOpt.decal : null;
    if (api && decalObj) {
      decalObj.dirty = true;
      decalPattern = createOrUpdatePatternFromDecal(decalObj, api);
    }
    styleOpt.__decalPattern = decalPattern;
  }
  var store = customInnerStore(el);
  store.userDuring = elOption.during;
  var transFromProps = {};
  var propsToSet = {};
  prepareShapeOrExtraTransitionFrom("shape", el, elOption, transFromProps, isInit);
  prepareShapeOrExtraAllPropsFinal("shape", elOption, propsToSet);
  prepareTransformTransitionFrom(el, elOption, transFromProps, isInit);
  prepareTransformAllPropsFinal(el, elOption, propsToSet);
  prepareShapeOrExtraTransitionFrom("extra", el, elOption, transFromProps, isInit);
  prepareShapeOrExtraAllPropsFinal("extra", elOption, propsToSet);
  prepareStyleTransitionFrom(el, elOption, styleOpt, transFromProps, isInit);
  propsToSet.style = styleOpt;
  applyPropsDirectly(el, propsToSet);
  applyPropsTransition(el, dataIndex, seriesModel, transFromProps, isInit);
  applyMiscProps(el, elOption, isTextContent);
  styleOpt ? el.dirty() : el.markRedraw();
}
function applyMiscProps(el, elOption, isTextContent) {
  hasOwn(elOption, "silent") && (el.silent = elOption.silent);
  hasOwn(elOption, "ignore") && (el.ignore = elOption.ignore);
  if (isDisplayable(el)) {
    hasOwn(elOption, "invisible") && (el.invisible = elOption.invisible);
  }
  if (isPath(el)) {
    hasOwn(elOption, "autoBatch") && (el.autoBatch = elOption.autoBatch);
  }
  if (!isTextContent) {
    hasOwn(elOption, "info") && (customInnerStore(el).info = elOption.info);
  }
}
function applyPropsDirectly(el, allPropsFinal) {
  var elDisplayable = el.isGroup ? null : el;
  var styleOpt = allPropsFinal.style;
  if (elDisplayable && styleOpt) {
    elDisplayable.useStyle(styleOpt);
    var decalPattern = styleOpt.__decalPattern;
    if (decalPattern) {
      elDisplayable.style.decal = decalPattern;
    }
    var animators = elDisplayable.animators;
    for (var i = 0; i < animators.length; i++) {
      var animator = animators[i];
      if (animator.targetName === "style") {
        animator.changeTarget(elDisplayable.style);
      }
    }
  }
  if (allPropsFinal) {
    allPropsFinal.style = null;
    allPropsFinal && el.attr(allPropsFinal);
    allPropsFinal.style = styleOpt;
  }
}
function applyPropsTransition(el, dataIndex, seriesModel, transFromProps, isInit) {
  if (transFromProps) {
    var userDuring = customInnerStore(el).userDuring;
    var cfgDuringCall = userDuring ? bind(duringCall, {
      el,
      userDuring
    }) : null;
    var cfg = {
      dataIndex,
      isFrom: true,
      during: cfgDuringCall
    };
    isInit ? initProps(el, transFromProps, seriesModel, cfg) : updateProps(el, transFromProps, seriesModel, cfg);
  }
}
var tmpDuringScope = {};
var customDuringAPI = {
  setTransform: function(key, val) {
    tmpDuringScope.el[key] = val;
    return this;
  },
  getTransform: function(key) {
    return tmpDuringScope.el[key];
  },
  setShape: function(key, val) {
    var shape = tmpDuringScope.el.shape || (tmpDuringScope.el.shape = {});
    shape[key] = val;
    tmpDuringScope.isShapeDirty = true;
    return this;
  },
  getShape: function(key) {
    var shape = tmpDuringScope.el.shape;
    if (shape) {
      return shape[key];
    }
  },
  setStyle: function(key, val) {
    var style = tmpDuringScope.el.style;
    if (style) {
      style[key] = val;
      tmpDuringScope.isStyleDirty = true;
    }
    return this;
  },
  getStyle: function(key) {
    var style = tmpDuringScope.el.style;
    if (style) {
      return style[key];
    }
  },
  setExtra: function(key, val) {
    var extra = tmpDuringScope.el.extra || (tmpDuringScope.el.extra = {});
    extra[key] = val;
    return this;
  },
  getExtra: function(key) {
    var extra = tmpDuringScope.el.extra;
    if (extra) {
      return extra[key];
    }
  }
};
function duringCall() {
  var scope = this;
  var el = scope.el;
  if (!el) {
    return;
  }
  var latestUserDuring = customInnerStore(el).userDuring;
  var scopeUserDuring = scope.userDuring;
  if (latestUserDuring !== scopeUserDuring) {
    scope.el = scope.userDuring = null;
    return;
  }
  tmpDuringScope.el = el;
  tmpDuringScope.isShapeDirty = false;
  tmpDuringScope.isStyleDirty = false;
  scopeUserDuring(customDuringAPI);
  if (tmpDuringScope.isShapeDirty && el.dirtyShape) {
    el.dirtyShape();
  }
  if (tmpDuringScope.isStyleDirty && el.dirtyStyle) {
    el.dirtyStyle();
  }
}
function updateElOnState(state, el, elStateOpt, styleOpt, attachedTxInfo, isRoot, isTextContent) {
  var elDisplayable = el.isGroup ? null : el;
  var txCfgOpt = attachedTxInfo && attachedTxInfo[state].cfg;
  if (elDisplayable) {
    var stateObj = elDisplayable.ensureState(state);
    if (styleOpt === false) {
      var existingEmphasisState = elDisplayable.getState(state);
      if (existingEmphasisState) {
        existingEmphasisState.style = null;
      }
    } else {
      stateObj.style = styleOpt || null;
    }
    if (txCfgOpt) {
      stateObj.textConfig = txCfgOpt;
    }
    setDefaultStateProxy(elDisplayable);
  }
}
function updateZ(el, elOption, seriesModel) {
  if (el.isGroup) {
    return;
  }
  var elDisplayable = el;
  var currentZ = seriesModel.currentZ;
  var currentZLevel = seriesModel.currentZLevel;
  elDisplayable.z = currentZ;
  elDisplayable.zlevel = currentZLevel;
  var optZ2 = elOption.z2;
  optZ2 != null && (elDisplayable.z2 = optZ2 || 0);
  for (var i = 0; i < STATES.length; i++) {
    updateZForEachState(elDisplayable, elOption, STATES[i]);
  }
}
function updateZForEachState(elDisplayable, elOption, state) {
  var isNormal = state === NORMAL;
  var elStateOpt = isNormal ? elOption : retrieveStateOption(elOption, state);
  var optZ2 = elStateOpt ? elStateOpt.z2 : null;
  var stateObj;
  if (optZ2 != null) {
    stateObj = isNormal ? elDisplayable : elDisplayable.ensureState(state);
    stateObj.z2 = optZ2 || 0;
  }
}
function makeRenderItem(customSeries, data, ecModel, api) {
  var renderItem = customSeries.get("renderItem");
  var coordSys = customSeries.coordinateSystem;
  var prepareResult = {};
  if (coordSys) {
    prepareResult = coordSys.prepareCustoms ? coordSys.prepareCustoms(coordSys) : prepareCustoms[coordSys.type](coordSys);
  }
  var userAPI = defaults({
    getWidth: api.getWidth,
    getHeight: api.getHeight,
    getZr: api.getZr,
    getDevicePixelRatio: api.getDevicePixelRatio,
    value,
    style,
    ordinalRawValue,
    styleEmphasis,
    visual,
    barLayout,
    currentSeriesIndices,
    font
  }, prepareResult.api || {});
  var userParams = {
    context: {},
    seriesId: customSeries.id,
    seriesName: customSeries.name,
    seriesIndex: customSeries.seriesIndex,
    coordSys: prepareResult.coordSys,
    dataInsideLength: data.count(),
    encode: wrapEncodeDef(customSeries.getData())
  };
  var currDataIndexInside;
  var currItemModel;
  var currItemStyleModels = {};
  var currLabelModels = {};
  var seriesItemStyleModels = {};
  var seriesLabelModels = {};
  for (var i = 0; i < STATES.length; i++) {
    var stateName = STATES[i];
    seriesItemStyleModels[stateName] = customSeries.getModel(PATH_ITEM_STYLE[stateName]);
    seriesLabelModels[stateName] = customSeries.getModel(PATH_LABEL[stateName]);
  }
  function getItemModel(dataIndexInside) {
    return dataIndexInside === currDataIndexInside ? currItemModel || (currItemModel = data.getItemModel(dataIndexInside)) : data.getItemModel(dataIndexInside);
  }
  function getItemStyleModel(dataIndexInside, state) {
    return !data.hasItemOption ? seriesItemStyleModels[state] : dataIndexInside === currDataIndexInside ? currItemStyleModels[state] || (currItemStyleModels[state] = getItemModel(dataIndexInside).getModel(PATH_ITEM_STYLE[state])) : getItemModel(dataIndexInside).getModel(PATH_ITEM_STYLE[state]);
  }
  function getLabelModel(dataIndexInside, state) {
    return !data.hasItemOption ? seriesLabelModels[state] : dataIndexInside === currDataIndexInside ? currLabelModels[state] || (currLabelModels[state] = getItemModel(dataIndexInside).getModel(PATH_LABEL[state])) : getItemModel(dataIndexInside).getModel(PATH_LABEL[state]);
  }
  return function(dataIndexInside, payload) {
    currDataIndexInside = dataIndexInside;
    currItemModel = null;
    currItemStyleModels = {};
    currLabelModels = {};
    return renderItem && renderItem(defaults({
      dataIndexInside,
      dataIndex: data.getRawIndex(dataIndexInside),
      actionType: payload ? payload.type : null
    }, userParams), userAPI);
  };
  function value(dim, dataIndexInside) {
    dataIndexInside == null && (dataIndexInside = currDataIndexInside);
    return data.getStore().get(data.getDimensionIndex(dim || 0), dataIndexInside);
  }
  function ordinalRawValue(dim, dataIndexInside) {
    dataIndexInside == null && (dataIndexInside = currDataIndexInside);
    dim = dim || 0;
    var dimInfo = data.getDimensionInfo(dim);
    if (!dimInfo) {
      var dimIndex = data.getDimensionIndex(dim);
      return dimIndex >= 0 ? data.getStore().get(dimIndex, dataIndexInside) : void 0;
    }
    var val = data.get(dimInfo.name, dataIndexInside);
    var ordinalMeta = dimInfo && dimInfo.ordinalMeta;
    return ordinalMeta ? ordinalMeta.categories[val] : val;
  }
  function style(userProps, dataIndexInside) {
    dataIndexInside == null && (dataIndexInside = currDataIndexInside);
    var style2 = data.getItemVisual(dataIndexInside, "style");
    var visualColor = style2 && style2.fill;
    var opacity = style2 && style2.opacity;
    var itemStyle = getItemStyleModel(dataIndexInside, NORMAL).getItemStyle();
    visualColor != null && (itemStyle.fill = visualColor);
    opacity != null && (itemStyle.opacity = opacity);
    var opt = {
      inheritColor: isString(visualColor) ? visualColor : "#000"
    };
    var labelModel = getLabelModel(dataIndexInside, NORMAL);
    var textStyle = createTextStyle(labelModel, null, opt, false, true);
    textStyle.text = labelModel.getShallow("show") ? retrieve2(customSeries.getFormattedLabel(dataIndexInside, NORMAL), getDefaultLabel(data, dataIndexInside)) : null;
    var textConfig = createTextConfig(labelModel, opt, false);
    preFetchFromExtra(userProps, itemStyle);
    itemStyle = convertToEC4StyleForCustomSerise(itemStyle, textStyle, textConfig);
    userProps && applyUserPropsAfter(itemStyle, userProps);
    itemStyle.legacy = true;
    return itemStyle;
  }
  function styleEmphasis(userProps, dataIndexInside) {
    dataIndexInside == null && (dataIndexInside = currDataIndexInside);
    var itemStyle = getItemStyleModel(dataIndexInside, EMPHASIS).getItemStyle();
    var labelModel = getLabelModel(dataIndexInside, EMPHASIS);
    var textStyle = createTextStyle(labelModel, null, null, true, true);
    textStyle.text = labelModel.getShallow("show") ? retrieve3(customSeries.getFormattedLabel(dataIndexInside, EMPHASIS), customSeries.getFormattedLabel(dataIndexInside, NORMAL), getDefaultLabel(data, dataIndexInside)) : null;
    var textConfig = createTextConfig(labelModel, null, true);
    preFetchFromExtra(userProps, itemStyle);
    itemStyle = convertToEC4StyleForCustomSerise(itemStyle, textStyle, textConfig);
    userProps && applyUserPropsAfter(itemStyle, userProps);
    itemStyle.legacy = true;
    return itemStyle;
  }
  function applyUserPropsAfter(itemStyle, extra) {
    for (var key in extra) {
      if (hasOwn(extra, key)) {
        itemStyle[key] = extra[key];
      }
    }
  }
  function preFetchFromExtra(extra, itemStyle) {
    if (extra) {
      extra.textFill && (itemStyle.textFill = extra.textFill);
      extra.textPosition && (itemStyle.textPosition = extra.textPosition);
    }
  }
  function visual(visualType, dataIndexInside) {
    dataIndexInside == null && (dataIndexInside = currDataIndexInside);
    if (hasOwn(STYLE_VISUAL_TYPE, visualType)) {
      var style_1 = data.getItemVisual(dataIndexInside, "style");
      return style_1 ? style_1[STYLE_VISUAL_TYPE[visualType]] : null;
    }
    if (hasOwn(NON_STYLE_VISUAL_PROPS, visualType)) {
      return data.getItemVisual(dataIndexInside, visualType);
    }
  }
  function barLayout(opt) {
    if (coordSys.type === "cartesian2d") {
      var baseAxis = coordSys.getBaseAxis();
      return getLayoutOnAxis(defaults({
        axis: baseAxis
      }, opt));
    }
  }
  function currentSeriesIndices() {
    return ecModel.getCurrentSeriesIndices();
  }
  function font(opt) {
    return getFont(opt, ecModel);
  }
}
function wrapEncodeDef(data) {
  var encodeDef = {};
  each$2(data.dimensions, function(dimName) {
    var dimInfo = data.getDimensionInfo(dimName);
    if (!dimInfo.isExtraCoord) {
      var coordDim = dimInfo.coordDim;
      var dataDims = encodeDef[coordDim] = encodeDef[coordDim] || [];
      dataDims[dimInfo.coordDimIndex] = data.getDimensionIndex(dimName);
    }
  });
  return encodeDef;
}
function createOrUpdateItem(api, existsEl, dataIndex, elOption, seriesModel, group, data) {
  if (!elOption) {
    group.remove(existsEl);
    return;
  }
  var el = doCreateOrUpdateEl(api, existsEl, dataIndex, elOption, seriesModel, group);
  el && data.setItemGraphicEl(dataIndex, el);
  el && enableHoverEmphasis(el, elOption.focus, elOption.blurScope);
  return el;
}
function doCreateOrUpdateEl(api, existsEl, dataIndex, elOption, seriesModel, group, isRoot) {
  var toBeReplacedIdx = -1;
  var oldEl = existsEl;
  if (existsEl && doesElNeedRecreate(existsEl, elOption, seriesModel)) {
    toBeReplacedIdx = indexOf(group.childrenRef(), existsEl);
    existsEl = null;
  }
  var isInit = !existsEl;
  var el = existsEl;
  if (!el) {
    el = createEl(elOption);
    if (oldEl) {
      copyElement(oldEl, el);
    }
  } else {
    el.clearStates();
  }
  if (elOption.morph === false) {
    el.disableMorphing = true;
  } else if (el.disableMorphing) {
    el.disableMorphing = false;
  }
  attachedTxInfoTmp.normal.cfg = attachedTxInfoTmp.normal.conOpt = attachedTxInfoTmp.emphasis.cfg = attachedTxInfoTmp.emphasis.conOpt = attachedTxInfoTmp.blur.cfg = attachedTxInfoTmp.blur.conOpt = attachedTxInfoTmp.select.cfg = attachedTxInfoTmp.select.conOpt = null;
  attachedTxInfoTmp.isLegacy = false;
  doCreateOrUpdateAttachedTx(el, dataIndex, elOption, seriesModel, isInit, attachedTxInfoTmp);
  doCreateOrUpdateClipPath(el, dataIndex, elOption, seriesModel, isInit);
  updateElNormal(api, el, dataIndex, elOption, attachedTxInfoTmp, seriesModel, isInit, false);
  for (var i = 0; i < STATES.length; i++) {
    var stateName = STATES[i];
    if (stateName !== NORMAL) {
      var otherStateOpt = retrieveStateOption(elOption, stateName);
      var otherStyleOpt = retrieveStyleOptionOnState(elOption, otherStateOpt, stateName);
      updateElOnState(stateName, el, otherStateOpt, otherStyleOpt, attachedTxInfoTmp);
    }
  }
  updateZ(el, elOption, seriesModel);
  if (elOption.type === "group") {
    mergeChildren(api, el, dataIndex, elOption, seriesModel);
  }
  if (toBeReplacedIdx >= 0) {
    group.replaceAt(el, toBeReplacedIdx);
  } else {
    group.add(el);
  }
  return el;
}
function doesElNeedRecreate(el, elOption, seriesModel) {
  var elInner = customInnerStore(el);
  var elOptionType = elOption.type;
  var elOptionShape = elOption.shape;
  var elOptionStyle = elOption.style;
  return seriesModel.isUniversalTransitionEnabled() || elOptionType != null && elOptionType !== elInner.customGraphicType || elOptionType === "path" && hasOwnPathData(elOptionShape) && getPathData(elOptionShape) !== elInner.customPathData || elOptionType === "image" && hasOwn(elOptionStyle, "image") && elOptionStyle.image !== elInner.customImagePath;
}
function doCreateOrUpdateClipPath(el, dataIndex, elOption, seriesModel, isInit) {
  var clipPathOpt = elOption.clipPath;
  if (clipPathOpt === false) {
    if (el && el.getClipPath()) {
      el.removeClipPath();
    }
  } else if (clipPathOpt) {
    var clipPath = el.getClipPath();
    if (clipPath && doesElNeedRecreate(clipPath, clipPathOpt, seriesModel)) {
      clipPath = null;
    }
    if (!clipPath) {
      clipPath = createEl(clipPathOpt);
      el.setClipPath(clipPath);
    }
    updateElNormal(null, clipPath, dataIndex, clipPathOpt, null, seriesModel, isInit, false);
  }
}
function doCreateOrUpdateAttachedTx(el, dataIndex, elOption, seriesModel, isInit, attachedTxInfo) {
  if (el.isGroup) {
    return;
  }
  processTxInfo(elOption, null, attachedTxInfo);
  processTxInfo(elOption, EMPHASIS, attachedTxInfo);
  var txConOptNormal = attachedTxInfo.normal.conOpt;
  var txConOptEmphasis = attachedTxInfo.emphasis.conOpt;
  var txConOptBlur = attachedTxInfo.blur.conOpt;
  var txConOptSelect = attachedTxInfo.select.conOpt;
  if (txConOptNormal != null || txConOptEmphasis != null || txConOptSelect != null || txConOptBlur != null) {
    var textContent = el.getTextContent();
    if (txConOptNormal === false) {
      textContent && el.removeTextContent();
    } else {
      txConOptNormal = attachedTxInfo.normal.conOpt = txConOptNormal || {
        type: "text"
      };
      if (!textContent) {
        textContent = createEl(txConOptNormal);
        el.setTextContent(textContent);
      } else {
        textContent.clearStates();
      }
      updateElNormal(null, textContent, dataIndex, txConOptNormal, null, seriesModel, isInit, true);
      var txConStlOptNormal = txConOptNormal && txConOptNormal.style;
      for (var i = 0; i < STATES.length; i++) {
        var stateName = STATES[i];
        if (stateName !== NORMAL) {
          var txConOptOtherState = attachedTxInfo[stateName].conOpt;
          updateElOnState(stateName, textContent, txConOptOtherState, retrieveStyleOptionOnState(txConOptNormal, txConOptOtherState, stateName), null);
        }
      }
      txConStlOptNormal ? textContent.dirty() : textContent.markRedraw();
    }
  }
}
function processTxInfo(elOption, state, attachedTxInfo) {
  var stateOpt = !state ? elOption : retrieveStateOption(elOption, state);
  var styleOpt = !state ? elOption.style : retrieveStyleOptionOnState(elOption, stateOpt, EMPHASIS);
  var elType = elOption.type;
  var txCfg = stateOpt ? stateOpt.textConfig : null;
  var txConOptNormal = elOption.textContent;
  var txConOpt = !txConOptNormal ? null : !state ? txConOptNormal : retrieveStateOption(txConOptNormal, state);
  if (styleOpt && (attachedTxInfo.isLegacy || isEC4CompatibleStyle(styleOpt, elType, !!txCfg, !!txConOpt))) {
    attachedTxInfo.isLegacy = true;
    var convertResult = convertFromEC4CompatibleStyle(styleOpt, elType, !state);
    if (!txCfg && convertResult.textConfig) {
      txCfg = convertResult.textConfig;
    }
    if (!txConOpt && convertResult.textContent) {
      txConOpt = convertResult.textContent;
    }
  }
  if (!state && txConOpt) {
    var txConOptNormal_1 = txConOpt;
    !txConOptNormal_1.type && (txConOptNormal_1.type = "text");
  }
  var info = !state ? attachedTxInfo.normal : attachedTxInfo[state];
  info.cfg = txCfg;
  info.conOpt = txConOpt;
}
function retrieveStateOption(elOption, state) {
  return !state ? elOption : elOption ? elOption[state] : null;
}
function retrieveStyleOptionOnState(stateOptionNormal, stateOption, state) {
  var style = stateOption && stateOption.style;
  if (style == null && state === EMPHASIS && stateOptionNormal) {
    style = stateOptionNormal.styleEmphasis;
  }
  return style;
}
function mergeChildren(api, el, dataIndex, elOption, seriesModel) {
  var newChildren = elOption.children;
  var newLen = newChildren ? newChildren.length : 0;
  var mergeChildren2 = elOption.$mergeChildren;
  var byName = mergeChildren2 === "byName" || elOption.diffChildrenByName;
  var notMerge = mergeChildren2 === false;
  if (!newLen && !byName && !notMerge) {
    return;
  }
  if (byName) {
    diffGroupChildren({
      api,
      oldChildren: el.children() || [],
      newChildren: newChildren || [],
      dataIndex,
      seriesModel,
      group: el
    });
    return;
  }
  notMerge && el.removeAll();
  var index = 0;
  for (; index < newLen; index++) {
    newChildren[index] && doCreateOrUpdateEl(api, el.childAt(index), dataIndex, newChildren[index], seriesModel, el);
  }
  for (var i = el.childCount() - 1; i >= index; i--) {
    doRemoveEl(el.childAt(i), seriesModel, el);
  }
}
function diffGroupChildren(context) {
  new DataDiffer(context.oldChildren, context.newChildren, getKey, getKey, context).add(processAddUpdate).update(processAddUpdate).remove(processRemove).execute();
}
function getKey(item, idx) {
  var name = item && item.name;
  return name != null ? name : GROUP_DIFF_PREFIX + idx;
}
function processAddUpdate(newIndex, oldIndex) {
  var context = this.context;
  var childOption = newIndex != null ? context.newChildren[newIndex] : null;
  var child = oldIndex != null ? context.oldChildren[oldIndex] : null;
  doCreateOrUpdateEl(context.api, child, context.dataIndex, childOption, context.seriesModel, context.group);
}
function processRemove(oldIndex) {
  var context = this.context;
  var child = context.oldChildren[oldIndex];
  doRemoveEl(child, context.seriesModel, context.group);
}
function doRemoveEl(el, seriesModel, group) {
  if (el) {
    var leaveToProps = customInnerStore(el).leaveToProps;
    leaveToProps ? updateProps(el, leaveToProps, seriesModel, {
      cb: function() {
        group.remove(el);
      }
    }) : group.remove(el);
  }
}
function getPathData(shape) {
  return shape && (shape.pathData || shape.d);
}
function hasOwnPathData(shape) {
  return shape && (hasOwn(shape, "pathData") || hasOwn(shape, "d"));
}
function install$8(registers) {
  registers.registerChartView(CustomChartView$1);
  registers.registerSeriesModel(CustomSeriesModel$1);
}
function layout(axisModel, opt) {
  opt = opt || {};
  var single = axisModel.coordinateSystem;
  var axis = axisModel.axis;
  var layout2 = {};
  var axisPosition = axis.position;
  var orient = axis.orient;
  var rect = single.getRect();
  var rectBound = [rect.x, rect.x + rect.width, rect.y, rect.y + rect.height];
  var positionMap = {
    horizontal: {
      top: rectBound[2],
      bottom: rectBound[3]
    },
    vertical: {
      left: rectBound[0],
      right: rectBound[1]
    }
  };
  layout2.position = [orient === "vertical" ? positionMap.vertical[axisPosition] : rectBound[0], orient === "horizontal" ? positionMap.horizontal[axisPosition] : rectBound[3]];
  var r = {
    horizontal: 0,
    vertical: 1
  };
  layout2.rotation = Math.PI / 2 * r[orient];
  var directionMap = {
    top: -1,
    bottom: 1,
    right: 1,
    left: -1
  };
  layout2.labelDirection = layout2.tickDirection = layout2.nameDirection = directionMap[axisPosition];
  if (axisModel.get(["axisTick", "inside"])) {
    layout2.tickDirection = -layout2.tickDirection;
  }
  if (retrieve(opt.labelInside, axisModel.get(["axisLabel", "inside"]))) {
    layout2.labelDirection = -layout2.labelDirection;
  }
  var labelRotation = opt.rotate;
  labelRotation == null && (labelRotation = axisModel.get(["axisLabel", "rotate"]));
  layout2.labelRotation = axisPosition === "top" ? -labelRotation : labelRotation;
  layout2.z2 = 1;
  return layout2;
}
var axisBuilderAttrs = ["axisLine", "axisTickLabel", "axisName"];
var selfBuilderAttrs = ["splitArea", "splitLine"];
var SingleAxisView = function(_super) {
  __extends(SingleAxisView2, _super);
  function SingleAxisView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SingleAxisView2.type;
    _this.axisPointerClass = "SingleAxisPointer";
    return _this;
  }
  SingleAxisView2.prototype.render = function(axisModel, ecModel, api, payload) {
    var group = this.group;
    group.removeAll();
    var oldAxisGroup = this._axisGroup;
    this._axisGroup = new Group$1();
    var layout$1 = layout(axisModel);
    var axisBuilder = new AxisBuilder(axisModel, layout$1);
    each$2(axisBuilderAttrs, axisBuilder.add, axisBuilder);
    group.add(this._axisGroup);
    group.add(axisBuilder.getGroup());
    each$2(selfBuilderAttrs, function(name) {
      if (axisModel.get([name, "show"])) {
        axisElementBuilders[name](this, this.group, this._axisGroup, axisModel);
      }
    }, this);
    groupTransition(oldAxisGroup, this._axisGroup, axisModel);
    _super.prototype.render.call(this, axisModel, ecModel, api, payload);
  };
  SingleAxisView2.prototype.remove = function() {
    rectCoordAxisHandleRemove(this);
  };
  SingleAxisView2.type = "singleAxis";
  return SingleAxisView2;
}(AxisView);
var axisElementBuilders = {
  splitLine: function(axisView, group, axisGroup, axisModel) {
    var axis = axisModel.axis;
    if (axis.scale.isBlank()) {
      return;
    }
    var splitLineModel = axisModel.getModel("splitLine");
    var lineStyleModel = splitLineModel.getModel("lineStyle");
    var lineColors = lineStyleModel.get("color");
    lineColors = lineColors instanceof Array ? lineColors : [lineColors];
    var gridRect = axisModel.coordinateSystem.getRect();
    var isHorizontal = axis.isHorizontal();
    var splitLines = [];
    var lineCount = 0;
    var ticksCoords = axis.getTicksCoords({
      tickModel: splitLineModel
    });
    var p1 = [];
    var p2 = [];
    for (var i = 0; i < ticksCoords.length; ++i) {
      var tickCoord = axis.toGlobalCoord(ticksCoords[i].coord);
      if (isHorizontal) {
        p1[0] = tickCoord;
        p1[1] = gridRect.y;
        p2[0] = tickCoord;
        p2[1] = gridRect.y + gridRect.height;
      } else {
        p1[0] = gridRect.x;
        p1[1] = tickCoord;
        p2[0] = gridRect.x + gridRect.width;
        p2[1] = tickCoord;
      }
      var colorIndex = lineCount++ % lineColors.length;
      splitLines[colorIndex] = splitLines[colorIndex] || [];
      splitLines[colorIndex].push(new Line$2({
        subPixelOptimize: true,
        shape: {
          x1: p1[0],
          y1: p1[1],
          x2: p2[0],
          y2: p2[1]
        },
        silent: true
      }));
    }
    var lineStyle = lineStyleModel.getLineStyle(["color"]);
    for (var i = 0; i < splitLines.length; ++i) {
      group.add(mergePath(splitLines[i], {
        style: defaults({
          stroke: lineColors[i % lineColors.length]
        }, lineStyle),
        silent: true
      }));
    }
  },
  splitArea: function(axisView, group, axisGroup, axisModel) {
    rectCoordAxisBuildSplitArea(axisView, axisGroup, axisModel, axisModel);
  }
};
var SingleAxisView$1 = SingleAxisView;
var SingleAxisModel = function(_super) {
  __extends(SingleAxisModel2, _super);
  function SingleAxisModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SingleAxisModel2.type;
    return _this;
  }
  SingleAxisModel2.prototype.getCoordSysModel = function() {
    return this;
  };
  SingleAxisModel2.type = "singleAxis";
  SingleAxisModel2.layoutMode = "box";
  SingleAxisModel2.defaultOption = {
    left: "5%",
    top: "5%",
    right: "5%",
    bottom: "5%",
    type: "value",
    position: "bottom",
    orient: "horizontal",
    axisLine: {
      show: true,
      lineStyle: {
        width: 1,
        type: "solid"
      }
    },
    tooltip: {
      show: true
    },
    axisTick: {
      show: true,
      length: 6,
      lineStyle: {
        width: 1
      }
    },
    axisLabel: {
      show: true,
      interval: "auto"
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed",
        opacity: 0.2
      }
    }
  };
  return SingleAxisModel2;
}(ComponentModel);
mixin(SingleAxisModel, AxisModelCommonMixin.prototype);
var SingleAxisModel$1 = SingleAxisModel;
var SingleAxis = function(_super) {
  __extends(SingleAxis2, _super);
  function SingleAxis2(dim, scale2, coordExtent, axisType, position2) {
    var _this = _super.call(this, dim, scale2, coordExtent) || this;
    _this.type = axisType || "value";
    _this.position = position2 || "bottom";
    return _this;
  }
  SingleAxis2.prototype.isHorizontal = function() {
    var position2 = this.position;
    return position2 === "top" || position2 === "bottom";
  };
  SingleAxis2.prototype.pointToData = function(point, clamp) {
    return this.coordinateSystem.pointToData(point)[0];
  };
  return SingleAxis2;
}(Axis);
var SingleAxis$1 = SingleAxis;
var singleDimensions = ["single"];
var Single = function() {
  function Single2(axisModel, ecModel, api) {
    this.type = "single";
    this.dimension = "single";
    this.dimensions = singleDimensions;
    this.axisPointerEnabled = true;
    this.model = axisModel;
    this._init(axisModel, ecModel, api);
  }
  Single2.prototype._init = function(axisModel, ecModel, api) {
    var dim = this.dimension;
    var axis = new SingleAxis$1(dim, createScaleByModel(axisModel), [0, 0], axisModel.get("type"), axisModel.get("position"));
    var isCategory = axis.type === "category";
    axis.onBand = isCategory && axisModel.get("boundaryGap");
    axis.inverse = axisModel.get("inverse");
    axis.orient = axisModel.get("orient");
    axisModel.axis = axis;
    axis.model = axisModel;
    axis.coordinateSystem = this;
    this._axis = axis;
  };
  Single2.prototype.update = function(ecModel, api) {
    ecModel.eachSeries(function(seriesModel) {
      if (seriesModel.coordinateSystem === this) {
        var data_1 = seriesModel.getData();
        each$2(data_1.mapDimensionsAll(this.dimension), function(dim) {
          this._axis.scale.unionExtentFromData(data_1, dim);
        }, this);
        niceScaleExtent(this._axis.scale, this._axis.model);
      }
    }, this);
  };
  Single2.prototype.resize = function(axisModel, api) {
    this._rect = getLayoutRect({
      left: axisModel.get("left"),
      top: axisModel.get("top"),
      right: axisModel.get("right"),
      bottom: axisModel.get("bottom"),
      width: axisModel.get("width"),
      height: axisModel.get("height")
    }, {
      width: api.getWidth(),
      height: api.getHeight()
    });
    this._adjustAxis();
  };
  Single2.prototype.getRect = function() {
    return this._rect;
  };
  Single2.prototype._adjustAxis = function() {
    var rect = this._rect;
    var axis = this._axis;
    var isHorizontal = axis.isHorizontal();
    var extent = isHorizontal ? [0, rect.width] : [0, rect.height];
    var idx = axis.reverse ? 1 : 0;
    axis.setExtent(extent[idx], extent[1 - idx]);
    this._updateAxisTransform(axis, isHorizontal ? rect.x : rect.y);
  };
  Single2.prototype._updateAxisTransform = function(axis, coordBase) {
    var axisExtent = axis.getExtent();
    var extentSum = axisExtent[0] + axisExtent[1];
    var isHorizontal = axis.isHorizontal();
    axis.toGlobalCoord = isHorizontal ? function(coord) {
      return coord + coordBase;
    } : function(coord) {
      return extentSum - coord + coordBase;
    };
    axis.toLocalCoord = isHorizontal ? function(coord) {
      return coord - coordBase;
    } : function(coord) {
      return extentSum - coord + coordBase;
    };
  };
  Single2.prototype.getAxis = function() {
    return this._axis;
  };
  Single2.prototype.getBaseAxis = function() {
    return this._axis;
  };
  Single2.prototype.getAxes = function() {
    return [this._axis];
  };
  Single2.prototype.getTooltipAxes = function() {
    return {
      baseAxes: [this.getAxis()],
      otherAxes: []
    };
  };
  Single2.prototype.containPoint = function(point) {
    var rect = this.getRect();
    var axis = this.getAxis();
    var orient = axis.orient;
    if (orient === "horizontal") {
      return axis.contain(axis.toLocalCoord(point[0])) && point[1] >= rect.y && point[1] <= rect.y + rect.height;
    } else {
      return axis.contain(axis.toLocalCoord(point[1])) && point[0] >= rect.y && point[0] <= rect.y + rect.height;
    }
  };
  Single2.prototype.pointToData = function(point) {
    var axis = this.getAxis();
    return [axis.coordToData(axis.toLocalCoord(point[axis.orient === "horizontal" ? 0 : 1]))];
  };
  Single2.prototype.dataToPoint = function(val) {
    var axis = this.getAxis();
    var rect = this.getRect();
    var pt = [];
    var idx = axis.orient === "horizontal" ? 0 : 1;
    if (val instanceof Array) {
      val = val[0];
    }
    pt[idx] = axis.toGlobalCoord(axis.dataToCoord(+val));
    pt[1 - idx] = idx === 0 ? rect.y + rect.height / 2 : rect.x + rect.width / 2;
    return pt;
  };
  Single2.prototype.convertToPixel = function(ecModel, finder, value) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? this.dataToPoint(value) : null;
  };
  Single2.prototype.convertFromPixel = function(ecModel, finder, pixel) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? this.pointToData(pixel) : null;
  };
  return Single2;
}();
function getCoordSys(finder) {
  var seriesModel = finder.seriesModel;
  var singleModel = finder.singleAxisModel;
  return singleModel && singleModel.coordinateSystem || seriesModel && seriesModel.coordinateSystem;
}
function create(ecModel, api) {
  var singles = [];
  ecModel.eachComponent("singleAxis", function(axisModel, idx) {
    var single = new Single(axisModel, ecModel, api);
    single.name = "single_" + idx;
    single.resize(axisModel, api);
    axisModel.coordinateSystem = single;
    singles.push(single);
  });
  ecModel.eachSeries(function(seriesModel) {
    if (seriesModel.get("coordinateSystem") === "singleAxis") {
      var singleAxisModel = seriesModel.getReferringComponents("singleAxis", SINGLE_REFERRING).models[0];
      seriesModel.coordinateSystem = singleAxisModel && singleAxisModel.coordinateSystem;
    }
  });
  return singles;
}
var singleCreator = {
  create,
  dimensions: singleDimensions
};
var singleCreator$1 = singleCreator;
var XY = ["x", "y"];
var WH = ["width", "height"];
var SingleAxisPointer = function(_super) {
  __extends(SingleAxisPointer2, _super);
  function SingleAxisPointer2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  SingleAxisPointer2.prototype.makeElOption = function(elOption, value, axisModel, axisPointerModel, api) {
    var axis = axisModel.axis;
    var coordSys = axis.coordinateSystem;
    var otherExtent = getGlobalExtent(coordSys, 1 - getPointDimIndex(axis));
    var pixelValue = coordSys.dataToPoint(value)[0];
    var axisPointerType = axisPointerModel.get("type");
    if (axisPointerType && axisPointerType !== "none") {
      var elStyle = buildElStyle(axisPointerModel);
      var pointerOption = pointerShapeBuilder[axisPointerType](axis, pixelValue, otherExtent);
      pointerOption.style = elStyle;
      elOption.graphicKey = pointerOption.type;
      elOption.pointer = pointerOption;
    }
    var layoutInfo = layout(axisModel);
    buildCartesianSingleLabelElOption(value, elOption, layoutInfo, axisModel, axisPointerModel, api);
  };
  SingleAxisPointer2.prototype.getHandleTransform = function(value, axisModel, axisPointerModel) {
    var layoutInfo = layout(axisModel, {
      labelInside: false
    });
    layoutInfo.labelMargin = axisPointerModel.get(["handle", "margin"]);
    var position2 = getTransformedPosition(axisModel.axis, value, layoutInfo);
    return {
      x: position2[0],
      y: position2[1],
      rotation: layoutInfo.rotation + (layoutInfo.labelDirection < 0 ? Math.PI : 0)
    };
  };
  SingleAxisPointer2.prototype.updateHandleTransform = function(transform2, delta, axisModel, axisPointerModel) {
    var axis = axisModel.axis;
    var coordSys = axis.coordinateSystem;
    var dimIndex = getPointDimIndex(axis);
    var axisExtent = getGlobalExtent(coordSys, dimIndex);
    var currPosition = [transform2.x, transform2.y];
    currPosition[dimIndex] += delta[dimIndex];
    currPosition[dimIndex] = Math.min(axisExtent[1], currPosition[dimIndex]);
    currPosition[dimIndex] = Math.max(axisExtent[0], currPosition[dimIndex]);
    var otherExtent = getGlobalExtent(coordSys, 1 - dimIndex);
    var cursorOtherValue = (otherExtent[1] + otherExtent[0]) / 2;
    var cursorPoint = [cursorOtherValue, cursorOtherValue];
    cursorPoint[dimIndex] = currPosition[dimIndex];
    return {
      x: currPosition[0],
      y: currPosition[1],
      rotation: transform2.rotation,
      cursorPoint,
      tooltipOption: {
        verticalAlign: "middle"
      }
    };
  };
  return SingleAxisPointer2;
}(BaseAxisPointer);
var pointerShapeBuilder = {
  line: function(axis, pixelValue, otherExtent) {
    var targetShape = makeLineShape([pixelValue, otherExtent[0]], [pixelValue, otherExtent[1]], getPointDimIndex(axis));
    return {
      type: "Line",
      subPixelOptimize: true,
      shape: targetShape
    };
  },
  shadow: function(axis, pixelValue, otherExtent) {
    var bandWidth = axis.getBandWidth();
    var span = otherExtent[1] - otherExtent[0];
    return {
      type: "Rect",
      shape: makeRectShape([pixelValue - bandWidth / 2, otherExtent[0]], [bandWidth, span], getPointDimIndex(axis))
    };
  }
};
function getPointDimIndex(axis) {
  return axis.isHorizontal() ? 0 : 1;
}
function getGlobalExtent(coordSys, dimIndex) {
  var rect = coordSys.getRect();
  return [rect[XY[dimIndex]], rect[XY[dimIndex]] + rect[WH[dimIndex]]];
}
var SingleAxisPointer$1 = SingleAxisPointer;
var SingleView = function(_super) {
  __extends(SingleView2, _super);
  function SingleView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SingleView2.type;
    return _this;
  }
  SingleView2.type = "single";
  return SingleView2;
}(ComponentView);
function install$7(registers) {
  use(install$q);
  AxisView.registerAxisPointerClass("SingleAxisPointer", SingleAxisPointer$1);
  registers.registerComponentView(SingleView);
  registers.registerComponentView(SingleAxisView$1);
  registers.registerComponentModel(SingleAxisModel$1);
  axisModelCreator(registers, "single", SingleAxisModel$1, SingleAxisModel$1.defaultOption);
  registers.registerCoordinateSystem("single", singleCreator$1);
}
var DEFAULT_TOOLBOX_BTNS = ["rect", "polygon", "keep", "clear"];
function brushPreprocessor(option, isNew) {
  var brushComponents = normalizeToArray(option ? option.brush : []);
  if (!brushComponents.length) {
    return;
  }
  var brushComponentSpecifiedBtns = [];
  each$2(brushComponents, function(brushOpt) {
    var tbs = brushOpt.hasOwnProperty("toolbox") ? brushOpt.toolbox : [];
    if (tbs instanceof Array) {
      brushComponentSpecifiedBtns = brushComponentSpecifiedBtns.concat(tbs);
    }
  });
  var toolbox = option && option.toolbox;
  if (isArray(toolbox)) {
    toolbox = toolbox[0];
  }
  if (!toolbox) {
    toolbox = {
      feature: {}
    };
    option.toolbox = [toolbox];
  }
  var toolboxFeature = toolbox.feature || (toolbox.feature = {});
  var toolboxBrush = toolboxFeature.brush || (toolboxFeature.brush = {});
  var brushTypes = toolboxBrush.type || (toolboxBrush.type = []);
  brushTypes.push.apply(brushTypes, brushComponentSpecifiedBtns);
  removeDuplicate(brushTypes);
  if (isNew && !brushTypes.length) {
    brushTypes.push.apply(brushTypes, DEFAULT_TOOLBOX_BTNS);
  }
}
function removeDuplicate(arr) {
  var map2 = {};
  each$2(arr, function(val) {
    map2[val] = 1;
  });
  arr.length = 0;
  each$2(map2, function(flag, val) {
    arr.push(val);
  });
}
function makeBrushCommonSelectorForSeries(area) {
  var brushType = area.brushType;
  var selectors = {
    point: function(itemLayout) {
      return selector[brushType].point(itemLayout, selectors, area);
    },
    rect: function(itemLayout) {
      return selector[brushType].rect(itemLayout, selectors, area);
    }
  };
  return selectors;
}
var selector = {
  lineX: getLineSelectors(0),
  lineY: getLineSelectors(1),
  rect: {
    point: function(itemLayout, selectors, area) {
      return itemLayout && area.boundingRect.contain(itemLayout[0], itemLayout[1]);
    },
    rect: function(itemLayout, selectors, area) {
      return itemLayout && area.boundingRect.intersect(itemLayout);
    }
  },
  polygon: {
    point: function(itemLayout, selectors, area) {
      return itemLayout && area.boundingRect.contain(itemLayout[0], itemLayout[1]) && contain(area.range, itemLayout[0], itemLayout[1]);
    },
    rect: function(itemLayout, selectors, area) {
      var points = area.range;
      if (!itemLayout || points.length <= 1) {
        return false;
      }
      var x = itemLayout.x;
      var y = itemLayout.y;
      var width = itemLayout.width;
      var height = itemLayout.height;
      var p = points[0];
      if (contain(points, x, y) || contain(points, x + width, y) || contain(points, x, y + height) || contain(points, x + width, y + height) || BoundingRect.create(itemLayout).contain(p[0], p[1]) || linePolygonIntersect(x, y, x + width, y, points) || linePolygonIntersect(x, y, x, y + height, points) || linePolygonIntersect(x + width, y, x + width, y + height, points) || linePolygonIntersect(x, y + height, x + width, y + height, points)) {
        return true;
      }
    }
  }
};
function getLineSelectors(xyIndex) {
  var xy = ["x", "y"];
  var wh = ["width", "height"];
  return {
    point: function(itemLayout, selectors, area) {
      if (itemLayout) {
        var range = area.range;
        var p = itemLayout[xyIndex];
        return inLineRange(p, range);
      }
    },
    rect: function(itemLayout, selectors, area) {
      if (itemLayout) {
        var range = area.range;
        var layoutRange = [itemLayout[xy[xyIndex]], itemLayout[xy[xyIndex]] + itemLayout[wh[xyIndex]]];
        layoutRange[1] < layoutRange[0] && layoutRange.reverse();
        return inLineRange(layoutRange[0], range) || inLineRange(layoutRange[1], range) || inLineRange(range[0], layoutRange) || inLineRange(range[1], layoutRange);
      }
    }
  };
}
function inLineRange(p, range) {
  return range[0] <= p && p <= range[1];
}
var STATE_LIST = ["inBrush", "outOfBrush"];
var DISPATCH_METHOD = "__ecBrushSelect";
var DISPATCH_FLAG = "__ecInBrushSelectEvent";
function layoutCovers(ecModel) {
  ecModel.eachComponent({
    mainType: "brush"
  }, function(brushModel) {
    var brushTargetManager = brushModel.brushTargetManager = new BrushTargetManager(brushModel.option, ecModel);
    brushTargetManager.setInputRanges(brushModel.areas, ecModel);
  });
}
function brushVisual(ecModel, api, payload) {
  var brushSelected = [];
  var throttleType;
  var throttleDelay;
  ecModel.eachComponent({
    mainType: "brush"
  }, function(brushModel) {
    payload && payload.type === "takeGlobalCursor" && brushModel.setBrushOption(payload.key === "brush" ? payload.brushOption : {
      brushType: false
    });
  });
  layoutCovers(ecModel);
  ecModel.eachComponent({
    mainType: "brush"
  }, function(brushModel, brushIndex) {
    var thisBrushSelected = {
      brushId: brushModel.id,
      brushIndex,
      brushName: brushModel.name,
      areas: clone$3(brushModel.areas),
      selected: []
    };
    brushSelected.push(thisBrushSelected);
    var brushOption = brushModel.option;
    var brushLink = brushOption.brushLink;
    var linkedSeriesMap = [];
    var selectedDataIndexForLink = [];
    var rangeInfoBySeries = [];
    var hasBrushExists = false;
    if (!brushIndex) {
      throttleType = brushOption.throttleType;
      throttleDelay = brushOption.throttleDelay;
    }
    var areas = map(brushModel.areas, function(area) {
      var builder = boundingRectBuilders[area.brushType];
      var selectableArea = defaults({
        boundingRect: builder ? builder(area) : void 0
      }, area);
      selectableArea.selectors = makeBrushCommonSelectorForSeries(selectableArea);
      return selectableArea;
    });
    var visualMappings = createVisualMappings(brushModel.option, STATE_LIST, function(mappingOption) {
      mappingOption.mappingMethod = "fixed";
    });
    isArray(brushLink) && each$2(brushLink, function(seriesIndex) {
      linkedSeriesMap[seriesIndex] = 1;
    });
    function linkOthers(seriesIndex) {
      return brushLink === "all" || !!linkedSeriesMap[seriesIndex];
    }
    function brushed(rangeInfoList) {
      return !!rangeInfoList.length;
    }
    ecModel.eachSeries(function(seriesModel, seriesIndex) {
      var rangeInfoList = rangeInfoBySeries[seriesIndex] = [];
      seriesModel.subType === "parallel" ? stepAParallel(seriesModel, seriesIndex) : stepAOthers(seriesModel, seriesIndex, rangeInfoList);
    });
    function stepAParallel(seriesModel, seriesIndex) {
      var coordSys = seriesModel.coordinateSystem;
      hasBrushExists = hasBrushExists || coordSys.hasAxisBrushed();
      linkOthers(seriesIndex) && coordSys.eachActiveState(seriesModel.getData(), function(activeState, dataIndex) {
        activeState === "active" && (selectedDataIndexForLink[dataIndex] = 1);
      });
    }
    function stepAOthers(seriesModel, seriesIndex, rangeInfoList) {
      if (!seriesModel.brushSelector || brushModelNotControll(brushModel, seriesIndex)) {
        return;
      }
      each$2(areas, function(area) {
        if (brushModel.brushTargetManager.controlSeries(area, seriesModel, ecModel)) {
          rangeInfoList.push(area);
        }
        hasBrushExists = hasBrushExists || brushed(rangeInfoList);
      });
      if (linkOthers(seriesIndex) && brushed(rangeInfoList)) {
        var data_1 = seriesModel.getData();
        data_1.each(function(dataIndex) {
          if (checkInRange(seriesModel, rangeInfoList, data_1, dataIndex)) {
            selectedDataIndexForLink[dataIndex] = 1;
          }
        });
      }
    }
    ecModel.eachSeries(function(seriesModel, seriesIndex) {
      var seriesBrushSelected = {
        seriesId: seriesModel.id,
        seriesIndex,
        seriesName: seriesModel.name,
        dataIndex: []
      };
      thisBrushSelected.selected.push(seriesBrushSelected);
      var rangeInfoList = rangeInfoBySeries[seriesIndex];
      var data = seriesModel.getData();
      var getValueState = linkOthers(seriesIndex) ? function(dataIndex) {
        return selectedDataIndexForLink[dataIndex] ? (seriesBrushSelected.dataIndex.push(data.getRawIndex(dataIndex)), "inBrush") : "outOfBrush";
      } : function(dataIndex) {
        return checkInRange(seriesModel, rangeInfoList, data, dataIndex) ? (seriesBrushSelected.dataIndex.push(data.getRawIndex(dataIndex)), "inBrush") : "outOfBrush";
      };
      (linkOthers(seriesIndex) ? hasBrushExists : brushed(rangeInfoList)) && applyVisual(STATE_LIST, visualMappings, data, getValueState);
    });
  });
  dispatchAction(api, throttleType, throttleDelay, brushSelected, payload);
}
function dispatchAction(api, throttleType, throttleDelay, brushSelected, payload) {
  if (!payload) {
    return;
  }
  var zr = api.getZr();
  if (zr[DISPATCH_FLAG]) {
    return;
  }
  if (!zr[DISPATCH_METHOD]) {
    zr[DISPATCH_METHOD] = doDispatch;
  }
  var fn = createOrUpdate(zr, DISPATCH_METHOD, throttleDelay, throttleType);
  fn(api, brushSelected);
}
function doDispatch(api, brushSelected) {
  if (!api.isDisposed()) {
    var zr = api.getZr();
    zr[DISPATCH_FLAG] = true;
    api.dispatchAction({
      type: "brushSelect",
      batch: brushSelected
    });
    zr[DISPATCH_FLAG] = false;
  }
}
function checkInRange(seriesModel, rangeInfoList, data, dataIndex) {
  for (var i = 0, len2 = rangeInfoList.length; i < len2; i++) {
    var area = rangeInfoList[i];
    if (seriesModel.brushSelector(dataIndex, data, area.selectors, area)) {
      return true;
    }
  }
}
function brushModelNotControll(brushModel, seriesIndex) {
  var seriesIndices = brushModel.option.seriesIndex;
  return seriesIndices != null && seriesIndices !== "all" && (isArray(seriesIndices) ? indexOf(seriesIndices, seriesIndex) < 0 : seriesIndex !== seriesIndices);
}
var boundingRectBuilders = {
  rect: function(area) {
    return getBoundingRectFromMinMax(area.range);
  },
  polygon: function(area) {
    var minMax;
    var range = area.range;
    for (var i = 0, len2 = range.length; i < len2; i++) {
      minMax = minMax || [[Infinity, -Infinity], [Infinity, -Infinity]];
      var rg = range[i];
      rg[0] < minMax[0][0] && (minMax[0][0] = rg[0]);
      rg[0] > minMax[0][1] && (minMax[0][1] = rg[0]);
      rg[1] < minMax[1][0] && (minMax[1][0] = rg[1]);
      rg[1] > minMax[1][1] && (minMax[1][1] = rg[1]);
    }
    return minMax && getBoundingRectFromMinMax(minMax);
  }
};
function getBoundingRectFromMinMax(minMax) {
  return new BoundingRect(minMax[0][0], minMax[1][0], minMax[0][1] - minMax[0][0], minMax[1][1] - minMax[1][0]);
}
var BrushView = function(_super) {
  __extends(BrushView2, _super);
  function BrushView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = BrushView2.type;
    return _this;
  }
  BrushView2.prototype.init = function(ecModel, api) {
    this.ecModel = ecModel;
    this.api = api;
    this.model;
    (this._brushController = new BrushController(api.getZr())).on("brush", bind(this._onBrush, this)).mount();
  };
  BrushView2.prototype.render = function(brushModel, ecModel, api, payload) {
    this.model = brushModel;
    this._updateController(brushModel, ecModel, api, payload);
  };
  BrushView2.prototype.updateTransform = function(brushModel, ecModel, api, payload) {
    layoutCovers(ecModel);
    this._updateController(brushModel, ecModel, api, payload);
  };
  BrushView2.prototype.updateVisual = function(brushModel, ecModel, api, payload) {
    this.updateTransform(brushModel, ecModel, api, payload);
  };
  BrushView2.prototype.updateView = function(brushModel, ecModel, api, payload) {
    this._updateController(brushModel, ecModel, api, payload);
  };
  BrushView2.prototype._updateController = function(brushModel, ecModel, api, payload) {
    (!payload || payload.$from !== brushModel.id) && this._brushController.setPanels(brushModel.brushTargetManager.makePanelOpts(api)).enableBrush(brushModel.brushOption).updateCovers(brushModel.areas.slice());
  };
  BrushView2.prototype.dispose = function() {
    this._brushController.dispose();
  };
  BrushView2.prototype._onBrush = function(eventParam) {
    var modelId = this.model.id;
    var areas = this.model.brushTargetManager.setOutputRanges(eventParam.areas, this.ecModel);
    (!eventParam.isEnd || eventParam.removeOnClick) && this.api.dispatchAction({
      type: "brush",
      brushId: modelId,
      areas: clone$3(areas),
      $from: modelId
    });
    eventParam.isEnd && this.api.dispatchAction({
      type: "brushEnd",
      brushId: modelId,
      areas: clone$3(areas),
      $from: modelId
    });
  };
  BrushView2.type = "brush";
  return BrushView2;
}(ComponentView);
var BrushView$1 = BrushView;
var DEFAULT_OUT_OF_BRUSH_COLOR = "#ddd";
var BrushModel = function(_super) {
  __extends(BrushModel2, _super);
  function BrushModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = BrushModel2.type;
    _this.areas = [];
    _this.brushOption = {};
    return _this;
  }
  BrushModel2.prototype.optionUpdated = function(newOption, isInit) {
    var thisOption = this.option;
    !isInit && replaceVisualOption(thisOption, newOption, ["inBrush", "outOfBrush"]);
    var inBrush = thisOption.inBrush = thisOption.inBrush || {};
    thisOption.outOfBrush = thisOption.outOfBrush || {
      color: DEFAULT_OUT_OF_BRUSH_COLOR
    };
    if (!inBrush.hasOwnProperty("liftZ")) {
      inBrush.liftZ = 5;
    }
  };
  BrushModel2.prototype.setAreas = function(areas) {
    if (!areas) {
      return;
    }
    this.areas = map(areas, function(area) {
      return generateBrushOption(this.option, area);
    }, this);
  };
  BrushModel2.prototype.setBrushOption = function(brushOption) {
    this.brushOption = generateBrushOption(this.option, brushOption);
    this.brushType = this.brushOption.brushType;
  };
  BrushModel2.type = "brush";
  BrushModel2.dependencies = ["geo", "grid", "xAxis", "yAxis", "parallel", "series"];
  BrushModel2.defaultOption = {
    seriesIndex: "all",
    brushType: "rect",
    brushMode: "single",
    transformable: true,
    brushStyle: {
      borderWidth: 1,
      color: "rgba(210,219,238,0.3)",
      borderColor: "#D2DBEE"
    },
    throttleType: "fixRate",
    throttleDelay: 0,
    removeOnClick: true,
    z: 1e4
  };
  return BrushModel2;
}(ComponentModel);
function generateBrushOption(option, brushOption) {
  return merge({
    brushType: option.brushType,
    brushMode: option.brushMode,
    transformable: option.transformable,
    brushStyle: new Model(option.brushStyle).getItemStyle(),
    removeOnClick: option.removeOnClick,
    z: option.z
  }, brushOption, true);
}
var BrushModel$1 = BrushModel;
var ICON_TYPES = ["rect", "polygon", "lineX", "lineY", "keep", "clear"];
var BrushFeature = function(_super) {
  __extends(BrushFeature2, _super);
  function BrushFeature2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  BrushFeature2.prototype.render = function(featureModel, ecModel, api) {
    var brushType;
    var brushMode;
    var isBrushed;
    ecModel.eachComponent({
      mainType: "brush"
    }, function(brushModel) {
      brushType = brushModel.brushType;
      brushMode = brushModel.brushOption.brushMode || "single";
      isBrushed = isBrushed || !!brushModel.areas.length;
    });
    this._brushType = brushType;
    this._brushMode = brushMode;
    each$2(featureModel.get("type", true), function(type) {
      featureModel.setIconStatus(type, (type === "keep" ? brushMode === "multiple" : type === "clear" ? isBrushed : type === brushType) ? "emphasis" : "normal");
    });
  };
  BrushFeature2.prototype.updateView = function(featureModel, ecModel, api) {
    this.render(featureModel, ecModel, api);
  };
  BrushFeature2.prototype.getIcons = function() {
    var model = this.model;
    var availableIcons = model.get("icon", true);
    var icons = {};
    each$2(model.get("type", true), function(type) {
      if (availableIcons[type]) {
        icons[type] = availableIcons[type];
      }
    });
    return icons;
  };
  BrushFeature2.prototype.onclick = function(ecModel, api, type) {
    var brushType = this._brushType;
    var brushMode = this._brushMode;
    if (type === "clear") {
      api.dispatchAction({
        type: "axisAreaSelect",
        intervals: []
      });
      api.dispatchAction({
        type: "brush",
        command: "clear",
        areas: []
      });
    } else {
      api.dispatchAction({
        type: "takeGlobalCursor",
        key: "brush",
        brushOption: {
          brushType: type === "keep" ? brushType : brushType === type ? false : type,
          brushMode: type === "keep" ? brushMode === "multiple" ? "single" : "multiple" : brushMode
        }
      });
    }
  };
  BrushFeature2.getDefaultOption = function(ecModel) {
    var defaultOption = {
      show: true,
      type: ICON_TYPES.slice(),
      icon: {
        rect: "M7.3,34.7 M0.4,10V-0.2h9.8 M89.6,10V-0.2h-9.8 M0.4,60v10.2h9.8 M89.6,60v10.2h-9.8 M12.3,22.4V10.5h13.1 M33.6,10.5h7.8 M49.1,10.5h7.8 M77.5,22.4V10.5h-13 M12.3,31.1v8.2 M77.7,31.1v8.2 M12.3,47.6v11.9h13.1 M33.6,59.5h7.6 M49.1,59.5 h7.7 M77.5,47.6v11.9h-13",
        polygon: "M55.2,34.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1 s-3.1-1.4-3.1-3.1S53.5,34.9,55.2,34.9z M50.4,51c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1 C47.3,52.4,48.7,51,50.4,51z M55.6,37.1l1.5-7.8 M60.1,13.5l1.6-8.7l-7.8,4 M59,19l-1,5.3 M24,16.1l6.4,4.9l6.4-3.3 M48.5,11.6 l-5.9,3.1 M19.1,12.8L9.7,5.1l1.1,7.7 M13.4,29.8l1,7.3l6.6,1.6 M11.6,18.4l1,6.1 M32.8,41.9 M26.6,40.4 M27.3,40.2l6.1,1.6 M49.9,52.1l-5.6-7.6l-4.9-1.2",
        lineX: "M15.2,30 M19.7,15.6V1.9H29 M34.8,1.9H40.4 M55.3,15.6V1.9H45.9 M19.7,44.4V58.1H29 M34.8,58.1H40.4 M55.3,44.4 V58.1H45.9 M12.5,20.3l-9.4,9.6l9.6,9.8 M3.1,29.9h16.5 M62.5,20.3l9.4,9.6L62.3,39.7 M71.9,29.9H55.4",
        lineY: "M38.8,7.7 M52.7,12h13.2v9 M65.9,26.6V32 M52.7,46.3h13.2v-9 M24.9,12H11.8v9 M11.8,26.6V32 M24.9,46.3H11.8v-9 M48.2,5.1l-9.3-9l-9.4,9.2 M38.9-3.9V12 M48.2,53.3l-9.3,9l-9.4-9.2 M38.9,62.3V46.4",
        keep: "M4,10.5V1h10.3 M20.7,1h6.1 M33,1h6.1 M55.4,10.5V1H45.2 M4,17.3v6.6 M55.6,17.3v6.6 M4,30.5V40h10.3 M20.7,40 h6.1 M33,40h6.1 M55.4,30.5V40H45.2 M21,18.9h62.9v48.6H21V18.9z",
        clear: "M22,14.7l30.9,31 M52.9,14.7L22,45.7 M4.7,16.8V4.2h13.1 M26,4.2h7.8 M41.6,4.2h7.8 M70.3,16.8V4.2H57.2 M4.7,25.9v8.6 M70.3,25.9v8.6 M4.7,43.2v12.6h13.1 M26,55.8h7.8 M41.6,55.8h7.8 M70.3,43.2v12.6H57.2"
      },
      title: ecModel.getLocaleModel().get(["toolbox", "brush", "title"])
    };
    return defaultOption;
  };
  return BrushFeature2;
}(ToolboxFeature);
var BrushFeature$1 = BrushFeature;
function install$6(registers) {
  registers.registerComponentView(BrushView$1);
  registers.registerComponentModel(BrushModel$1);
  registers.registerPreprocessor(brushPreprocessor);
  registers.registerVisual(registers.PRIORITY.VISUAL.BRUSH, brushVisual);
  registers.registerAction({
    type: "brush",
    event: "brush",
    update: "updateVisual"
  }, function(payload, ecModel) {
    ecModel.eachComponent({
      mainType: "brush",
      query: payload
    }, function(brushModel) {
      brushModel.setAreas(payload.areas);
    });
  });
  registers.registerAction({
    type: "brushSelect",
    event: "brushSelected",
    update: "none"
  }, function() {
  });
  registers.registerAction({
    type: "brushEnd",
    event: "brushEnd",
    update: "none"
  }, function() {
  });
  registerFeature("brush", BrushFeature$1);
}
function checkMarkerInSeries(seriesOpts, markerType) {
  if (!seriesOpts) {
    return false;
  }
  var seriesOptArr = isArray(seriesOpts) ? seriesOpts : [seriesOpts];
  for (var idx = 0; idx < seriesOptArr.length; idx++) {
    if (seriesOptArr[idx] && seriesOptArr[idx][markerType]) {
      return true;
    }
  }
  return false;
}
function fillLabel(opt) {
  defaultEmphasis(opt, "label", ["show"]);
}
var inner$3 = makeInner();
var MarkerModel = function(_super) {
  __extends(MarkerModel2, _super);
  function MarkerModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MarkerModel2.type;
    _this.createdBySelf = false;
    return _this;
  }
  MarkerModel2.prototype.init = function(option, parentModel, ecModel) {
    this.mergeDefaultAndTheme(option, ecModel);
    this._mergeOption(option, ecModel, false, true);
  };
  MarkerModel2.prototype.isAnimationEnabled = function() {
    if (env.node) {
      return false;
    }
    var hostSeries = this.__hostSeries;
    return this.getShallow("animation") && hostSeries && hostSeries.isAnimationEnabled();
  };
  MarkerModel2.prototype.mergeOption = function(newOpt, ecModel) {
    this._mergeOption(newOpt, ecModel, false, false);
  };
  MarkerModel2.prototype._mergeOption = function(newOpt, ecModel, createdBySelf, isInit) {
    var componentType = this.mainType;
    if (!createdBySelf) {
      ecModel.eachSeries(function(seriesModel) {
        var markerOpt = seriesModel.get(this.mainType, true);
        var markerModel = inner$3(seriesModel)[componentType];
        if (!markerOpt || !markerOpt.data) {
          inner$3(seriesModel)[componentType] = null;
          return;
        }
        if (!markerModel) {
          if (isInit) {
            fillLabel(markerOpt);
          }
          each$2(markerOpt.data, function(item) {
            if (item instanceof Array) {
              fillLabel(item[0]);
              fillLabel(item[1]);
            } else {
              fillLabel(item);
            }
          });
          markerModel = this.createMarkerModelFromSeries(markerOpt, this, ecModel);
          extend(markerModel, {
            mainType: this.mainType,
            seriesIndex: seriesModel.seriesIndex,
            name: seriesModel.name,
            createdBySelf: true
          });
          markerModel.__hostSeries = seriesModel;
        } else {
          markerModel._mergeOption(markerOpt, ecModel, true);
        }
        inner$3(seriesModel)[componentType] = markerModel;
      }, this);
    }
  };
  MarkerModel2.prototype.formatTooltip = function(dataIndex, multipleSeries, dataType) {
    var data = this.getData();
    var value = this.getRawValue(dataIndex);
    var itemName = data.getName(dataIndex);
    return createTooltipMarkup("section", {
      header: this.name,
      blocks: [createTooltipMarkup("nameValue", {
        name: itemName,
        value,
        noName: !itemName,
        noValue: value == null
      })]
    });
  };
  MarkerModel2.prototype.getData = function() {
    return this._data;
  };
  MarkerModel2.prototype.setData = function(data) {
    this._data = data;
  };
  MarkerModel2.getMarkerModelFromSeries = function(seriesModel, componentType) {
    return inner$3(seriesModel)[componentType];
  };
  MarkerModel2.type = "marker";
  MarkerModel2.dependencies = ["series", "grid", "polar", "geo"];
  return MarkerModel2;
}(ComponentModel);
mixin(MarkerModel, DataFormatMixin.prototype);
var MarkerModel$1 = MarkerModel;
var MarkPointModel = function(_super) {
  __extends(MarkPointModel2, _super);
  function MarkPointModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MarkPointModel2.type;
    return _this;
  }
  MarkPointModel2.prototype.createMarkerModelFromSeries = function(markerOpt, masterMarkerModel, ecModel) {
    return new MarkPointModel2(markerOpt, masterMarkerModel, ecModel);
  };
  MarkPointModel2.type = "markPoint";
  MarkPointModel2.defaultOption = {
    zlevel: 0,
    z: 5,
    symbol: "pin",
    symbolSize: 50,
    tooltip: {
      trigger: "item"
    },
    label: {
      show: true,
      position: "inside"
    },
    itemStyle: {
      borderWidth: 2
    },
    emphasis: {
      label: {
        show: true
      }
    }
  };
  return MarkPointModel2;
}(MarkerModel$1);
var MarkPointModel$1 = MarkPointModel;
function hasXOrY(item) {
  return !(isNaN(parseFloat(item.x)) && isNaN(parseFloat(item.y)));
}
function hasXAndY(item) {
  return !isNaN(parseFloat(item.x)) && !isNaN(parseFloat(item.y));
}
function markerTypeCalculatorWithExtent(markerType, data, otherDataDim, targetDataDim, otherCoordIndex, targetCoordIndex) {
  var coordArr = [];
  var stacked = isDimensionStacked(data, targetDataDim);
  var calcDataDim = stacked ? data.getCalculationInfo("stackResultDimension") : targetDataDim;
  var value = numCalculate(data, calcDataDim, markerType);
  var dataIndex = data.indicesOfNearest(calcDataDim, value)[0];
  coordArr[otherCoordIndex] = data.get(otherDataDim, dataIndex);
  coordArr[targetCoordIndex] = data.get(calcDataDim, dataIndex);
  var coordArrValue = data.get(targetDataDim, dataIndex);
  var precision = getPrecision(data.get(targetDataDim, dataIndex));
  precision = Math.min(precision, 20);
  if (precision >= 0) {
    coordArr[targetCoordIndex] = +coordArr[targetCoordIndex].toFixed(precision);
  }
  return [coordArr, coordArrValue];
}
var markerTypeCalculator = {
  min: curry(markerTypeCalculatorWithExtent, "min"),
  max: curry(markerTypeCalculatorWithExtent, "max"),
  average: curry(markerTypeCalculatorWithExtent, "average"),
  median: curry(markerTypeCalculatorWithExtent, "median")
};
function dataTransform(seriesModel, item) {
  var data = seriesModel.getData();
  var coordSys = seriesModel.coordinateSystem;
  if (item && !hasXAndY(item) && !isArray(item.coord) && coordSys) {
    var dims = coordSys.dimensions;
    var axisInfo = getAxisInfo(item, data, coordSys, seriesModel);
    item = clone$3(item);
    if (item.type && markerTypeCalculator[item.type] && axisInfo.baseAxis && axisInfo.valueAxis) {
      var otherCoordIndex = indexOf(dims, axisInfo.baseAxis.dim);
      var targetCoordIndex = indexOf(dims, axisInfo.valueAxis.dim);
      var coordInfo = markerTypeCalculator[item.type](data, axisInfo.baseDataDim, axisInfo.valueDataDim, otherCoordIndex, targetCoordIndex);
      item.coord = coordInfo[0];
      item.value = coordInfo[1];
    } else {
      var coord = [item.xAxis != null ? item.xAxis : item.radiusAxis, item.yAxis != null ? item.yAxis : item.angleAxis];
      for (var i = 0; i < 2; i++) {
        if (markerTypeCalculator[coord[i]]) {
          coord[i] = numCalculate(data, data.mapDimension(dims[i]), coord[i]);
        }
      }
      item.coord = coord;
    }
  }
  return item;
}
function getAxisInfo(item, data, coordSys, seriesModel) {
  var ret = {};
  if (item.valueIndex != null || item.valueDim != null) {
    ret.valueDataDim = item.valueIndex != null ? data.getDimension(item.valueIndex) : item.valueDim;
    ret.valueAxis = coordSys.getAxis(dataDimToCoordDim(seriesModel, ret.valueDataDim));
    ret.baseAxis = coordSys.getOtherAxis(ret.valueAxis);
    ret.baseDataDim = data.mapDimension(ret.baseAxis.dim);
  } else {
    ret.baseAxis = seriesModel.getBaseAxis();
    ret.valueAxis = coordSys.getOtherAxis(ret.baseAxis);
    ret.baseDataDim = data.mapDimension(ret.baseAxis.dim);
    ret.valueDataDim = data.mapDimension(ret.valueAxis.dim);
  }
  return ret;
}
function dataDimToCoordDim(seriesModel, dataDim) {
  var dimItem = seriesModel.getData().getDimensionInfo(dataDim);
  return dimItem && dimItem.coordDim;
}
function dataFilter(coordSys, item) {
  return coordSys && coordSys.containData && item.coord && !hasXOrY(item) ? coordSys.containData(item.coord) : true;
}
function createMarkerDimValueGetter(inCoordSys, dims) {
  return inCoordSys ? function(item, dimName, dataIndex, dimIndex) {
    var rawVal = dimIndex < 2 ? item.coord && item.coord[dimIndex] : item.value;
    return parseDataValue(rawVal, dims[dimIndex]);
  } : function(item, dimName, dataIndex, dimIndex) {
    return parseDataValue(item.value, dims[dimIndex]);
  };
}
function numCalculate(data, valueDataDim, type) {
  if (type === "average") {
    var sum_1 = 0;
    var count_1 = 0;
    data.each(valueDataDim, function(val, idx) {
      if (!isNaN(val)) {
        sum_1 += val;
        count_1++;
      }
    });
    return sum_1 / count_1;
  } else if (type === "median") {
    return data.getMedian(valueDataDim);
  } else {
    return data.getDataExtent(valueDataDim)[type === "max" ? 1 : 0];
  }
}
var inner$2 = makeInner();
var MarkerView = function(_super) {
  __extends(MarkerView2, _super);
  function MarkerView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MarkerView2.type;
    return _this;
  }
  MarkerView2.prototype.init = function() {
    this.markerGroupMap = createHashMap();
  };
  MarkerView2.prototype.render = function(markerModel, ecModel, api) {
    var _this = this;
    var markerGroupMap = this.markerGroupMap;
    markerGroupMap.each(function(item) {
      inner$2(item).keep = false;
    });
    ecModel.eachSeries(function(seriesModel) {
      var markerModel2 = MarkerModel$1.getMarkerModelFromSeries(seriesModel, _this.type);
      markerModel2 && _this.renderSeries(seriesModel, markerModel2, ecModel, api);
    });
    markerGroupMap.each(function(item) {
      !inner$2(item).keep && _this.group.remove(item.group);
    });
  };
  MarkerView2.prototype.markKeep = function(drawGroup) {
    inner$2(drawGroup).keep = true;
  };
  MarkerView2.prototype.blurSeries = function(seriesModelList) {
    var _this = this;
    each$2(seriesModelList, function(seriesModel) {
      var markerModel = MarkerModel$1.getMarkerModelFromSeries(seriesModel, _this.type);
      if (markerModel) {
        var data = markerModel.getData();
        data.eachItemGraphicEl(function(el) {
          if (el) {
            enterBlur(el);
          }
        });
      }
    });
  };
  MarkerView2.type = "marker";
  return MarkerView2;
}(ComponentView);
var MarkerView$1 = MarkerView;
function updateMarkerLayout(mpData, seriesModel, api) {
  var coordSys = seriesModel.coordinateSystem;
  mpData.each(function(idx) {
    var itemModel = mpData.getItemModel(idx);
    var point;
    var xPx = parsePercent(itemModel.get("x"), api.getWidth());
    var yPx = parsePercent(itemModel.get("y"), api.getHeight());
    if (!isNaN(xPx) && !isNaN(yPx)) {
      point = [xPx, yPx];
    } else if (seriesModel.getMarkerPosition) {
      point = seriesModel.getMarkerPosition(mpData.getValues(mpData.dimensions, idx));
    } else if (coordSys) {
      var x = mpData.get(coordSys.dimensions[0], idx);
      var y = mpData.get(coordSys.dimensions[1], idx);
      point = coordSys.dataToPoint([x, y]);
    }
    if (!isNaN(xPx)) {
      point[0] = xPx;
    }
    if (!isNaN(yPx)) {
      point[1] = yPx;
    }
    mpData.setItemLayout(idx, point);
  });
}
var MarkPointView = function(_super) {
  __extends(MarkPointView2, _super);
  function MarkPointView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MarkPointView2.type;
    return _this;
  }
  MarkPointView2.prototype.updateTransform = function(markPointModel, ecModel, api) {
    ecModel.eachSeries(function(seriesModel) {
      var mpModel = MarkerModel$1.getMarkerModelFromSeries(seriesModel, "markPoint");
      if (mpModel) {
        updateMarkerLayout(mpModel.getData(), seriesModel, api);
        this.markerGroupMap.get(seriesModel.id).updateLayout();
      }
    }, this);
  };
  MarkPointView2.prototype.renderSeries = function(seriesModel, mpModel, ecModel, api) {
    var coordSys = seriesModel.coordinateSystem;
    var seriesId = seriesModel.id;
    var seriesData = seriesModel.getData();
    var symbolDrawMap = this.markerGroupMap;
    var symbolDraw = symbolDrawMap.get(seriesId) || symbolDrawMap.set(seriesId, new SymbolDraw());
    var mpData = createData(coordSys, seriesModel, mpModel);
    mpModel.setData(mpData);
    updateMarkerLayout(mpModel.getData(), seriesModel, api);
    mpData.each(function(idx) {
      var itemModel = mpData.getItemModel(idx);
      var symbol = itemModel.getShallow("symbol");
      var symbolSize = itemModel.getShallow("symbolSize");
      var symbolRotate = itemModel.getShallow("symbolRotate");
      var symbolOffset = itemModel.getShallow("symbolOffset");
      var symbolKeepAspect = itemModel.getShallow("symbolKeepAspect");
      if (isFunction(symbol) || isFunction(symbolSize) || isFunction(symbolRotate) || isFunction(symbolOffset)) {
        var rawIdx = mpModel.getRawValue(idx);
        var dataParams = mpModel.getDataParams(idx);
        if (isFunction(symbol)) {
          symbol = symbol(rawIdx, dataParams);
        }
        if (isFunction(symbolSize)) {
          symbolSize = symbolSize(rawIdx, dataParams);
        }
        if (isFunction(symbolRotate)) {
          symbolRotate = symbolRotate(rawIdx, dataParams);
        }
        if (isFunction(symbolOffset)) {
          symbolOffset = symbolOffset(rawIdx, dataParams);
        }
      }
      var style = itemModel.getModel("itemStyle").getItemStyle();
      var color = getVisualFromData(seriesData, "color");
      if (!style.fill) {
        style.fill = color;
      }
      mpData.setItemVisual(idx, {
        symbol,
        symbolSize,
        symbolRotate,
        symbolOffset,
        symbolKeepAspect,
        style
      });
    });
    symbolDraw.updateData(mpData);
    this.group.add(symbolDraw.group);
    mpData.eachItemGraphicEl(function(el) {
      el.traverse(function(child) {
        getECData(child).dataModel = mpModel;
      });
    });
    this.markKeep(symbolDraw);
    symbolDraw.group.silent = mpModel.get("silent") || seriesModel.get("silent");
  };
  MarkPointView2.type = "markPoint";
  return MarkPointView2;
}(MarkerView$1);
function createData(coordSys, seriesModel, mpModel) {
  var coordDimsInfos;
  if (coordSys) {
    coordDimsInfos = map(coordSys && coordSys.dimensions, function(coordDim) {
      var info = seriesModel.getData().getDimensionInfo(seriesModel.getData().mapDimension(coordDim)) || {};
      return extend(extend({}, info), {
        name: coordDim,
        ordinalMeta: null
      });
    });
  } else {
    coordDimsInfos = [{
      name: "value",
      type: "float"
    }];
  }
  var mpData = new SeriesData(coordDimsInfos, mpModel);
  var dataOpt = map(mpModel.get("data"), curry(dataTransform, seriesModel));
  if (coordSys) {
    dataOpt = filter(dataOpt, curry(dataFilter, coordSys));
  }
  var dimValueGetter = createMarkerDimValueGetter(!!coordSys, coordDimsInfos);
  mpData.initData(dataOpt, null, dimValueGetter);
  return mpData;
}
var MarkPointView$1 = MarkPointView;
function install$5(registers) {
  registers.registerComponentModel(MarkPointModel$1);
  registers.registerComponentView(MarkPointView$1);
  registers.registerPreprocessor(function(opt) {
    if (checkMarkerInSeries(opt.series, "markPoint")) {
      opt.markPoint = opt.markPoint || {};
    }
  });
}
var MarkLineModel = function(_super) {
  __extends(MarkLineModel2, _super);
  function MarkLineModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MarkLineModel2.type;
    return _this;
  }
  MarkLineModel2.prototype.createMarkerModelFromSeries = function(markerOpt, masterMarkerModel, ecModel) {
    return new MarkLineModel2(markerOpt, masterMarkerModel, ecModel);
  };
  MarkLineModel2.type = "markLine";
  MarkLineModel2.defaultOption = {
    zlevel: 0,
    z: 5,
    symbol: ["circle", "arrow"],
    symbolSize: [8, 16],
    symbolOffset: 0,
    precision: 2,
    tooltip: {
      trigger: "item"
    },
    label: {
      show: true,
      position: "end",
      distance: 5
    },
    lineStyle: {
      type: "dashed"
    },
    emphasis: {
      label: {
        show: true
      },
      lineStyle: {
        width: 3
      }
    },
    animationEasing: "linear"
  };
  return MarkLineModel2;
}(MarkerModel$1);
var MarkLineModel$1 = MarkLineModel;
var inner$1 = makeInner();
var markLineTransform = function(seriesModel, coordSys, mlModel, item) {
  var data = seriesModel.getData();
  var itemArray;
  if (!isArray(item)) {
    var mlType = item.type;
    if (mlType === "min" || mlType === "max" || mlType === "average" || mlType === "median" || item.xAxis != null || item.yAxis != null) {
      var valueAxis = void 0;
      var value = void 0;
      if (item.yAxis != null || item.xAxis != null) {
        valueAxis = coordSys.getAxis(item.yAxis != null ? "y" : "x");
        value = retrieve(item.yAxis, item.xAxis);
      } else {
        var axisInfo = getAxisInfo(item, data, coordSys, seriesModel);
        valueAxis = axisInfo.valueAxis;
        var valueDataDim = getStackedDimension(data, axisInfo.valueDataDim);
        value = numCalculate(data, valueDataDim, mlType);
      }
      var valueIndex = valueAxis.dim === "x" ? 0 : 1;
      var baseIndex = 1 - valueIndex;
      var mlFrom = clone$3(item);
      var mlTo = {
        coord: []
      };
      mlFrom.type = null;
      mlFrom.coord = [];
      mlFrom.coord[baseIndex] = -Infinity;
      mlTo.coord[baseIndex] = Infinity;
      var precision = mlModel.get("precision");
      if (precision >= 0 && typeof value === "number") {
        value = +value.toFixed(Math.min(precision, 20));
      }
      mlFrom.coord[valueIndex] = mlTo.coord[valueIndex] = value;
      itemArray = [mlFrom, mlTo, {
        type: mlType,
        valueIndex: item.valueIndex,
        value
      }];
    } else {
      itemArray = [];
    }
  } else {
    itemArray = item;
  }
  var normalizedItem = [dataTransform(seriesModel, itemArray[0]), dataTransform(seriesModel, itemArray[1]), extend({}, itemArray[2])];
  normalizedItem[2].type = normalizedItem[2].type || null;
  merge(normalizedItem[2], normalizedItem[0]);
  merge(normalizedItem[2], normalizedItem[1]);
  return normalizedItem;
};
function isInifinity$1(val) {
  return !isNaN(val) && !isFinite(val);
}
function ifMarkLineHasOnlyDim(dimIndex, fromCoord, toCoord, coordSys) {
  var otherDimIndex = 1 - dimIndex;
  var dimName = coordSys.dimensions[dimIndex];
  return isInifinity$1(fromCoord[otherDimIndex]) && isInifinity$1(toCoord[otherDimIndex]) && fromCoord[dimIndex] === toCoord[dimIndex] && coordSys.getAxis(dimName).containData(fromCoord[dimIndex]);
}
function markLineFilter(coordSys, item) {
  if (coordSys.type === "cartesian2d") {
    var fromCoord = item[0].coord;
    var toCoord = item[1].coord;
    if (fromCoord && toCoord && (ifMarkLineHasOnlyDim(1, fromCoord, toCoord, coordSys) || ifMarkLineHasOnlyDim(0, fromCoord, toCoord, coordSys))) {
      return true;
    }
  }
  return dataFilter(coordSys, item[0]) && dataFilter(coordSys, item[1]);
}
function updateSingleMarkerEndLayout(data, idx, isFrom, seriesModel, api) {
  var coordSys = seriesModel.coordinateSystem;
  var itemModel = data.getItemModel(idx);
  var point;
  var xPx = parsePercent(itemModel.get("x"), api.getWidth());
  var yPx = parsePercent(itemModel.get("y"), api.getHeight());
  if (!isNaN(xPx) && !isNaN(yPx)) {
    point = [xPx, yPx];
  } else {
    if (seriesModel.getMarkerPosition) {
      point = seriesModel.getMarkerPosition(data.getValues(data.dimensions, idx));
    } else {
      var dims = coordSys.dimensions;
      var x = data.get(dims[0], idx);
      var y = data.get(dims[1], idx);
      point = coordSys.dataToPoint([x, y]);
    }
    if (isCoordinateSystemType(coordSys, "cartesian2d")) {
      var xAxis = coordSys.getAxis("x");
      var yAxis = coordSys.getAxis("y");
      var dims = coordSys.dimensions;
      if (isInifinity$1(data.get(dims[0], idx))) {
        point[0] = xAxis.toGlobalCoord(xAxis.getExtent()[isFrom ? 0 : 1]);
      } else if (isInifinity$1(data.get(dims[1], idx))) {
        point[1] = yAxis.toGlobalCoord(yAxis.getExtent()[isFrom ? 0 : 1]);
      }
    }
    if (!isNaN(xPx)) {
      point[0] = xPx;
    }
    if (!isNaN(yPx)) {
      point[1] = yPx;
    }
  }
  data.setItemLayout(idx, point);
}
var MarkLineView = function(_super) {
  __extends(MarkLineView2, _super);
  function MarkLineView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MarkLineView2.type;
    return _this;
  }
  MarkLineView2.prototype.updateTransform = function(markLineModel, ecModel, api) {
    ecModel.eachSeries(function(seriesModel) {
      var mlModel = MarkerModel$1.getMarkerModelFromSeries(seriesModel, "markLine");
      if (mlModel) {
        var mlData_1 = mlModel.getData();
        var fromData_1 = inner$1(mlModel).from;
        var toData_1 = inner$1(mlModel).to;
        fromData_1.each(function(idx) {
          updateSingleMarkerEndLayout(fromData_1, idx, true, seriesModel, api);
          updateSingleMarkerEndLayout(toData_1, idx, false, seriesModel, api);
        });
        mlData_1.each(function(idx) {
          mlData_1.setItemLayout(idx, [fromData_1.getItemLayout(idx), toData_1.getItemLayout(idx)]);
        });
        this.markerGroupMap.get(seriesModel.id).updateLayout();
      }
    }, this);
  };
  MarkLineView2.prototype.renderSeries = function(seriesModel, mlModel, ecModel, api) {
    var coordSys = seriesModel.coordinateSystem;
    var seriesId = seriesModel.id;
    var seriesData = seriesModel.getData();
    var lineDrawMap = this.markerGroupMap;
    var lineDraw = lineDrawMap.get(seriesId) || lineDrawMap.set(seriesId, new LineDraw$1());
    this.group.add(lineDraw.group);
    var mlData = createList$1(coordSys, seriesModel, mlModel);
    var fromData = mlData.from;
    var toData = mlData.to;
    var lineData = mlData.line;
    inner$1(mlModel).from = fromData;
    inner$1(mlModel).to = toData;
    mlModel.setData(lineData);
    var symbolType = mlModel.get("symbol");
    var symbolSize = mlModel.get("symbolSize");
    var symbolRotate = mlModel.get("symbolRotate");
    var symbolOffset = mlModel.get("symbolOffset");
    if (!isArray(symbolType)) {
      symbolType = [symbolType, symbolType];
    }
    if (!isArray(symbolSize)) {
      symbolSize = [symbolSize, symbolSize];
    }
    if (!isArray(symbolRotate)) {
      symbolRotate = [symbolRotate, symbolRotate];
    }
    if (!isArray(symbolOffset)) {
      symbolOffset = [symbolOffset, symbolOffset];
    }
    mlData.from.each(function(idx) {
      updateDataVisualAndLayout(fromData, idx, true);
      updateDataVisualAndLayout(toData, idx, false);
    });
    lineData.each(function(idx) {
      var lineStyle = lineData.getItemModel(idx).getModel("lineStyle").getLineStyle();
      lineData.setItemLayout(idx, [fromData.getItemLayout(idx), toData.getItemLayout(idx)]);
      if (lineStyle.stroke == null) {
        lineStyle.stroke = fromData.getItemVisual(idx, "style").fill;
      }
      lineData.setItemVisual(idx, {
        fromSymbolKeepAspect: fromData.getItemVisual(idx, "symbolKeepAspect"),
        fromSymbolOffset: fromData.getItemVisual(idx, "symbolOffset"),
        fromSymbolRotate: fromData.getItemVisual(idx, "symbolRotate"),
        fromSymbolSize: fromData.getItemVisual(idx, "symbolSize"),
        fromSymbol: fromData.getItemVisual(idx, "symbol"),
        toSymbolKeepAspect: toData.getItemVisual(idx, "symbolKeepAspect"),
        toSymbolOffset: toData.getItemVisual(idx, "symbolOffset"),
        toSymbolRotate: toData.getItemVisual(idx, "symbolRotate"),
        toSymbolSize: toData.getItemVisual(idx, "symbolSize"),
        toSymbol: toData.getItemVisual(idx, "symbol"),
        style: lineStyle
      });
    });
    lineDraw.updateData(lineData);
    mlData.line.eachItemGraphicEl(function(el, idx) {
      el.traverse(function(child) {
        getECData(child).dataModel = mlModel;
      });
    });
    function updateDataVisualAndLayout(data, idx, isFrom) {
      var itemModel = data.getItemModel(idx);
      updateSingleMarkerEndLayout(data, idx, isFrom, seriesModel, api);
      var style = itemModel.getModel("itemStyle").getItemStyle();
      if (style.fill == null) {
        style.fill = getVisualFromData(seriesData, "color");
      }
      data.setItemVisual(idx, {
        symbolKeepAspect: itemModel.get("symbolKeepAspect"),
        symbolOffset: retrieve2(itemModel.get("symbolOffset", true), symbolOffset[isFrom ? 0 : 1]),
        symbolRotate: retrieve2(itemModel.get("symbolRotate", true), symbolRotate[isFrom ? 0 : 1]),
        symbolSize: retrieve2(itemModel.get("symbolSize"), symbolSize[isFrom ? 0 : 1]),
        symbol: retrieve2(itemModel.get("symbol", true), symbolType[isFrom ? 0 : 1]),
        style
      });
    }
    this.markKeep(lineDraw);
    lineDraw.group.silent = mlModel.get("silent") || seriesModel.get("silent");
  };
  MarkLineView2.type = "markLine";
  return MarkLineView2;
}(MarkerView$1);
function createList$1(coordSys, seriesModel, mlModel) {
  var coordDimsInfos;
  if (coordSys) {
    coordDimsInfos = map(coordSys && coordSys.dimensions, function(coordDim) {
      var info = seriesModel.getData().getDimensionInfo(seriesModel.getData().mapDimension(coordDim)) || {};
      return extend(extend({}, info), {
        name: coordDim,
        ordinalMeta: null
      });
    });
  } else {
    coordDimsInfos = [{
      name: "value",
      type: "float"
    }];
  }
  var fromData = new SeriesData(coordDimsInfos, mlModel);
  var toData = new SeriesData(coordDimsInfos, mlModel);
  var lineData = new SeriesData([], mlModel);
  var optData = map(mlModel.get("data"), curry(markLineTransform, seriesModel, coordSys, mlModel));
  if (coordSys) {
    optData = filter(optData, curry(markLineFilter, coordSys));
  }
  var dimValueGetter = createMarkerDimValueGetter(!!coordSys, coordDimsInfos);
  fromData.initData(map(optData, function(item) {
    return item[0];
  }), null, dimValueGetter);
  toData.initData(map(optData, function(item) {
    return item[1];
  }), null, dimValueGetter);
  lineData.initData(map(optData, function(item) {
    return item[2];
  }));
  lineData.hasItemOption = true;
  return {
    from: fromData,
    to: toData,
    line: lineData
  };
}
var MarkLineView$1 = MarkLineView;
function install$4(registers) {
  registers.registerComponentModel(MarkLineModel$1);
  registers.registerComponentView(MarkLineView$1);
  registers.registerPreprocessor(function(opt) {
    if (checkMarkerInSeries(opt.series, "markLine")) {
      opt.markLine = opt.markLine || {};
    }
  });
}
var MarkAreaModel = function(_super) {
  __extends(MarkAreaModel2, _super);
  function MarkAreaModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MarkAreaModel2.type;
    return _this;
  }
  MarkAreaModel2.prototype.createMarkerModelFromSeries = function(markerOpt, masterMarkerModel, ecModel) {
    return new MarkAreaModel2(markerOpt, masterMarkerModel, ecModel);
  };
  MarkAreaModel2.type = "markArea";
  MarkAreaModel2.defaultOption = {
    zlevel: 0,
    z: 1,
    tooltip: {
      trigger: "item"
    },
    animation: false,
    label: {
      show: true,
      position: "top"
    },
    itemStyle: {
      borderWidth: 0
    },
    emphasis: {
      label: {
        show: true,
        position: "top"
      }
    }
  };
  return MarkAreaModel2;
}(MarkerModel$1);
var MarkAreaModel$1 = MarkAreaModel;
var inner = makeInner();
var markAreaTransform = function(seriesModel, coordSys, maModel, item) {
  var lt = dataTransform(seriesModel, item[0]);
  var rb = dataTransform(seriesModel, item[1]);
  var ltCoord = lt.coord;
  var rbCoord = rb.coord;
  ltCoord[0] = retrieve(ltCoord[0], -Infinity);
  ltCoord[1] = retrieve(ltCoord[1], -Infinity);
  rbCoord[0] = retrieve(rbCoord[0], Infinity);
  rbCoord[1] = retrieve(rbCoord[1], Infinity);
  var result = mergeAll([{}, lt, rb]);
  result.coord = [lt.coord, rb.coord];
  result.x0 = lt.x;
  result.y0 = lt.y;
  result.x1 = rb.x;
  result.y1 = rb.y;
  return result;
};
function isInifinity(val) {
  return !isNaN(val) && !isFinite(val);
}
function ifMarkAreaHasOnlyDim(dimIndex, fromCoord, toCoord, coordSys) {
  var otherDimIndex = 1 - dimIndex;
  return isInifinity(fromCoord[otherDimIndex]) && isInifinity(toCoord[otherDimIndex]);
}
function markAreaFilter(coordSys, item) {
  var fromCoord = item.coord[0];
  var toCoord = item.coord[1];
  if (isCoordinateSystemType(coordSys, "cartesian2d")) {
    if (fromCoord && toCoord && (ifMarkAreaHasOnlyDim(1, fromCoord, toCoord) || ifMarkAreaHasOnlyDim(0, fromCoord, toCoord))) {
      return true;
    }
  }
  return dataFilter(coordSys, {
    coord: fromCoord,
    x: item.x0,
    y: item.y0
  }) || dataFilter(coordSys, {
    coord: toCoord,
    x: item.x1,
    y: item.y1
  });
}
function getSingleMarkerEndPoint(data, idx, dims, seriesModel, api) {
  var coordSys = seriesModel.coordinateSystem;
  var itemModel = data.getItemModel(idx);
  var point;
  var xPx = parsePercent(itemModel.get(dims[0]), api.getWidth());
  var yPx = parsePercent(itemModel.get(dims[1]), api.getHeight());
  if (!isNaN(xPx) && !isNaN(yPx)) {
    point = [xPx, yPx];
  } else {
    if (seriesModel.getMarkerPosition) {
      point = seriesModel.getMarkerPosition(data.getValues(dims, idx));
    } else {
      var x = data.get(dims[0], idx);
      var y = data.get(dims[1], idx);
      var pt = [x, y];
      coordSys.clampData && coordSys.clampData(pt, pt);
      point = coordSys.dataToPoint(pt, true);
    }
    if (isCoordinateSystemType(coordSys, "cartesian2d")) {
      var xAxis = coordSys.getAxis("x");
      var yAxis = coordSys.getAxis("y");
      var x = data.get(dims[0], idx);
      var y = data.get(dims[1], idx);
      if (isInifinity(x)) {
        point[0] = xAxis.toGlobalCoord(xAxis.getExtent()[dims[0] === "x0" ? 0 : 1]);
      } else if (isInifinity(y)) {
        point[1] = yAxis.toGlobalCoord(yAxis.getExtent()[dims[1] === "y0" ? 0 : 1]);
      }
    }
    if (!isNaN(xPx)) {
      point[0] = xPx;
    }
    if (!isNaN(yPx)) {
      point[1] = yPx;
    }
  }
  return point;
}
var dimPermutations = [["x0", "y0"], ["x1", "y0"], ["x1", "y1"], ["x0", "y1"]];
var MarkAreaView = function(_super) {
  __extends(MarkAreaView2, _super);
  function MarkAreaView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MarkAreaView2.type;
    return _this;
  }
  MarkAreaView2.prototype.updateTransform = function(markAreaModel, ecModel, api) {
    ecModel.eachSeries(function(seriesModel) {
      var maModel = MarkerModel$1.getMarkerModelFromSeries(seriesModel, "markArea");
      if (maModel) {
        var areaData_1 = maModel.getData();
        areaData_1.each(function(idx) {
          var points = map(dimPermutations, function(dim) {
            return getSingleMarkerEndPoint(areaData_1, idx, dim, seriesModel, api);
          });
          areaData_1.setItemLayout(idx, points);
          var el = areaData_1.getItemGraphicEl(idx);
          el.setShape("points", points);
        });
      }
    }, this);
  };
  MarkAreaView2.prototype.renderSeries = function(seriesModel, maModel, ecModel, api) {
    var coordSys = seriesModel.coordinateSystem;
    var seriesId = seriesModel.id;
    var seriesData = seriesModel.getData();
    var areaGroupMap = this.markerGroupMap;
    var polygonGroup = areaGroupMap.get(seriesId) || areaGroupMap.set(seriesId, {
      group: new Group$1()
    });
    this.group.add(polygonGroup.group);
    this.markKeep(polygonGroup);
    var areaData = createList(coordSys, seriesModel, maModel);
    maModel.setData(areaData);
    areaData.each(function(idx) {
      var points = map(dimPermutations, function(dim) {
        return getSingleMarkerEndPoint(areaData, idx, dim, seriesModel, api);
      });
      var xAxisScale = coordSys.getAxis("x").scale;
      var yAxisScale = coordSys.getAxis("y").scale;
      var xAxisExtent = xAxisScale.getExtent();
      var yAxisExtent = yAxisScale.getExtent();
      var xPointExtent = [xAxisScale.parse(areaData.get("x0", idx)), xAxisScale.parse(areaData.get("x1", idx))];
      var yPointExtent = [yAxisScale.parse(areaData.get("y0", idx)), yAxisScale.parse(areaData.get("y1", idx))];
      asc(xPointExtent);
      asc(yPointExtent);
      var overlapped = !(xAxisExtent[0] > xPointExtent[1] || xAxisExtent[1] < xPointExtent[0] || yAxisExtent[0] > yPointExtent[1] || yAxisExtent[1] < yPointExtent[0]);
      var allClipped = !overlapped;
      areaData.setItemLayout(idx, {
        points,
        allClipped
      });
      var style = areaData.getItemModel(idx).getModel("itemStyle").getItemStyle();
      var color$1 = getVisualFromData(seriesData, "color");
      if (!style.fill) {
        style.fill = color$1;
        if (typeof style.fill === "string") {
          style.fill = modifyAlpha(style.fill, 0.4);
        }
      }
      if (!style.stroke) {
        style.stroke = color$1;
      }
      areaData.setItemVisual(idx, "style", style);
    });
    areaData.diff(inner(polygonGroup).data).add(function(idx) {
      var layout2 = areaData.getItemLayout(idx);
      if (!layout2.allClipped) {
        var polygon = new Polygon({
          shape: {
            points: layout2.points
          }
        });
        areaData.setItemGraphicEl(idx, polygon);
        polygonGroup.group.add(polygon);
      }
    }).update(function(newIdx, oldIdx) {
      var polygon = inner(polygonGroup).data.getItemGraphicEl(oldIdx);
      var layout2 = areaData.getItemLayout(newIdx);
      if (!layout2.allClipped) {
        if (polygon) {
          updateProps(polygon, {
            shape: {
              points: layout2.points
            }
          }, maModel, newIdx);
        } else {
          polygon = new Polygon({
            shape: {
              points: layout2.points
            }
          });
        }
        areaData.setItemGraphicEl(newIdx, polygon);
        polygonGroup.group.add(polygon);
      } else if (polygon) {
        polygonGroup.group.remove(polygon);
      }
    }).remove(function(idx) {
      var polygon = inner(polygonGroup).data.getItemGraphicEl(idx);
      polygonGroup.group.remove(polygon);
    }).execute();
    areaData.eachItemGraphicEl(function(polygon, idx) {
      var itemModel = areaData.getItemModel(idx);
      var style = areaData.getItemVisual(idx, "style");
      polygon.useStyle(areaData.getItemVisual(idx, "style"));
      setLabelStyle(polygon, getLabelStatesModels(itemModel), {
        labelFetcher: maModel,
        labelDataIndex: idx,
        defaultText: areaData.getName(idx) || "",
        inheritColor: typeof style.fill === "string" ? modifyAlpha(style.fill, 1) : "#000"
      });
      setStatesStylesFromModel(polygon, itemModel);
      enableHoverEmphasis(polygon);
      getECData(polygon).dataModel = maModel;
    });
    inner(polygonGroup).data = areaData;
    polygonGroup.group.silent = maModel.get("silent") || seriesModel.get("silent");
  };
  MarkAreaView2.type = "markArea";
  return MarkAreaView2;
}(MarkerView$1);
function createList(coordSys, seriesModel, maModel) {
  var areaData;
  var dataDims;
  var dims = ["x0", "y0", "x1", "y1"];
  if (coordSys) {
    var coordDimsInfos_1 = map(coordSys && coordSys.dimensions, function(coordDim) {
      var data = seriesModel.getData();
      var info = data.getDimensionInfo(data.mapDimension(coordDim)) || {};
      return extend(extend({}, info), {
        name: coordDim,
        ordinalMeta: null
      });
    });
    dataDims = map(dims, function(dim, idx) {
      return {
        name: dim,
        type: coordDimsInfos_1[idx % 2].type
      };
    });
    areaData = new SeriesData(dataDims, maModel);
  } else {
    dataDims = [{
      name: "value",
      type: "float"
    }];
    areaData = new SeriesData(dataDims, maModel);
  }
  var optData = map(maModel.get("data"), curry(markAreaTransform, seriesModel, coordSys, maModel));
  if (coordSys) {
    optData = filter(optData, curry(markAreaFilter, coordSys));
  }
  var dimValueGetter = coordSys ? function(item, dimName, dataIndex, dimIndex) {
    var rawVal = item.coord[Math.floor(dimIndex / 2)][dimIndex % 2];
    return parseDataValue(rawVal, dataDims[dimIndex]);
  } : function(item, dimName, dataIndex, dimIndex) {
    return parseDataValue(item.value, dataDims[dimIndex]);
  };
  areaData.initData(optData, null, dimValueGetter);
  areaData.hasItemOption = true;
  return areaData;
}
var MarkAreaView$1 = MarkAreaView;
function install$3(registers) {
  registers.registerComponentModel(MarkAreaModel$1);
  registers.registerComponentView(MarkAreaView$1);
  registers.registerPreprocessor(function(opt) {
    if (checkMarkerInSeries(opt.series, "markArea")) {
      opt.markArea = opt.markArea || {};
    }
  });
}
var RELATIONAL_EXPRESSION_OP_ALIAS_MAP = {
  value: "eq",
  "<": "lt",
  "<=": "lte",
  ">": "gt",
  ">=": "gte",
  "=": "eq",
  "!=": "ne",
  "<>": "ne"
};
var RegExpEvaluator = function() {
  function RegExpEvaluator2(rVal) {
    var condValue = this._condVal = isString(rVal) ? new RegExp(rVal) : isRegExp(rVal) ? rVal : null;
    if (condValue == null) {
      var errMsg = "";
      throwError(errMsg);
    }
  }
  RegExpEvaluator2.prototype.evaluate = function(lVal) {
    var type = typeof lVal;
    return type === "string" ? this._condVal.test(lVal) : type === "number" ? this._condVal.test(lVal + "") : false;
  };
  return RegExpEvaluator2;
}();
var ConstConditionInternal = function() {
  function ConstConditionInternal2() {
  }
  ConstConditionInternal2.prototype.evaluate = function() {
    return this.value;
  };
  return ConstConditionInternal2;
}();
var AndConditionInternal = function() {
  function AndConditionInternal2() {
  }
  AndConditionInternal2.prototype.evaluate = function() {
    var children = this.children;
    for (var i = 0; i < children.length; i++) {
      if (!children[i].evaluate()) {
        return false;
      }
    }
    return true;
  };
  return AndConditionInternal2;
}();
var OrConditionInternal = function() {
  function OrConditionInternal2() {
  }
  OrConditionInternal2.prototype.evaluate = function() {
    var children = this.children;
    for (var i = 0; i < children.length; i++) {
      if (children[i].evaluate()) {
        return true;
      }
    }
    return false;
  };
  return OrConditionInternal2;
}();
var NotConditionInternal = function() {
  function NotConditionInternal2() {
  }
  NotConditionInternal2.prototype.evaluate = function() {
    return !this.child.evaluate();
  };
  return NotConditionInternal2;
}();
var RelationalConditionInternal = function() {
  function RelationalConditionInternal2() {
  }
  RelationalConditionInternal2.prototype.evaluate = function() {
    var needParse = !!this.valueParser;
    var getValue = this.getValue;
    var tarValRaw = getValue(this.valueGetterParam);
    var tarValParsed = needParse ? this.valueParser(tarValRaw) : null;
    for (var i = 0; i < this.subCondList.length; i++) {
      if (!this.subCondList[i].evaluate(needParse ? tarValParsed : tarValRaw)) {
        return false;
      }
    }
    return true;
  };
  return RelationalConditionInternal2;
}();
function parseOption(exprOption, getters) {
  if (exprOption === true || exprOption === false) {
    var cond = new ConstConditionInternal();
    cond.value = exprOption;
    return cond;
  }
  var errMsg = "";
  if (!isObjectNotArray(exprOption)) {
    throwError(errMsg);
  }
  if (exprOption.and) {
    return parseAndOrOption("and", exprOption, getters);
  } else if (exprOption.or) {
    return parseAndOrOption("or", exprOption, getters);
  } else if (exprOption.not) {
    return parseNotOption(exprOption, getters);
  }
  return parseRelationalOption(exprOption, getters);
}
function parseAndOrOption(op, exprOption, getters) {
  var subOptionArr = exprOption[op];
  var errMsg = "";
  if (!isArray(subOptionArr)) {
    throwError(errMsg);
  }
  if (!subOptionArr.length) {
    throwError(errMsg);
  }
  var cond = op === "and" ? new AndConditionInternal() : new OrConditionInternal();
  cond.children = map(subOptionArr, function(subOption) {
    return parseOption(subOption, getters);
  });
  if (!cond.children.length) {
    throwError(errMsg);
  }
  return cond;
}
function parseNotOption(exprOption, getters) {
  var subOption = exprOption.not;
  var errMsg = "";
  if (!isObjectNotArray(subOption)) {
    throwError(errMsg);
  }
  var cond = new NotConditionInternal();
  cond.child = parseOption(subOption, getters);
  if (!cond.child) {
    throwError(errMsg);
  }
  return cond;
}
function parseRelationalOption(exprOption, getters) {
  var errMsg = "";
  var valueGetterParam = getters.prepareGetValue(exprOption);
  var subCondList = [];
  var exprKeys = keys(exprOption);
  var parserName = exprOption.parser;
  var valueParser = parserName ? getRawValueParser(parserName) : null;
  for (var i = 0; i < exprKeys.length; i++) {
    var keyRaw = exprKeys[i];
    if (keyRaw === "parser" || getters.valueGetterAttrMap.get(keyRaw)) {
      continue;
    }
    var op = hasOwn(RELATIONAL_EXPRESSION_OP_ALIAS_MAP, keyRaw) ? RELATIONAL_EXPRESSION_OP_ALIAS_MAP[keyRaw] : keyRaw;
    var condValueRaw = exprOption[keyRaw];
    var condValueParsed = valueParser ? valueParser(condValueRaw) : condValueRaw;
    var evaluator = createFilterComparator(op, condValueParsed) || op === "reg" && new RegExpEvaluator(condValueParsed);
    if (!evaluator) {
      throwError(errMsg);
    }
    subCondList.push(evaluator);
  }
  if (!subCondList.length) {
    throwError(errMsg);
  }
  var cond = new RelationalConditionInternal();
  cond.valueGetterParam = valueGetterParam;
  cond.valueParser = valueParser;
  cond.getValue = getters.getValue;
  cond.subCondList = subCondList;
  return cond;
}
function isObjectNotArray(val) {
  return isObject(val) && !isArrayLike(val);
}
var ConditionalExpressionParsed = function() {
  function ConditionalExpressionParsed2(exprOption, getters) {
    this._cond = parseOption(exprOption, getters);
  }
  ConditionalExpressionParsed2.prototype.evaluate = function() {
    return this._cond.evaluate();
  };
  return ConditionalExpressionParsed2;
}();
function parseConditionalExpression(exprOption, getters) {
  return new ConditionalExpressionParsed(exprOption, getters);
}
var filterTransform = {
  type: "echarts:filter",
  transform: function(params) {
    var upstream = params.upstream;
    var rawItem;
    var condition = parseConditionalExpression(params.config, {
      valueGetterAttrMap: createHashMap({
        dimension: true
      }),
      prepareGetValue: function(exprOption) {
        var errMsg = "";
        var dimLoose = exprOption.dimension;
        if (!hasOwn(exprOption, "dimension")) {
          throwError(errMsg);
        }
        var dimInfo = upstream.getDimensionInfo(dimLoose);
        if (!dimInfo) {
          throwError(errMsg);
        }
        return {
          dimIdx: dimInfo.index
        };
      },
      getValue: function(param) {
        return upstream.retrieveValueFromItem(rawItem, param.dimIdx);
      }
    });
    var resultData = [];
    for (var i = 0, len2 = upstream.count(); i < len2; i++) {
      rawItem = upstream.getRawDataItem(i);
      if (condition.evaluate()) {
        resultData.push(rawItem);
      }
    }
    return {
      data: resultData
    };
  }
};
var sortTransform = {
  type: "echarts:sort",
  transform: function(params) {
    var upstream = params.upstream;
    var config = params.config;
    var errMsg = "";
    var orderExprList = normalizeToArray(config);
    if (!orderExprList.length) {
      throwError(errMsg);
    }
    var orderDefList = [];
    each$2(orderExprList, function(orderExpr) {
      var dimLoose = orderExpr.dimension;
      var order = orderExpr.order;
      var parserName = orderExpr.parser;
      var incomparable = orderExpr.incomparable;
      if (dimLoose == null) {
        throwError(errMsg);
      }
      if (order !== "asc" && order !== "desc") {
        throwError(errMsg);
      }
      if (incomparable && incomparable !== "min" && incomparable !== "max") {
        var errMsg_1 = "";
        throwError(errMsg_1);
      }
      if (order !== "asc" && order !== "desc") {
        var errMsg_2 = "";
        throwError(errMsg_2);
      }
      var dimInfo = upstream.getDimensionInfo(dimLoose);
      if (!dimInfo) {
        throwError(errMsg);
      }
      var parser = parserName ? getRawValueParser(parserName) : null;
      if (parserName && !parser) {
        throwError(errMsg);
      }
      orderDefList.push({
        dimIdx: dimInfo.index,
        parser,
        comparator: new SortOrderComparator(order, incomparable)
      });
    });
    var sourceFormat = upstream.sourceFormat;
    if (sourceFormat !== SOURCE_FORMAT_ARRAY_ROWS && sourceFormat !== SOURCE_FORMAT_OBJECT_ROWS) {
      throwError(errMsg);
    }
    var resultData = [];
    for (var i = 0, len2 = upstream.count(); i < len2; i++) {
      resultData.push(upstream.getRawDataItem(i));
    }
    resultData.sort(function(item0, item1) {
      for (var i2 = 0; i2 < orderDefList.length; i2++) {
        var orderDef = orderDefList[i2];
        var val0 = upstream.retrieveValueFromItem(item0, orderDef.dimIdx);
        var val1 = upstream.retrieveValueFromItem(item1, orderDef.dimIdx);
        if (orderDef.parser) {
          val0 = orderDef.parser(val0);
          val1 = orderDef.parser(val1);
        }
        var result = orderDef.comparator.evaluate(val0, val1);
        if (result !== 0) {
          return result;
        }
      }
      return 0;
    });
    return {
      data: resultData
    };
  }
};
function install$2(registers) {
  registers.registerTransform(filterTransform);
  registers.registerTransform(sortTransform);
}
var DatasetModel = function(_super) {
  __extends(DatasetModel2, _super);
  function DatasetModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = "dataset";
    return _this;
  }
  DatasetModel2.prototype.init = function(option, parentModel, ecModel) {
    _super.prototype.init.call(this, option, parentModel, ecModel);
    this._sourceManager = new SourceManager(this);
    disableTransformOptionMerge(this);
  };
  DatasetModel2.prototype.mergeOption = function(newOption, ecModel) {
    _super.prototype.mergeOption.call(this, newOption, ecModel);
    disableTransformOptionMerge(this);
  };
  DatasetModel2.prototype.optionUpdated = function() {
    this._sourceManager.dirty();
  };
  DatasetModel2.prototype.getSourceManager = function() {
    return this._sourceManager;
  };
  DatasetModel2.type = "dataset";
  DatasetModel2.defaultOption = {
    seriesLayoutBy: SERIES_LAYOUT_BY_COLUMN
  };
  return DatasetModel2;
}(ComponentModel);
var DatasetView = function(_super) {
  __extends(DatasetView2, _super);
  function DatasetView2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = "dataset";
    return _this;
  }
  DatasetView2.type = "dataset";
  return DatasetView2;
}(ComponentView);
function install$1(registers) {
  registers.registerComponentModel(DatasetModel);
  registers.registerComponentView(DatasetView);
}
function returnFalse() {
  return false;
}
function createDom(id, painter, dpr) {
  var newDom = createCanvas();
  var width = painter.getWidth();
  var height = painter.getHeight();
  var newDomStyle = newDom.style;
  if (newDomStyle) {
    newDomStyle.position = "absolute";
    newDomStyle.left = "0";
    newDomStyle.top = "0";
    newDomStyle.width = width + "px";
    newDomStyle.height = height + "px";
    newDom.setAttribute("data-zr-dom-id", id);
  }
  newDom.width = width * dpr;
  newDom.height = height * dpr;
  return newDom;
}
var Layer = function(_super) {
  __extends(Layer2, _super);
  function Layer2(id, painter, dpr) {
    var _this = _super.call(this) || this;
    _this.motionBlur = false;
    _this.lastFrameAlpha = 0.7;
    _this.dpr = 1;
    _this.virtual = false;
    _this.config = {};
    _this.incremental = false;
    _this.zlevel = 0;
    _this.maxRepaintRectCount = 5;
    _this.__dirty = true;
    _this.__firstTimePaint = true;
    _this.__used = false;
    _this.__drawIndex = 0;
    _this.__startIndex = 0;
    _this.__endIndex = 0;
    _this.__prevStartIndex = null;
    _this.__prevEndIndex = null;
    var dom;
    dpr = dpr || devicePixelRatio;
    if (typeof id === "string") {
      dom = createDom(id, painter, dpr);
    } else if (isObject(id)) {
      dom = id;
      id = dom.id;
    }
    _this.id = id;
    _this.dom = dom;
    var domStyle = dom.style;
    if (domStyle) {
      dom.onselectstart = returnFalse;
      domStyle.webkitUserSelect = "none";
      domStyle.userSelect = "none";
      domStyle.webkitTapHighlightColor = "rgba(0,0,0,0)";
      domStyle["-webkit-touch-callout"] = "none";
      domStyle.padding = "0";
      domStyle.margin = "0";
      domStyle.borderWidth = "0";
    }
    _this.domBack = null;
    _this.ctxBack = null;
    _this.painter = painter;
    _this.config = null;
    _this.dpr = dpr;
    return _this;
  }
  Layer2.prototype.getElementCount = function() {
    return this.__endIndex - this.__startIndex;
  };
  Layer2.prototype.afterBrush = function() {
    this.__prevStartIndex = this.__startIndex;
    this.__prevEndIndex = this.__endIndex;
  };
  Layer2.prototype.initContext = function() {
    this.ctx = this.dom.getContext("2d");
    this.ctx.dpr = this.dpr;
  };
  Layer2.prototype.setUnpainted = function() {
    this.__firstTimePaint = true;
  };
  Layer2.prototype.createBackBuffer = function() {
    var dpr = this.dpr;
    this.domBack = createDom("back-" + this.id, this.painter, dpr);
    this.ctxBack = this.domBack.getContext("2d");
    if (dpr !== 1) {
      this.ctxBack.scale(dpr, dpr);
    }
  };
  Layer2.prototype.createRepaintRects = function(displayList, prevList, viewWidth, viewHeight) {
    if (this.__firstTimePaint) {
      this.__firstTimePaint = false;
      return null;
    }
    var mergedRepaintRects = [];
    var maxRepaintRectCount = this.maxRepaintRectCount;
    var full = false;
    var pendingRect = new BoundingRect(0, 0, 0, 0);
    function addRectToMergePool(rect) {
      if (!rect.isFinite() || rect.isZero()) {
        return;
      }
      if (mergedRepaintRects.length === 0) {
        var boundingRect = new BoundingRect(0, 0, 0, 0);
        boundingRect.copy(rect);
        mergedRepaintRects.push(boundingRect);
      } else {
        var isMerged = false;
        var minDeltaArea = Infinity;
        var bestRectToMergeIdx = 0;
        for (var i2 = 0; i2 < mergedRepaintRects.length; ++i2) {
          var mergedRect = mergedRepaintRects[i2];
          if (mergedRect.intersect(rect)) {
            var pendingRect_1 = new BoundingRect(0, 0, 0, 0);
            pendingRect_1.copy(mergedRect);
            pendingRect_1.union(rect);
            mergedRepaintRects[i2] = pendingRect_1;
            isMerged = true;
            break;
          } else if (full) {
            pendingRect.copy(rect);
            pendingRect.union(mergedRect);
            var aArea = rect.width * rect.height;
            var bArea = mergedRect.width * mergedRect.height;
            var pendingArea = pendingRect.width * pendingRect.height;
            var deltaArea = pendingArea - aArea - bArea;
            if (deltaArea < minDeltaArea) {
              minDeltaArea = deltaArea;
              bestRectToMergeIdx = i2;
            }
          }
        }
        if (full) {
          mergedRepaintRects[bestRectToMergeIdx].union(rect);
          isMerged = true;
        }
        if (!isMerged) {
          var boundingRect = new BoundingRect(0, 0, 0, 0);
          boundingRect.copy(rect);
          mergedRepaintRects.push(boundingRect);
        }
        if (!full) {
          full = mergedRepaintRects.length >= maxRepaintRectCount;
        }
      }
    }
    for (var i = this.__startIndex; i < this.__endIndex; ++i) {
      var el = displayList[i];
      if (el) {
        var shouldPaint = el.shouldBePainted(viewWidth, viewHeight, true, true);
        var prevRect = el.__isRendered && (el.__dirty & REDRAW_BIT || !shouldPaint) ? el.getPrevPaintRect() : null;
        if (prevRect) {
          addRectToMergePool(prevRect);
        }
        var curRect = shouldPaint && (el.__dirty & REDRAW_BIT || !el.__isRendered) ? el.getPaintRect() : null;
        if (curRect) {
          addRectToMergePool(curRect);
        }
      }
    }
    for (var i = this.__prevStartIndex; i < this.__prevEndIndex; ++i) {
      var el = prevList[i];
      var shouldPaint = el.shouldBePainted(viewWidth, viewHeight, true, true);
      if (el && (!shouldPaint || !el.__zr) && el.__isRendered) {
        var prevRect = el.getPrevPaintRect();
        if (prevRect) {
          addRectToMergePool(prevRect);
        }
      }
    }
    var hasIntersections;
    do {
      hasIntersections = false;
      for (var i = 0; i < mergedRepaintRects.length; ) {
        if (mergedRepaintRects[i].isZero()) {
          mergedRepaintRects.splice(i, 1);
          continue;
        }
        for (var j = i + 1; j < mergedRepaintRects.length; ) {
          if (mergedRepaintRects[i].intersect(mergedRepaintRects[j])) {
            hasIntersections = true;
            mergedRepaintRects[i].union(mergedRepaintRects[j]);
            mergedRepaintRects.splice(j, 1);
          } else {
            j++;
          }
        }
        i++;
      }
    } while (hasIntersections);
    this._paintRects = mergedRepaintRects;
    return mergedRepaintRects;
  };
  Layer2.prototype.debugGetPaintRects = function() {
    return (this._paintRects || []).slice();
  };
  Layer2.prototype.resize = function(width, height) {
    var dpr = this.dpr;
    var dom = this.dom;
    var domStyle = dom.style;
    var domBack = this.domBack;
    if (domStyle) {
      domStyle.width = width + "px";
      domStyle.height = height + "px";
    }
    dom.width = width * dpr;
    dom.height = height * dpr;
    if (domBack) {
      domBack.width = width * dpr;
      domBack.height = height * dpr;
      if (dpr !== 1) {
        this.ctxBack.scale(dpr, dpr);
      }
    }
  };
  Layer2.prototype.clear = function(clearAll, clearColor, repaintRects) {
    var dom = this.dom;
    var ctx = this.ctx;
    var width = dom.width;
    var height = dom.height;
    clearColor = clearColor || this.clearColor;
    var haveMotionBLur = this.motionBlur && !clearAll;
    var lastFrameAlpha = this.lastFrameAlpha;
    var dpr = this.dpr;
    var self = this;
    if (haveMotionBLur) {
      if (!this.domBack) {
        this.createBackBuffer();
      }
      this.ctxBack.globalCompositeOperation = "copy";
      this.ctxBack.drawImage(dom, 0, 0, width / dpr, height / dpr);
    }
    var domBack = this.domBack;
    function doClear(x, y, width2, height2) {
      ctx.clearRect(x, y, width2, height2);
      if (clearColor && clearColor !== "transparent") {
        var clearColorGradientOrPattern = void 0;
        if (isGradientObject(clearColor)) {
          clearColorGradientOrPattern = clearColor.__canvasGradient || getCanvasGradient(ctx, clearColor, {
            x: 0,
            y: 0,
            width: width2,
            height: height2
          });
          clearColor.__canvasGradient = clearColorGradientOrPattern;
        } else if (isImagePatternObject(clearColor)) {
          clearColorGradientOrPattern = createCanvasPattern(ctx, clearColor, {
            dirty: function() {
              self.setUnpainted();
              self.__painter.refresh();
            }
          });
        }
        ctx.save();
        ctx.fillStyle = clearColorGradientOrPattern || clearColor;
        ctx.fillRect(x, y, width2, height2);
        ctx.restore();
      }
      if (haveMotionBLur) {
        ctx.save();
        ctx.globalAlpha = lastFrameAlpha;
        ctx.drawImage(domBack, x, y, width2, height2);
        ctx.restore();
      }
    }
    if (!repaintRects || haveMotionBLur) {
      doClear(0, 0, width, height);
    } else if (repaintRects.length) {
      each$2(repaintRects, function(rect) {
        doClear(rect.x * dpr, rect.y * dpr, rect.width * dpr, rect.height * dpr);
      });
    }
  };
  return Layer2;
}(Eventful);
var Layer$1 = Layer;
var HOVER_LAYER_ZLEVEL = 1e5;
var CANVAS_ZLEVEL = 314159;
var EL_AFTER_INCREMENTAL_INC = 0.01;
var INCREMENTAL_INC = 1e-3;
function parseInt10(val) {
  return parseInt(val, 10);
}
function isLayerValid(layer) {
  if (!layer) {
    return false;
  }
  if (layer.__builtin__) {
    return true;
  }
  if (typeof layer.resize !== "function" || typeof layer.refresh !== "function") {
    return false;
  }
  return true;
}
function createRoot(width, height) {
  var domRoot = document.createElement("div");
  domRoot.style.cssText = [
    "position:relative",
    "width:" + width + "px",
    "height:" + height + "px",
    "padding:0",
    "margin:0",
    "border-width:0"
  ].join(";") + ";";
  return domRoot;
}
var CanvasPainter = function() {
  function CanvasPainter2(root, storage, opts, id) {
    this.type = "canvas";
    this._zlevelList = [];
    this._prevDisplayList = [];
    this._layers = {};
    this._layerConfig = {};
    this._needsManuallyCompositing = false;
    this.type = "canvas";
    var singleCanvas = !root.nodeName || root.nodeName.toUpperCase() === "CANVAS";
    this._opts = opts = extend({}, opts || {});
    this.dpr = opts.devicePixelRatio || devicePixelRatio;
    this._singleCanvas = singleCanvas;
    this.root = root;
    var rootStyle = root.style;
    if (rootStyle) {
      rootStyle.webkitTapHighlightColor = "transparent";
      rootStyle.webkitUserSelect = "none";
      rootStyle.userSelect = "none";
      rootStyle["-webkit-touch-callout"] = "none";
      root.innerHTML = "";
    }
    this.storage = storage;
    var zlevelList = this._zlevelList;
    this._prevDisplayList = [];
    var layers = this._layers;
    if (!singleCanvas) {
      this._width = this._getSize(0);
      this._height = this._getSize(1);
      var domRoot = this._domRoot = createRoot(this._width, this._height);
      root.appendChild(domRoot);
    } else {
      var rootCanvas = root;
      var width = rootCanvas.width;
      var height = rootCanvas.height;
      if (opts.width != null) {
        width = opts.width;
      }
      if (opts.height != null) {
        height = opts.height;
      }
      this.dpr = opts.devicePixelRatio || 1;
      rootCanvas.width = width * this.dpr;
      rootCanvas.height = height * this.dpr;
      this._width = width;
      this._height = height;
      var mainLayer = new Layer$1(rootCanvas, this, this.dpr);
      mainLayer.__builtin__ = true;
      mainLayer.initContext();
      layers[CANVAS_ZLEVEL] = mainLayer;
      mainLayer.zlevel = CANVAS_ZLEVEL;
      zlevelList.push(CANVAS_ZLEVEL);
      this._domRoot = root;
    }
  }
  CanvasPainter2.prototype.getType = function() {
    return "canvas";
  };
  CanvasPainter2.prototype.isSingleCanvas = function() {
    return this._singleCanvas;
  };
  CanvasPainter2.prototype.getViewportRoot = function() {
    return this._domRoot;
  };
  CanvasPainter2.prototype.getViewportRootOffset = function() {
    var viewportRoot = this.getViewportRoot();
    if (viewportRoot) {
      return {
        offsetLeft: viewportRoot.offsetLeft || 0,
        offsetTop: viewportRoot.offsetTop || 0
      };
    }
  };
  CanvasPainter2.prototype.refresh = function(paintAll) {
    var list = this.storage.getDisplayList(true);
    var prevList = this._prevDisplayList;
    var zlevelList = this._zlevelList;
    this._redrawId = Math.random();
    this._paintList(list, prevList, paintAll, this._redrawId);
    for (var i = 0; i < zlevelList.length; i++) {
      var z = zlevelList[i];
      var layer = this._layers[z];
      if (!layer.__builtin__ && layer.refresh) {
        var clearColor = i === 0 ? this._backgroundColor : null;
        layer.refresh(clearColor);
      }
    }
    if (this._opts.useDirtyRect) {
      this._prevDisplayList = list.slice();
    }
    return this;
  };
  CanvasPainter2.prototype.refreshHover = function() {
    this._paintHoverList(this.storage.getDisplayList(false));
  };
  CanvasPainter2.prototype._paintHoverList = function(list) {
    var len2 = list.length;
    var hoverLayer = this._hoverlayer;
    hoverLayer && hoverLayer.clear();
    if (!len2) {
      return;
    }
    var scope = {
      inHover: true,
      viewWidth: this._width,
      viewHeight: this._height
    };
    var ctx;
    for (var i = 0; i < len2; i++) {
      var el = list[i];
      if (el.__inHover) {
        if (!hoverLayer) {
          hoverLayer = this._hoverlayer = this.getLayer(HOVER_LAYER_ZLEVEL);
        }
        if (!ctx) {
          ctx = hoverLayer.ctx;
          ctx.save();
        }
        brush(ctx, el, scope, i === len2 - 1);
      }
    }
    if (ctx) {
      ctx.restore();
    }
  };
  CanvasPainter2.prototype.getHoverLayer = function() {
    return this.getLayer(HOVER_LAYER_ZLEVEL);
  };
  CanvasPainter2.prototype.paintOne = function(ctx, el) {
    brushSingle(ctx, el);
  };
  CanvasPainter2.prototype._paintList = function(list, prevList, paintAll, redrawId) {
    if (this._redrawId !== redrawId) {
      return;
    }
    paintAll = paintAll || false;
    this._updateLayerStatus(list);
    var _a = this._doPaintList(list, prevList, paintAll), finished = _a.finished, needsRefreshHover = _a.needsRefreshHover;
    if (this._needsManuallyCompositing) {
      this._compositeManually();
    }
    if (needsRefreshHover) {
      this._paintHoverList(list);
    }
    if (!finished) {
      var self_1 = this;
      requestAnimationFrame(function() {
        self_1._paintList(list, prevList, paintAll, redrawId);
      });
    } else {
      this.eachLayer(function(layer) {
        layer.afterBrush && layer.afterBrush();
      });
    }
  };
  CanvasPainter2.prototype._compositeManually = function() {
    var ctx = this.getLayer(CANVAS_ZLEVEL).ctx;
    var width = this._domRoot.width;
    var height = this._domRoot.height;
    ctx.clearRect(0, 0, width, height);
    this.eachBuiltinLayer(function(layer) {
      if (layer.virtual) {
        ctx.drawImage(layer.dom, 0, 0, width, height);
      }
    });
  };
  CanvasPainter2.prototype._doPaintList = function(list, prevList, paintAll) {
    var _this = this;
    var layerList = [];
    var useDirtyRect = this._opts.useDirtyRect;
    for (var zi = 0; zi < this._zlevelList.length; zi++) {
      var zlevel = this._zlevelList[zi];
      var layer = this._layers[zlevel];
      if (layer.__builtin__ && layer !== this._hoverlayer && (layer.__dirty || paintAll)) {
        layerList.push(layer);
      }
    }
    var finished = true;
    var needsRefreshHover = false;
    var _loop_1 = function(k2) {
      var layer2 = layerList[k2];
      var ctx = layer2.ctx;
      var repaintRects = useDirtyRect && layer2.createRepaintRects(list, prevList, this_1._width, this_1._height);
      var start = paintAll ? layer2.__startIndex : layer2.__drawIndex;
      var useTimer = !paintAll && layer2.incremental && Date.now;
      var startTime = useTimer && Date.now();
      var clearColor = layer2.zlevel === this_1._zlevelList[0] ? this_1._backgroundColor : null;
      if (layer2.__startIndex === layer2.__endIndex) {
        layer2.clear(false, clearColor, repaintRects);
      } else if (start === layer2.__startIndex) {
        var firstEl = list[start];
        if (!firstEl.incremental || !firstEl.notClear || paintAll) {
          layer2.clear(false, clearColor, repaintRects);
        }
      }
      if (start === -1) {
        console.error("For some unknown reason. drawIndex is -1");
        start = layer2.__startIndex;
      }
      var i;
      var repaint = function(repaintRect) {
        var scope = {
          inHover: false,
          allClipped: false,
          prevEl: null,
          viewWidth: _this._width,
          viewHeight: _this._height
        };
        for (i = start; i < layer2.__endIndex; i++) {
          var el = list[i];
          if (el.__inHover) {
            needsRefreshHover = true;
          }
          _this._doPaintEl(el, layer2, useDirtyRect, repaintRect, scope, i === layer2.__endIndex - 1);
          if (useTimer) {
            var dTime = Date.now() - startTime;
            if (dTime > 15) {
              break;
            }
          }
        }
        if (scope.prevElClipPaths) {
          ctx.restore();
        }
      };
      if (repaintRects) {
        if (repaintRects.length === 0) {
          i = layer2.__endIndex;
        } else {
          var dpr = this_1.dpr;
          for (var r = 0; r < repaintRects.length; ++r) {
            var rect = repaintRects[r];
            ctx.save();
            ctx.beginPath();
            ctx.rect(rect.x * dpr, rect.y * dpr, rect.width * dpr, rect.height * dpr);
            ctx.clip();
            repaint(rect);
            ctx.restore();
          }
        }
      } else {
        ctx.save();
        repaint();
        ctx.restore();
      }
      layer2.__drawIndex = i;
      if (layer2.__drawIndex < layer2.__endIndex) {
        finished = false;
      }
    };
    var this_1 = this;
    for (var k = 0; k < layerList.length; k++) {
      _loop_1(k);
    }
    if (env.wxa) {
      each$2(this._layers, function(layer2) {
        if (layer2 && layer2.ctx && layer2.ctx.draw) {
          layer2.ctx.draw();
        }
      });
    }
    return {
      finished,
      needsRefreshHover
    };
  };
  CanvasPainter2.prototype._doPaintEl = function(el, currentLayer, useDirtyRect, repaintRect, scope, isLast) {
    var ctx = currentLayer.ctx;
    if (useDirtyRect) {
      var paintRect = el.getPaintRect();
      if (!repaintRect || paintRect && paintRect.intersect(repaintRect)) {
        brush(ctx, el, scope, isLast);
        el.setPrevPaintRect(paintRect);
      }
    } else {
      brush(ctx, el, scope, isLast);
    }
  };
  CanvasPainter2.prototype.getLayer = function(zlevel, virtual) {
    if (this._singleCanvas && !this._needsManuallyCompositing) {
      zlevel = CANVAS_ZLEVEL;
    }
    var layer = this._layers[zlevel];
    if (!layer) {
      layer = new Layer$1("zr_" + zlevel, this, this.dpr);
      layer.zlevel = zlevel;
      layer.__builtin__ = true;
      if (this._layerConfig[zlevel]) {
        merge(layer, this._layerConfig[zlevel], true);
      } else if (this._layerConfig[zlevel - EL_AFTER_INCREMENTAL_INC]) {
        merge(layer, this._layerConfig[zlevel - EL_AFTER_INCREMENTAL_INC], true);
      }
      if (virtual) {
        layer.virtual = virtual;
      }
      this.insertLayer(zlevel, layer);
      layer.initContext();
    }
    return layer;
  };
  CanvasPainter2.prototype.insertLayer = function(zlevel, layer) {
    var layersMap = this._layers;
    var zlevelList = this._zlevelList;
    var len2 = zlevelList.length;
    var domRoot = this._domRoot;
    var prevLayer = null;
    var i = -1;
    if (layersMap[zlevel]) {
      logError("ZLevel " + zlevel + " has been used already");
      return;
    }
    if (!isLayerValid(layer)) {
      logError("Layer of zlevel " + zlevel + " is not valid");
      return;
    }
    if (len2 > 0 && zlevel > zlevelList[0]) {
      for (i = 0; i < len2 - 1; i++) {
        if (zlevelList[i] < zlevel && zlevelList[i + 1] > zlevel) {
          break;
        }
      }
      prevLayer = layersMap[zlevelList[i]];
    }
    zlevelList.splice(i + 1, 0, zlevel);
    layersMap[zlevel] = layer;
    if (!layer.virtual) {
      if (prevLayer) {
        var prevDom = prevLayer.dom;
        if (prevDom.nextSibling) {
          domRoot.insertBefore(layer.dom, prevDom.nextSibling);
        } else {
          domRoot.appendChild(layer.dom);
        }
      } else {
        if (domRoot.firstChild) {
          domRoot.insertBefore(layer.dom, domRoot.firstChild);
        } else {
          domRoot.appendChild(layer.dom);
        }
      }
    }
    layer.__painter = this;
  };
  CanvasPainter2.prototype.eachLayer = function(cb, context) {
    var zlevelList = this._zlevelList;
    for (var i = 0; i < zlevelList.length; i++) {
      var z = zlevelList[i];
      cb.call(context, this._layers[z], z);
    }
  };
  CanvasPainter2.prototype.eachBuiltinLayer = function(cb, context) {
    var zlevelList = this._zlevelList;
    for (var i = 0; i < zlevelList.length; i++) {
      var z = zlevelList[i];
      var layer = this._layers[z];
      if (layer.__builtin__) {
        cb.call(context, layer, z);
      }
    }
  };
  CanvasPainter2.prototype.eachOtherLayer = function(cb, context) {
    var zlevelList = this._zlevelList;
    for (var i = 0; i < zlevelList.length; i++) {
      var z = zlevelList[i];
      var layer = this._layers[z];
      if (!layer.__builtin__) {
        cb.call(context, layer, z);
      }
    }
  };
  CanvasPainter2.prototype.getLayers = function() {
    return this._layers;
  };
  CanvasPainter2.prototype._updateLayerStatus = function(list) {
    this.eachBuiltinLayer(function(layer2, z) {
      layer2.__dirty = layer2.__used = false;
    });
    function updatePrevLayer(idx) {
      if (prevLayer) {
        if (prevLayer.__endIndex !== idx) {
          prevLayer.__dirty = true;
        }
        prevLayer.__endIndex = idx;
      }
    }
    if (this._singleCanvas) {
      for (var i_1 = 1; i_1 < list.length; i_1++) {
        var el = list[i_1];
        if (el.zlevel !== list[i_1 - 1].zlevel || el.incremental) {
          this._needsManuallyCompositing = true;
          break;
        }
      }
    }
    var prevLayer = null;
    var incrementalLayerCount = 0;
    var prevZlevel;
    var i;
    for (i = 0; i < list.length; i++) {
      var el = list[i];
      var zlevel = el.zlevel;
      var layer = void 0;
      if (prevZlevel !== zlevel) {
        prevZlevel = zlevel;
        incrementalLayerCount = 0;
      }
      if (el.incremental) {
        layer = this.getLayer(zlevel + INCREMENTAL_INC, this._needsManuallyCompositing);
        layer.incremental = true;
        incrementalLayerCount = 1;
      } else {
        layer = this.getLayer(zlevel + (incrementalLayerCount > 0 ? EL_AFTER_INCREMENTAL_INC : 0), this._needsManuallyCompositing);
      }
      if (!layer.__builtin__) {
        logError("ZLevel " + zlevel + " has been used by unkown layer " + layer.id);
      }
      if (layer !== prevLayer) {
        layer.__used = true;
        if (layer.__startIndex !== i) {
          layer.__dirty = true;
        }
        layer.__startIndex = i;
        if (!layer.incremental) {
          layer.__drawIndex = i;
        } else {
          layer.__drawIndex = -1;
        }
        updatePrevLayer(i);
        prevLayer = layer;
      }
      if (el.__dirty & REDRAW_BIT && !el.__inHover) {
        layer.__dirty = true;
        if (layer.incremental && layer.__drawIndex < 0) {
          layer.__drawIndex = i;
        }
      }
    }
    updatePrevLayer(i);
    this.eachBuiltinLayer(function(layer2, z) {
      if (!layer2.__used && layer2.getElementCount() > 0) {
        layer2.__dirty = true;
        layer2.__startIndex = layer2.__endIndex = layer2.__drawIndex = 0;
      }
      if (layer2.__dirty && layer2.__drawIndex < 0) {
        layer2.__drawIndex = layer2.__startIndex;
      }
    });
  };
  CanvasPainter2.prototype.clear = function() {
    this.eachBuiltinLayer(this._clearLayer);
    return this;
  };
  CanvasPainter2.prototype._clearLayer = function(layer) {
    layer.clear();
  };
  CanvasPainter2.prototype.setBackgroundColor = function(backgroundColor) {
    this._backgroundColor = backgroundColor;
    each$2(this._layers, function(layer) {
      layer.setUnpainted();
    });
  };
  CanvasPainter2.prototype.configLayer = function(zlevel, config) {
    if (config) {
      var layerConfig = this._layerConfig;
      if (!layerConfig[zlevel]) {
        layerConfig[zlevel] = config;
      } else {
        merge(layerConfig[zlevel], config, true);
      }
      for (var i = 0; i < this._zlevelList.length; i++) {
        var _zlevel = this._zlevelList[i];
        if (_zlevel === zlevel || _zlevel === zlevel + EL_AFTER_INCREMENTAL_INC) {
          var layer = this._layers[_zlevel];
          merge(layer, layerConfig[zlevel], true);
        }
      }
    }
  };
  CanvasPainter2.prototype.delLayer = function(zlevel) {
    var layers = this._layers;
    var zlevelList = this._zlevelList;
    var layer = layers[zlevel];
    if (!layer) {
      return;
    }
    layer.dom.parentNode.removeChild(layer.dom);
    delete layers[zlevel];
    zlevelList.splice(indexOf(zlevelList, zlevel), 1);
  };
  CanvasPainter2.prototype.resize = function(width, height) {
    if (!this._domRoot.style) {
      if (width == null || height == null) {
        return;
      }
      this._width = width;
      this._height = height;
      this.getLayer(CANVAS_ZLEVEL).resize(width, height);
    } else {
      var domRoot = this._domRoot;
      domRoot.style.display = "none";
      var opts = this._opts;
      width != null && (opts.width = width);
      height != null && (opts.height = height);
      width = this._getSize(0);
      height = this._getSize(1);
      domRoot.style.display = "";
      if (this._width !== width || height !== this._height) {
        domRoot.style.width = width + "px";
        domRoot.style.height = height + "px";
        for (var id in this._layers) {
          if (this._layers.hasOwnProperty(id)) {
            this._layers[id].resize(width, height);
          }
        }
        this.refresh(true);
      }
      this._width = width;
      this._height = height;
    }
    return this;
  };
  CanvasPainter2.prototype.clearLayer = function(zlevel) {
    var layer = this._layers[zlevel];
    if (layer) {
      layer.clear();
    }
  };
  CanvasPainter2.prototype.dispose = function() {
    this.root.innerHTML = "";
    this.root = this.storage = this._domRoot = this._layers = null;
  };
  CanvasPainter2.prototype.getRenderedCanvas = function(opts) {
    opts = opts || {};
    if (this._singleCanvas && !this._compositeManually) {
      return this._layers[CANVAS_ZLEVEL].dom;
    }
    var imageLayer = new Layer$1("image", this, opts.pixelRatio || this.dpr);
    imageLayer.initContext();
    imageLayer.clear(false, opts.backgroundColor || this._backgroundColor);
    var ctx = imageLayer.ctx;
    if (opts.pixelRatio <= this.dpr) {
      this.refresh();
      var width_1 = imageLayer.dom.width;
      var height_1 = imageLayer.dom.height;
      this.eachLayer(function(layer) {
        if (layer.__builtin__) {
          ctx.drawImage(layer.dom, 0, 0, width_1, height_1);
        } else if (layer.renderToCanvas) {
          ctx.save();
          layer.renderToCanvas(ctx);
          ctx.restore();
        }
      });
    } else {
      var scope = {
        inHover: false,
        viewWidth: this._width,
        viewHeight: this._height
      };
      var displayList = this.storage.getDisplayList(true);
      for (var i = 0, len2 = displayList.length; i < len2; i++) {
        var el = displayList[i];
        brush(ctx, el, scope, i === len2 - 1);
      }
    }
    return imageLayer.dom;
  };
  CanvasPainter2.prototype.getWidth = function() {
    return this._width;
  };
  CanvasPainter2.prototype.getHeight = function() {
    return this._height;
  };
  CanvasPainter2.prototype._getSize = function(whIdx) {
    var opts = this._opts;
    var wh = ["width", "height"][whIdx];
    var cwh = ["clientWidth", "clientHeight"][whIdx];
    var plt = ["paddingLeft", "paddingTop"][whIdx];
    var prb = ["paddingRight", "paddingBottom"][whIdx];
    if (opts[wh] != null && opts[wh] !== "auto") {
      return parseFloat(opts[wh]);
    }
    var root = this.root;
    var stl = document.defaultView.getComputedStyle(root);
    return (root[cwh] || parseInt10(stl[wh]) || parseInt10(root.style[wh])) - (parseInt10(stl[plt]) || 0) - (parseInt10(stl[prb]) || 0) | 0;
  };
  CanvasPainter2.prototype.pathToImage = function(path, dpr) {
    dpr = dpr || this.dpr;
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var rect = path.getBoundingRect();
    var style = path.style;
    var shadowBlurSize = style.shadowBlur * dpr;
    var shadowOffsetX = style.shadowOffsetX * dpr;
    var shadowOffsetY = style.shadowOffsetY * dpr;
    var lineWidth = path.hasStroke() ? style.lineWidth : 0;
    var leftMargin = Math.max(lineWidth / 2, -shadowOffsetX + shadowBlurSize);
    var rightMargin = Math.max(lineWidth / 2, shadowOffsetX + shadowBlurSize);
    var topMargin = Math.max(lineWidth / 2, -shadowOffsetY + shadowBlurSize);
    var bottomMargin = Math.max(lineWidth / 2, shadowOffsetY + shadowBlurSize);
    var width = rect.width + leftMargin + rightMargin;
    var height = rect.height + topMargin + bottomMargin;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);
    ctx.dpr = dpr;
    var pathTransform = {
      x: path.x,
      y: path.y,
      scaleX: path.scaleX,
      scaleY: path.scaleY,
      rotation: path.rotation,
      originX: path.originX,
      originY: path.originY
    };
    path.x = leftMargin - rect.x;
    path.y = topMargin - rect.y;
    path.rotation = 0;
    path.scaleX = 1;
    path.scaleY = 1;
    path.updateTransform();
    if (path) {
      brush(ctx, path, {
        inHover: false,
        viewWidth: this._width,
        viewHeight: this._height
      }, true);
    }
    var imgShape = new ZRImage({
      style: {
        x: 0,
        y: 0,
        image: canvas
      }
    });
    extend(path, pathTransform);
    return imgShape;
  };
  return CanvasPainter2;
}();
var CanvasPainter$1 = CanvasPainter;
function install(registers) {
  registers.registerPainter("canvas", CanvasPainter$1);
}
var CMD = PathProxy.CMD;
function aroundEqual(a, b) {
  return Math.abs(a - b) < 1e-5;
}
function pathToBezierCurves(path) {
  var data = path.data;
  var len2 = path.len();
  var bezierArrayGroups = [];
  var currentSubpath;
  var xi = 0;
  var yi = 0;
  var x0 = 0;
  var y0 = 0;
  function createNewSubpath(x, y) {
    if (currentSubpath && currentSubpath.length > 2) {
      bezierArrayGroups.push(currentSubpath);
    }
    currentSubpath = [x, y];
  }
  function addLine(x02, y02, x12, y12) {
    if (!(aroundEqual(x02, x12) && aroundEqual(y02, y12))) {
      currentSubpath.push(x02, y02, x12, y12, x12, y12);
    }
  }
  function addArc(startAngle2, endAngle2, cx2, cy2, rx2, ry2) {
    var delta = Math.abs(endAngle2 - startAngle2);
    var len3 = Math.tan(delta / 4) * 4 / 3;
    var dir = endAngle2 < startAngle2 ? -1 : 1;
    var c1 = Math.cos(startAngle2);
    var s1 = Math.sin(startAngle2);
    var c2 = Math.cos(endAngle2);
    var s2 = Math.sin(endAngle2);
    var x12 = c1 * rx2 + cx2;
    var y12 = s1 * ry2 + cy2;
    var x4 = c2 * rx2 + cx2;
    var y4 = s2 * ry2 + cy2;
    var hx = rx2 * len3 * dir;
    var hy = ry2 * len3 * dir;
    currentSubpath.push(x12 - hx * s1, y12 + hy * c1, x4 + hx * s2, y4 - hy * c2, x4, y4);
  }
  var x1;
  var y1;
  var x2;
  var y2;
  for (var i = 0; i < len2; ) {
    var cmd = data[i++];
    var isFirst = i === 1;
    if (isFirst) {
      xi = data[i];
      yi = data[i + 1];
      x0 = xi;
      y0 = yi;
      if (cmd === CMD.L || cmd === CMD.C || cmd === CMD.Q) {
        currentSubpath = [x0, y0];
      }
    }
    switch (cmd) {
      case CMD.M:
        xi = x0 = data[i++];
        yi = y0 = data[i++];
        createNewSubpath(x0, y0);
        break;
      case CMD.L:
        x1 = data[i++];
        y1 = data[i++];
        addLine(xi, yi, x1, y1);
        xi = x1;
        yi = y1;
        break;
      case CMD.C:
        currentSubpath.push(data[i++], data[i++], data[i++], data[i++], xi = data[i++], yi = data[i++]);
        break;
      case CMD.Q:
        x1 = data[i++];
        y1 = data[i++];
        x2 = data[i++];
        y2 = data[i++];
        currentSubpath.push(xi + 2 / 3 * (x1 - xi), yi + 2 / 3 * (y1 - yi), x2 + 2 / 3 * (x1 - x2), y2 + 2 / 3 * (y1 - y2), x2, y2);
        xi = x2;
        yi = y2;
        break;
      case CMD.A:
        var cx = data[i++];
        var cy = data[i++];
        var rx = data[i++];
        var ry = data[i++];
        var startAngle = data[i++];
        var endAngle = data[i++] + startAngle;
        i += 1;
        var anticlockwise = !data[i++];
        x1 = Math.cos(startAngle) * rx + cx;
        y1 = Math.sin(startAngle) * ry + cy;
        if (isFirst) {
          x0 = x1;
          y0 = y1;
          createNewSubpath(x0, y0);
        } else {
          addLine(xi, yi, x1, y1);
        }
        xi = Math.cos(endAngle) * rx + cx;
        yi = Math.sin(endAngle) * ry + cy;
        var step = (anticlockwise ? -1 : 1) * Math.PI / 2;
        for (var angle = startAngle; anticlockwise ? angle > endAngle : angle < endAngle; angle += step) {
          var nextAngle = anticlockwise ? Math.max(angle + step, endAngle) : Math.min(angle + step, endAngle);
          addArc(angle, nextAngle, cx, cy, rx, ry);
        }
        break;
      case CMD.R:
        x0 = xi = data[i++];
        y0 = yi = data[i++];
        x1 = x0 + data[i++];
        y1 = y0 + data[i++];
        createNewSubpath(x1, y0);
        addLine(x1, y0, x1, y1);
        addLine(x1, y1, x0, y1);
        addLine(x0, y1, x0, y0);
        addLine(x0, y0, x1, y0);
        break;
      case CMD.Z:
        currentSubpath && addLine(xi, yi, x0, y0);
        xi = x0;
        yi = y0;
        break;
    }
  }
  if (currentSubpath && currentSubpath.length > 2) {
    bezierArrayGroups.push(currentSubpath);
  }
  return bezierArrayGroups;
}
function adpativeBezier(x0, y0, x1, y1, x2, y2, x3, y3, out, scale2) {
  if (aroundEqual(x0, x1) && aroundEqual(y0, y1) && aroundEqual(x2, x3) && aroundEqual(y2, y3)) {
    out.push(x3, y3);
    return;
  }
  var PIXEL_DISTANCE = 2 / scale2;
  var PIXEL_DISTANCE_SQR = PIXEL_DISTANCE * PIXEL_DISTANCE;
  var dx = x3 - x0;
  var dy = y3 - y0;
  var d = Math.sqrt(dx * dx + dy * dy);
  dx /= d;
  dy /= d;
  var dx1 = x1 - x0;
  var dy1 = y1 - y0;
  var dx2 = x2 - x3;
  var dy2 = y2 - y3;
  var cp1LenSqr = dx1 * dx1 + dy1 * dy1;
  var cp2LenSqr = dx2 * dx2 + dy2 * dy2;
  if (cp1LenSqr < PIXEL_DISTANCE_SQR && cp2LenSqr < PIXEL_DISTANCE_SQR) {
    out.push(x3, y3);
    return;
  }
  var projLen1 = dx * dx1 + dy * dy1;
  var projLen2 = -dx * dx2 - dy * dy2;
  var d1Sqr = cp1LenSqr - projLen1 * projLen1;
  var d2Sqr = cp2LenSqr - projLen2 * projLen2;
  if (d1Sqr < PIXEL_DISTANCE_SQR && projLen1 >= 0 && d2Sqr < PIXEL_DISTANCE_SQR && projLen2 >= 0) {
    out.push(x3, y3);
    return;
  }
  var tmpSegX = [];
  var tmpSegY = [];
  cubicSubdivide(x0, x1, x2, x3, 0.5, tmpSegX);
  cubicSubdivide(y0, y1, y2, y3, 0.5, tmpSegY);
  adpativeBezier(tmpSegX[0], tmpSegY[0], tmpSegX[1], tmpSegY[1], tmpSegX[2], tmpSegY[2], tmpSegX[3], tmpSegY[3], out, scale2);
  adpativeBezier(tmpSegX[4], tmpSegY[4], tmpSegX[5], tmpSegY[5], tmpSegX[6], tmpSegY[6], tmpSegX[7], tmpSegY[7], out, scale2);
}
function pathToPolygons(path, scale2) {
  var bezierArrayGroups = pathToBezierCurves(path);
  var polygons = [];
  scale2 = scale2 || 1;
  for (var i = 0; i < bezierArrayGroups.length; i++) {
    var beziers = bezierArrayGroups[i];
    var polygon = [];
    var x0 = beziers[0];
    var y0 = beziers[1];
    polygon.push(x0, y0);
    for (var k = 2; k < beziers.length; ) {
      var x1 = beziers[k++];
      var y1 = beziers[k++];
      var x2 = beziers[k++];
      var y2 = beziers[k++];
      var x3 = beziers[k++];
      var y3 = beziers[k++];
      adpativeBezier(x0, y0, x1, y1, x2, y2, x3, y3, polygon, scale2);
      x0 = x3;
      y0 = y3;
    }
    polygons.push(polygon);
  }
  return polygons;
}
function getDividingGrids(dimSize, rowDim, count) {
  var rowSize = dimSize[rowDim];
  var columnSize = dimSize[1 - rowDim];
  var ratio = Math.abs(rowSize / columnSize);
  var rowCount = Math.ceil(Math.sqrt(ratio * count));
  var columnCount = Math.floor(count / rowCount);
  if (columnCount === 0) {
    columnCount = 1;
    rowCount = count;
  }
  var grids = [];
  for (var i = 0; i < rowCount; i++) {
    grids.push(columnCount);
  }
  var currentCount = rowCount * columnCount;
  var remained = count - currentCount;
  if (remained > 0) {
    for (var i = 0; i < remained; i++) {
      grids[i % rowCount] += 1;
    }
  }
  return grids;
}
function divideSector(sectorShape, count, outShapes) {
  var r0 = sectorShape.r0;
  var r = sectorShape.r;
  var startAngle = sectorShape.startAngle;
  var endAngle = sectorShape.endAngle;
  var angle = Math.abs(endAngle - startAngle);
  var arcLen = angle * r;
  var deltaR = r - r0;
  var isAngleRow = arcLen > Math.abs(deltaR);
  var grids = getDividingGrids([arcLen, deltaR], isAngleRow ? 0 : 1, count);
  var rowSize = (isAngleRow ? angle : deltaR) / grids.length;
  for (var row = 0; row < grids.length; row++) {
    var columnSize = (isAngleRow ? deltaR : angle) / grids[row];
    for (var column = 0; column < grids[row]; column++) {
      var newShape = {};
      if (isAngleRow) {
        newShape.startAngle = startAngle + rowSize * row;
        newShape.endAngle = startAngle + rowSize * (row + 1);
        newShape.r0 = r0 + columnSize * column;
        newShape.r = r0 + columnSize * (column + 1);
      } else {
        newShape.startAngle = startAngle + columnSize * column;
        newShape.endAngle = startAngle + columnSize * (column + 1);
        newShape.r0 = r0 + rowSize * row;
        newShape.r = r0 + rowSize * (row + 1);
      }
      newShape.clockwise = sectorShape.clockwise;
      newShape.cx = sectorShape.cx;
      newShape.cy = sectorShape.cy;
      outShapes.push(newShape);
    }
  }
}
function divideRect(rectShape, count, outShapes) {
  var width = rectShape.width;
  var height = rectShape.height;
  var isHorizontalRow = width > height;
  var grids = getDividingGrids([width, height], isHorizontalRow ? 0 : 1, count);
  var rowSizeDim = isHorizontalRow ? "width" : "height";
  var columnSizeDim = isHorizontalRow ? "height" : "width";
  var rowDim = isHorizontalRow ? "x" : "y";
  var columnDim = isHorizontalRow ? "y" : "x";
  var rowSize = rectShape[rowSizeDim] / grids.length;
  for (var row = 0; row < grids.length; row++) {
    var columnSize = rectShape[columnSizeDim] / grids[row];
    for (var column = 0; column < grids[row]; column++) {
      var newShape = {};
      newShape[rowDim] = row * rowSize;
      newShape[columnDim] = column * columnSize;
      newShape[rowSizeDim] = rowSize;
      newShape[columnSizeDim] = columnSize;
      newShape.x += rectShape.x;
      newShape.y += rectShape.y;
      outShapes.push(newShape);
    }
  }
}
function crossProduct2d(x1, y1, x2, y2) {
  return x1 * y2 - x2 * y1;
}
function lineLineIntersect(a1x, a1y, a2x, a2y, b1x, b1y, b2x, b2y) {
  var mx = a2x - a1x;
  var my = a2y - a1y;
  var nx = b2x - b1x;
  var ny = b2y - b1y;
  var nmCrossProduct = crossProduct2d(nx, ny, mx, my);
  if (Math.abs(nmCrossProduct) < 1e-6) {
    return null;
  }
  var b1a1x = a1x - b1x;
  var b1a1y = a1y - b1y;
  var p = crossProduct2d(b1a1x, b1a1y, nx, ny) / nmCrossProduct;
  if (p < 0 || p > 1) {
    return null;
  }
  return new Point(p * mx + a1x, p * my + a1y);
}
function projPtOnLine(pt, lineA, lineB) {
  var dir = new Point();
  Point.sub(dir, lineB, lineA);
  dir.normalize();
  var dir2 = new Point();
  Point.sub(dir2, pt, lineA);
  var len2 = dir2.dot(dir);
  return len2;
}
function addToPoly(poly, pt) {
  var last = poly[poly.length - 1];
  if (last && last[0] === pt[0] && last[1] === pt[1]) {
    return;
  }
  poly.push(pt);
}
function splitPolygonByLine(points, lineA, lineB) {
  var len2 = points.length;
  var intersections = [];
  for (var i = 0; i < len2; i++) {
    var p0 = points[i];
    var p1 = points[(i + 1) % len2];
    var intersectionPt = lineLineIntersect(p0[0], p0[1], p1[0], p1[1], lineA.x, lineA.y, lineB.x, lineB.y);
    if (intersectionPt) {
      intersections.push({
        projPt: projPtOnLine(intersectionPt, lineA, lineB),
        pt: intersectionPt,
        idx: i
      });
    }
  }
  if (intersections.length < 2) {
    return [{ points }, { points }];
  }
  intersections.sort(function(a, b) {
    return a.projPt - b.projPt;
  });
  var splitPt0 = intersections[0];
  var splitPt1 = intersections[intersections.length - 1];
  if (splitPt1.idx < splitPt0.idx) {
    var tmp = splitPt0;
    splitPt0 = splitPt1;
    splitPt1 = tmp;
  }
  var splitPt0Arr = [splitPt0.pt.x, splitPt0.pt.y];
  var splitPt1Arr = [splitPt1.pt.x, splitPt1.pt.y];
  var newPolyA = [splitPt0Arr];
  var newPolyB = [splitPt1Arr];
  for (var i = splitPt0.idx + 1; i <= splitPt1.idx; i++) {
    addToPoly(newPolyA, points[i].slice());
  }
  addToPoly(newPolyA, splitPt1Arr);
  addToPoly(newPolyA, splitPt0Arr);
  for (var i = splitPt1.idx + 1; i <= splitPt0.idx + len2; i++) {
    addToPoly(newPolyB, points[i % len2].slice());
  }
  addToPoly(newPolyB, splitPt0Arr);
  addToPoly(newPolyB, splitPt1Arr);
  return [{
    points: newPolyA
  }, {
    points: newPolyB
  }];
}
function binaryDividePolygon(polygonShape) {
  var points = polygonShape.points;
  var min = [];
  var max = [];
  fromPoints(points, min, max);
  var boundingRect = new BoundingRect(min[0], min[1], max[0] - min[0], max[1] - min[1]);
  var width = boundingRect.width;
  var height = boundingRect.height;
  var x = boundingRect.x;
  var y = boundingRect.y;
  var pt0 = new Point();
  var pt1 = new Point();
  if (width > height) {
    pt0.x = pt1.x = x + width / 2;
    pt0.y = y;
    pt1.y = y + height;
  } else {
    pt0.y = pt1.y = y + height / 2;
    pt0.x = x;
    pt1.x = x + width;
  }
  return splitPolygonByLine(points, pt0, pt1);
}
function binaryDivideRecursive(divider, shape, count, out) {
  if (count === 1) {
    out.push(shape);
  } else {
    var mid = Math.floor(count / 2);
    var sub2 = divider(shape);
    binaryDivideRecursive(divider, sub2[0], mid, out);
    binaryDivideRecursive(divider, sub2[1], count - mid, out);
  }
  return out;
}
function clone(path, count) {
  var paths = [];
  for (var i = 0; i < count; i++) {
    paths.push(clonePath(path));
  }
  return paths;
}
function copyPathProps(source, target) {
  target.setStyle(source.style);
  target.z = source.z;
  target.z2 = source.z2;
  target.zlevel = source.zlevel;
}
function polygonConvert(points) {
  var out = [];
  for (var i = 0; i < points.length; ) {
    out.push([points[i++], points[i++]]);
  }
  return out;
}
function split(path, count) {
  var outShapes = [];
  var shape = path.shape;
  var OutShapeCtor;
  switch (path.type) {
    case "rect":
      divideRect(shape, count, outShapes);
      OutShapeCtor = Rect$1;
      break;
    case "sector":
      divideSector(shape, count, outShapes);
      OutShapeCtor = Sector;
      break;
    case "circle":
      divideSector({
        r0: 0,
        r: shape.r,
        startAngle: 0,
        endAngle: Math.PI * 2,
        cx: shape.cx,
        cy: shape.cy
      }, count, outShapes);
      OutShapeCtor = Sector;
      break;
    default:
      var m = path.getComputedTransform();
      var scale2 = m ? Math.sqrt(Math.max(m[0] * m[0] + m[1] * m[1], m[2] * m[2] + m[3] * m[3])) : 1;
      var polygons = map(pathToPolygons(path.getUpdatedPathProxy(), scale2), function(poly) {
        return polygonConvert(poly);
      });
      var polygonCount = polygons.length;
      if (polygonCount === 0) {
        binaryDivideRecursive(binaryDividePolygon, {
          points: polygons[0]
        }, count, outShapes);
      } else if (polygonCount === count) {
        for (var i = 0; i < polygonCount; i++) {
          outShapes.push({
            points: polygons[i]
          });
        }
      } else {
        var totalArea_1 = 0;
        var items = map(polygons, function(poly) {
          var min = [];
          var max = [];
          fromPoints(poly, min, max);
          var area = (max[1] - min[1]) * (max[0] - min[0]);
          totalArea_1 += area;
          return { poly, area };
        });
        items.sort(function(a, b) {
          return b.area - a.area;
        });
        var left = count;
        for (var i = 0; i < polygonCount; i++) {
          var item = items[i];
          if (left <= 0) {
            break;
          }
          var selfCount = i === polygonCount - 1 ? left : Math.ceil(item.area / totalArea_1 * count);
          if (selfCount < 0) {
            continue;
          }
          binaryDivideRecursive(binaryDividePolygon, {
            points: item.poly
          }, selfCount, outShapes);
          left -= selfCount;
        }
      }
      OutShapeCtor = Polygon;
      break;
  }
  if (!OutShapeCtor) {
    return clone(path, count);
  }
  var out = [];
  for (var i = 0; i < outShapes.length; i++) {
    var subPath = new OutShapeCtor();
    subPath.setShape(outShapes[i]);
    copyPathProps(path, subPath);
    out.push(subPath);
  }
  return out;
}
function alignSubpath(subpath1, subpath2) {
  var len1 = subpath1.length;
  var len2 = subpath2.length;
  if (len1 === len2) {
    return [subpath1, subpath2];
  }
  var tmpSegX = [];
  var tmpSegY = [];
  var shorterPath = len1 < len2 ? subpath1 : subpath2;
  var shorterLen = Math.min(len1, len2);
  var diff = Math.abs(len2 - len1) / 6;
  var shorterBezierCount = (shorterLen - 2) / 6;
  var eachCurveSubDivCount = Math.ceil(diff / shorterBezierCount) + 1;
  var newSubpath = [shorterPath[0], shorterPath[1]];
  var remained = diff;
  for (var i = 2; i < shorterLen; ) {
    var x0 = shorterPath[i - 2];
    var y0 = shorterPath[i - 1];
    var x1 = shorterPath[i++];
    var y1 = shorterPath[i++];
    var x2 = shorterPath[i++];
    var y2 = shorterPath[i++];
    var x3 = shorterPath[i++];
    var y3 = shorterPath[i++];
    if (remained <= 0) {
      newSubpath.push(x1, y1, x2, y2, x3, y3);
      continue;
    }
    var actualSubDivCount = Math.min(remained, eachCurveSubDivCount - 1) + 1;
    for (var k = 1; k <= actualSubDivCount; k++) {
      var p = k / actualSubDivCount;
      cubicSubdivide(x0, x1, x2, x3, p, tmpSegX);
      cubicSubdivide(y0, y1, y2, y3, p, tmpSegY);
      x0 = tmpSegX[3];
      y0 = tmpSegY[3];
      newSubpath.push(tmpSegX[1], tmpSegY[1], tmpSegX[2], tmpSegY[2], x0, y0);
      x1 = tmpSegX[5];
      y1 = tmpSegY[5];
      x2 = tmpSegX[6];
      y2 = tmpSegY[6];
    }
    remained -= actualSubDivCount - 1;
  }
  return shorterPath === subpath1 ? [newSubpath, subpath2] : [subpath1, newSubpath];
}
function createSubpath(lastSubpathSubpath, otherSubpath) {
  var len2 = lastSubpathSubpath.length;
  var lastX = lastSubpathSubpath[len2 - 2];
  var lastY = lastSubpathSubpath[len2 - 1];
  var newSubpath = [];
  for (var i = 0; i < otherSubpath.length; ) {
    newSubpath[i++] = lastX;
    newSubpath[i++] = lastY;
  }
  return newSubpath;
}
function alignBezierCurves(array1, array2) {
  var _a;
  var lastSubpath1;
  var lastSubpath2;
  var newArray1 = [];
  var newArray2 = [];
  for (var i = 0; i < Math.max(array1.length, array2.length); i++) {
    var subpath1 = array1[i];
    var subpath2 = array2[i];
    var newSubpath1 = void 0;
    var newSubpath2 = void 0;
    if (!subpath1) {
      newSubpath1 = createSubpath(lastSubpath1 || subpath2, subpath2);
      newSubpath2 = subpath2;
    } else if (!subpath2) {
      newSubpath2 = createSubpath(lastSubpath2 || subpath1, subpath1);
      newSubpath1 = subpath1;
    } else {
      _a = alignSubpath(subpath1, subpath2), newSubpath1 = _a[0], newSubpath2 = _a[1];
      lastSubpath1 = newSubpath1;
      lastSubpath2 = newSubpath2;
    }
    newArray1.push(newSubpath1);
    newArray2.push(newSubpath2);
  }
  return [newArray1, newArray2];
}
function centroid(array) {
  var signedArea = 0;
  var cx = 0;
  var cy = 0;
  var len2 = array.length;
  for (var i = 0, j = len2 - 2; i < len2; j = i, i += 2) {
    var x0 = array[j];
    var y0 = array[j + 1];
    var x1 = array[i];
    var y1 = array[i + 1];
    var a = x0 * y1 - x1 * y0;
    signedArea += a;
    cx += (x0 + x1) * a;
    cy += (y0 + y1) * a;
  }
  if (signedArea === 0) {
    return [array[0] || 0, array[1] || 0];
  }
  return [cx / signedArea / 3, cy / signedArea / 3, signedArea];
}
function findBestRingOffset(fromSubBeziers, toSubBeziers, fromCp, toCp) {
  var bezierCount = (fromSubBeziers.length - 2) / 6;
  var bestScore = Infinity;
  var bestOffset = 0;
  var len2 = fromSubBeziers.length;
  var len22 = len2 - 2;
  for (var offset = 0; offset < bezierCount; offset++) {
    var cursorOffset = offset * 6;
    var score = 0;
    for (var k = 0; k < len2; k += 2) {
      var idx = k === 0 ? cursorOffset : (cursorOffset + k - 2) % len22 + 2;
      var x0 = fromSubBeziers[idx] - fromCp[0];
      var y0 = fromSubBeziers[idx + 1] - fromCp[1];
      var x1 = toSubBeziers[k] - toCp[0];
      var y1 = toSubBeziers[k + 1] - toCp[1];
      var dx = x1 - x0;
      var dy = y1 - y0;
      score += dx * dx + dy * dy;
    }
    if (score < bestScore) {
      bestScore = score;
      bestOffset = offset;
    }
  }
  return bestOffset;
}
function reverse(array) {
  var newArr = [];
  var len2 = array.length;
  for (var i = 0; i < len2; i += 2) {
    newArr[i] = array[len2 - i - 2];
    newArr[i + 1] = array[len2 - i - 1];
  }
  return newArr;
}
function findBestMorphingRotation(fromArr, toArr, searchAngleIteration, searchAngleRange) {
  var result = [];
  var fromNeedsReverse;
  for (var i = 0; i < fromArr.length; i++) {
    var fromSubpathBezier = fromArr[i];
    var toSubpathBezier = toArr[i];
    var fromCp = centroid(fromSubpathBezier);
    var toCp = centroid(toSubpathBezier);
    if (fromNeedsReverse == null) {
      fromNeedsReverse = fromCp[2] < 0 !== toCp[2] < 0;
    }
    var newFromSubpathBezier = [];
    var newToSubpathBezier = [];
    var bestAngle = 0;
    var bestScore = Infinity;
    var tmpArr = [];
    var len2 = fromSubpathBezier.length;
    if (fromNeedsReverse) {
      fromSubpathBezier = reverse(fromSubpathBezier);
    }
    var offset = findBestRingOffset(fromSubpathBezier, toSubpathBezier, fromCp, toCp) * 6;
    var len22 = len2 - 2;
    for (var k = 0; k < len22; k += 2) {
      var idx = (offset + k) % len22 + 2;
      newFromSubpathBezier[k + 2] = fromSubpathBezier[idx] - fromCp[0];
      newFromSubpathBezier[k + 3] = fromSubpathBezier[idx + 1] - fromCp[1];
    }
    newFromSubpathBezier[0] = fromSubpathBezier[offset] - fromCp[0];
    newFromSubpathBezier[1] = fromSubpathBezier[offset + 1] - fromCp[1];
    if (searchAngleIteration > 0) {
      var step = searchAngleRange / searchAngleIteration;
      for (var angle = -searchAngleRange / 2; angle <= searchAngleRange / 2; angle += step) {
        var sa = Math.sin(angle);
        var ca = Math.cos(angle);
        var score = 0;
        for (var k = 0; k < fromSubpathBezier.length; k += 2) {
          var x0 = newFromSubpathBezier[k];
          var y0 = newFromSubpathBezier[k + 1];
          var x1 = toSubpathBezier[k] - toCp[0];
          var y1 = toSubpathBezier[k + 1] - toCp[1];
          var newX1 = x1 * ca - y1 * sa;
          var newY1 = x1 * sa + y1 * ca;
          tmpArr[k] = newX1;
          tmpArr[k + 1] = newY1;
          var dx = newX1 - x0;
          var dy = newY1 - y0;
          score += dx * dx + dy * dy;
        }
        if (score < bestScore) {
          bestScore = score;
          bestAngle = angle;
          for (var m = 0; m < tmpArr.length; m++) {
            newToSubpathBezier[m] = tmpArr[m];
          }
        }
      }
    } else {
      for (var i_1 = 0; i_1 < len2; i_1 += 2) {
        newToSubpathBezier[i_1] = toSubpathBezier[i_1] - toCp[0];
        newToSubpathBezier[i_1 + 1] = toSubpathBezier[i_1 + 1] - toCp[1];
      }
    }
    result.push({
      from: newFromSubpathBezier,
      to: newToSubpathBezier,
      fromCp,
      toCp,
      rotation: -bestAngle
    });
  }
  return result;
}
function isCombineMorphing(path) {
  return path.__isCombineMorphing;
}
var SAVED_METHOD_PREFIX = "__mOriginal_";
function saveAndModifyMethod(obj, methodName, modifiers) {
  var savedMethodName = SAVED_METHOD_PREFIX + methodName;
  var originalMethod = obj[savedMethodName] || obj[methodName];
  if (!obj[savedMethodName]) {
    obj[savedMethodName] = obj[methodName];
  }
  var replace = modifiers.replace;
  var after = modifiers.after;
  var before = modifiers.before;
  obj[methodName] = function() {
    var args = arguments;
    var res;
    before && before.apply(this, args);
    if (replace) {
      res = replace.apply(this, args);
    } else {
      res = originalMethod.apply(this, args);
    }
    after && after.apply(this, args);
    return res;
  };
}
function restoreMethod(obj, methodName) {
  var savedMethodName = SAVED_METHOD_PREFIX + methodName;
  if (obj[savedMethodName]) {
    obj[methodName] = obj[savedMethodName];
    obj[savedMethodName] = null;
  }
}
function applyTransformOnBeziers(bezierCurves, mm) {
  for (var i = 0; i < bezierCurves.length; i++) {
    var subBeziers = bezierCurves[i];
    for (var k = 0; k < subBeziers.length; ) {
      var x = subBeziers[k];
      var y = subBeziers[k + 1];
      subBeziers[k++] = mm[0] * x + mm[2] * y + mm[4];
      subBeziers[k++] = mm[1] * x + mm[3] * y + mm[5];
    }
  }
}
function prepareMorphPath(fromPath, toPath) {
  var fromPathProxy = fromPath.getUpdatedPathProxy();
  var toPathProxy = toPath.getUpdatedPathProxy();
  var _a = alignBezierCurves(pathToBezierCurves(fromPathProxy), pathToBezierCurves(toPathProxy)), fromBezierCurves = _a[0], toBezierCurves = _a[1];
  var fromPathTransform = fromPath.getComputedTransform();
  var toPathTransform = toPath.getComputedTransform();
  function updateIdentityTransform() {
    this.transform = null;
  }
  fromPathTransform && applyTransformOnBeziers(fromBezierCurves, fromPathTransform);
  toPathTransform && applyTransformOnBeziers(toBezierCurves, toPathTransform);
  saveAndModifyMethod(toPath, "updateTransform", { replace: updateIdentityTransform });
  toPath.transform = null;
  var morphingData = findBestMorphingRotation(fromBezierCurves, toBezierCurves, 10, Math.PI);
  var tmpArr = [];
  saveAndModifyMethod(toPath, "buildPath", { replace: function(path) {
    var t = toPath.__morphT;
    var onet = 1 - t;
    var newCp = [];
    for (var i = 0; i < morphingData.length; i++) {
      var item = morphingData[i];
      var from = item.from;
      var to = item.to;
      var angle = item.rotation * t;
      var fromCp = item.fromCp;
      var toCp = item.toCp;
      var sa = Math.sin(angle);
      var ca = Math.cos(angle);
      lerp(newCp, fromCp, toCp, t);
      for (var m = 0; m < from.length; m += 2) {
        var x0_1 = from[m];
        var y0_1 = from[m + 1];
        var x1 = to[m];
        var y1 = to[m + 1];
        var x = x0_1 * onet + x1 * t;
        var y = y0_1 * onet + y1 * t;
        tmpArr[m] = x * ca - y * sa + newCp[0];
        tmpArr[m + 1] = x * sa + y * ca + newCp[1];
      }
      var x0 = tmpArr[0];
      var y0 = tmpArr[1];
      path.moveTo(x0, y0);
      for (var m = 2; m < from.length; ) {
        var x1 = tmpArr[m++];
        var y1 = tmpArr[m++];
        var x2 = tmpArr[m++];
        var y2 = tmpArr[m++];
        var x3 = tmpArr[m++];
        var y3 = tmpArr[m++];
        if (x0 === x1 && y0 === y1 && x2 === x3 && y2 === y3) {
          path.lineTo(x3, y3);
        } else {
          path.bezierCurveTo(x1, y1, x2, y2, x3, y3);
        }
        x0 = x3;
        y0 = y3;
      }
    }
  } });
}
function morphPath(fromPath, toPath, animationOpts) {
  if (!fromPath || !toPath) {
    return toPath;
  }
  var oldDone = animationOpts.done;
  var oldDuring = animationOpts.during;
  prepareMorphPath(fromPath, toPath);
  toPath.__morphT = 0;
  function restoreToPath() {
    restoreMethod(toPath, "buildPath");
    restoreMethod(toPath, "updateTransform");
    toPath.__morphT = -1;
    toPath.createPathProxy();
    toPath.dirtyShape();
  }
  toPath.animateTo({
    __morphT: 1
  }, defaults({
    during: function(p) {
      toPath.dirtyShape();
      oldDuring && oldDuring(p);
    },
    done: function() {
      restoreToPath();
      oldDone && oldDone();
    }
  }, animationOpts));
  return toPath;
}
function hilbert(x, y, minX, minY, maxX, maxY) {
  var bits = 16;
  x = maxX === minX ? 0 : Math.round(32767 * (x - minX) / (maxX - minX));
  y = maxY === minY ? 0 : Math.round(32767 * (y - minY) / (maxY - minY));
  var d = 0;
  var tmp;
  for (var s = (1 << bits) / 2; s > 0; s /= 2) {
    var rx = 0;
    var ry = 0;
    if ((x & s) > 0) {
      rx = 1;
    }
    if ((y & s) > 0) {
      ry = 1;
    }
    d += s * s * (3 * rx ^ ry);
    if (ry === 0) {
      if (rx === 1) {
        x = s - 1 - x;
        y = s - 1 - y;
      }
      tmp = x;
      x = y;
      y = tmp;
    }
  }
  return d;
}
function sortPaths(pathList) {
  var xMin = Infinity;
  var yMin = Infinity;
  var xMax = -Infinity;
  var yMax = -Infinity;
  var cps = map(pathList, function(path) {
    var rect = path.getBoundingRect();
    var m = path.getComputedTransform();
    var x = rect.x + rect.width / 2 + (m ? m[4] : 0);
    var y = rect.y + rect.height / 2 + (m ? m[5] : 0);
    xMin = Math.min(x, xMin);
    yMin = Math.min(y, yMin);
    xMax = Math.max(x, xMax);
    yMax = Math.max(y, yMax);
    return [x, y];
  });
  var items = map(cps, function(cp, idx) {
    return {
      cp,
      z: hilbert(cp[0], cp[1], xMin, yMin, xMax, yMax),
      path: pathList[idx]
    };
  });
  return items.sort(function(a, b) {
    return a.z - b.z;
  }).map(function(item) {
    return item.path;
  });
}
function defaultDividePath(param) {
  return split(param.path, param.count);
}
function createEmptyReturn() {
  return {
    fromIndividuals: [],
    toIndividuals: [],
    count: 0
  };
}
function combineMorph(fromList, toPath, animationOpts) {
  var fromPathList = [];
  function addFromPath(fromList2) {
    for (var i2 = 0; i2 < fromList2.length; i2++) {
      var from2 = fromList2[i2];
      if (isCombineMorphing(from2)) {
        addFromPath(from2.childrenRef());
      } else if (from2 instanceof Path) {
        fromPathList.push(from2);
      }
    }
  }
  addFromPath(fromList);
  var separateCount = fromPathList.length;
  if (!separateCount) {
    return createEmptyReturn();
  }
  var dividePath = animationOpts.dividePath || defaultDividePath;
  var toSubPathList = dividePath({
    path: toPath,
    count: separateCount
  });
  if (toSubPathList.length !== separateCount) {
    console.error("Invalid morphing: unmatched splitted path");
    return createEmptyReturn();
  }
  fromPathList = sortPaths(fromPathList);
  toSubPathList = sortPaths(toSubPathList);
  var oldDone = animationOpts.done;
  var oldDuring = animationOpts.during;
  var individualDelay = animationOpts.individualDelay;
  var identityTransform = new Transformable();
  for (var i = 0; i < separateCount; i++) {
    var from = fromPathList[i];
    var to = toSubPathList[i];
    to.parent = toPath;
    to.copyTransform(identityTransform);
    if (!individualDelay) {
      prepareMorphPath(from, to);
    }
  }
  toPath.__isCombineMorphing = true;
  toPath.childrenRef = function() {
    return toSubPathList;
  };
  function addToSubPathListToZr(zr) {
    for (var i2 = 0; i2 < toSubPathList.length; i2++) {
      toSubPathList[i2].addSelfToZr(zr);
    }
  }
  saveAndModifyMethod(toPath, "addSelfToZr", {
    after: function(zr) {
      addToSubPathListToZr(zr);
    }
  });
  saveAndModifyMethod(toPath, "removeSelfFromZr", {
    after: function(zr) {
      for (var i2 = 0; i2 < toSubPathList.length; i2++) {
        toSubPathList[i2].removeSelfFromZr(zr);
      }
    }
  });
  function restoreToPath() {
    toPath.__isCombineMorphing = false;
    toPath.__morphT = -1;
    toPath.childrenRef = null;
    restoreMethod(toPath, "addSelfToZr");
    restoreMethod(toPath, "removeSelfFromZr");
  }
  var toLen = toSubPathList.length;
  if (individualDelay) {
    var animating_1 = toLen;
    var eachDone = function() {
      animating_1--;
      if (animating_1 === 0) {
        restoreToPath();
        oldDone && oldDone();
      }
    };
    for (var i = 0; i < toLen; i++) {
      var indivdualAnimationOpts = individualDelay ? defaults({
        delay: (animationOpts.delay || 0) + individualDelay(i, toLen, fromPathList[i], toSubPathList[i]),
        done: eachDone
      }, animationOpts) : animationOpts;
      morphPath(fromPathList[i], toSubPathList[i], indivdualAnimationOpts);
    }
  } else {
    toPath.__morphT = 0;
    toPath.animateTo({
      __morphT: 1
    }, defaults({
      during: function(p) {
        for (var i2 = 0; i2 < toLen; i2++) {
          var child = toSubPathList[i2];
          child.__morphT = toPath.__morphT;
          child.dirtyShape();
        }
        oldDuring && oldDuring(p);
      },
      done: function() {
        restoreToPath();
        for (var i2 = 0; i2 < fromList.length; i2++) {
          restoreMethod(fromList[i2], "updateTransform");
        }
        oldDone && oldDone();
      }
    }, animationOpts));
  }
  if (toPath.__zr) {
    addToSubPathListToZr(toPath.__zr);
  }
  return {
    fromIndividuals: fromPathList,
    toIndividuals: toSubPathList,
    count: toLen
  };
}
function separateMorph(fromPath, toPathList, animationOpts) {
  var toLen = toPathList.length;
  var fromPathList = [];
  var dividePath = animationOpts.dividePath || defaultDividePath;
  function addFromPath(fromList) {
    for (var i2 = 0; i2 < fromList.length; i2++) {
      var from = fromList[i2];
      if (isCombineMorphing(from)) {
        addFromPath(from.childrenRef());
      } else if (from instanceof Path) {
        fromPathList.push(from);
      }
    }
  }
  if (isCombineMorphing(fromPath)) {
    addFromPath(fromPath.childrenRef());
    var fromLen = fromPathList.length;
    if (fromLen < toLen) {
      var k = 0;
      for (var i = fromLen; i < toLen; i++) {
        fromPathList.push(clonePath(fromPathList[k++ % fromLen]));
      }
    }
    fromPathList.length = toLen;
  } else {
    fromPathList = dividePath({ path: fromPath, count: toLen });
    var fromPathTransform = fromPath.getComputedTransform();
    for (var i = 0; i < fromPathList.length; i++) {
      fromPathList[i].setLocalTransform(fromPathTransform);
    }
    if (fromPathList.length !== toLen) {
      console.error("Invalid morphing: unmatched splitted path");
      return createEmptyReturn();
    }
  }
  fromPathList = sortPaths(fromPathList);
  toPathList = sortPaths(toPathList);
  var individualDelay = animationOpts.individualDelay;
  for (var i = 0; i < toLen; i++) {
    var indivdualAnimationOpts = individualDelay ? defaults({
      delay: (animationOpts.delay || 0) + individualDelay(i, toLen, fromPathList[i], toPathList[i])
    }, animationOpts) : animationOpts;
    morphPath(fromPathList[i], toPathList[i], indivdualAnimationOpts);
  }
  return {
    fromIndividuals: fromPathList,
    toIndividuals: toPathList,
    count: toPathList.length
  };
}
function isMultiple(elements) {
  return isArray(elements[0]);
}
function prepareMorphBatches(one, many) {
  var batches = [];
  var batchCount = one.length;
  for (var i = 0; i < batchCount; i++) {
    batches.push({
      one: one[i],
      many: []
    });
  }
  for (var i = 0; i < many.length; i++) {
    var len2 = many[i].length;
    var k = void 0;
    for (k = 0; k < len2; k++) {
      batches[k % batchCount].many.push(many[i][k]);
    }
  }
  var off = 0;
  for (var i = batchCount - 1; i >= 0; i--) {
    if (!batches[i].many.length) {
      var moveFrom = batches[off].many;
      if (moveFrom.length <= 1) {
        if (off) {
          off = 0;
        } else {
          return batches;
        }
      }
      var len2 = moveFrom.length;
      var mid = Math.ceil(len2 / 2);
      batches[i].many = moveFrom.slice(mid, len2);
      batches[off].many = moveFrom.slice(0, mid);
      off++;
    }
  }
  return batches;
}
var pathDividers = {
  clone: function(params) {
    var ret = [];
    var approxOpacity = 1 - Math.pow(1 - params.path.style.opacity, 1 / params.count);
    for (var i = 0; i < params.count; i++) {
      var cloned = clonePath(params.path);
      cloned.setStyle("opacity", approxOpacity);
      ret.push(cloned);
    }
    return ret;
  },
  split: null
};
function applyMorphAnimation(from, to, divideShape, seriesModel, dataIndex, animateOtherProps) {
  if (!from.length || !to.length) {
    return;
  }
  var updateAnimationCfg = getAnimationConfig("update", seriesModel, dataIndex);
  if (!(updateAnimationCfg && updateAnimationCfg.duration > 0)) {
    return;
  }
  var animationDelay = seriesModel.getModel("universalTransition").get("delay");
  var animationCfg = Object.assign({
    setToFinal: true
  }, updateAnimationCfg);
  var many;
  var one;
  if (isMultiple(from)) {
    many = from;
    one = to;
  }
  if (isMultiple(to)) {
    many = to;
    one = from;
  }
  function morphOneBatch(batch, fromIsMany2, animateIndex2, animateCount2, forceManyOne) {
    var batchMany = batch.many;
    var batchOne = batch.one;
    if (batchMany.length === 1 && !forceManyOne) {
      var batchFrom = fromIsMany2 ? batchMany[0] : batchOne;
      var batchTo = fromIsMany2 ? batchOne : batchMany[0];
      if (isCombineMorphing(batchFrom)) {
        morphOneBatch({
          many: [batchFrom],
          one: batchTo
        }, true, animateIndex2, animateCount2, true);
      } else {
        var individualAnimationCfg = animationDelay ? defaults({
          delay: animationDelay(animateIndex2, animateCount2)
        }, animationCfg) : animationCfg;
        morphPath(batchFrom, batchTo, individualAnimationCfg);
        animateOtherProps(batchFrom, batchTo, batchFrom, batchTo, individualAnimationCfg);
      }
    } else {
      var separateAnimationCfg = defaults({
        dividePath: pathDividers[divideShape],
        individualDelay: animationDelay && function(idx, count2, fromPath, toPath) {
          return animationDelay(idx + animateIndex2, animateCount2);
        }
      }, animationCfg);
      var _a = fromIsMany2 ? combineMorph(batchMany, batchOne, separateAnimationCfg) : separateMorph(batchOne, batchMany, separateAnimationCfg), fromIndividuals = _a.fromIndividuals, toIndividuals = _a.toIndividuals;
      var count = fromIndividuals.length;
      for (var k = 0; k < count; k++) {
        var individualAnimationCfg = animationDelay ? defaults({
          delay: animationDelay(k, count)
        }, animationCfg) : animationCfg;
        animateOtherProps(fromIndividuals[k], toIndividuals[k], fromIsMany2 ? batchMany[k] : batch.one, fromIsMany2 ? batch.one : batchMany[k], individualAnimationCfg);
      }
    }
  }
  var fromIsMany = many ? many === from : from.length > to.length;
  var morphBatches = many ? prepareMorphBatches(one, many) : prepareMorphBatches(fromIsMany ? to : from, [fromIsMany ? from : to]);
  var animateCount = 0;
  for (var i = 0; i < morphBatches.length; i++) {
    animateCount += morphBatches[i].many.length;
  }
  var animateIndex = 0;
  for (var i = 0; i < morphBatches.length; i++) {
    morphOneBatch(morphBatches[i], fromIsMany, animateIndex, animateCount);
    animateIndex += morphBatches[i].many.length;
  }
}
function getPathList(elements) {
  if (!elements) {
    return [];
  }
  if (isArray(elements)) {
    var pathList_1 = [];
    for (var i = 0; i < elements.length; i++) {
      pathList_1.push(getPathList(elements[i]));
    }
    return pathList_1;
  }
  var pathList = [];
  elements.traverse(function(el) {
    if (el instanceof Path && !el.disableMorphing && !el.invisible && !el.ignore) {
      pathList.push(el);
    }
  });
  return pathList;
}
var DATA_COUNT_THRESHOLD = 1e4;
var getUniversalTransitionGlobalStore = makeInner();
function getGroupIdDimension(data) {
  var dimensions = data.dimensions;
  for (var i = 0; i < dimensions.length; i++) {
    var dimInfo = data.getDimensionInfo(dimensions[i]);
    if (dimInfo && dimInfo.otherDims.itemGroupId === 0) {
      return dimensions[i];
    }
  }
}
function flattenDataDiffItems(list) {
  var items = [];
  each$2(list, function(seriesInfo) {
    var data = seriesInfo.data;
    if (data.count() > DATA_COUNT_THRESHOLD) {
      return;
    }
    var indices = data.getIndices();
    var groupDim = getGroupIdDimension(data);
    for (var dataIndex = 0; dataIndex < indices.length; dataIndex++) {
      items.push({
        data,
        dim: seriesInfo.dim || groupDim,
        divide: seriesInfo.divide,
        dataIndex
      });
    }
  });
  return items;
}
function fadeInElement(newEl, newSeries, newIndex) {
  newEl.traverse(function(el) {
    if (el instanceof Path) {
      initProps(el, {
        style: {
          opacity: 0
        }
      }, newSeries, {
        dataIndex: newIndex,
        isFrom: true
      });
    }
  });
}
function removeEl(el) {
  if (el.parent) {
    var computedTransform = el.getComputedTransform();
    el.setLocalTransform(computedTransform);
    el.parent.remove(el);
  }
}
function stopAnimation(el) {
  el.stopAnimation();
  if (el.isGroup) {
    el.traverse(function(child) {
      child.stopAnimation();
    });
  }
}
function animateElementStyles(el, dataIndex, seriesModel) {
  var animationConfig = getAnimationConfig("update", seriesModel, dataIndex);
  animationConfig && el.traverse(function(child) {
    if (child instanceof Displayable) {
      var oldStyle = getOldStyle(child);
      if (oldStyle) {
        child.animateFrom({
          style: oldStyle
        }, animationConfig);
      }
    }
  });
}
function isAllIdSame(oldDiffItems, newDiffItems) {
  var len2 = oldDiffItems.length;
  if (len2 !== newDiffItems.length) {
    return false;
  }
  for (var i = 0; i < len2; i++) {
    var oldItem = oldDiffItems[i];
    var newItem = newDiffItems[i];
    if (oldItem.data.getId(oldItem.dataIndex) !== newItem.data.getId(newItem.dataIndex)) {
      return false;
    }
  }
  return true;
}
function transitionBetween(oldList, newList, api) {
  var oldDiffItems = flattenDataDiffItems(oldList);
  var newDiffItems = flattenDataDiffItems(newList);
  function updateMorphingPathProps(from, to, rawFrom, rawTo, animationCfg) {
    if (rawFrom || from) {
      to.animateFrom({
        style: (rawFrom || from).style
      }, animationCfg);
    }
  }
  function findKeyDim(items) {
    for (var i2 = 0; i2 < items.length; i2++) {
      if (items[i2].dim) {
        return items[i2].dim;
      }
    }
  }
  var oldKeyDim = findKeyDim(oldDiffItems);
  var newKeyDim = findKeyDim(newDiffItems);
  var hasMorphAnimation = false;
  function createKeyGetter(isOld, onlyGetId) {
    return function(diffItem) {
      var data = diffItem.data;
      var dataIndex = diffItem.dataIndex;
      if (onlyGetId) {
        return data.getId(dataIndex);
      }
      var dataGroupId = data.hostModel && data.hostModel.get("dataGroupId");
      var keyDim = isOld ? oldKeyDim || newKeyDim : newKeyDim || oldKeyDim;
      var dimInfo = keyDim && data.getDimensionInfo(keyDim);
      var dimOrdinalMeta = dimInfo && dimInfo.ordinalMeta;
      if (dimInfo) {
        var key = data.get(dimInfo.name, dataIndex);
        if (dimOrdinalMeta) {
          return dimOrdinalMeta.categories[key] || key + "";
        }
        return key + "";
      }
      var itemVal = data.getRawDataItem(dataIndex);
      if (itemVal && itemVal.groupId) {
        return itemVal.groupId + "";
      }
      return dataGroupId || data.getId(dataIndex);
    };
  }
  var useId = isAllIdSame(oldDiffItems, newDiffItems);
  var isElementStillInChart = {};
  if (!useId) {
    for (var i = 0; i < newDiffItems.length; i++) {
      var newItem = newDiffItems[i];
      var el = newItem.data.getItemGraphicEl(newItem.dataIndex);
      if (el) {
        isElementStillInChart[el.id] = true;
      }
    }
  }
  function updateOneToOne(newIndex, oldIndex) {
    var oldItem = oldDiffItems[oldIndex];
    var newItem2 = newDiffItems[newIndex];
    var newSeries = newItem2.data.hostModel;
    var oldEl = oldItem.data.getItemGraphicEl(oldItem.dataIndex);
    var newEl = newItem2.data.getItemGraphicEl(newItem2.dataIndex);
    if (oldEl === newEl) {
      newEl && animateElementStyles(newEl, newItem2.dataIndex, newSeries);
      return;
    }
    if (oldEl && isElementStillInChart[oldEl.id]) {
      return;
    }
    if (newEl) {
      stopAnimation(newEl);
      if (oldEl) {
        stopAnimation(oldEl);
        removeEl(oldEl);
        hasMorphAnimation = true;
        applyMorphAnimation(getPathList(oldEl), getPathList(newEl), newItem2.divide, newSeries, newIndex, updateMorphingPathProps);
      } else {
        fadeInElement(newEl, newSeries, newIndex);
      }
    }
  }
  new DataDiffer(oldDiffItems, newDiffItems, createKeyGetter(true, useId), createKeyGetter(false, useId), null, "multiple").update(updateOneToOne).updateManyToOne(function(newIndex, oldIndices) {
    var newItem2 = newDiffItems[newIndex];
    var newData = newItem2.data;
    var newSeries = newData.hostModel;
    var newEl = newData.getItemGraphicEl(newItem2.dataIndex);
    var oldElsList = filter(map(oldIndices, function(idx) {
      return oldDiffItems[idx].data.getItemGraphicEl(oldDiffItems[idx].dataIndex);
    }), function(oldEl) {
      return oldEl && oldEl !== newEl && !isElementStillInChart[oldEl.id];
    });
    if (newEl) {
      stopAnimation(newEl);
      if (oldElsList.length) {
        each$2(oldElsList, function(oldEl) {
          stopAnimation(oldEl);
          removeEl(oldEl);
        });
        hasMorphAnimation = true;
        applyMorphAnimation(getPathList(oldElsList), getPathList(newEl), newItem2.divide, newSeries, newIndex, updateMorphingPathProps);
      } else {
        fadeInElement(newEl, newSeries, newItem2.dataIndex);
      }
    }
  }).updateOneToMany(function(newIndices, oldIndex) {
    var oldItem = oldDiffItems[oldIndex];
    var oldEl = oldItem.data.getItemGraphicEl(oldItem.dataIndex);
    if (oldEl && isElementStillInChart[oldEl.id]) {
      return;
    }
    var newElsList = filter(map(newIndices, function(idx) {
      return newDiffItems[idx].data.getItemGraphicEl(newDiffItems[idx].dataIndex);
    }), function(el2) {
      return el2 && el2 !== oldEl;
    });
    var newSeris = newDiffItems[newIndices[0]].data.hostModel;
    if (newElsList.length) {
      each$2(newElsList, function(newEl) {
        return stopAnimation(newEl);
      });
      if (oldEl) {
        stopAnimation(oldEl);
        removeEl(oldEl);
        hasMorphAnimation = true;
        applyMorphAnimation(getPathList(oldEl), getPathList(newElsList), oldItem.divide, newSeris, newIndices[0], updateMorphingPathProps);
      } else {
        each$2(newElsList, function(newEl) {
          return fadeInElement(newEl, newSeris, newIndices[0]);
        });
      }
    }
  }).updateManyToMany(function(newIndices, oldIndices) {
    new DataDiffer(oldIndices, newIndices, function(rawIdx) {
      return oldDiffItems[rawIdx].data.getId(oldDiffItems[rawIdx].dataIndex);
    }, function(rawIdx) {
      return newDiffItems[rawIdx].data.getId(newDiffItems[rawIdx].dataIndex);
    }).update(function(newIndex, oldIndex) {
      updateOneToOne(newIndices[newIndex], oldIndices[oldIndex]);
    }).execute();
  }).execute();
  if (hasMorphAnimation) {
    each$2(newList, function(_a) {
      var data = _a.data;
      var seriesModel = data.hostModel;
      var view = seriesModel && api.getViewOfSeriesModel(seriesModel);
      var animationCfg = getAnimationConfig("update", seriesModel, 0);
      if (view && seriesModel.isAnimationEnabled() && animationCfg && animationCfg.duration > 0) {
        view.group.traverse(function(el2) {
          if (el2 instanceof Path && !el2.animators.length) {
            el2.animateFrom({
              style: {
                opacity: 0
              }
            }, animationCfg);
          }
        });
      }
    });
  }
}
function getSeriesTransitionKey(series) {
  var seriesKey = series.getModel("universalTransition").get("seriesKey");
  if (!seriesKey) {
    return series.id;
  }
  return seriesKey;
}
function convertArraySeriesKeyToString(seriesKey) {
  if (isArray(seriesKey)) {
    return seriesKey.sort().join(",");
  }
  return seriesKey;
}
function getDivideShapeFromData(data) {
  if (data.hostModel) {
    return data.hostModel.getModel("universalTransition").get("divideShape");
  }
}
function findTransitionSeriesBatches(globalStore, params) {
  var updateBatches = createHashMap();
  var oldDataMap = createHashMap();
  var oldDataMapForSplit = createHashMap();
  each$2(globalStore.oldSeries, function(series, idx) {
    var oldData = globalStore.oldData[idx];
    var transitionKey = getSeriesTransitionKey(series);
    var transitionKeyStr = convertArraySeriesKeyToString(transitionKey);
    oldDataMap.set(transitionKeyStr, oldData);
    if (isArray(transitionKey)) {
      each$2(transitionKey, function(key) {
        oldDataMapForSplit.set(key, {
          data: oldData,
          key: transitionKeyStr
        });
      });
    }
  });
  each$2(params.updatedSeries, function(series) {
    if (series.isUniversalTransitionEnabled() && series.isAnimationEnabled()) {
      var newData = series.getData();
      var transitionKey = getSeriesTransitionKey(series);
      var transitionKeyStr = convertArraySeriesKeyToString(transitionKey);
      var oldData = oldDataMap.get(transitionKeyStr);
      if (oldData) {
        updateBatches.set(transitionKeyStr, {
          oldSeries: [{
            divide: getDivideShapeFromData(oldData),
            data: oldData
          }],
          newSeries: [{
            divide: getDivideShapeFromData(newData),
            data: newData
          }]
        });
      } else {
        if (isArray(transitionKey)) {
          var oldSeries_1 = [];
          each$2(transitionKey, function(key) {
            var oldData2 = oldDataMap.get(key);
            if (oldData2) {
              oldSeries_1.push({
                divide: getDivideShapeFromData(oldData2),
                data: oldData2
              });
            }
          });
          if (oldSeries_1.length) {
            updateBatches.set(transitionKeyStr, {
              oldSeries: oldSeries_1,
              newSeries: [{
                data: newData,
                divide: getDivideShapeFromData(newData)
              }]
            });
          }
        } else {
          var oldData_1 = oldDataMapForSplit.get(transitionKey);
          if (oldData_1) {
            var batch = updateBatches.get(oldData_1.key);
            if (!batch) {
              batch = {
                oldSeries: [{
                  data: oldData_1.data,
                  divide: getDivideShapeFromData(oldData_1.data)
                }],
                newSeries: []
              };
              updateBatches.set(oldData_1.key, batch);
            }
            batch.newSeries.push({
              data: newData,
              divide: getDivideShapeFromData(newData)
            });
          }
        }
      }
    }
  });
  return updateBatches;
}
function querySeries(series, finder) {
  for (var i = 0; i < series.length; i++) {
    var found = finder.seriesIndex != null && finder.seriesIndex === series[i].seriesIndex || finder.seriesId != null && finder.seriesId === series[i].id;
    if (found) {
      return i;
    }
  }
}
function transitionSeriesFromOpt(transitionOpt, globalStore, params, api) {
  var from = [];
  var to = [];
  each$2(normalizeToArray(transitionOpt.from), function(finder) {
    var idx = querySeries(globalStore.oldSeries, finder);
    if (idx >= 0) {
      from.push({
        data: globalStore.oldData[idx],
        divide: getDivideShapeFromData(globalStore.oldData[idx]),
        dim: finder.dimension
      });
    }
  });
  each$2(normalizeToArray(transitionOpt.to), function(finder) {
    var idx = querySeries(params.updatedSeries, finder);
    if (idx >= 0) {
      var data = params.updatedSeries[idx].getData();
      to.push({
        data,
        divide: getDivideShapeFromData(data),
        dim: finder.dimension
      });
    }
  });
  if (from.length > 0 && to.length > 0) {
    transitionBetween(from, to, api);
  }
}
function installUniversalTransition(registers) {
  registers.registerUpdateLifecycle("series:beforeupdate", function(ecMOdel, api, params) {
    each$2(normalizeToArray(params.seriesTransition), function(transOpt) {
      each$2(normalizeToArray(transOpt.to), function(finder) {
        var series = params.updatedSeries;
        for (var i = 0; i < series.length; i++) {
          if (finder.seriesIndex != null && finder.seriesIndex === series[i].seriesIndex || finder.seriesId != null && finder.seriesId === series[i].id) {
            series[i][SERIES_UNIVERSAL_TRANSITION_PROP] = true;
          }
        }
      });
    });
  });
  registers.registerUpdateLifecycle("series:transition", function(ecModel, api, params) {
    var globalStore = getUniversalTransitionGlobalStore(api);
    if (globalStore.oldSeries && params.updatedSeries && params.optionChanged) {
      var transitionOpt = params.seriesTransition;
      if (transitionOpt) {
        each$2(normalizeToArray(transitionOpt), function(opt) {
          transitionSeriesFromOpt(opt, globalStore, params, api);
        });
      } else {
        var updateBatches_1 = findTransitionSeriesBatches(globalStore, params);
        each$2(updateBatches_1.keys(), function(key) {
          var batch = updateBatches_1.get(key);
          transitionBetween(batch.oldSeries, batch.newSeries, api);
        });
      }
      each$2(params.updatedSeries, function(series) {
        if (series[SERIES_UNIVERSAL_TRANSITION_PROP]) {
          series[SERIES_UNIVERSAL_TRANSITION_PROP] = false;
        }
      });
    }
    var allSeries = ecModel.getSeries();
    var savedSeries = globalStore.oldSeries = [];
    var savedData = globalStore.oldData = [];
    for (var i = 0; i < allSeries.length; i++) {
      var data = allSeries[i].getData();
      if (data.count() < DATA_COUNT_THRESHOLD) {
        savedSeries.push(allSeries[i]);
        savedData.push(data);
      }
    }
  });
}
use([install]);
use([install$r]);
use([install$s, install$t, install$u, install$n, install$v, install$w, install$m, install$l, install$k, install$j, install$i, install$h, install$g, install$f, install$e, install$d, install$c, install$b, install$x, install$a, install$9, install$8]);
use(install$y);
use(install$z);
use(install$A);
use(install$7);
use(install$p);
use(install$B);
use(install$C);
use(install$D);
use(install$E);
use(install$q);
use(install$6);
use(install$F);
use(install$G);
use(install$5);
use(install$4);
use(install$3);
use(install$H);
use(install$I);
use(install$J);
use(install$K);
use(install$L);
use(install$M);
use(install$N);
use(install$O);
use(install$2);
use(install$1);
use(installUniversalTransition);
use(installLabelLayout);
const _sfc_main = defineComponent({
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "calc(100vh - 78px)"
    }
  },
  setup() {
    const chartRef = ref(null);
    const { setOptions } = useECharts(chartRef);
    onMounted(async () => {
      const json = await (await __vitePreload(() => import("./china.a225b5d5.js"), true ? [] : void 0)).default;
      registerMap("china", json);
      setOptions({
        visualMap: [
          {
            min: 0,
            max: 1e3,
            left: "left",
            top: "bottom",
            text: ["\u9AD8", "\u4F4E"],
            calculable: false,
            orient: "horizontal",
            inRange: {
              color: ["#e0ffff", "#006edd"],
              symbolSize: [30, 100]
            }
          }
        ],
        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(0, 0, 0, .6)",
          textStyle: {
            color: "#fff",
            fontSize: 12
          }
        },
        series: [
          {
            name: "iphone4",
            type: "map",
            map: "china",
            label: {
              show: true,
              color: "rgb(249, 249, 249)",
              fontSize: 10
            },
            itemStyle: {
              areaColor: "#2f82ce",
              borderColor: "#0DAAC1"
            },
            data: mapData
          }
        ]
      });
    });
    return { chartRef };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "chartRef",
    style: normalizeStyle({ height: _ctx.height, width: _ctx.width })
  }, null, 4);
}
var Map = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Map as default };
