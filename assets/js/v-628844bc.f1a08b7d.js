(self.webpackChunkrport_site=self.webpackChunkrport_site||[]).push([[893],{483:(e,s,n)=>{"use strict";n.r(s),n.d(s,{data:()=>t});const t={key:"v-628844bc",path:"/docs/no15-messaging.html",title:"Messaging",lang:"en-DE",frontmatter:{},excerpt:"",headers:[{level:2,title:"SMTP",slug:"smtp",children:[]},{level:2,title:"Pushover",slug:"pushover",children:[]},{level:2,title:"Script",slug:"script",children:[{level:3,title:"Telegram example",slug:"telegram-example",children:[]}]}],filePathRelative:"docs/no15-messaging.md"}},3122:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>D});var t=n(6252);const a=(0,t.Wm)("h1",{id:"messaging",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#messaging","aria-hidden":"true"},"#"),(0,t.Uk)(" Messaging")],-1),r=(0,t.Uk)("Some features require the rport server to send messages, e.g., "),o=(0,t.Uk)("2FA Auth"),l=(0,t.Uk)(" requires sending a verification code to a user. It can be done using:"),i=(0,t.Uk)("email (requires "),u=(0,t.Uk)("SMTP"),c=(0,t.Uk)(" setup)"),p={href:"https://pushover.net",target:"_blank",rel:"noopener noreferrer"},d=(0,t.Uk)("pushover.net"),h=(0,t.Uk)(" (requires "),m=(0,t.Uk)("Pushover"),b=(0,t.Uk)(" setup)"),g=(0,t.uE)('<h2 id="smtp" tabindex="-1"><a class="header-anchor" href="#smtp" aria-hidden="true">#</a> SMTP</h2><p>To enable sending emails, enter the following lines to the <code>rportd.config</code>, for example:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[smtp]\n  server = &#39;smtp.example.com:2525&#39;\n  sender_email = &#39;rport@gmail.com&#39;\n  auth_username = &#39;john.doe&#39;\n  auth_password = &#39;secret&#39;\n  secure = false\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Required:</p><ul><li><code>server</code> - smtp server and port separated by a colon, e.g. <code>smtp.example.com:2525</code>. If you use port 465 with Implicit(Forced) TLS then <code>secure</code> param should be enabled.</li><li><code>sender_email</code> - an email that is used by rport server as its sender.</li></ul><p>Optional:</p><ul><li><code>auth_username</code> - a username for authentication;</li><li><code>auth_password</code> - a password for the username;</li><li><code>secure</code> - <code>true|false</code>, set to <code>true</code> if Implicit(Forced) TLS must be used.</li></ul><h2 id="pushover" tabindex="-1"><a class="header-anchor" href="#pushover" aria-hidden="true">#</a> Pushover</h2>',8),v=(0,t.Uk)("Follow a "),f={href:"https://support.pushover.net/i7-what-is-pushover-and-how-do-i-use-it",target:"_blank",rel:"noopener noreferrer"},k=(0,t.Uk)("link"),x=(0,t.Uk)(" to have a quick Pushover intro."),_=(0,t.Wm)("p",null,"In order to enable sending messages via pushover:",-1),T={href:"https://pushover.net/signup",target:"_blank",rel:"noopener noreferrer"},w=(0,t.Uk)("Register"),U=(0,t.Uk)(" pushover account (if you don't have an existing account)."),W={href:"https://pushover.net/apps/build",target:"_blank",rel:"noopener noreferrer"},y=(0,t.Uk)("Register"),O=(0,t.Uk)(" pushover API token that will be used to send messages by rport server (if you don't have it yet)."),R=(0,t.Wm)("li",null,[(0,t.Uk)("Enter the following lines to the "),(0,t.Wm)("code",null,"rportd.config"),(0,t.Uk)(", for example:")],-1),P=(0,t.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[pushover]\n  api_token = &quot;afapzrcv5801jeaw71b4odjyn1m2e5&quot;\n  user_key = &quot;pgcjszdyures33k4m4e12e9ggc1syo&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',1),q={start:"4"},E=(0,t.Uk)("Use any of "),A={href:"https://pushover.net/clients",target:"_blank",rel:"noopener noreferrer"},S=(0,t.Uk)("pushover device clients"),F=(0,t.Uk)(" to receive the messages."),I=(0,t.uE)('<h2 id="script" tabindex="-1"><a class="header-anchor" href="#script" aria-hidden="true">#</a> Script</h2><p>You can create a custom script to send the 2FA verification code. This way you can use messengers like Telegram and many others. Inside the <code>[api]</code> section of <code>rportd.conf</code> insert the full path to an executable script for <code>two_fa_token_delivery</code> parameter. For example:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>two_fa_token_delivery = &#39;/usr/local/bin/2fa-sender&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>The token and the recipient&#39;s details are passed as environmental variables to the script. Create the file <code>/usr/local/bin/2fa-sender</code> with the following content, and make the script executable with <code>chmod +x</code>.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash\ndate &gt; /tmp/2fa-sender.txt\nprintenv &gt;&gt; /tmp/2fa-sender.txt\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Try to log in, and the script creates the following output.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Fri Aug 13 13:36:25 UTC 2021\nRPORT_2FA_SENDTO=email@example.com\nRPORT_2FA_TOKEN_TTL=600\nRPORT_2FA_TOKEN=7SM7j2\nsnip..snap\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>The value of <code>RPORT_2FA_SENDTO</code> may vary. It&#39;s the value specified in the 2fa_sendto column of the user table or the auth file.</p><p>Additionally, you can specify how the api should validate updates of the 2fa_sendto. This prevents users entering values that cannot be processed by your script. Use <code>two_fa_send_to_type = &#39;email&#39;</code> to accept only valid email address or specify a regular expression.</p><p>If the script exits with an exit code other than <code>0</code> the API request returns HTTP Status code 500 along with the STDERR output of the script.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>When handing over the token using curl, consider using the <code>-f</code> option of curl. On any other http status code than 200 curl will exit with a non-zero status code. This way the rport server knows about a failed request, and the API includes the error for further processing.</p></div><h3 id="telegram-example" tabindex="-1"><a class="header-anchor" href="#telegram-example" aria-hidden="true">#</a> Telegram example</h3>',12),N=(0,t.Uk)("A script that sends the token via Telegram can work like this example. You must "),L={href:"https://core.telegram.org/bots#6-botfather",target:"_blank",rel:"noopener noreferrer"},K=(0,t.Uk)("create a bot"),M=(0,t.Uk)(" first and grab the token of it."),j=(0,t.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/sh\nBOT_TOKEN=&quot;&lt;YOUR_BOT_TOKEN&gt;&quot;\nURL=&quot;https://api.telegram.org/bot${BOT_TOKEN}/sendMessage&quot;\ncurl -fs -X POST $URL \\\n  -d chat_id=$RPORT_2FA_SENDTO \\\n  -d text=&quot;Your RPort 2fa token: $RPORT_2FA_TOKEN (valid for $RPORT_2FA_TOKEN_TTL seconds)&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',1),D={render:function(e,s){const n=(0,t.up)("RouterLink"),D=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[a,(0,t.Wm)("p",null,[r,(0,t.Wm)(n,{to:"/docs/no02-api-auth.html#two-factor-auth"},{default:(0,t.w5)((()=>[o])),_:1}),l]),(0,t.Wm)("ol",null,[(0,t.Wm)("li",null,[i,(0,t.Wm)(n,{to:"/docs/no15-messaging.html#smtp"},{default:(0,t.w5)((()=>[u])),_:1}),c]),(0,t.Wm)("li",null,[(0,t.Wm)("a",p,[d,(0,t.Wm)(D)]),h,(0,t.Wm)(n,{to:"/docs/no15-messaging.html#pushover"},{default:(0,t.w5)((()=>[m])),_:1}),b])]),g,(0,t.Wm)("p",null,[v,(0,t.Wm)("a",f,[k,(0,t.Wm)(D)]),x]),_,(0,t.Wm)("ol",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",T,[w,(0,t.Wm)(D)]),U]),(0,t.Wm)("li",null,[(0,t.Wm)("a",W,[y,(0,t.Wm)(D)]),O]),R]),P,(0,t.Wm)("ol",q,[(0,t.Wm)("li",null,[E,(0,t.Wm)("a",A,[S,(0,t.Wm)(D)]),F])]),I,(0,t.Wm)("p",null,[N,(0,t.Wm)("a",L,[K,(0,t.Wm)(D)]),M]),j],64)}}}}]);