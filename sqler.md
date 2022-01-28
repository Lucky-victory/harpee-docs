   ---
   title: Sqler | Harpee
   description: write sql queries with ease.
   
   ---
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/atom-one-dark-reasonable.min.css" /> 

    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.3.1/build/highlight.min.js">
  </script> 




# Sqler 
This class aims to simplify writing sql queries
by chaining multiple function.

## select([columns],distinct)
<pre>
<code>

select(['age','name','email'])
// result: SELECT age,name,email

// or with distinct

select(['age','name','email'],true)
// result : SELECT DISTINCT age,name,email



</code>
</pre>

## selectAvg(column)
<pre>
<code>

selectAvg('age')
// result: SELECT AVG(age)



</code>
</pre>

## selectSum(column)
<pre>
<code>

selectSum('age')
// result: SELECT SUM(age)


</code>
</pre>

## selectCount(column)
<pre>
<code>

selectCount('age')
// result: SELECT COUNT(age)



</code>
</pre>