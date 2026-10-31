"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CalendarDays, Users, ArrowRight, ArrowLeft, LockKeyhole, Check, CreditCard } from "lucide-react";
import { useSite } from "@/lib/site-context";
import { Img } from "@/components/ui/Img";

const STORAGE_KEY = "velora-booking-demo";
type Selection = { roomSlug: string; checkIn: string; checkOut: string; guests: number };
const isoToday = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; };
const nightsBetween = (a: string, b: string) => a && b ? Math.max(0, Math.round((Date.parse(`${b}T12:00:00Z`) - Date.parse(`${a}T12:00:00Z`))/86400000)) : 0;
const field = "w-full rounded-none border border-line bg-bg px-4 py-3.5 text-sm text-ink outline-none transition-colors focus:border-accent";
const eyebrow = "text-[10px] font-medium uppercase tracking-caps text-muted";

function Summary({ selection, room, nights, total, price, t, date }: { selection: Selection; room: {name:{en:string;fr:string};images:string[];priceFrom:number}; nights:number; total:number; price:(n:number)=>string; t:(x:{en:string;fr:string})=>string; date:(s:string)=>string }) {
 return <aside className="border border-line bg-surface/40 p-6 md:p-8 lg:sticky lg:top-28">
  <p className={eyebrow}>YOUR STAY · VOTRE SÉJOUR</p>
  <h2 className="mt-3 font-serif text-3xl">Reservation summary</h2>
  <div className="mt-7 aspect-[16/10] overflow-hidden bg-surface"><Img src={room.images[0]} alt={t(room.name)} /></div>
  <h3 className="mt-5 font-serif text-2xl">{t(room.name)}</h3>
  <div className="mt-7 space-y-4 border-t border-line pt-6 text-sm">
   <div className="flex justify-between gap-4"><span className="text-muted">Check-in</span><span>{selection.checkIn ? date(selection.checkIn) : "—"}</span></div>
   <div className="flex justify-between gap-4"><span className="text-muted">Check-out</span><span>{selection.checkOut ? date(selection.checkOut) : "—"}</span></div>
   <div className="flex justify-between gap-4"><span className="text-muted">Guests</span><span>{selection.guests}</span></div>
   <div className="flex justify-between gap-4"><span className="text-muted">Nightly rate (demo)</span><span>{price(room.priceFrom)}</span></div>
   <div className="flex justify-between gap-4"><span className="text-muted">Nights</span><span>{nights || "—"}</span></div>
  </div>
  <div className="mt-6 flex justify-between border-t border-line pt-6"><span className="font-serif text-xl">Estimated total</span><span className="font-serif text-2xl">{price(total)}</span></div>
  <p className="mt-3 text-xs leading-relaxed text-muted">Illustrative rates only. Taxes, fees and availability are not calculated. No reservation is created.</p>
 </aside>;
}

