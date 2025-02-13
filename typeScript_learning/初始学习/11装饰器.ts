 //@inject（） 修饰器
   
   function inject(serviceIdentifier:string):string{
	   return serviceIdentifier;
   }
   class indexcontent {
	   public indexServe:string;
	   constructor(@inject(`xxx`) indexService: string{
		   this.indexService = indexService;
	   }
   }