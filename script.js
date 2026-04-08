// =============================================
// ===== DADOS DOS PRODUTOS ====================
// =============================================
const products = [
  {
    id:1, name:"Whey Protein Isolado BIA", cat:"proteina",
    price:159.90, oldPrice:199.00,
    label:"Best Seller", labelClass:"",
    stars:5, reviews:214,
    macros:[{v:"27g",l:"Proteína"},{v:"3g",l:"Carb"},{v:"1g",l:"Gordura"}],
    img:"https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&q=85",
    imgs:[
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=85",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=85",
      "https://images.unsplash.com/photo-1559181567-c3190ca9d222?w=800&q=85"
    ],
    desc:"O Whey Protein Isolado BIA contém 27g de proteína por dose com mínimo de carboidratos e gorduras. Ideal para quem busca hipertrofia muscular e recuperação rápida. Fórmula exclusiva com digestão otimizada."
  },
  {
    id:2, name:"Pré-Treino Explosive Force", cat:"energia",
    price:129.90, oldPrice:null,
    label:"Novo", labelClass:"new",
    stars:5, reviews:189,
    macros:[{v:"200mg",l:"Cafeína"},{v:"3g",l:"Beta-Al."},{v:"5g",l:"Creatina"}],
    img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=85",
    imgs:[
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=85",
      "https://images.unsplash.com/photo-1574482620826-5a3c3b4ded7a?w=800&q=85"
    ],
    desc:"Pré-treino completo com 200mg de cafeína anidra, beta-alanina, creatina e L-citrulina. Energia explosiva, foco total e pump intenso para levar seu treino ao próximo nível."
  },
  {
    id:3, name:"Multivitamínico BIA Total", cat:"vitamina",
    price:69.90, oldPrice:89.00,
    label:null, labelClass:"",
    stars:4, reviews:97,
    macros:[{v:"23",l:"Vitaminas"},{v:"10",l:"Minerais"},{v:"60",l:"Cáps."}],
    img:"https://images.unsplash.com/photo-1559181567-c3190ca9d222?w=600&q=85",
    imgs:[
      "https://images.unsplash.com/photo-1559181567-c3190ca9d222?w=800&q=85",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=85"
    ],
    desc:"Complexo completo com 23 vitaminas e 10 minerais essenciais para o funcionamento ideal do organismo. Fórmula de absorção avançada, testada clinicamente."
  },
  {
    id:4, name:"Creatina Monohidratada Pura", cat:"proteina",
    price:79.90, oldPrice:null,
    label:"Top Rated", labelClass:"",
    stars:5, reviews:342,
    macros:[{v:"5g",l:"por dose"},{v:"100%",l:"Pura"},{v:"300g",l:"Total"}],
    img:"https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&q=85",
    imgs:[
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&q=85",
      "https://images.unsplash.com/photo-1574482620826-5a3c3b4ded7a?w=800&q=85"
    ],
    desc:"Creatina monohidratada 100% pura, sem adição de corantes, aromas ou adoçantes. Comprovada cientificamente para aumentar força, potência e volume muscular."
  },
  {
    id:5, name:"Ômega-3 Ultra Concentrado", cat:"saude",
    price:59.90, oldPrice:79.00,
    label:null, labelClass:"",
    stars:5, reviews:156,
    macros:[{v:"1000mg",l:"EPA+DHA"},{v:"90",l:"Cáps."},{v:"3 meses",l:""}],
    img:"https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=600&q=85",
    imgs:[
      "https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=800&q=85",
      "https://images.unsplash.com/photo-1559181567-c3190ca9d222?w=800&q=85"
    ],
    desc:"Ômega-3 de alta concentração com EPA e DHA para saúde cardiovascular, cerebral e redução de inflamação. Cada cápsula oferece 1000mg de ácidos graxos essenciais."
  },
  {
    id:6, name:"Colágeno Verisol + Vitamina C", cat:"saude",
    price:89.90, oldPrice:null,
    label:"Novo", labelClass:"new",
    stars:5, reviews:88,
    macros:[{v:"10g",l:"Colágeno"},{v:"500mg",l:"Vit.C"},{v:"30",l:"Doses"}],
    img:"https://images.unsplash.com/photo-1607532941433-304659e8198a?w=600&q=85",
    imgs:[
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=800&q=85",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=85"
    ],
    desc:"Colágeno Verisol bioativo combinado com 500mg de Vitamina C para máxima absorção. Beneficia pele, cabelos, unhas e articulações com resultados visíveis em 4 semanas."
  },
  {
    id:7, name:"BCAA 2:1:1 Instantâneo", cat:"energia",
    price:74.90, oldPrice:99.00,
    label:null, labelClass:"",
    stars:4, reviews:127,
    macros:[{v:"10g",l:"por dose"},{v:"Ratio",l:"2:1:1"},{v:"30",l:"Doses"}],
    img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=85",
    imgs:[
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=85",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=85"
    ],
    desc:"BCAA na proporção ideal 2:1:1 (leucina, isoleucina e valina) em forma instantânea para dissolução rápida. Reduz catabolismo, melhora recuperação e suporta síntese proteica."
  },
  {
    id:8, name:"Vitamina D3 + K2 10.000UI", cat:"vitamina",
    price:49.90, oldPrice:null,
    label:null, labelClass:"",
    stars:5, reviews:203,
    macros:[{v:"10.000",l:"UI D3"},{v:"100mcg",l:"K2"},{v:"60",l:"Cáps."}],
    img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=85",
    imgs:[
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=85",
      "https://images.unsplash.com/photo-1559181567-c3190ca9d222?w=800&q=85"
    ],
    desc:"Combinação sinérgica de Vitamina D3 e K2-MK7 para absorção otimizada de cálcio, fortalecimento ósseo, imunidade e saúde hormonal. A dupla mais potente para deficiências modernas."
  }
];