export function BookingFlow() {
 const router = useRouter(); const {preset,t,price,date} = useSite();
 const [selection,setSelection] = useState<Selection>({roomSlug:preset.rooms[0]?.slug ?? "",checkIn:"",checkOut:"",guests:2});
 const [ready,setReady] = useState(false);
 useEffect(()=>{ try { const saved = sessionStorage.getItem(STORAGE_KEY); if(saved) { const value=JSON.parse(saved) as Selection; if(value && typeof value.roomSlug === "string") setSelection(value); } } catch {} setReady(true); },[]);
 const room = preset.rooms.find(r=>r.slug===selection.roomSlug) ?? preset.rooms[0];
 useEffect(()=>{ if(ready && room && room.slug!==selection.roomSlug) setSelection(s=>({...s,roomSlug:room.slug,guests:Math.min(s.guests,room.guests)})); },[ready,room,selection.roomSlug]);
 const nights = nightsBetween(selection.checkIn,selection.checkOut); const total = (room?.priceFrom ?? 0)*nights;
 const valid = Boolean(room && selection.checkIn >= isoToday() && nights > 0 && selection.guests >= 1 && selection.guests <= room.guests);
 const update = (part:Partial<Selection>)=>setSelection(s=>({...s,...part}));
 const next = ()=>{ if(!valid) return; sessionStorage.setItem(STORAGE_KEY,JSON.stringify(selection)); router.push("/checkout"); };
 if(!room) return <p className="container py-32">No accommodations configured.</p>;
 return <main className="pb-24 pt-32 md:pt-40">
  <div className="container"><p className="eyebrow">THE VELORA EXPERIENCE</p><h1 className="display mt-5 text-5xl md:text-7xl">Plan your stay<span className="text-accent">.</span></h1><p className="mt-6 max-w-2xl text-sm leading-7 text-muted">Explore a considered escape. This interactive reservation experience is a frontend demonstration only.</p>
   <div className="mt-12 flex items-center gap-4 border-y border-line py-5 text-[10px] uppercase tracking-caps"><span className="text-ink">01 · Your stay</span><span className="h-px w-12 bg-line"/><span className="text-muted">02 · Checkout preview</span></div>
   <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16"><div>
    <h2 className="font-serif text-3xl md:text-4xl">Choose your accommodation</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{preset.rooms.map(r=><button key={r.slug} type="button" onClick={()=>update({roomSlug:r.slug,guests:Math.min(selection.guests,r.guests)})} className={`group border text-left transition-colors ${r.slug===room.slug?"border-accent bg-surface/50":"border-line hover:border-muted"}`} aria-pressed={r.slug===room.slug}><div className="relative aspect-[16/10] overflow-hidden"><Img src={r.images[0]} alt={t(r.name)} zoom/>{r.slug===room.slug&&<span className="absolute right-3 top-3 bg-bg p-2"><Check size={15}/></span>}</div><div className="p-5"><h3 className="font-serif text-xl">{t(r.name)}</h3><div className="mt-3 flex justify-between gap-2 text-xs text-muted"><span>Up to {r.guests} guests</span><span>From {price(r.priceFrom)} / night</span></div></div></button>)}</div>
    <h2 className="mt-14 font-serif text-3xl md:text-4xl">Dates & guests</h2><div className="mt-7 grid gap-5 sm:grid-cols-2"><label className="block"><span className={eyebrow}>Check-in</span><div className="relative mt-3"><input aria-label="Check-in date" type="date" min={isoToday()} value={selection.checkIn} onChange={e=>update({checkIn:e.target.value,checkOut:selection.checkOut && selection.checkOut<=e.target.value?"":selection.checkOut})} className={field}/></div></label><label className="block"><span className={eyebrow}>Check-out</span><input aria-label="Check-out date" type="date" min={selection.checkIn || isoToday()} value={selection.checkOut} onChange={e=>update({checkOut:e.target.value})} className={`${field} mt-3`}/></label><label className="block sm:col-span-2"><span className={eyebrow}>Guests · Maximum {room.guests}</span><select aria-label="Guests" value={Math.min(selection.guests,room.guests)} onChange={e=>update({guests:Number(e.target.value)})} className={`${field} mt-3`}>{Array.from({length:room.guests},(_,i)=><option key={i+1} value={i+1}>{i+1} {i===0?"guest":"guests"}</option>)}</select></label></div>
    {!valid && <p className="mt-5 text-xs text-muted">Choose a future check-in date, a later check-out date and a valid guest count to continue.</p>}
    <button type="button" onClick={next} disabled={!valid} className="mt-9 inline-flex w-full items-center justify-center gap-4 bg-deep px-8 py-5 text-xs uppercase tracking-caps text-ondeep transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto">Continue to checkout <ArrowRight size={16}/></button>
   </div><Summary selection={selection} room={room} nights={nights} total={total} price={price} t={t} date={date}/></div>
  </div>
 </main>;
}

