
export const convertEventsToDateEvents = ( events = []) => {

    return events.map( event => {
        event.end = new Date( (event.end.seconds)*1000 );
        event.start = new Date( (event.start.seconds)*1000 );
        return event;
    })
}