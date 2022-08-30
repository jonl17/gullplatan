import cn from 'classnames'

type Props = {
  text: string
  color?: string
}

const RippleMask = ({ text, color = '#fff' }: Props) => {
  return (
    <svg
      width="100%"
      height="200px"
      className={cn(
        'svg-text-mask h-full w-full text-41/49.2 md:text-120/151.2',
        color
      )}
    >
      <defs>
        <mask id="mask" x="0" y="0" height="150%" width="150%">
          <g>
            <path d="M449.4 0H448.4V175.34H449.4V0Z" fill="black" />
            <path d="M442.88 0H441.88V175.34H442.88V0Z" fill="black" />
            <path d="M455.91 0H454.91V175.34H455.91V0Z" fill="black" />
            <path d="M436.37 0H435.37V175.34H436.37V0Z" fill="black" />
            <path d="M475.45 0H474.45V175.34H475.45V0Z" fill="black" />
            <path d="M429.86 0H428.86V175.34H429.86V0Z" fill="black" />
            <path d="M462.42 0H461.42V175.34H462.42V0Z" fill="black" />
            <path d="M468.94 0H467.94V175.34H468.94V0Z" fill="black" />
            <path d="M397.29 0H396.29V175.34H397.29V0Z" fill="black" />
            <path d="M377.75 0H376.75V175.34H377.75V0Z" fill="black" />
            <path d="M390.78 0H389.78V175.34H390.78V0Z" fill="black" />
            <path d="M384.27 0H383.27V175.34H384.27V0Z" fill="black" />
            <path d="M423.35 0H422.35V175.34H423.35V0Z" fill="black" />
            <path d="M416.83 0H415.83V175.34H416.83V0Z" fill="black" />
            <path d="M403.81 0H402.81V175.34H403.81V0Z" fill="black" />
            <path d="M410.32 0H409.32V175.34H410.32V0Z" fill="black" />
            <path d="M117.23 0H116.23V175.34H117.23V0Z" fill="black" />
            <path d="M130.26 0H129.26V175.34H130.26V0Z" fill="black" />
            <path d="M123.75 0H122.75V175.34H123.75V0Z" fill="black" />
            <path d="M521.04 0H520.04V175.34H521.04V0Z" fill="black" />
            <path d="M534.07 0H533.07V175.34H534.07V0Z" fill="black" />
            <path d="M527.55 0H526.55V175.34H527.55V0Z" fill="black" />
            <path d="M540.58 0H539.58V175.34H540.58V0Z" fill="black" />
            <path d="M547.09 0H546.09V175.34H547.09V0Z" fill="black" />
            <path d="M371.24 0H370.24V175.34H371.24V0Z" fill="black" />
            <path d="M481.96 0H480.96V175.34H481.96V0Z" fill="black" />
            <path d="M494.99 0H493.99V175.34H494.99V0Z" fill="black" />
            <path d="M143.29 0H142.29V175.34H143.29V0Z" fill="black" />
            <path d="M488.48 0H487.48V175.34H488.48V0Z" fill="black" />
            <path d="M508.02 0H507.02V175.34H508.02V0Z" fill="black" />
            <path d="M514.53 0H513.53V175.34H514.53V0Z" fill="black" />
            <path d="M501.5 0H500.5V175.34H501.5V0Z" fill="black" />
            <path d="M136.77 0H135.77V175.34H136.77V0Z" fill="black" />
            <path d="M319.14 0H318.14V175.34H319.14V0Z" fill="black" />
            <path d="M227.96 0H226.96V175.34H227.96V0Z" fill="black" />
            <path d="M201.9 0H200.9V175.34H201.9V0Z" fill="black" />
            <path d="M221.44 0H220.44V175.34H221.44V0Z" fill="black" />
            <path d="M208.42 0H207.42V175.34H208.42V0Z" fill="black" />
            <path d="M214.93 0H213.93V175.34H214.93V0Z" fill="black" />
            <path d="M254.01 0H253.01V175.34H254.01V0Z" fill="black" />
            <path d="M240.98 0H239.98V175.34H240.98V0Z" fill="black" />
            <path d="M234.47 0H233.47V175.34H234.47V0Z" fill="black" />
            <path d="M247.49 0H246.49V175.34H247.49V0Z" fill="black" />
            <path d="M195.39 0H194.39V175.34H195.39V0Z" fill="black" />
            <path d="M162.83 0H161.83V175.34H162.83V0Z" fill="black" />
            <path d="M156.31 0H155.31V175.34H156.31V0Z" fill="black" />
            <path d="M169.34 0H168.34V175.34H169.34V0Z" fill="black" />
            <path d="M188.88 0H187.88V175.34H188.88V0Z" fill="black" />
            <path d="M182.36 0H181.36V175.34H182.36V0Z" fill="black" />
            <path d="M175.85 0H174.85V175.34H175.85V0Z" fill="black" />
            <path d="M273.55 0H272.55V175.34H273.55V0Z" fill="black" />
            <path d="M332.16 0H331.16V175.34H332.16V0Z" fill="black" />
            <path d="M325.65 0H324.65V175.34H325.65V0Z" fill="black" />
            <path d="M312.62 0H311.62V175.34H312.62V0Z" fill="black" />
            <path d="M260.52 0H259.52V175.34H260.52V0Z" fill="black" />
            <path d="M338.68 0H337.68V175.34H338.68V0Z" fill="black" />
            <path d="M358.22 0H357.22V175.34H358.22V0Z" fill="black" />
            <path d="M345.19 0H344.19V175.34H345.19V0Z" fill="black" />
            <path d="M351.7 0H350.7V175.34H351.7V0Z" fill="black" />
            <path d="M553.61 0H552.61V175.34H553.61V0Z" fill="black" />
            <path d="M280.06 0H279.06V175.34H280.06V0Z" fill="black" />
            <path d="M364.73 0H363.73V175.34H364.73V0Z" fill="black" />
            <path d="M267.03 0H266.03V175.34H267.03V0Z" fill="black" />
            <path d="M306.11 0H305.11V175.34H306.11V0Z" fill="black" />
            <path d="M299.6 0H298.6V175.34H299.6V0Z" fill="black" />
            <path d="M286.57 0H285.57V175.34H286.57V0Z" fill="black" />
            <path d="M293.09 0H292.09V175.34H293.09V0Z" fill="black" />
            <path d="M599.2 0H598.2V175.34H599.2V0Z" fill="black" />
            <path d="M39.08 0H38.08V175.34H39.08V0Z" fill="black" />
            <path d="M52.1 0H51.1V175.34H52.1V0Z" fill="black" />
            <path d="M677.35 0H676.35V175.34H677.35V0Z" fill="black" />
            <path d="M670.84 0H669.84V175.34H670.84V0Z" fill="black" />
            <path d="M690.38 0H689.38V175.34H690.38V0Z" fill="black" />
            <path d="M696.89 0H695.89V175.34H696.89V0Z" fill="black" />
            <path d="M45.59 0H44.59V175.34H45.59V0Z" fill="black" />
            <path d="M664.33 0H663.33V175.34H664.33V0Z" fill="black" />
            <path d="M683.87 0H682.87V175.34H683.87V0Z" fill="black" />
            <path d="M638.28 0H637.28V175.34H638.28V0Z" fill="black" />
            <path d="M644.79 0H643.79V175.34H644.79V0Z" fill="black" />
            <path d="M71.64 0H70.64V175.34H71.64V0Z" fill="black" />
            <path d="M651.3 0H650.3V175.34H651.3V0Z" fill="black" />
            <path d="M631.76 0H630.76V175.34H631.76V0Z" fill="black" />
            <path d="M58.62 0H57.62V175.34H58.62V0Z" fill="black" />
            <path d="M65.13 0H64.13V175.34H65.13V0Z" fill="black" />
            <path d="M657.81 0H656.81V175.34H657.81V0Z" fill="black" />
            <path d="M19.54 0H18.54V175.34H19.54V0Z" fill="black" />
            <path d="M749 0H748V175.34H749V0Z" fill="black" />
            <path d="M742.48 0H741.48V175.34H742.48V0Z" fill="black" />
            <path d="M755.51 0H754.51V175.34H755.51V0Z" fill="black" />
            <path d="M13.03 0H12.03V175.34H13.03V0Z" fill="black" />
            <path d="M762.02 0H761.02V175.34H762.02V0Z" fill="black" />
            <path d="M768.54 0H767.54V175.34H768.54V0Z" fill="black" />
            <path d="M6.51001 0H5.51001V175.34H6.51001V0Z" fill="black" />
            <path d="M32.5699 0H31.5699V175.34H32.5699V0Z" fill="black" />
            <path d="M703.41 0H702.41V175.34H703.41V0Z" fill="black" />
            <path d="M716.43 0H715.43V175.34H716.43V0Z" fill="black" />
            <path d="M709.92 0H708.92V175.34H709.92V0Z" fill="black" />
            <path d="M729.46 0H728.46V175.34H729.46V0Z" fill="black" />
            <path d="M735.97 0H734.97V175.34H735.97V0Z" fill="black" />
            <path d="M722.94 0H721.94V175.34H722.94V0Z" fill="black" />
            <path d="M26.05 0H25.05V175.34H26.05V0Z" fill="black" />
            <path d="M605.71 0H604.71V175.34H605.71V0Z" fill="black" />
            <path d="M573.15 0H572.15V175.34H573.15V0Z" fill="black" />
            <path d="M78.16 0H77.16V175.34H78.16V0Z" fill="black" />
            <path d="M592.68 0H591.68V175.34H592.68V0Z" fill="black" />
            <path d="M97.7 0H96.7V175.34H97.7V0Z" fill="black" />
            <path d="M579.66 0H578.66V175.34H579.66V0Z" fill="black" />
            <path d="M586.17 0H585.17V175.34H586.17V0Z" fill="black" />
            <path d="M612.22 0H611.22V175.34H612.22V0Z" fill="black" />
            <path d="M84.67 0H83.67V175.34H84.67V0Z" fill="black" />
            <path d="M560.12 0H559.12V175.34H560.12V0Z" fill="black" />
            <path d="M91.1801 0H90.1801V175.34H91.1801V0Z" fill="black" />
            <path d="M618.74 0H617.74V175.34H618.74V0Z" fill="black" />
            <path d="M149.8 0H148.8V175.34H149.8V0Z" fill="black" />
            <path d="M110.72 0H109.72V175.34H110.72V0Z" fill="black" />
            <path d="M625.25 0H624.25V175.34H625.25V0Z" fill="black" />
            <path d="M104.21 0H103.21V175.34H104.21V0Z" fill="black" />
            <path d="M566.63 0H565.63V175.34H566.63V0Z" fill="black" />
            <path d="M5.51 0H0V175.34H5.51V0Z" fill="white" />
            <path d="M12.02 0H6.51001V175.34H12.02V0Z" fill="white" />
            <path d="M18.54 0H13.03V175.34H18.54V0Z" fill="white" />
            <path d="M25.05 0H19.54V175.34H25.05V0Z" fill="white" />
            <path d="M31.56 0H26.05V175.34H31.56V0Z" fill="white" />
            <path d="M38.0799 0H32.5699V175.34H38.0799V0Z" fill="white" />
            <path d="M44.59 0H39.08V175.34H44.59V0Z" fill="white" />
            <path d="M51.1 0H45.59V175.34H51.1V0Z" fill="white" />
            <path d="M57.61 0H52.1V175.34H57.61V0Z" fill="white" />
            <path d="M64.13 0H58.62V175.34H64.13V0Z" fill="white" />
            <path d="M70.64 0H65.13V175.34H70.64V0Z" fill="white" />
            <path d="M77.15 0H71.64V175.34H77.15V0Z" fill="white" />
            <path d="M83.67 0H78.16V175.34H83.67V0Z" fill="white" />
            <path d="M90.18 0H84.67V175.34H90.18V0Z" fill="white" />
            <path d="M96.6901 0H91.1801V175.34H96.6901V0Z" fill="white" />
            <path d="M103.21 0H97.7V175.34H103.21V0Z" fill="white" />
            <path d="M109.72 0H104.21V175.34H109.72V0Z" fill="white" />
            <path d="M116.23 0H110.72V175.34H116.23V0Z" fill="white" />
            <path d="M122.74 0H117.23V175.34H122.74V0Z" fill="white" />
            <path d="M129.26 0H123.75V175.34H129.26V0Z" fill="white" />
            <path d="M135.77 0H130.26V175.34H135.77V0Z" fill="white" />
            <path d="M142.28 0H136.77V175.34H142.28V0Z" fill="white" />
            <path d="M148.8 0H143.29V175.34H148.8V0Z" fill="white" />
            <path d="M155.31 0H149.8V175.34H155.31V0Z" fill="white" />
            <path d="M161.82 0H156.31V175.34H161.82V0Z" fill="white" />
            <path d="M168.34 0H162.83V175.34H168.34V0Z" fill="white" />
            <path d="M174.85 0H169.34V175.34H174.85V0Z" fill="white" />
            <path d="M181.36 0H175.85V175.34H181.36V0Z" fill="white" />
            <path d="M187.87 0H182.36V175.34H187.87V0Z" fill="white" />
            <path d="M194.39 0H188.88V175.34H194.39V0Z" fill="white" />
            <path d="M200.9 0H195.39V175.34H200.9V0Z" fill="white" />
            <path d="M207.41 0H201.9V175.34H207.41V0Z" fill="white" />
            <path d="M213.93 0H208.42V175.34H213.93V0Z" fill="white" />
            <path d="M220.44 0H214.93V175.34H220.44V0Z" fill="white" />
            <path d="M226.95 0H221.44V175.34H226.95V0Z" fill="white" />
            <path d="M233.47 0H227.96V175.34H233.47V0Z" fill="white" />
            <path d="M239.98 0H234.47V175.34H239.98V0Z" fill="white" />
            <path d="M246.49 0H240.98V175.34H246.49V0Z" fill="white" />
            <path d="M253 0H247.49V175.34H253V0Z" fill="white" />
            <path d="M259.52 0H254.01V175.34H259.52V0Z" fill="white" />
            <path d="M266.03 0H260.52V175.34H266.03V0Z" fill="white" />
            <path d="M272.54 0H267.03V175.34H272.54V0Z" fill="white" />
            <path d="M279.06 0H273.55V175.34H279.06V0Z" fill="white" />
            <path d="M285.57 0H280.06V175.34H285.57V0Z" fill="white" />
            <path d="M292.08 0H286.57V175.34H292.08V0Z" fill="white" />
            <path d="M298.6 0H293.09V175.34H298.6V0Z" fill="white" />
            <path d="M305.11 0H299.6V175.34H305.11V0Z" fill="white" />
            <path d="M311.62 0H306.11V175.34H311.62V0Z" fill="white" />
            <path d="M318.13 0H312.62V175.34H318.13V0Z" fill="white" />
            <path d="M324.65 0H319.14V175.34H324.65V0Z" fill="white" />
            <path d="M331.16 0H325.65V175.34H331.16V0Z" fill="white" />
            <path d="M337.67 0H332.16V175.34H337.67V0Z" fill="white" />
            <path d="M344.19 0H338.68V175.34H344.19V0Z" fill="white" />
            <path d="M350.7 0H345.19V175.34H350.7V0Z" fill="white" />
            <path d="M357.21 0H351.7V175.34H357.21V0Z" fill="white" />
            <path d="M363.73 0H358.22V175.34H363.73V0Z" fill="white" />
            <path d="M370.24 0H364.73V175.34H370.24V0Z" fill="white" />
            <path d="M376.75 0H371.24V175.34H376.75V0Z" fill="white" />
            <path d="M383.26 0H377.75V175.34H383.26V0Z" fill="white" />
            <path d="M389.78 0H384.27V175.34H389.78V0Z" fill="white" />
            <path d="M396.29 0H390.78V175.34H396.29V0Z" fill="white" />
            <path d="M402.8 0H397.29V175.34H402.8V0Z" fill="white" />
            <path d="M409.32 0H403.81V175.34H409.32V0Z" fill="white" />
            <path d="M415.83 0H410.32V175.34H415.83V0Z" fill="white" />
            <path d="M422.34 0H416.83V175.34H422.34V0Z" fill="white" />
            <path d="M428.86 0H423.35V175.34H428.86V0Z" fill="white" />
            <path d="M435.37 0H429.86V175.34H435.37V0Z" fill="white" />
            <path d="M441.88 0H436.37V175.34H441.88V0Z" fill="white" />
            <path d="M448.39 0H442.88V175.34H448.39V0Z" fill="white" />
            <path d="M454.91 0H449.4V175.34H454.91V0Z" fill="white" />
            <path d="M461.42 0H455.91V175.34H461.42V0Z" fill="white" />
            <path d="M467.93 0H462.42V175.34H467.93V0Z" fill="white" />
            <path d="M474.45 0H468.94V175.34H474.45V0Z" fill="white" />
            <path d="M480.96 0H475.45V175.34H480.96V0Z" fill="white" />
            <path d="M487.47 0H481.96V175.34H487.47V0Z" fill="white" />
            <path d="M493.99 0H488.48V175.34H493.99V0Z" fill="white" />
            <path d="M500.5 0H494.99V175.34H500.5V0Z" fill="white" />
            <path d="M507.01 0H501.5V175.34H507.01V0Z" fill="white" />
            <path d="M513.53 0H508.02V175.34H513.53V0Z" fill="white" />
            <path d="M520.04 0H514.53V175.34H520.04V0Z" fill="white" />
            <path d="M526.55 0H521.04V175.34H526.55V0Z" fill="white" />
            <path d="M533.06 0H527.55V175.34H533.06V0Z" fill="white" />
            <path d="M539.58 0H534.07V175.34H539.58V0Z" fill="white" />
            <path d="M546.09 0H540.58V175.34H546.09V0Z" fill="white" />
            <path d="M552.6 0H547.09V175.34H552.6V0Z" fill="white" />
            <path d="M559.12 0H553.61V175.34H559.12V0Z" fill="white" />
            <path d="M565.63 0H560.12V175.34H565.63V0Z" fill="white" />
            <path d="M572.14 0H566.63V175.34H572.14V0Z" fill="white" />
            <path d="M578.66 0H573.15V175.34H578.66V0Z" fill="white" />
            <path d="M585.17 0H579.66V175.34H585.17V0Z" fill="white" />
            <path d="M591.68 0H586.17V175.34H591.68V0Z" fill="white" />
            <path d="M598.19 0H592.68V175.34H598.19V0Z" fill="white" />
            <path d="M604.71 0H599.2V175.34H604.71V0Z" fill="white" />
            <path d="M611.22 0H605.71V175.34H611.22V0Z" fill="white" />
            <path d="M617.73 0H612.22V175.34H617.73V0Z" fill="white" />
            <path d="M624.25 0H618.74V175.34H624.25V0Z" fill="white" />
            <path d="M630.76 0H625.25V175.34H630.76V0Z" fill="white" />
            <path d="M637.27 0H631.76V175.34H637.27V0Z" fill="white" />
            <path d="M643.79 0H638.28V175.34H643.79V0Z" fill="white" />
            <path d="M650.3 0H644.79V175.34H650.3V0Z" fill="white" />
            <path d="M656.81 0H651.3V175.34H656.81V0Z" fill="white" />
            <path d="M663.32 0H657.81V175.34H663.32V0Z" fill="white" />
            <path d="M669.84 0H664.33V175.34H669.84V0Z" fill="white" />
            <path d="M676.35 0H670.84V175.34H676.35V0Z" fill="white" />
            <path d="M682.86 0H677.35V175.34H682.86V0Z" fill="white" />
            <path d="M689.38 0H683.87V175.34H689.38V0Z" fill="white" />
            <path d="M695.89 0H690.38V175.34H695.89V0Z" fill="white" />
            <path d="M702.4 0H696.89V175.34H702.4V0Z" fill="white" />
            <path d="M708.92 0H703.41V175.34H708.92V0Z" fill="white" />
            <path d="M715.43 0H709.92V175.34H715.43V0Z" fill="white" />
            <path d="M721.94 0H716.43V175.34H721.94V0Z" fill="white" />
            <path d="M728.45 0H722.94V175.34H728.45V0Z" fill="white" />
            <path d="M734.97 0H729.46V175.34H734.97V0Z" fill="white" />
            <path d="M741.48 0H735.97V175.34H741.48V0Z" fill="white" />
            <path d="M747.99 0H742.48V175.34H747.99V0Z" fill="white" />
            <path d="M754.51 0H749V175.34H754.51V0Z" fill="white" />
            <path d="M761.02 0H755.51V175.34H761.02V0Z" fill="white" />
            <path d="M767.53 0H762.02V175.34H767.53V0Z" fill="white" />
            <path d="M774.05 0H768.54V175.34H774.05V0Z" fill="white" />
          </g>
        </mask>
      </defs>
      <text
        dominantBaseline="hanging"
        x="0%"
        y="0%"
        fill="fill-current"
        textAnchor="middle"
      >
        {text}
      </text>
    </svg>
  )
}

export default RippleMask
