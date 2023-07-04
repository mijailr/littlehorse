"use client";
import * as React from "react";
import moment from "moment"
import { useEffect, useState } from "react";
import { YearSelector } from "./YearSelector";
import { CInput } from "./CInput";
import { useOutsideClick } from "../../utils";

const wl = [
    {label:'1 day', value:"DAYS_1"},
    {label:'2 hours', value:"HOURS_2"},
    {label:'5 minutes', value:"MINUTES_5"},
]


export const Content = ({init, nextMonth, prevMonth, onApply,
    selectDay,
    updateSelectedH, updateSelectedM,
    updateEndSelectedH, updateEndSelectedM,
    selected, endSelected, type}:{
        init:any, nextMonth:any, prevMonth:any, onApply: () => void,
    selectDay:any,
    updateSelectedH:any, updateSelectedM:any,
    updateEndSelectedH:any, updateEndSelectedM:any,
    selected:any, endSelected:any, type:any
    }) => {
    const [weeks, setWeeks] = useState<any[]>([])
    const [busy, setBusy] = useState(true)
    const fillDays = (firstDay:moment.Moment,lastDay:moment.Moment) => {
        var dates:any = [];
        const month = moment(init).month()
        while(firstDay < lastDay) {
            dates.push({
                day:firstDay.format('DD'),
                selected:selected,
                endSelected:endSelected,
                date:firstDay.toDate(),
                otherMonth:firstDay.month() != month,
                inRange:(selected && endSelected &&
                    firstDay > selected &&
                    firstDay < endSelected
                ),
                startRange:selected &&  firstDay.format('YMMDD') === moment(selected).format('YMMDD'),
                endsRange:(selected && !endSelected &&  firstDay.format('YMMDD') === moment(selected).format('YMMDD')) || (endSelected &&  firstDay.format('YMMDD') === moment(endSelected).format('YMMDD')),
                today:firstDay.date() === moment().date() && firstDay.month() === moment().month(),
                afterPresent:firstDay.format('YMMDD') > moment().format('YMMDD')
            })
            firstDay.add(1,'day')
        }
        return dates;
    };
    var enumerateWeeks = function() {
        const date = moment(init).startOf('month')
        let firstWeek = moment(init).startOf('month').week()
        const endWeek = moment(init).endOf('month').week()
        var dates:any = [];
        while(firstWeek <= endWeek) {
            let firstDay = date.clone().startOf('week')
            let lastDay = date.clone().endOf('week')
            dates.push(fillDays(firstDay,lastDay))
            date.add(1,'week')
            firstWeek++
        }
        return dates;
    };
    const selectDayHandler = (day:any) => {
        if(day.afterPresent) return false
        selectDay(day.date)
        
    }
    useEffect( () => {
        setWeeks(enumerateWeeks())
    },[init, selected, endSelected])

    return         <div style={{padding:'10px', backgroundColor:"#394150", borderRadius:"8px"}} className="flex">
    <div  style={{
        width:"287px",
        display:"block"
    }}>
        <YearSelector prevMonth={prevMonth} nextMonth={nextMonth} date={init} />
        <div className="flex flex-1 weeks">
            <div className="flex items-center justify-center flex-1 w-10 h-10 align-middle">S</div>
            <div className="flex items-center justify-center flex-1 w-10 h-10 align-middle">M</div>
            <div className="flex items-center justify-center flex-1 w-10 h-10 align-middle">T</div>
            <div className="flex items-center justify-center flex-1 w-10 h-10 align-middle">W</div>
            <div className="flex items-center justify-center flex-1 w-10 h-10 align-middle">T</div>
            <div className="flex items-center justify-center flex-1 w-10 h-10 align-middle">F</div>
            <div className="flex items-center justify-center flex-1 w-10 h-10 align-middle">S</div>
        </div>
        {weeks.map( (week:any,ix:number) => <div className="flex flex-1" key={ix}>
            {week.map( (day:any) => <div onClick={() => selectDayHandler(day)} style={{
                fontSize:"14px",
                lineHeight:'150%',
                fontWeight:"700",
            }} className={`flex  flex-1 w-10 h-10 align-middle day 
            ${day.otherMonth ? 'otherMonth' : ''}
            ${day.today ? 'currentDay' : ''}
            ${day.endsRange ? 'endsRange' : ''}
            ${day.startRange ? 'startRange' : ''}
            ${day.inRange ? 'inRange' : ''}
            ${day.afterPresent ? 'afterPresent' : ''}
            `} key={day.day}><div className="items-center justify-center">{day.day} {day.today && <div className="dot"></div>}</div></div>)}
        </div>)}
        {type === 'DAYS_1' && <div onClick={onApply} className="applyButton mt10">
            Apply range
        </div>}
      
   

    </div>

    {type != 'DAYS_1' && <div className="timePickerCanvas">
        <div className="block" >
            <div className="label">From</div>
            <div className="monthAndYear">
                <span className="day">{moment(selected).format('DD')}</span>
                <span className="month">{moment(selected).format('MMMM')}</span>
                <span className="year">{moment(selected).format('Y')}</span>
            </div>
            <div className="pickers">
                <select 
                    value={moment(selected).format('HH')} 
                    onChange={e => updateSelectedH(e.target.value)} 
                    >
                    <option>00</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                </select>
                <div className="dots">:</div>
                <select className="bg-slate-700" disabled={type === 'HOURS_2'} 
                    value={type === 'HOURS_2' ? '00' : moment(selected).format('mm')} 
                    onChange={e => updateSelectedM(e.target.value)} 
                    >
                    <option>00</option>
                    <option>05</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                    <option>25</option>
                    <option>30</option>
                    <option>35</option>
                    <option>40</option>
                    <option>45</option>
                    <option>50</option>
                    <option>55</option>
                </select>
            </div>
        </div>
        <div className="block">
            <div className="label">To</div>
            <div className="monthAndYear">
                <span className="day">{endSelected ? moment(endSelected ).format('DD') : moment(selected ).format('DD')}</span>
                <span className="month">{endSelected ? moment(endSelected ).format('MMMM') : moment(selected ).format('MMMM')}</span>
                <span className="year">{endSelected ? moment(endSelected ).format('Y') : moment(selected ).format('Y')}</span>
            </div>
            <div className="pickers">
                <select 
                    value={endSelected ? moment(endSelected ).format('HH') : moment(selected ).format('HH')} 
                    onChange={e => updateEndSelectedH(e.target.value)} 
                    >
                    <option>00</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                </select>
                <div className="dots">:</div>
                <select className="bg-slate-700" disabled={type === 'HOURS_2'} 
                    value={type === 'HOURS_2' ? '00' : (endSelected ? moment(endSelected ).format('mm') : moment(selected ).format('mm'))} 
                    onChange={e => updateEndSelectedM(e.target.value)} 
                    >
                    <option>00</option>
                    <option>05</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                    <option>25</option>
                    <option>30</option>
                    <option>35</option>
                    <option>40</option>
                    <option>45</option>
                    <option>50</option>
                    <option>55</option>
                </select>
            </div>
        </div>
        <button className="applyButton " onClick={onApply}>Apply range</button>
    </div>}

    

            
</div>
}

