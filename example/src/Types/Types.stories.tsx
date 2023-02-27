// Libraries
import React, {CSSProperties} from 'react'
import marked from 'marked'
import chroma from 'chroma-js'

// Storybook
import {storiesOf} from '@storybook/react'

// Components
import {Button} from '../Components/Button/Composed/Button'
import {Input} from '../Components/Inputs/Input'
import {Icon} from '../Components/Icon/Base/Icon'
import {Panel} from '../Components/Panel'

// Types
import {
  ComponentColor,
  ComponentSize,
  ComponentStatus,
  InfluxColors,
  Gradients,
  IconFont,
} from './'

// Constants
import {getColorsFromGradient} from '../Utils/colors'

// Notes
import TypesReadme from './Types.md'
import TypographyReadme from './Typography.md'
import ColorsGradientsReadme from './ColorsGradients.md'
import IconFontReadme from './IconFont.md'
import SpaceReadme from './Space.md'

const dataTypeStories = storiesOf('Foundations/Shared', module)

dataTypeStories.add(
  'Overview',
  () => (
    <div className="markdown-body">
      <h3>Component Colorization and Size</h3>
      <pre className="language-js">
        <code>
          import &#123;ComponentColor, ComponentSize&#125; from
          '@influxdata/clockface'
        </code>
      </pre>
      <table className="two-axis-table">
        <tbody>
          <tr>
            <td />
            <td>
              <code>Primary</code>
            </td>
            <td>
              <code>Secondary</code>
            </td>
            <td>
              <code>Tertiary</code>
            </td>
            <td>
              <code>Danger</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>ExtraSmall</code>
            </td>
            <td>
              <Button
                size={ComponentSize.ExtraSmall}
                color={ComponentColor.Primary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.ExtraSmall}
                color={ComponentColor.Secondary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.ExtraSmall}
                color={ComponentColor.Tertiary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.ExtraSmall}
                color={ComponentColor.Danger}
                text="Button"
              />
            </td>
          </tr>
          <tr>
            <td>
              <code>Small</code>
            </td>
            <td>
              <Button
                size={ComponentSize.Small}
                color={ComponentColor.Primary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Small}
                color={ComponentColor.Secondary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Small}
                color={ComponentColor.Tertiary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Small}
                color={ComponentColor.Danger}
                text="Button"
              />
            </td>
          </tr>
          <tr>
            <td>
              <code>Medium</code>
            </td>
            <td>
              <Button
                size={ComponentSize.Medium}
                color={ComponentColor.Primary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Medium}
                color={ComponentColor.Secondary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Medium}
                color={ComponentColor.Tertiary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Medium}
                color={ComponentColor.Danger}
                text="Button"
              />
            </td>
          </tr>
          <tr>
            <td>
              <code>Large</code>
            </td>
            <td>
              <Button
                size={ComponentSize.Large}
                color={ComponentColor.Primary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Large}
                color={ComponentColor.Secondary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Large}
                color={ComponentColor.Tertiary}
                text="Button"
              />
            </td>
            <td>
              <Button
                size={ComponentSize.Large}
                color={ComponentColor.Danger}
                text="Button"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <h3>Component Status</h3>
      <pre className="language-js">
        <code>
          import &#123;ComponentStatus&#125; from '@influxdata/clockface'
        </code>
      </pre>
      <table className="two-axis-table">
        <tbody>
          <tr>
            <td>
              <code>ComponentStatus.Default</code>
            </td>
            <td>
              <Input
                value="Hello World!"
                status={ComponentStatus.Default}
                onChange={() => {
                  // do nothing
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <code>ComponentStatus.Disabled</code>
            </td>
            <td>
              <Input
                value="Hello World!"
                status={ComponentStatus.Disabled}
                onChange={() => {
                  // do nothing
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <code>ComponentStatus.Loading</code>
            </td>
            <td>
              <Input
                value="Hello World!"
                status={ComponentStatus.Loading}
                onChange={() => {
                  // do nothing
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <code>ComponentStatus.Valid</code>
            </td>
            <td>
              <Input
                value="Hello World!"
                status={ComponentStatus.Valid}
                onChange={() => {
                  // do nothing
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <code>ComponentStatus.Error</code>
            </td>
            <td>
              <Input
                value="Hello World!"
                status={ComponentStatus.Error}
                onChange={() => {
                  // do nothing
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
  {
    readme: {
      content: marked(TypesReadme),
    },
  }
)

dataTypeStories.add(
  'Colors & Gradients',
  () => {
    const convertEnumToObjArray = (enumerator: object) => {
      const enumKeys = Object.keys(enumerator)

      return enumKeys.map(ek => ({
        key: ek,
        value: enumerator[ek],
      }))
    }

    const colorsArray = convertEnumToObjArray(InfluxColors)
    const gradientsArray = Object.keys(Gradients)

    const nuetrals = colorsArray.slice(0, 11)
    const blues = colorsArray.slice(31, 39)
    const purples = colorsArray.slice(39, 47)
    const greens = colorsArray.slice(47, 55)
    const yellows = colorsArray.slice(55, 63)
    const reds = colorsArray.slice(63, 71)
    const brandColors = colorsArray.slice(71, 76)

    const clockfaceGradients = gradientsArray.slice(0, 40)
    const brandGradients = gradientsArray.slice(40, 50)
    const defaultGradients = gradientsArray.slice(50, 53)
    const primaryGradients = gradientsArray.slice(53, 56)
    const secondaryGradients = gradientsArray.slice(56, 59)
    const successGradients = gradientsArray.slice(59, 62)
    const dangerGradients = gradientsArray.slice(65, 68)

    const colorCardClassName = (hexcode: string): string => {
      const lightContrast = chroma.contrast(InfluxColors.White, hexcode)
      const darkContrast = chroma.contrast(InfluxColors.Obsidian, hexcode)
      const cardTextColor =
        lightContrast >= darkContrast ? 'light-text' : 'dark-text'

      return `colors-grid--card ${cardTextColor}`
    }

    const gradientCardClassName = (gradient: string): string => {
      const {start} = getColorsFromGradient(gradient)

      const lightContrast = chroma.contrast(InfluxColors.White, start)
      const darkContrast = chroma.contrast(InfluxColors.Obsidian, start)
      const cardTextColor =
        lightContrast >= darkContrast ? 'light-text' : 'dark-text'

      return `gradients-grid--card ${cardTextColor}`
    }

    const generateGradientStyle = (gradient: string): CSSProperties => {
      const {start, stop} = getColorsFromGradient(gradient)

      return {
        background: `linear-gradient(45deg,  ${start} 0%,${stop} 100%)`,
      }
    }

    const deprecatingAccentColors = (color: any) => {
      const nonDeprecatingColors = [
        InfluxColors.Pool,
        InfluxColors.Rainforest,
        InfluxColors.Fire,
        InfluxColors.Pineapple,
        InfluxColors.Amethyst,
      ]

      if (!nonDeprecatingColors.includes(color)) {
        return {backgroundColor: color, opacity: '.2'}
      } else {
        return {backgroundColor: color}
      }
    }

    const deprecatingGradientColors = (color: any) => {
      const nonDeprecatingGradients = [
        Gradients.Info,
        Gradients.Success,
        Gradients.Danger,
      ]

      if (!nonDeprecatingGradients.includes(color)) {
        const gradientStyle = generateGradientStyle(color)
        return {...gradientStyle, opacity: '0.2'}
      } else {
        return generateGradientStyle(color)
      }
    }
    return (
      <div className="markdown-body">
        <h3>Clockface Colors</h3>
        <pre className="language-js">
          <code>
            import &#123;InfluxColors&#125; from '@influxdata/clockface'
          </code>
        </pre>
        <h5>Nuetrals</h5>
        <div className="colors-grid">
          {nuetrals.map(color => (
            <div
              className={colorCardClassName(color.value)}
              key={color.key}
              style={{backgroundColor: color.value}}
            >
              <p>{`${color.key}`}</p>
              <p className="colors-grid--hex">{color.value}</p>
            </div>
          ))}
        </div>
        <h5>Blues</h5>
        <div className="colors-grid">
          {blues.map(color => (
            <div
              className={colorCardClassName(color.value)}
              key={color.key}
              style={deprecatingAccentColors(color.value)}
            >
              <p>{color.key}</p>
              <p className="colors-grid--hex">{color.value}</p>
            </div>
          ))}
        </div>
        <h5>Purples</h5>
        <div className="colors-grid">
          {purples.map(color => (
            <div
              className={colorCardClassName(color.value)}
              key={color.key}
              style={deprecatingAccentColors(color.value)}
            >
              <p>{color.key}</p>
              <p className="colors-grid--hex">{color.value}</p>
            </div>
          ))}
        </div>
        <h5>Greens</h5>
        <div className="colors-grid">
          {greens.map(color => (
            <div
              className={colorCardClassName(color.value)}
              key={color.key}
              style={deprecatingAccentColors(color.value)}
            >
              <p>{color.key}</p>
              <p className="colors-grid--hex">{color.value}</p>
            </div>
          ))}
        </div>
        <h5>Yellows</h5>
        <div className="colors-grid">
          {yellows.map(color => (
            <div
              className={colorCardClassName(color.value)}
              key={color.key}
              style={deprecatingAccentColors(color.value)}
            >
              <p>{color.key}</p>
              <p className="colors-grid--hex">{color.value}</p>
            </div>
          ))}
        </div>
        <h5>Reds</h5>
        <div className="colors-grid">
          {reds.map(color => (
            <div
              className={colorCardClassName(color.value)}
              key={color.key}
              style={deprecatingAccentColors(color.value)}
            >
              <p>{color.key}</p>
              <p className="colors-grid--hex">{color.value}</p>
            </div>
          ))}
        </div>
        <h5>InfluxData Brand Colors</h5>
        <div className="colors-grid">
          {brandColors.map(color => (
            <div
              className={colorCardClassName(color.value)}
              key={color.key}
              style={deprecatingAccentColors(color.value)}
            >
              <p>{color.key}</p>
              <p className="colors-grid--hex">{color.value}</p>
            </div>
          ))}
        </div>
        <hr />
        <h3>Clockface Gradients</h3>
        <pre className="language-js">
          <code>import &#123;Gradients&#125; from '@influxdata/clockface'</code>
        </pre>
        <h5>System Gradients</h5>
        <p>Default (Grey)</p>
        <div className="gradients-grid">
          {defaultGradients.map(g => (
            <div
              className={gradientCardClassName(g)}
              key={g}
              style={deprecatingGradientColors(g)}
            >
              <p>{g}</p>
            </div>
          ))}
        </div>
        <p>Primary (Blue)</p>
        <div className="gradients-grid">
          {primaryGradients.map(g => (
            <div
              className={gradientCardClassName(g)}
              key={g}
              style={deprecatingGradientColors(g)}
            >
              <p>{g}</p>
            </div>
          ))}
        </div>
        <p>Secondary (Purple)</p>
        <div className="gradients-grid">
          {secondaryGradients.map(g => (
            <div
              className={gradientCardClassName(g)}
              key={g}
              style={deprecatingGradientColors(g)}
            >
              <p>{g}</p>
            </div>
          ))}
        </div>
        <p>Success (Green)</p>
        <div className="gradients-grid">
          {successGradients.map(g => (
            <div
              className={gradientCardClassName(g)}
              key={g}
              style={deprecatingGradientColors(g)}
            >
              <p>{g}</p>
            </div>
          ))}
        </div>
        <p>Danger (Red)</p>
        <div className="gradients-grid">
          {dangerGradients.map(g => (
            <div
              className={gradientCardClassName(g)}
              key={g}
              style={deprecatingGradientColors(g)}
            >
              <p>{g}</p>
            </div>
          ))}
        </div>
        <h5>Multi-Hue Gradients</h5>
        <div className="gradients-grid">
          {clockfaceGradients.map(g => (
            <div
              className={gradientCardClassName(g)}
              key={g}
              style={deprecatingGradientColors(g)}
            >
              <p>{g}</p>
            </div>
          ))}
        </div>
        <h5>InfluxData Brand Gradients</h5>
        <div className="gradients-grid">
          {brandGradients.map(g => (
            <div
              className={gradientCardClassName(g)}
              key={g}
              style={deprecatingGradientColors(g)}
            >
              <p>{g}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ColorsGradientsReadme),
    },
  }
)

dataTypeStories.add(
  'Icon Font',
  () => {
    const getIconValue = (icon: string): string => IconFont[icon]

    return (
      <div className="markdown-body">
        <div className="icon-grid">
          {Object.keys(IconFont).map(icon => (
            <div key={icon} className="icon-grid--cell">
              <Icon glyph={getIconValue(icon)} />
              <code>{icon}</code>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(IconFontReadme),
    },
  }
)

dataTypeStories.add(
  'Typographic scales',
  () => {
    return (
      <div className="markdown-body">
        <table>
          <tbody>
            {[-1, 0, 1, 2, 3, 4, 5, 6].map(step => {
              return (
                <tr key={step}>
                  <td>
                    <code>$cf-text-base-{step}</code>
                  </td>
                  <td>
                    <div className={`type-step-${step}`}>Step {step}</div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  },
  {
    readme: {
      content: TypographyReadme,
    },
  }
)

dataTypeStories.add(
  'Space scales',
  () => {
    return (
      <div className="markdown-body">
        <table>
          <thead>
            <tr>
              <th>Step</th>
              <th>Example</th>
              <th>Size</th>
              <th>SCSS</th>
            </tr>
          </thead>
          <tbody>
            {[
              {step: '3xs', size: 4},
              {step: '2xs', size: 8},
              {step: 'xs', size: 12},
              {step: 's', size: 16},
              {step: 'm', size: 24},
              {step: 'l', size: 32},
              {step: 'xl', size: 48},
              {step: '2xl', size: 64},
              {step: '3xl', size: 128},
            ].map(({step, size}) => {
              return (
                <tr key={step}>
                  <td>
                    <code>{step}</code>
                  </td>
                  <td>
                    <Panel
                      gradient={Gradients.NineteenEightyFour}
                      style={{
                        width: `var(--space-${step})`,
                        height: `var(--space-${step})`,
                      }}
                    />
                  </td>
                  <td>
                    <strong>{size}px</strong>
                  </td>
                  <td>
                    <code>$cf-space-{step}</code>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  },
  {
    readme: {
      content: SpaceReadme,
    },
  }
)