// =============================================
// ===== TRADUÇÕES =============================
// =============================================
const i18n = {
  pt: {
    nav_home:"Home", nav_about:"Sobre", nav_products:"Produtos",
    nav_plans:"Planos", nav_contact:"Contato", nav_cta:"Comprar Agora",
    hero_tag:"Nutrição Científica de Elite",
    hero_title1:"ELEVE SEU", hero_title2:"POTENCIAL", hero_title3:"AO MÁXIMO",
    hero_desc:"Suplementos e produtos nutricionais desenvolvidos com tecnologia de ponta. Resultados reais para quem não aceita o ordinário.",
    hero_btn1:"Explorar Produtos", hero_btn2:"Ver nossa história",
    hero_stat1:"Clientes Ativos", hero_stat2:"Satisfação", hero_stat3:"Produtos",
    about_tag:"QUEM SOMOS", about_title:"Ciência aplicada à<br/><span>sua nutrição</span>",
    about_p1:"A <strong>Bia Labs</strong> nasceu da crença de que a nutrição de precisão transforma vidas. Combinamos pesquisa científica com ingredientes premium para criar produtos que entregam resultados mensuráveis.",
    about_p2:"Cada fórmula é desenvolvida por nosso time de nutricionistas e bioquímicos, testada rigorosamente antes de chegar até você.",
    feat1_title:"Fórmulas Exclusivas", feat1_sub:"Desenvolvidas no nosso próprio laboratório",
    feat2_title:"Ingredientes Naturais", feat2_sub:"Sem corantes artificiais ou aditivos nocivos",
    feat3_title:"Certificação ANVISA", feat3_sub:"Todos os produtos aprovados e registrados",
    about_btn:"Conhecer Produtos",
    cat_tag:"LINHA COMPLETA", cat_title:"Categorias em <span>Destaque</span>",
    prod_tag:"NOSSO PORTFÓLIO", prod_title:"Produtos <span>Premium</span>",
    filter_all:"Todos", filter_prot:"Proteínas", filter_vit:"Vitaminas",
    filter_ener:"Energia", filter_health:"Saúde",
    dep_tag:"RESULTADOS REAIS", dep_title:"Quem usa, <span>aprova</span>",
    plan_tag:"ASSINE E ECONOMIZE", plan_title:"Planos de <span>Assinatura</span>",
    plan_sub:"Receba seus suplementos todo mês com desconto exclusivo de assinante",
    banner_title:"TRANSFORME SEU<br/><span>CORPO E MENTE</span>",
    banner_sub:"Com os suplementos certos e a orientação da Bia Labs, seus resultados chegam mais rápido.",
    banner_btn:"Começar Agora",
    contact_tag:"FALE CONOSCO", contact_title:"Vamos <span>conversar?</span>",
    contact_sub:"Tem dúvidas sobre nossos produtos, planos ou quer uma orientação nutricional? Nossa equipe está pronta para te ajudar!",
    form_name:"Nome", form_email:"E-mail", form_subject:"Assunto",
    form_msg:"Mensagem", form_btn:"Enviar Mensagem",
    no_results:"Nenhum produto encontrado"
  },
  en: {
    nav_home:"Home", nav_about:"About", nav_products:"Products",
    nav_plans:"Plans", nav_contact:"Contact", nav_cta:"Shop Now",
    hero_tag:"Elite Scientific Nutrition",
    hero_title1:"ELEVATE YOUR", hero_title2:"POTENTIAL", hero_title3:"TO THE MAX",
    hero_desc:"Nutritional supplements developed with cutting-edge technology. Real results for those who refuse the ordinary.",
    hero_btn1:"Explore Products", hero_btn2:"Our story",
    hero_stat1:"Active Clients", hero_stat2:"Satisfaction", hero_stat3:"Products",
    about_tag:"WHO WE ARE", about_title:"Science applied to<br/><span>your nutrition</span>",
    about_p1:"<strong>Bia Labs</strong> was born from the belief that precision nutrition transforms lives. We combine scientific research with premium ingredients to create products that deliver measurable results.",
    about_p2:"Each formula is developed by our team of nutritionists and biochemists, rigorously tested before reaching you.",
    feat1_title:"Exclusive Formulas", feat1_sub:"Developed in our own laboratory",
    feat2_title:"Natural Ingredients", feat2_sub:"No artificial dyes or harmful additives",
    feat3_title:"ANVISA Certification", feat3_sub:"All products approved and registered",
    about_btn:"Explore Products",
    cat_tag:"FULL LINE", cat_title:"Featured <span>Categories</span>",
    prod_tag:"OUR PORTFOLIO", prod_title:"Premium <span>Products</span>",
    filter_all:"All", filter_prot:"Proteins", filter_vit:"Vitamins",
    filter_ener:"Energy", filter_health:"Health",
    dep_tag:"REAL RESULTS", dep_title:"Who uses it, <span>loves it</span>",
    plan_tag:"SUBSCRIBE & SAVE", plan_title:"Subscription <span>Plans</span>",
    plan_sub:"Receive your supplements every month with exclusive subscriber discounts",
    banner_title:"TRANSFORM YOUR<br/><span>BODY AND MIND</span>",
    banner_sub:"With the right supplements and Bia Labs guidance, your results come faster.",
    banner_btn:"Start Now",
    contact_tag:"GET IN TOUCH", contact_title:"Let's <span>talk?</span>",
    contact_sub:"Have questions about our products, plans or want nutritional guidance? Our team is ready to help you!",
    form_name:"Name", form_email:"Email", form_subject:"Subject",
    form_msg:"Message", form_btn:"Send Message",
    no_results:"No products found"
  }
};
let currentLang = 'pt';