export function CheckoutFlow(){
 const router=useRouter();const {preset,t,price,date}=useSite();const [selection,setSelection]=useState<Selection|null>(null);const [loaded,setLoaded]=useState(false);const [complete,setComplete]=useState(false);
 const [guest,setGuest]=useState({first:"",last:"",email:"",phone:"",notes:""});
 useEffect(()=>{try{const raw=sessionStorage.getItem(STORAGE_KEY);if(raw)setSelection(JSON.parse(raw) as Selection);}catch{}setLoaded(true);},[]);
 const room=preset.rooms.find(r=>r.slug===selection?.roomSlug);const nights=selection?nightsBetween(selection.checkIn,selection.checkOut):0;const valid=Boolean(room&&selection&&selection.checkIn>=isoToday()&&nights>0&&selection.guests>=1&&selection.guests<=room.guests);
 if(!loaded)return <main className="container min-h-[60vh] pt-40"/>;
 if(!valid||!selection||!room)return <main className="container min-h-[65vh] pb-24 pt-40"><p className="eyebrow">RESERVATION PREVIEW</p><h1 className="mt-5 font-serif text-5xl">Begin with your stay.</h1><p className="mt-6 text-muted">Select your accommodation and dates before continuing.</p><Link href="/booking" className="link-line mt-8">Go to booking <ArrowRight size={16}/></Link></main>;
 if(complete)return <main className="container min-h-[65vh] pb-24 pt-40"><p className="eyebrow">INTERACTIVE DEMO</p><h1 className="mt-6 max-w-2xl font-serif text-5xl md:text-7xl">A beautiful journey, from beginning to end.</h1><p className="mt-7 max-w-xl leading-7 text-muted">You have reached the end of the checkout demonstration. No reservation was made, no payment was processed, and your details were not sent or stored.</p><Link href="/booking" className="link-line mt-10">Explore another stay <ArrowRight size={16}/></Link></main>;
 return <main className="pb-24 pt-32 md:pt-40"><div className="container"><p className="eyebrow">THE VELORA EXPERIENCE</p><h1 className="display mt-5 text-5xl md:text-7xl">The final details<span className="text-accent">.</span></h1><p className="mt-6 max-w-xl text-sm leading-7 text-muted">A thoughtfully designed checkout preview. No real payment information is requested or processed.</p>
 <div className="mt-12 flex items-center gap-4 border-y border-line py-5 text-[10px] uppercase tracking-caps"><Link href="/booking" className="text-muted hover:text-ink">01 · Your stay</Link><span className="h-px w-12 bg-line"/><span className="text-ink">02 · Checkout preview</span></div>
 <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16"><div><h2 className="font-serif text-3xl md:text-4xl">Guest information</h2><form onSubmit={e=>{e.preventDefault();setComplete(true);}} className="mt-8"><div className="grid gap-5 sm:grid-cols-2">{([['first','First name'],['last','Last name'],['email','Email address'],['phone','Phone (optional)']] as const).map(([key,label])=><label key={key} className="block"><span className={eyebrow}>{label}</span><input className={`${field} mt-3`} type={key==='email'?'email':key==='phone'?'tel':'text'} autoComplete={key==='first'?'given-name':key==='last'?'family-name':key==='email'?'email':'tel'} required={key!=='phone'} value={guest[key]} onChange={e=>setGuest(s=>({...s,[key]:e.target.value}))}/></label>)}</div>
 <label className="mt-6 block"><span className={eyebrow}>Special requests (optional)</span><textarea className={`${field} mt-3 min-h-28 resize-y`} value={guest.notes} onChange={e=>setGuest(s=>({...s,notes:e.target.value}))} placeholder="Tell us what would make your stay special..."/></label>
 <div className="mt-14 border-t border-line pt-10"><p className="eyebrow">PAYMENT EXPERIENCE</p><h2 className="mt-3 font-serif text-3xl">Payment preview</h2><div className="mt-7 flex items-start gap-4 border border-accent bg-surface/40 p-6"><CreditCard size={22} className="mt-0.5 shrink-0"/><div><p className="text-sm font-medium">Card payment · Visual demonstration</p><p className="mt-2 text-xs leading-6 text-muted">In a production website, a secure payment provider would be integrated here. This template intentionally does not request card numbers, CVVs, or payment credentials.</p></div><Check size={18} className="ml-auto shrink-0"/></div></div>
 <p className="mt-8 flex items-start gap-3 text-xs leading-6 text-muted"><LockKeyhole size={17} className="mt-0.5 shrink-0"/>Demo only. Submitting displays a sample completion screen. No booking or payment is created, and form data is not transmitted.</p>
 <button type="submit" className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-deep px-8 py-5 text-xs uppercase tracking-caps text-ondeep hover:opacity-90">Finish demo <ArrowRight size={16}/></button><Link href="/booking" className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-caps text-muted hover:text-ink"><ArrowLeft size={15}/> Edit your stay</Link></form></div>
 <Summary selection={selection} room={room} nights={nights} total={room.priceFrom*nights} price={price} t={t} date={date}/></div></div></main>;
}
