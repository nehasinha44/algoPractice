
<script>
var a=[1,1,1,0,0,1,0];
var count =0; 
var arr=a.length;
for (var i=0; i<arr; i++) {
		if(a[i]!=0){
          a[i]=0;
        count++;
        }
        
}
var countxero = a.length-count;
        for(var b=0; b< arr; b++){
        if(b<countxero)
        a[b]=0;
        else
        a[b]=1;
        }
        console.log(a)

</script>

