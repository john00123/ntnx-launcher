const cardData= [{
  name:'Leap',
  value:'1',
  icon:'1',
  description: 'Disaster Recovery Serive to protect applications running on Nutanix',
  state:'Active',
  section:'Services'},
{
  name:'IoT',
  value:'2',
  icon:'1',
  description: 'Cloud based PaaS running on the edge to support Event-Driven Apps',
  state:'Active',
  section:'Services'},
{
  name:'Frame',
  value:'3',
  icon:'1',
  description: 'Desktop-as-a-service platform for Cloud Deployment',
  state:'Active',
  section:'Services'},
{
  name:'Epoch',
  value:'4',
  icon:'1',
  description: '',
  state:'Inactive',
  section:'Services'},
{
  name:'Beam',
  value:'5',
  icon:'1',
  description: '',
  state:'Inactive',
  section:'Services'},
{
  name:'Test Drive',
  value:'6',
  icon:'0',
  description: 'Try out Xi on GCP to learn more about Cloud Services',
  state:'Active',
  section:'Services'},

//Admin
{
  name:'Billing',
  value:'7',
  icon:'0',
  description: 'Manage subscriptions, view invoices, and update payment methods',
  state:'Active',
  section:'Administration'},
{
  name:'Admin Center',
  value:'8',
  icon:'0',
  description: 'Manage users, configure ADFS and enable Multi-Factor Authentication',
  state:'Active',
  section:'Administration'},

{
  name:'Licenses',
  value:'9',
  icon:'0',
  description: 'Add and reclaim licenses for our on Premise products including Acropolis. ',
  state:'Active',
  section:'Administration'},

//Support
{
  name:'Community Edition',
  value:'10',
  icon:'0',
  description: 'Community for all things NOS Community Edition',
  state:'Active',
  section:'Support'},
{
  name:'Support Portal',
  value:'11',
  icon:'0',
  description: 'View support cases, knwoledge base articles, software downloads',
  state:'Active',
  section:'Support'},
{
  name:'.Next Community',
  value:'12',
  icon:'0',
  description: "Nutanix's community through blogs, activities and forums",
  state:'Active',
  section:'Support'}
]

function cardBlock(name, value, description, state, icon){
  return(`
    <div class='card-container ${state}'>
      <div class='card-header fw'>
        <h1 class='card-title card${value}'>${name}</h1>
        ${icon > 0 ? `<img src='../img/icon${name} class='icon${value}'/>` :
        `<div class='no-icon'></div>`}

      </div>


        <p>${description}</p>
        ${state === 'Active' ? `<button class='primary fw'>Launch</button>`:
          `<button class='secondary fw'>Activate</button>`
        }
  </div>
  `)
}


function card(e){
  $('container').prepend(`
    <div class='section-group'>
      <h4 class='section-title'>${e}</h4>
      <div class='section ${e}'></div>
    </div>
  `);

  cardData.filter(card => card.section == e).map(card=>{
    $(`.${e}`).append(cardBlock(card.name, card.value, card.description, card.state, card.icon))
  });
}

card('Support')
card('Administration')
card('Services')