// =============================================
// ===== LOADER ================================
// =============================================
window.addEventListener('load', () => {
  renderProducts('all');
  initSlider();
  const fill = document.getElementById('loaderFill');
  const loader = document.getElementById('loader');
  let w = 0;
  const iv = setInterval(() => {
    w += Math.random() * 18 + 4;
    if (w >= 100) { w = 100; clearInterval(iv); setTimeout(() => loader.classList.add('hide'), 400); }
    fill.style.width = w + '%';
  }, 60);
});

// =============================================
// ===== CURSOR ================================
// =============================================
const cursor   = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let fx=0,fy=0,cx=0,cy=0;
document.addEventListener('mousemove', e => {
  fx=e.clientX; fy=e.clientY;
  cursor.style.left=fx+'px'; cursor.style.top=fy+'px';
});
(function animF(){
  cx+=(fx-cx)*.12; cy+=(fy-cy)*.12;
  follower.style.left=cx+'px'; follower.style.top=cy+'px';
  requestAnimationFrame(animF);
})();
document.querySelectorAll('a,button,.prod-card,.cat-card,.plano-card,.dep-card,.blog-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.style.width='20px';cursor.style.height='20px';follower.style.width='60px';follower.style.height='60px';});
  el.addEventListener('mouseleave',()=>{cursor.style.width='10px';cursor.style.height='10px';follower.style.width='36px';follower.style.height='36px';});
});

