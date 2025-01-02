import * as Accordion from '@radix-ui/react-accordion'
import {List} from '@/components/utils'
import cities from '@/data/cities'
import {makeTag} from '@/utils'

function Cities() {

    return (
        <>
            <div className="Stockists_wrapper">
                <Accordion.Root type="single" collapsible>
                    <List from={cities.map((city, index) => ({city, index}))}>
                        {({city, index}) => (
                            <Accordion.Item value={city} className="Stockists_accordion">
                                <Trigger label={city} index={index}/>
                                <Accordion.Content className=" ddAccordion_content">
                                    <ul className="StockistsList_wrapper">
                                        <AddressCard address={'VINOHRADSKA 34 120 00'}
                                                     description={'DESIGNPROPAGANDA S.R.O.'} phone={'+420 608 00 00 52'}
                                                     title={'Prague'}/>
                                        <AddressCard address={'K VYHLIDCE 922 250 91'} description={'CRE8'}
                                                     phone={'+420 733 53 09 39'} title={'Zelenec'}/>
                                    </ul>
                                </Accordion.Content>
                            </Accordion.Item>
                        )}
                    </List>
                </Accordion.Root>
            </div>
        </>
    )
}

export default Cities


function Trigger({label, index}: { label: string, index: number }) {

    return (
        <Accordion.Trigger className="Accordion_accordion styling_s">
            <div className="Accordion_titleWrapper reverse">
                <span className="Accordion_index styling_mono">
                    [{makeTag(index)}]
                </span>
                <div className="Accordion_title">{label}</div>
            </div>
            <div className="Accordion_icon">[ <span className="Accordion_symbol"/> ]</div>
        </Accordion.Trigger>

    )
}

function AddressCard({title, description, address, phone}: {
    title: string,
    description: string,
    address: string,
    phone: string
}) {
    return (
        <li className="ContactCard_item">
            <h3 className="ContactCard_title styling_s">
                {title}
            </h3>
            <p className="ContactCard_description styling_s">
                {description}
            </p>
            <p className="ContactCard_address styling_s">
                {address}
            </p>
            <a
                className="ContactCard_phone styling_s"
                href={`tel:${phone}`}
                target="_blank"
                rel="noreferrer"
            >
                {phone}
            </a>
        </li>
    )
}