export const CalendarCanvas = ({type, setEndDT, setStartDT, onApply, lastDate}:{
    type:string,
    lastDate:Date,
    setEndDT:(dt?:Date) => void, 
    setStartDT:(dt?:Date) => void,
    onApply:() => void,
}) => {

    const [date, setDate] = useState<Date>(moment().toDate())
    const [selected, setSelected] = useState<Date | undefined>(lastDate)
    const [endSelected, setEndSelected] = useState<Date | undefined>()
    
    const updateEndSelectedH = (H:string) => {
        setEndSelected(endSelected ? moment(endSelected).set('hour',+H).toDate() : moment(selected).set('hour',+H).toDate() )
    }
    const updateEndSelectedM = (M:string) => {
        setEndSelected(endSelected ? moment(endSelected).set('minute',+M).toDate() : moment(selected).set('minute',+M).toDate() )
    }
    const updateSelectedH = (H:string) => {
        setSelected(moment(selected).set('hour',+H).toDate())
    }
    const updateSelectedM = (M:string) => {
        setSelected(moment(selected).set('minute',+M).toDate())
    }
    const selectDate = (date:Date) => {
        if(endSelected) {
            setSelected(date)
            setStartDT(date)
            setEndSelected(undefined)
            setEndDT(undefined)
        }else if(selected){
            if(date > selected){
                setEndDT(date)
                setEndSelected(date)
            }else{
                setEndDT(selected)
                setEndSelected(selected)
                setSelected(date)
                setStartDT(date)
            }
        }else{
            setSelected(date)
            setStartDT(date)
        }
       
    }

    useEffect(()=> {
        setEndDT(endSelected)
    },[endSelected])
    useEffect(()=> {
        setStartDT(selected)
    },[selected])
    
    const nextMonth = () => {
        setDate(date => moment(date).add(1,'month').toDate())
    }
    const prevMonth = () => {
        setDate(date => moment(date).subtract(1,'month').toDate())
    }

    return   <div className="flex float">
        <Content init={date} type={type} nextMonth={nextMonth} prevMonth={prevMonth} 
            selected={selected}
            selectDay={selectDate}
            endSelected={endSelected}
            updateSelectedH={updateSelectedH}
            updateEndSelectedM={updateEndSelectedM}
            updateEndSelectedH={updateEndSelectedH}
            updateSelectedM={updateSelectedM}
            onApply={onApply}
        />
        
</div>
}
const getFirstDate = (date:Date, type:string, windows:number) => {
    const dt = moment(date)
    if(type==='DAYS_1') return dt.subtract(windows,'days').toDate()
    if(type==='HOURS_2') return dt.subtract(windows*2,'hours').toDate()
    if(type==='MINUTES_5') return dt.subtract(windows*5,'minutes').toDate()
    return date
}
export const Calendar = ({
    type, changeType,
    lastDate, changeLastDate,
    noWindows, changeNoWindows
    }:{
        type:string, changeType:(type:string) => void,
        lastDate:Date, changeLastDate:(date:Date) => void,
        noWindows:number, changeNoWindows:(n:number) => void
    }) => {

    const [ttype, setType] = useState(wl.find( t => t.value ===type) || wl[1])
    const [startDt, setStartDT] = useState<Date | undefined>(getFirstDate(lastDate, type, noWindows))
    const [endDt, setEndDT] = useState<Date | undefined>(lastDate)
    const [showCalendar, setShowCalendar] = useState(false)
    const [showWL, setShowWL] = useState(false)

    const setTypeHandler = (e:any , type:any) => {
        e.stopPropagation()
        setType(type)
        changeType(type.value)
        setShowWL(false)
    }
    const setShowWLHandler = () => {
        setShowWL(prev => !prev)
        setShowCalendar(false)
    }
    const setShowCalendarHandler = () => {
        setShowCalendar(prev => !prev)
        setShowWL(false)
    }

    const setStartDTHandler = (date?:Date) => {
        setStartDT(date)
    }
    const setEndDTHandler = (date?:Date) => {
        setEndDT(date)
    }
    // handler that will close the dropdown menu when the user clicks on different part of the page.
    const handleOutsideClick = () => {
        setShowWL(false)
    };

    const onApply = () => {
        console.log('apply')
        const dt = moment(endDt || startDt || lastDate)
        // console.log(dt)
        // console.log(dt.valueOf())
        // console.log(dt.toDate())
        // console.log(dt.toLocaleString())
        // console.log(dt.format())
        // console.log(dt().format())
        let diff=0
        const endDte = endDt ? endDt : moment(startDt).endOf('day').toDate()

        if(type === 'DAYS_1'){
            diff = moment(endDte).diff(moment(startDt), 'days')
            diff= diff+1
        }else if(type === 'HOURS_2'){
            diff = moment(endDte).diff(moment(startDt), 'hours')
            diff = Math.ceil(diff/2)

        }else{
            diff = moment(endDte).diff(moment(startDt), 'minutes')
            diff = Math.ceil(diff/5)
        }
        changeNoWindows(diff>1500 ? 1500 : diff)
        changeLastDate( endDte || lastDate)
        setShowCalendar(false)
        
    }

    // ref used to locate the ancestor Ref so the handler doesn't reopen the dropdown
    const ancestorOutsideClickRef = React.useRef<HTMLDivElement>(null);
    // anchor element that triggers handler when is not clicked.
    const outsideClickRef = useOutsideClick(handleOutsideClick, ancestorOutsideClickRef);

    return <div className=" metricsCalendar">
        <div className="controls" ref={ancestorOutsideClickRef}>
            <CInput label={'WINDOW LENGHT:'} onClick={setShowWLHandler} >
                {showWL ? (
                    <div className="placeholder">Select one</div>
                ) : (
                    <div className="text">{ttype.label}</div>
                )}
                <span className="material-icons">expand_more</span>
                { showWL && <div className="float" ref={outsideClickRef}>
                    {wl.map( w => <div key={w.value} className="option" onClick={e => setTypeHandler(e, w)}>{w.label}</div>)}
                </div>}
            </CInput>

            <CInput label={'TIME RANGE:'} >
                <div className="inputWrapper" onClick={setShowCalendarHandler}>
                    {!startDt ? (
                        <div className="placeholder">Select date and time</div>
                    ) : (
                        <>{(!!startDt && !endDt) ? (
                            <div className="color-mild-light">
                                <span className="text-white"> {moment(startDt).format(`MMM DD ${ttype.value === 'HOURS_2' ? 'HH:00' : '' } ${ttype.value === 'MINUTES_5' ? 'HH:mm' : '' } `)}</span> 
                            </div>
                        ) : (
                            <div className="color-mild-light"> from 
                                <span className="text-white"> {moment(startDt).format(`MMM DD ${ttype.value === 'HOURS_2' ? 'HH:00' : '' } ${ttype.value === 'MINUTES_5' ? 'HH:mm' : '' } `)}</span> 
                                to 
                                <span className="text-white"> {moment(endDt).format(`MMM DD ${ttype.value === 'HOURS_2' ? 'HH:00' : '' } ${ttype.value === 'MINUTES_5' ? 'HH:mm' : '' }`)}</span> 
                            </div>
                        ) } 
                        </>
                    )}
                    <span className="material-icons">expand_more</span>
                    <span className="material-icons-outlined">calendar_month</span>   
                </div>

                { showCalendar && <CalendarCanvas type={ttype.value} lastDate={lastDate} setStartDT={setStartDTHandler} setEndDT={setEndDTHandler} onApply={onApply} />}     
            </CInput>
        </div>

    

    </div>
}