// =============================================
// ===== NAVBAR ================================
// =============================================
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 60);
  document.getElementById('scrollTopBtn').classList.toggle('show', scrollY > 500);
  const sections = document.querySelectorAll('section[id]');
  let cur='';
  sections.forEach(s => { if(scrollY >= s.offsetTop-140) cur=s.id; });
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.getAttribute('href')==='#'+cur));
});

// ===== MOBILE NAV =====
document.getElementById('hamburger').addEventListener('click', () => document.getElementById('mobileNav').classList.add('open'));
function closeMobileNav(){ document.getElementById('mobileNav').classList.remove('open'); }
document.getElementById('mobileClose').addEventListener('click', closeMobileNav);

// =============================================
// ===== RENDER PRODUTOS =======================
// =============================================
function renderProducts(filter, query='') {
  const grid = document.getElementById('productsGrid');
  const none = document.getElementById('noResults');
  const q    = query.toLowerCase().trim();
  let filtered = products.filter(p => {
    const matchFilter = filter==='all' || p.cat===filter;
    const matchQuery  = q==='' || p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q);
    return matchFilter && matchQuery;
  });
  none.style.display = filtered.length===0 ? 'block' : 'none';
  grid.innerHTML = filtered.map(p => `
    <div class="prod-card" data-id="${p.id}" data-cat="${p.cat}" onclick="openModal(${p.id})">
      <div class="prod-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy"/>
        ${p.label?`<div class="prod-label ${p.labelClass}">${p.label}</div>`:''}
        <button class="prod-wish ${isWished(p.id)?'active':''}" onclick="event.stopPropagation();toggleWishById(${p.id},this)">
          <i class="${isWished(p.id)?'fas':'far'} fa-heart"></i>
        </button>
        <div class="prod-hover-actions">
          <button class="prod-quick" onclick="event.stopPropagation();addCartById(${p.id})">
            <i class="fas fa-cart-plus"></i> Adicionar
          </button>
        </div>
      </div>
      <div class="prod-info">
        <span class="prod-cat">${catLabel(p.cat)}</span>
        <h3>${p.name}</h3>
        <div class="prod-rating">
          <span class="stars">${'★'.repeat(p.stars)}${'☆'.repeat(5-p.stars)}</span>
          <span>(${p.reviews})</span>
        </div>
        <div class="prod-macros">
          ${p.macros.map(m=>`<span><strong>${m.v}</strong> ${m.l}</span>`).join('')}
        </div>
        <div class="prod-footer">
          <div class="prod-price">
            ${p.oldPrice?`<del>R$ ${p.oldPrice.toFixed(2).replace('.',',')}</del>`:''}
            <strong>R$ ${p.price.toFixed(2).replace('.',',')}</strong>
          </div>
          <button class="btn-add-cart" onclick="event.stopPropagation();addCartById(${p.id})">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
  initReveal();
}

function catLabel(cat){
  return {proteina:'Proteína',vitamina:'Vitamina',energia:'Energia',saude:'Saúde'}[cat]||cat;
}

// =============================================
// ===== FILTRO ================================
// =============================================
let currentFilter='all', currentQuery='';
document.querySelectorAll('.filter-tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelectorAll('.filter-tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    currentFilter=tab.dataset.filter;
    renderProducts(currentFilter, currentQuery);
  });
});

// =============================================
// ===== BUSCA =================================
// =============================================
function toggleSearch(){
  const inp = document.getElementById('searchInput');
  inp.classList.toggle('open');
  if(inp.classList.contains('open')) inp.focus();
  else { inp.value=''; searchProducts(''); document.getElementById('searchResults').classList.remove('show'); }
}

function searchProducts(q){
  currentQuery = q;
  // inline
  const inline = document.getElementById('inlineSearch');
  if(inline) inline.value = q;
  renderProducts(currentFilter, q);
  // navbar dropdown
  const res = document.getElementById('searchResults');
  if(!q.trim()){ res.classList.remove('show'); return; }
  const found = products.filter(p=>p.name.toLowerCase().includes(q.toLowerCase()));
  if(found.length===0){
    res.innerHTML=`<div class="search-empty">Nenhum produto encontrado</div>`;
  } else {
    res.innerHTML=found.map(p=>`
      <div class="search-result-item" onclick="openModal(${p.id})">
        <img src="${p.img}" alt="${p.name}"/>
        <div class="search-result-info">
          <strong>${p.name}</strong>
          <span>R$ ${p.price.toFixed(2).replace('.',',')}</span>
        </div>
      </div>
    `).join('');
  }
  res.classList.add('show');
}

document.addEventListener('click', e => {
  if(!e.target.closest('.search-wrap')) document.getElementById('searchResults').classList.remove('show');
});

document.getElementById('inlineSearch').addEventListener('input', function(){ searchProducts(this.value); });

// =============================================
// ===== CARRINHO ==============================
// =============================================
let cart = [];

function openCart(){ document.getElementById('cartDrawer').classList.add('open'); document.getElementById('cartOverlay').classList.add('show'); }
function closeCart(){ document.getElementById('cartDrawer').classList.remove('open'); document.getElementById('cartOverlay').classList.remove('show'); }

function addCartById(id){
  const p = products.find(x=>x.id===id);
  if(!p) return;
  const existing = cart.find(c=>c.id===id);
  if(existing) existing.qty++;
  else cart.push({...p, qty:1});
  updateCartUI();
  showToast(`🛒 <strong>${p.name}</strong> adicionado!`);
}

function removeCartItem(id){
  cart = cart.filter(c=>c.id!==id);
  updateCartUI();
}

function changeCartQty(id, delta){
  const item = cart.find(c=>c.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(c=>c.id!==id);
  updateCartUI();
}

function updateCartUI(){
  const count  = cart.reduce((a,c)=>a+c.qty,0);
  const total  = cart.reduce((a,c)=>a+c.price*c.qty,0);
  const badge  = document.getElementById('cartCount');
  badge.textContent = count;
  badge.style.transform='scale(1.6)';
  setTimeout(()=>badge.style.transform='scale(1)',220);

  const empty  = document.getElementById('cartEmpty');
  const list   = document.getElementById('cartItemsList');
  const footer = document.getElementById('cartFooter');
  const sub    = document.getElementById('cartSubtotal');
  const ship   = document.getElementById('freeShipMsg');

  if(cart.length===0){
    empty.style.display='block'; list.innerHTML=''; footer.style.display='none';
  } else {
    empty.style.display='none';
    footer.style.display='block';
    sub.textContent = `R$ ${total.toFixed(2).replace('.',',')}`;
    ship.style.display = total>=199 ? 'block' : 'none';
    list.innerHTML = cart.map(c=>`
      <div class="cart-item">
        <div class="cart-item-img"><img src="${c.img}" alt="${c.name}"/></div>
        <div class="cart-item-info">
          <strong>${c.name}</strong>
          <span>R$ ${(c.price*c.qty).toFixed(2).replace('.',',')}</span>
          <div class="cart-item-ctrl">
            <button onclick="changeCartQty(${c.id},-1)">−</button>
            <span>${c.qty}</span>
            <button onclick="changeCartQty(${c.id},1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem(${c.id})"><i class="fas fa-trash"></i></button>
      </div>
    `).join('');
  }
}

// =============================================
// ===== WISHLIST ==============================
// =============================================
let wishlist = [];
function isWished(id){ return wishlist.includes(id); }
function toggleWishById(id, btn){
  if(isWished(id)){
    wishlist = wishlist.filter(x=>x!==id);
    btn.classList.remove('active');
    btn.querySelector('i').className='far fa-heart';
  } else {
    wishlist.push(id);
    btn.classList.add('active');
    btn.querySelector('i').className='fas fa-heart';
    const p=products.find(x=>x.id===id);
    showToast(`❤️ <strong>${p.name}</strong> adicionado aos favoritos!`);
  }
}

// =============================================
// ===== MODAL PRODUTO =========================
// =============================================
let currentQty=1, currentModalId=null;

function openModal(id){
  const p=products.find(x=>x.id===id);
  if(!p) return;
  currentModalId=id; currentQty=1;
  document.getElementById('qtyVal').textContent=1;
  document.getElementById('modalCat').textContent=catLabel(p.cat);
  document.getElementById('modalName').textContent=p.name;
  document.getElementById('modalRating').innerHTML=`<span class="stars">${'★'.repeat(p.stars)}${'☆'.repeat(5-p.stars)}</span> <span>(${p.reviews} avaliações)</span>`;
  document.getElementById('modalPrice').innerHTML=`${p.oldPrice?`<del>R$ ${p.oldPrice.toFixed(2).replace('.',',')}</del>`:''}
    <strong>R$ ${p.price.toFixed(2).replace('.',',')}</strong>`;
  document.getElementById('modalDesc').textContent=p.desc;
  document.getElementById('modalMacros').innerHTML=p.macros.map(m=>`<span><strong>${m.v}</strong> ${m.l}</span>`).join('');
  document.getElementById('modalMainImg').innerHTML=`<img src="${p.imgs[0]}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;transition:opacity .3s"/>`;
  document.getElementById('modalThumbs').innerHTML=p.imgs.map((img,i)=>`
    <div class="modal-thumb ${i===0?'active':''}" onclick="changeModalImg('${img}',this)">
      <img src="${img}" alt=""/>
    </div>
  `).join('');
  const wishBtn=document.getElementById('modalWishBtn');
  wishBtn.className=`modal-wish${isWished(id)?' active':''}`;
  wishBtn.querySelector('i').className=isWished(id)?'fas fa-heart':'far fa-heart';
  document.getElementById('modalOverlay').classList.add('show');
  document.getElementById('productModal').classList.add('show');
  document.body.style.overflow='hidden';
}

function changeModalImg(src, thumb){
  document.querySelectorAll('.modal-thumb').forEach(t=>t.classList.remove('active'));
  thumb.classList.add('active');
  const img=document.querySelector('#modalMainImg img');
  img.style.opacity='0';
  setTimeout(()=>{ img.src=src; img.style.opacity='1'; },200);
}

function closeModal(){
  document.getElementById('modalOverlay').classList.remove('show');
  document.getElementById('productModal').classList.remove('show');
  document.body.style.overflow='';
}

function changeQty(delta){
  currentQty = Math.max(1, currentQty+delta);
  document.getElementById('qtyVal').textContent=currentQty;
}

function addToCartFromModal(){
  if(!currentModalId) return;
  const p=products.find(x=>x.id===currentModalId);
  if(!p) return;
  const existing=cart.find(c=>c.id===currentModalId);
  if(existing) existing.qty+=currentQty;
  else cart.push({...p,qty:currentQty});
  updateCartUI();
  closeModal();
  setTimeout(openCart, 300);
  showToast(`🛒 ${currentQty}x <strong>${p.name}</strong> adicionado!`);
}

function toggleModalWish(){
  if(!currentModalId) return;
  const btn=document.getElementById('modalWishBtn');
  toggleWishById(currentModalId,btn);
}

document.addEventListener('keydown', e => { if(e.key==='Escape'){ closeModal(); closeCart(); } });

// =============================================
// ===== SLIDER DEPOIMENTOS ====================
// =============================================
let sliderIndex=0;
const VISIBLE=3;

function initSlider(){
  const total=document.querySelectorAll('.dep-card').length;
  const dots=document.getElementById('sliderDots');
  const pages=Math.ceil(total/VISIBLE);
  dots.innerHTML=[...Array(pages)].map((_,i)=>`<div class="slider-dot${i===0?' active':''}" onclick="slideTo(${i})"></div>`).join('');
}

function slideMove(dir){
  const total=document.querySelectorAll('.dep-card').length;
  const pages=Math.ceil(total/VISIBLE);
  sliderIndex=(sliderIndex+dir+pages)%pages;
  applySlide();
}

function slideTo(i){ sliderIndex=i; applySlide(); }

function applySlide(){
  const slider=document.getElementById('depSlider');
  const cards=slider.querySelectorAll('.dep-card');
  const cardW=cards[0].offsetWidth+24;
  slider.style.transform=`translateX(-${sliderIndex*VISIBLE*cardW}px)`;
  document.querySelectorAll('.slider-dot').forEach((d,i)=>d.classList.toggle('active',i===sliderIndex));
}

// auto-slide
setInterval(()=>slideMove(1), 5000);

// =============================================
// ===== TEMA CLARO / ESCURO ===================
// =============================================
function toggleTheme(){
  const html=document.documentElement;
  const icon=document.getElementById('themeIcon');
  if(html.dataset.theme==='dark'){
    html.dataset.theme='light';
    icon.className='fas fa-sun';
  } else {
    html.dataset.theme='dark';
    icon.className='fas fa-moon';
  }
}

// =============================================
// ===== IDIOMA ================================
// =============================================
function toggleLang(){
  currentLang = currentLang==='pt' ? 'en' : 'pt';
  document.getElementById('langFlag').textContent = currentLang==='pt' ? '🇧🇷' : '🇺🇸';
  document.getElementById('langLabel').textContent = currentLang==='pt' ? 'PT' : 'EN';
  applyLang();
}

function applyLang(){
  const t=i18n[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    if(t[key]!==undefined){
      if(el.tagName==='INPUT'||el.tagName==='TEXTAREA') el.placeholder=t[key];
      else el.innerHTML = t[key]+(el.classList.contains('btn-primary')?` <i class="fas fa-arrow-right"></i>`:'');
    }
  });
}

// =============================================
// ===== HERO COUNTER ==========================
// =============================================
const heroObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    document.querySelectorAll('.hero-num strong[data-target]').forEach(el=>{
      let c=0; const target=+el.dataset.target; const step=Math.ceil(target/60);
      const t=setInterval(()=>{ c+=step; if(c>=target){c=target;clearInterval(t);} el.textContent=c.toLocaleString('pt-BR'); },28);
    });
    heroObs.disconnect();
  });
},{threshold:.3});
const hn=document.querySelector('.hero-numbers');
if(hn) heroObs.observe(hn);

// =============================================
// ===== SCROLL REVEAL =========================
// =============================================
function initReveal(){
  const revObs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; } });
  },{threshold:.08});
  document.querySelectorAll('.prod-card,.dep-card,.plano-card,.blog-card,.cat-card,.feature-item,.contato-item').forEach(el=>{
    el.style.opacity='0'; el.style.transform='translateY(28px)';
    el.style.transition='opacity .6s ease, transform .6s ease';
    revObs.observe(el);
  });
}
initReveal();

// =============================================
// ===== TOAST =================================
// =============================================
function showToast(msg){
  const toast=document.getElementById('toast');
  document.getElementById('toastMsg').innerHTML=msg;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t=setTimeout(()=>toast.classList.remove('show'),3200);
}

// =============================================
// ===== FORMULÁRIO ============================
// =============================================
document.getElementById('contatoForm').addEventListener('submit',e=>{
  e.preventDefault();
  const btn=e.target.querySelector('.btn-primary');
  const orig=btn.innerHTML;
  btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Enviando...';
  btn.disabled=true;
  setTimeout(()=>{
    showToast('✅ Mensagem enviada com sucesso!');
    e.target.reset(); btn.innerHTML=orig; btn.disabled=false;
  },1800);
});

// keyframes dinâmicos
const s=document.createElement('style');
s.textContent=`@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`;
document.head.appendChild(s);
